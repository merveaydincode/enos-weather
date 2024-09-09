# Enos Weather 🌤️

**Enos Weather** belirli bir şehir için günlük hava durumu tahminlerini sunan bir web uygulamasıdır. React ve Redux kullanılarak geliştirilmiştir ve Weatherbit API ile hava durumu verilerini sağlar.

## Proje Demo
Proje, tamamen responsive olarak tasarlanmış olup, mobil cihazlar uyumludur.
Projenin canlı versiyonunu şu adresten görüntüleyebilirsiniz:  
🔗 [Enos Weather](https://merveaydincode.github.io/enos-weather)

## Özellikler

- **Günlük Hava Tahmini**: Seçilen şehir için detaylı günlük hava durumu tahminleri.
- **Redux State Yönetimi**: Hava durumu verilerinin yönetimi için Redux kullanımı.
- **Weatherbit API Entegrasyonu**: Hava durumu verileri anında API'den çekilir.
- **Responsive Tasarım**: Uygulama hem masaüstü hem mobil cihazlar için optimize edilmiştir.

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu klonlayın**:
   ```bash
   git clone https://github.com/merveaydincode/enos-weather.git
   ```

2. **Proje dizinine gidin**:
   ```bash
   cd enos-weather
   ```

3. **Gerekli bağımlılıkları yükleyin**:
   ```bash
   npm install
   ```

4. **Uygulamayı çalıştırın**:
   ```bash
   npm start
   ```
   Bu komut, uygulamayı geliştirme modunda başlatır. Tarayıcıda `http://localhost:3000` adresine giderek uygulamanızı görüntüleyebilirsiniz.

## Kullanım

- Şehir adını girerek seçilen şehir için hava durumu tahminlerini anında alabilirsiniz.
- API'den güncel hava durumu bilgileri gelir ve Redux store'da yönetilir.
- Uygulama, hem günlük hem de ilerleyen günler için hava tahmini sunar.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzünün oluşturulması.
- **Redux**: Uygulamanın state yönetiminde.
- **Weatherbit API**: Hava durumu verilerini almak için kullanılan API.
- **GitHub Pages**: Uygulamanın barındırılması.

## Proje Yapısı

- `src/`: Uygulamanın ana kaynak dosyaları.
  - `components/`: Uygulamanın çeşitli bileşenleri.
  - `redux/`: Redux ile ilgili dosyalar.
  - `App.tsx`: Ana uygulama bileşeni.
  

