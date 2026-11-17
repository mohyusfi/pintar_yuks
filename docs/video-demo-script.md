# Script & Rundown Video Demo — Pinter Yuks

**Target Durasi:** 8–9 Menit (Rentang 7–10 Menit)  
**Gaya Penyampaian:** Skenario *End-to-End* Terhubung (dari calon siswa melihat website hingga pemantauan orang tua)  
**Anggota Kelompok:**
1. **Lidiya** — Segmen 1 (Opening & Landing Page) & Segmen 3 (Role Tutor)
2. **Moh. Yusfi Lakhafidun** — Segmen 2 (Pendaftaran, Login & Role Admin)
3. **Windah** — Segmen 4 (Role Siswa, Role Orang Tua & Closing)

---

## 1. Checklist Persiapan Sebelum Rekam

Pastikan hal-hal berikut sudah siap sebelum mulai *screen recording*:

1. **Aplikasi Siap Diakses (Online):**
   - Buka langsung website yang sudah di-deploy di **`https://pinteryuks.fiyus.me/`** (tidak perlu menjalankan server lokal).
   - Gunakan mode layar penuh (*fullscreen* browser) dengan zoom 100% agar tampilan rapi dan teks terbaca jelas.
2. **Akun Demo Siap Pakai** (tersedia di halaman `https://pinteryuks.fiyus.me/masuk`):
   - **Admin (Tata Usaha):** `nuraini.tu@tadulakocendekia.sch.id` | Password: `password123`
   - **Super Admin (Opsional):** `pimpinan@tadulakocendekia.sch.id` | Password: `password123`
   - **Tutor:** `dian.pratiwi@tadulakocendekia.sch.id` | Password: `password123`
   - **Siswa:** `fahri.ramadhan@siswa.tadulakocendekia.sch.id` | Password: `password123`
   - **Orang Tua:** `ahmad.dahlan@wali.tadulakocendekia.sch.id` | Password: `password123`
3. **Siapkan File Contoh untuk Upload:**
   - 1 file materi belajar (PDF/dokumen ringkas) untuk didemokan Lidiya di menu **Modul & Tugas** (`/tutor/materi`).
   - 1 file gambar contoh bukti transfer (JPG/PNG) untuk didemokan Windah di menu **Tagihan & SPP** (`/parent/tagihan`).
4. **Tips Rekam Lidiya (2 Segmen):**
   - Lidiya bisa merekam Segmen 1 dan Segmen 3 sekaligus dalam satu sesi, lalu digabungkan saat *editing* di antara bagian Yusfi dan Windah.

---

## 2. Rundown & Pembagian Waktu

| Segmen | Pembicara | Topik & Rute | Estimasi Durasi |
| :--- | :--- | :--- | :--- |
| **Segmen 1** | **Lidiya** | Opening, Landing Page (`/`), & Detail Metode (`/metode/$slug`) | 00:00 – 01:30 (1.5 mnt) |
| **Segmen 2** | **Moh. Yusfi Lakhafidun** | Pendaftaran (`RegisterModal`), Login (`/masuk`), & Role **Admin** (`/admin/*`) | 01:30 – 04:00 (2.5 mnt) |
| **Segmen 3** | **Lidiya** | Role **Tutor** (`/tutor`, `/tutor/jadwal`, `/tutor/presensi`, `/tutor/materi`, `/tutor/nilai`) | 04:00 – 06:00 (2.0 mnt) |
| **Segmen 4** | **Windah** | Role **Siswa** (`/student/*`), Role **Orang Tua** (`/parent/*`), & Closing | 06:00 – 09:00 (3.0 mnt) |

---

## 3. Naskah Detail per Segmen

### Segmen 1 — Opening & Landing Page (Lidiya | ~1 Menit 30 Detik)

| Waktu | Aksi di Layar | Narasi / Poin Bicara |
| :--- | :--- | :--- |
| 00:00 | Tampilkan halaman utama `/` (*Hero section*). | "Assalamualaikum / Halo semuanya. Kami dari kelompok yang beranggotakan saya **Lidiya**, **Moh. Yusfi Lakhafidun**, dan **Windah**. Di video ini kami akan mendemokan aplikasi **Pinter Yuks**, yaitu sistem informasi bimbingan belajar berbasis web yang menghubungkan **Admin**, **Tutor**, **Siswa**, dan **Orang Tua** dalam satu platform." |
| 00:25 | *Scroll* pelan ke bagian **4 Metode Belajar**, klik salah satu kartu metode menuju `/metode/$slug`, lalu kembali ke `/`. | "Di halaman utama ini, calon siswa dan orang tua bisa langsung mengenal keunggulan Pinter Yuks. Kami menampilkan 4 metode belajar terarah—mulai dari Konsep Dasar, Active Recall, Deliberate Practice, sampai Klinik Personal—yang detailnya bisa dibuka langsung oleh pengunjung." |
| 00:50 | *Scroll* ke bagian **Program Belajar** (SD, SMP, SMA, UTBK), **Alur Pendaftaran**, dan **FAQ**. | "Di bawahnya tersedia pilihan program per jenjang mulai dari SD, SMP, SMA, hingga persiapan UTBK, lengkap dengan informasi untuk orang tua, langkah pendaftaran, serta FAQ untuk menjawab pertanyaan umum." |
| 01:15 | Arahkan kursor ke tombol **Daftar** di landing page. | "Nah, kalau ada calon siswa yang tertarik mendaftar dan masuk ke sistem, prosesnya akan dilanjutkan oleh **Yusfi** sebagai pengelola Admin. Silakan, Yusfi." |

