import express from "express";


const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));

const trik = {
    tips : `Tips dan Cara Mengusir Rasa Malas Belajar
    Bagaimanapun belajar adalah sebuah kewajiban bagi pelajar atau siswa jadi mau tidak mau tetap harus dilakukan. Masalahnya adalah kebanyakan siswa hanya belajar saat akan ulangan atau ujian saja sehingga kurang efektif. Bahkan banyak yang masih melakukan metode “SKS” atau Sistem Kebut Semalam dimana semua materi yang akan diujikan guru hanya dipelajari dalam waktu semalam saja.
    Cara belajar seperti ini tentunya akan membawa hasil yang kurang bagus dibandingkan kalau siswa rutin belajar setiap hari. Nah, kalau rasa malas belajar mulai datang atasi dengan beberapa cara berikut ini.`,
    tips1 : `1. Mulai dari yang Disukai <br>
    Supaya rasa malas tidak tiba-tiba mendatangi pikiran perlu menumbuhkan sebuah semangat lebih dulu. Caranya? Mulai saja kegiatan belajar dari sesuatu yang disukai. Hasil penelitian mengatakan bahwa minat dan rasa suka pada sesuatu yang dipelajari membuat seseorang lebih mudah untuk berpikir jernih dan memahami materi.
    Jadi meskipun besok tidak ada jadwal untuk pelajaran yang disukai tersebut namun tidak masalah kalau memulai belajar dengan mengulangi materinya supaya bisa lebih semangat mempelajari bidang studi lainnya.`,
    tips2 : `2. Cari Tempat yang Nyaman <br>
    Cara agar tidak malas belajar selanjutnya adalah dengan mencari tempat yang dirasa nyaman. Sebaiknya tempat yang dipilih tersebut juga membantu kamu untuk bisa fokus belajar dan tidak terganggu oleh hal lainnya. Misalnya kamu merasa nyaman dan tenang di dalam kamar karena tidak ada orang lain yang keluar masuk maka belajar bisa dilakukan di ruangan tersebut. Sebaiknya hindari tempat belajar yang menjadi tempat aktivitas banyak orang seperti ruang keluarga, ruang tamu, ruang makan dan sebagainya.`,
    tips3 : `3. Susun Jadwal Belajar <br>
    Untuk memudahkan kamu belajar sebaiknya susun jadwal belajar mingguan seperti jadwal pelajaran di sekolah. Kamu tidak harus menyusun jadwal belajar persis seperti jadwal di kelas karena malah akan membuat semakin malas saja. Buat saja jadwal sederhana misalnya hari Senin kamu belajar dengan mengerjakan latihan soal matematika, Selasa belajar bahasa dan seterusnya. Jadwal juga membantu kamu untuk lebih teratur sehingga tidak merasa lelah karena terlalu banyak yang dipelajari dalam satu hari.`,
    tips4 : `4. Fokus pada Target <br>
    Pembuatan jadwal juga berfungsi untuk membantu kamu lebih mudah dalam membuat target tertentu. Contohnya, mengerjakan 3 latihan soal setiap hari. Nah, setelah itu fokuslah pada apa yang menjadi target tersebut supaya bisa dilakukan dan dicapai dengan baik. Sesuaikan target dengan kemampuan diri sendiri tidak perlu terlalu memaksa dan meniru orang lain.`,
    tips5 :`5. Ambil Jeda Istirahat <br>
    Rasa malas belajar mungkin datang karena kamu sudah merasa capek dengan kegiatan di sekolah maupun aktivitas lainnya. Oleh sebab itu ambil waktu untuk istirahat dulu supaya pikiran kembali segar dan rasa malas hilang. Setelah itu baru mulailah untuk belajar. `,
    tips6 :`6. Membuat Kelompok Kecil <br>
    Supaya tidak malas belajar ajak beberapa teman untuk membuat kelompok kecil. Belajar kelompok biasanya efektif untuk menghilangkan kemalasan dan menumbuhkan semangat. Selain itu dengan belajar secara berkelompok materi pelajaran yang dianggap sulit bisa diselesaikan bersama-sama.
    `,
    kesimpulan : `Jika cara agar tidak malas belajar seperti yang dijelaskan di atas dilakukan dengan komitmen dan motivasi tinggi maka prestasi terbaik bisa dicapai. Lingkungan yang kondusif dan fasilitas sekolah yang lengkap juga ikut meningkatkan motivasi belajar siswa sehingga rasa malas akan hilang. Semua itu bisa didapatkan di Sekolah Unggulan di Jawa Barat seperti SMA Dwiwarna (Boarding School) Bogor.`
    }


app.get("/api/tips",(req,res)=>{
    res.send(trik);
})

app.listen(port, () => console.log(`Berjalan pada port ${port}`));
