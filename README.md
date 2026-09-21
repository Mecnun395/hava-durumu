Markdown
# 🌤️ Hava Durumu CLI

Terminal üzerinden hızlı ve pratik bir şekilde anlık hava durumu bilgilerini öğrenmenizi sağlayan Node.js tabanlı bir komut satırı (CLI) aracıdır.

---

## 🚀 Özellikler

- 🌡️ **Sıcaklığa Göre Renklendirme:** Sıcaklık değerine göre dinamik renk değişimi (Soğuk: Mavi, Ilık: Yeşil, Sıcak: Kırmızı).
- 💨 **Detay Modu (`-d` / `--detay`):** Rüzgar hızı ve ekstra detayları görüntüleme.
- 💬 **Sohbet Komutu:** Terminalden eğlenceli etkileşimler (`hava naber`).
- 🌐 **Global Kullanım:** `npm link` sayesinde bilgisayarın her yerinden doğrudan `hava <şehir>` şeklinde çalıştırma.
- 🔒 **Güvenli API Yönetimi:** `.env` desteği ve otomatik dosya yolu tespiti.

---

## 🛠️ Kurulum

### 1. Depoyu Klonlayın veya İndirin
```bash
git clone [https://github.com/kullaniciadi/hava-durumu-cli.git](https://github.com/kullaniciadi/hava-durumu-cli.git)
cd hava-durumu-cli
2. Bağımlılıkları Yükleyin
Bash
npm install
3. Ortam Değişkenlerini (.env) Ayarlayın
Projenin ana dizininde bir .env dosyası oluşturun ve OpenWeatherMap üzerinden aldığınız API anahtarını ekleyin:

Kod snippet'i
API_KEY=your_openweather_api_key_here
4. Global Komut Olarak Bağlayın
Terminalde projenin olduğu klasördeyken aşağıdaki komutu çalıştırarak hava komutunu sisteminize tanımlayın:

Bash
npm link
📖 Kullanım
npm link işlemini yaptıktan sonra sistemin herhangi bir yerinde başına node koymadan doğrudan çalıştırabilirsiniz.

Standart Hava Durumu Sorgulama
Bash
hava istanbul
hava ankara
Detaylı Hava Durumu Sorgulama (-d veya --detay)
Rüzgar hızı gibi ekstra bilgileri görmek için -d bayrağını kullanabilirsiniz:

Bash
hava istanbul -d
Yardım ve Sürüm Bilgisi
Bash
hava --help
hava --version
Eğlenceli Alt Komutlar
Bash
hava naber
🧰 Teknolojiler
Node.js: Çalıştırma ortamı

Commander.js: CLI argüman ve komut yönetimi

Axios: OpenWeatherMap API istekleri

Chalk: Terminal çıktı renklendirmesi

Dotenv: Ortam değişkenleri yönetimi

📄 Lisans
Bu proje MIT lisansı ile lisanslanmıştır.


<ElicitationsGroup message="README dosyasına veya projeye eklemek isteyebileceğin seçenekler:">
  <Elicitation label="Hata durumlarını yakalayan gelişmiş loglama ekleyelim" query="Hava durumu CLI projesine daha detaylı hata yönetimi ve renkli uyarılardan oluşan loglama mekanizması ekleyelim."/>
  <Elicitation label="5 günlük hava tahmini gösteren yeni bir komut ekleyelim" query="Hava durumu CLI projesine 5 günlük hava tahminini listeleyen yeni bir komut veya seçeneğin nasıl ekleneceğini göster."/>
</ElicitationsGroup>