---

### Segmen 2 — Pendaftaran, Login & Role Admin (Moh. Yusfi Lakhafidun | ~2 Menit 30 Detik)

| Waktu | Aksi di Layar | Narasi / Poin Bicara |
| :--- | :--- | :--- |
| 01:30 | Klik tombol **Daftar** untuk membuka `RegisterModal`, isi contoh data singkat (atau tunjukkan form-nya), lalu tutup/submit. | "Terima kasih Lidiya. Saya **Yusfi**, akan melanjutkan dari proses pendaftaran hingga pengelolaan di sisi Admin. Calon siswa bisa langsung mengisi formulir pendaftaran dari landing page ini dengan memilih jenjang dan data wali." |
| 01:55 | Buka `/masuk`, masukkan akun Admin (`nuraini.tu@tadulakocendekia.sch.id`) atau klik opsi demo Admin, lalu login. | "Setelah mendaftar, sekarang kita masuk ke portal utama melalui halaman login tunggal. Sistem akan otomatis mengarahkan pengguna ke dashboard sesuai perannya. Di sini saya masuk sebagai **Admin Tata Usaha**." |
| 02:15 | Tampilkan `/admin` (ringkasan KPI), lalu klik menu **Pendaftaran** (`/admin/pendaftaran`). | "Di halaman ringkasan Admin, kita bisa melihat statistik utama lembaga. Pertama, kita buka menu **Pendaftaran**. Pendaftar baru yang masuk dari landing page akan muncul di sini untuk diverifikasi Admin sebelum aktif belajar." |
| 02:40 | Buka menu **Siswa** (`/admin/siswa`), tunjukkan daftar siswa & penempatan rombel kelas. | "Setelah diverifikasi, Admin menempatkan siswa ke rombel kelas. Sistem membatasi kapasitas kelas maksimal 10 sampai 12 siswa per rombel agar proses belajar tetap fokus dan kondusif." |
| 03:05 | Buka menu **Jadwal** (`/admin/jadwal`), tunjukkan jadwal kelas/tutor/ruangan dan fitur tambah/cek jadwal. | "Selanjutnya di menu **Jadwal**, Admin mengatur pertemuan kelas, tutor, dan ruangan. Keunggulan sistem ini adalah validasi **anti-bentrok otomatis**—jadi sistem akan menolak jika ada tutor, ruangan, atau kelas yang waktunya bertabrakan di hari yang sama." |
| 03:35 | Buka menu **Pembayaran** (`/admin/pembayaran`), tunjukkan daftar tagihan SPP dan status verifikasi. | "Terakhir untuk Admin, di menu **Pembayaran**, tata usaha bisa memantau tagihan SPP siswa dan memverifikasi bukti transfer yang diunggah oleh orang tua." |
| 03:50 | *Logout* atau beri transisi ke layar Tutor. | "Setelah jadwal dan kelas siap oleh Admin, aktivitas belajar mengajar akan dijalankan oleh Tutor. Bagian Tutor akan dijelaskan kembali oleh **Lidiya**." |

---

### Segmen 3 — Role Tutor (Lidiya | ~2 Menit)

| Waktu | Aksi di Layar | Narasi / Poin Bicara |
| :--- | :--- | :--- |
| 04:00 | Login di `/masuk` menggunakan akun Tutor (`dian.pratiwi@tadulakocendekia.sch.id`), masuk ke `/tutor`. | "Sekarang saya masuk sebagai **Tutor**—di sini contohnya Kak Dian Pratiwi, Tutor Fisika & UTBK. Di beranda Tutor langsung terlihat ringkasan agenda mengajar hari ini." |
| 04:20 | Buka menu **Jadwal Mengajar** (`/tutor/jadwal`). | "Di menu **Jadwal Mengajar**, tutor bisa melihat seluruh jadwal kelas yang sudah diatur Admin secara otomatis dan bebas bentrok." |
| 04:40 | Buka menu **Presensi Sesi** (`/tutor/presensi`), klik salah satu sesi menuju `/tutor/presensi/$sessionId`, pilih status (`Hadir`, `Sakit`, `Izin`, `Alpa`), lalu simpan. | "Saat kelas dimulai, tutor membuka menu **Presensi Sesi** untuk mencatat kehadiran siswa secara digital dengan status Hadir, Sakit, Izin, atau Alpa. Begitu disimpan, data kehadiran ini langsung tersinkron ke portal Orang Tua secara real-time." |
| 05:10 | Buka menu **Modul & Tugas** (`/tutor/materi`), tunjukkan daftar materi atau simulasikan unggah modul PDF. | "Berikutnya di menu **Modul & Tugas**, tutor dapat mengunggah materi pembelajaran maupun latihan soal agar bisa langsung diakses dan diunduh oleh siswa di kelas tersebut." |
| 05:35 | Buka menu **Nilai & Evaluasi** (`/tutor/nilai`), tunjukkan input nilai dan catatan evaluasi siswa. | "Setelah evaluasi atau try out, tutor menginput nilai sekaligus catatan perkembangan belajar tiap siswa di menu **Nilai & Evaluasi**." |
| 05:50 | Beri transisi ke layar Siswa. | "Nah, bagaimana hasil presensi, materi, dan nilai tadi dilihat oleh siswa dan orang tua? Selanjutnya akan didemokan oleh **Windah**." |

