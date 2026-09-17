#!/usr/bin/env node

require('dotenv').config();
const axios = require('axios');
const { program } = require('commander');
const { Chalk } = require('chalk');

const chalk = new Chalk();
const API = process.env.API_KEY;

program
  .version('1.0.0')
  .description('Terminalden hızlı hava durumu sorgulama aracı')
  .argument('<sehir>', 'Hava durumunu öğrenmek istediğiniz şehir')
  .action(async (sehir) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&units=metric&appid=${API}&lang=tr`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      const sehirAdi = data.name;
      const ulke = data.sys.country;
      const sicaklik = Math.round(data.main.temp);
      const hissedilen = Math.round(data.main.feels_like);
      const durum = data.weather[0].description;
      const nem = data.main.humidity;

      let tempColor = chalk.green;
      if (sicaklik < 10) tempColor = chalk.cyan;
      if (sicaklik > 25) tempColor = chalk.red;

      console.log('\n' + chalk.bold.underline(`${sehirAdi}, ${ulke} Hava Durumu`) + '\n');
      console.log(`🌡️  Sıcaklık:    ${tempColor(sicaklik + '°C')} (Hissedilen: ${hissedilen}°C)`);
      console.log(`☁️  Durum:       ${chalk.yellow(durum.toUpperCase())}`);
      console.log(`💧 Nem:         %${nem}\n`);

    } catch (err) {
      console.log('\n' + chalk.bold.red('❌ Hata: Şehir bulunamadı veya bir sorun oluştu!') + '\n');
    }
  });

program.parse(process.argv);

