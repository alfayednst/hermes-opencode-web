# Landing Page Layanan AI Lokal

Proyek ini adalah landing page statis responsif untuk bisnis layanan AI lokal. Dibangun menggunakan **HTML**, **CSS**, dan **JavaScript** tanpa framework, serta siap dijalankan dengan **Nginx** melalui Docker.

## Fitur
- Bagian **Hero** dengan ajakan bertindak (CTA).
- Bagian **Layanan** yang menjelaskan penawaran utama.
- Bagian **Alur Kerja** untuk menjelaskan proses kolaborasi.
- Tombol aksi untuk konsultasi/kontak.
- Tata letak responsif yang nyaman di perangkat seluler.

## Struktur Proyek
```text
.
├── site/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .dockerignore
├── AGENTS.md
└── README.md
```

## Menjalankan Secara Lokal (Tanpa Docker)
Buka file `site/index.html` langsung di peramban, atau jalankan server statis sederhana dari folder proyek.

Contoh:
```bash
python3 -m http.server 8080 --directory site
```
Lalu akses `http://localhost:8080`.

## Menjalankan dengan Docker
Pastikan Docker dan Docker Compose tersedia.

1. Bangun dan jalankan layanan:
   ```bash
   docker compose up --build
   ```
2. Buka peramban di:
   ```
   http://localhost:8080
   ```

## Pemeriksaan
- Sintaks JavaScript:
  ```bash
  node --check site/app.js
  ```
- Konfigurasi Docker Compose:
  ```bash
  docker compose config
  ```

## Catatan Keamanan
- Jangan menaruh API key, token, atau data rahasia dalam proyek ini.
- Gunakan variabel lingkungan atau mekanisme rahasia yang aman jika integrasi eksternal ditambahkan di masa depan.