---

### Segmen 4 — Role Siswa, Role Orang Tua & Closing (Windah | ~3 Menit)

| Waktu | Aksi di Layar | Narasi / Poin Bicara |
| :--- | :--- | :--- |
| 06:00 | Login di `/masuk` menggunakan akun Siswa (`fahri.ramadhan@siswa.tadulakocendekia.sch.id`), masuk ke `/student`. | "Terima kasih Lidiya. Saya **Windah**, akan mendemokan sisi **Siswa** dan **Orang Tua**. Pertama, saya masuk sebagai **Siswa**, Fahri Ramadhan. Di beranda terlihat jadwal terdekat dan ringkasan aktivitas belajar." |
| 06:20 | Buka **Jadwal Bimbingan** (`/student/jadwal`), lalu ke **Modul & Tugas** (`/student/materi`) dan klik preview salah satu materi (`/student/preview/$materialId`). | "Siswa bisa memantau jadwal kelas di menu **Jadwal Bimbingan**, lalu membuka **Modul & Tugas** untuk melihat atau mengunduh materi yang baru saja dibagikan tutor." |
| 06:45 | Buka **Nilai & Rapor** (`/student/nilai`) dan **Tagihan SPP** (`/student/tagihan`). | "Di menu **Nilai & Rapor**, siswa dapat melihat progres nilai mereka, serta mengecek status pembayaran bulanan di menu **Tagihan SPP**." |
| 07:05 | *Logout*, lalu login di `/masuk` menggunakan akun Orang Tua (`ahmad.dahlan@wali.tadulakocendekia.sch.id`), masuk ke `/parent`. | "Sekarang kita berpindah ke sudut pandang **Orang Tua**—di sini Bapak Ahmad Dahlan yang memiliki dua anak terdaftar. Di beranda Orang Tua tersedia fitur **pergantian profil anak (multi-child switcher)**, sehingga wali bisa memantau lebih dari satu anak dalam satu akun." |
| 07:35 | Buka **Riwayat Kehadiran** (`/parent/kehadiran`) dan **Rapor & Catatan Tutor** (`/parent/rapor`). | "Melalui menu **Riwayat Kehadiran**, orang tua bisa memantau apakah anak benar-benar hadir di sesi bimbingan. Lalu di menu **Rapor & Catatan Tutor**, orang tua dapat membaca nilai sekaligus catatan evaluasi langsung dari tutor." |
| 08:00 | Buka **Tagihan & SPP** (`/parent/tagihan`), tunjukkan daftar tagihan, tombol unggah bukti bayar, dan kwitansi. | "Terakhir, di menu **Tagihan & SPP**, orang tua bisa melihat rincian tagihan, mengunggah bukti pembayaran secara online, dan mengunduh kwitansi setelah diverifikasi oleh Admin." |
| 08:30 | Tampilkan kembali layar ringkasan atau slide/halaman awal aplikasi untuk penutup. | "Demikian demo aplikasi **Pinter Yuks** dari kelompok kami. Dengan terhubungnya **Landing Page**, **Admin**, **Tutor**, **Siswa**, dan **Orang Tua**, seluruh proses pendaftaran, penjadwalan anti-bentrok, presensi, materi, nilai, hingga pembayaran SPP menjadi lebih rapi, transparan, dan efisien. Terima kasih telah menyaksikan!" |

---

## 4. Tips Teknis Rekaman & Editing

1. **Resolusi & Audio:** Rekam layar minimal **1080p (Full HD)** dan pastikan suara mikrofon jelas tanpa *noise* berlebih.
2. **Transisi Antar Anggota:** Saat berpindah peran (Lidiya → Yusfi → Lidiya → Windah), beri jeda 1–2 detik sebelum dan sesudah bicara agar mudah dipotong (*cut*) saat *editing*.
3. **Nama Pembicara di Layar (Opsional):** Tambahkan teks kecil di pojok layar (*lower third*) saat pergantian pembicara (misal: *"Lidiya — Landing Page & Tutor"*) agar dosen/penonton langsung tahu siapa yang sedang menjelaskan.
