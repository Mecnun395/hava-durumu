const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

const API = "63995bf10cb7b0e91f3583dd1bcd3768"
// 63995bf10cb7b0e91f3583dd1bcd3768

app.get("/", (req, res) => {
    res.render("index", {
        weather: null,
        error: null
    })
});

app.post("/hava", async (req, res) => {
    // 1. Formdan gelen şehir adını al
    const sehir = req.body.sehir;

    // 2. API URL'ini oluştur (metric = Santigrat derece, lang=tr = Türkçe açıklama)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&units=metric&appid=${API}&lang=tr`;

    try {
        // 3. Axios ile API'ye istek at
        const response = await axios.get(url);
        
        // 4. EJS'e veriyi gönder
        res.render("index", {
            weather: response.data,
            error: null
        });
    } catch (err) {
        // Hata durumunda (örneğin yanlış şehir girilirse)
        res.render("index", {
            weather: null,
            error: "Şehir bulunamadı!"
        });
    }
});

app.listen(PORT, () => {
    console.log("Sunucu 3000 PORT'u üzerinde çalışıyor...")
})
