#!/usr/bin/env node

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const axios = require('axios');
const { program } = require('commander');
const { Chalk } = require('chalk');

const chalk = new Chalk();
const API = process.env.API_KEY;

program
  .version('1.1.0')
  .description('Terminalden hızlı hava durumu sorgulama aracı');

program
  .argument('[sehir]', 'Hava durumunu öğrenmek istediğiniz şehir')
  .option('-d, --detay', 'Rüzgar hızı gibi ekstra detayları gösterir')
  .action(async (sehir, options) => {
    // Eğer şehir yazılmadıysa uyarı verip durdur
    if (!sehir) {
      console.log('\n' + chalk.red('❌ Lütfen bir şehir adı giriniz. Örn: hava istanbul') + '\n');
      return;
    }
    
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

      // Renk seçimi (Chalk metotlarını güvenli şekilde çağırıyoruz)
      let colorTemp = chalk.green(`${sicaklik}°C`);
      if (sicaklik < 10) {
        colorTemp = chalk.cyan(`${sicaklik}°C`);
      } else if (sicaklik > 25) {
        colorTemp = chalk.red(`${sicaklik}°C`);
      }

      console.log('\n' + chalk.bold(`${sehirAdi}, ${ulke} Hava Durumu`) + '\n');
      console.log(`🌡️  Sıcaklık:    ${colorTemp} (Hissedilen: ${hissedilen}°C)`);
      console.log(`☁️  Durum:       ${chalk.yellow(durum.toUpperCase())}`);
      console.log(`💧 Nem:         %${nem}\n`);
        if (options.detay) {
      console.log(`💨 Rüzgar Hızı: ${data.wind.speed} m/s`);
      } 

    } catch (err) {
      console.log('\n' + chalk.red('❌ Hata: Şehir bulunamadı veya bir sorun oluştu!') + '\n');
    }
});

program
  .command('naber')
  .description('Bot ile selamlaşır')
  .action(() => {
    console.log('\nİyidir, senden naber?\n');
  });

program.parse(process.argv);