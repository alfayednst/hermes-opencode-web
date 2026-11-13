# AGENTS.md

Panduan singkat untuk agen atau kontributor yang bekerja pada proyek ini.

## Tujuan Proyek
- Menyediakan landing page statis untuk bisnis layanan AI lokal.
- Menjaga struktur sederhana menggunakan HTML, CSS, dan JavaScript tanpa framework.

## Struktur Utama
- `site/index.html`: Halaman utama.
- `site/styles.css`: Gaya dan tata letak responsif.
- `site/app.js`: Interaksi ringan (menu navigasi, tahun dinamis).
- `nginx.conf`: Konfigurasi Nginx untuk penyajian file statis.
- `Dockerfile`: Image berbasis Nginx Alpine.
- `docker-compose.yml`: Layanan web pada port `8080`.

## Konvensi
- Gunakan Bahasa Indonesia untuk konten situs.
- Pastikan tampilan tetap nyaman pada perangkat seluler.
- Hindari menambahkan dependensi atau framework yang tidak diperlukan.
- Jangan menaruh API key, token, atau data rahasia dalam repositori.

## Pemeriksaan
- Periksa sintaks JavaScript: `node --check site/app.js`
- Periksa konfigurasi Docker Compose: `docker compose config`

## Catatan
- Jika mengubah struktur file, perbarui `Dockerfile`, `nginx.conf`, dan dokumentasi terkait.
