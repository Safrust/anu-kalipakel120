export type ProkerStatus = "direncanakan" | "berjalan" | "selesai";

export type NavItem = {
  label: string;
  href: string;
};

export type Proker = {
  slug: string;
  title: string;
  status: ProkerStatus;
  owner: string;
  summary: string;
  target: string;
  outputs: string[];
  impact: string;
  timeline: string[];
};

export type Activity = {
  slug: string;
  date: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  media: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  division: string;
  focus: string;
};

export type GalleryItem = {
  title: string;
  type: string;
  summary: string;
};

export type ReportItem = {
  title: string;
  description: string;
  href?: string;
  format: string;
  status?: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export const navigation: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Profil Desa", href: "/profil-desa" },
  { label: "Program Kerja", href: "/proker" },
  { label: "Dokumentasi", href: "/kegiatan" },
  { label: "Galeri", href: "/galeri" },
  { label: "Tim", href: "/tim" },
  { label: "Laporan", href: "/laporan" },
  { label: "Kontak", href: "/kontak" },
];

export const heroStats = [
  { label: "Program kerja tersusun", value: "9" },
  { label: "Kegiatan terdokumentasi", value: "6" },
  { label: "Halaman konten utama", value: "8" },
];

export const villageHighlights = [
  "Sejarah dan struktur pemerintahan desa",
  "Data demografi serta potensi ekonomi lokal",
  "Dokumentasi kegiatan yang kronologis",
  "Arsip laporan akhir dan unduhan resmi",
];

export const prokerItems: Proker[] = [
  {
    slug: "cerdas-finansial-literasi-keuangan-syariah",
    title: "Cerdas Finansial: Edukasi Literasi Keuangan Syariah",
    status: "direncanakan",
    owner: "Ezis, Ahmad",
    summary:
      "Edukasi literasi keuangan syariah untuk masyarakat Dusun Kalipakel agar mampu mengelola keuangan secara bijak dan sesuai prinsip syariah.",
    target:
      "Masyarakat Dusun Kalipakel yang memiliki aktivitas ekonomi pertanian dan usaha mikro.",
    outputs: [
      "Satu kegiatan edukasi literasi keuangan syariah",
      "Hasil pre-test dan post-test",
      "Laporan kegiatan sesuai ketentuan hibah Bank Indonesia",
    ],
    impact:
      "Meningkatnya pemahaman masyarakat tentang pengelolaan keuangan syariah, mendorong kebiasaan finansial yang lebih bijak, dan memperkuat kesadaran literasi keuangan sebagai bagian dari kesejahteraan keluarga.",
    timeline: [
      "Koordinasi dengan DPL, pemerintah dusun, dan narasumber",
      "Persiapan administrasi serta instrumen pre-test dan post-test",
      "Pelaksanaan edukasi dan diskusi",
      "Post-test, dokumentasi, dan penyusunan laporan",
    ],
  },
  {
    slug: "kalipakel-mengaji",
    title: "Kalipakel Mengaji: Penguatan Pendidikan Keagamaan Anak melalui TPA",
    status: "direncanakan",
    owner: "Gilang, Syafiq, Aida",
    summary:
      "Penguatan pendidikan keagamaan anak melalui TPA rutin agar pembinaan agama berjalan terstruktur di Dusun Kalipakel.",
    target:
      "Anak usia TK-SD dan pemuda desa yang dilibatkan sebagai pendamping pengajar.",
    outputs: [
      "TPA berjalan rutin minimal 3 kali seminggu",
      "Minimal 20 anak mengikuti kegiatan TPA",
      "Jadwal dan materi pembelajaran sederhana",
      "Sistem evaluasi dan monitoring pembelajaran",
    ],
    impact:
      "Peningkatan kualitas literasi keagamaan anak, terbentuknya wadah pendidikan keagamaan yang berkelanjutan, dan meningkatnya keterlibatan pemuda desa dalam pembinaan agama.",
    timeline: [
      "Koordinasi dengan dukuh, tokoh agama, dan masyarakat",
      "Pendataan peserta dan pemetaan kemampuan baca Al-Qur'an",
      "Penyusunan jadwal dan materi TPA",
      "Rekrutmen pendamping pemuda desa",
      "Pelaksanaan TPA rutin",
    ],
  },
  {
    slug: "kalipakel-lestari-sedekah-sampah",
    title: "Kalipakel Lestari: Sedekah Sampah",
    status: "direncanakan",
    owner: "Akbar, Ezis, Melati",
    summary:
      "Penguatan pengelolaan sampah rumah tangga lewat bank sampah sederhana dan edukasi pemilahan sampah.",
    target: "Masyarakat Dusun Kalipakel",
    outputs: [
      "Fasilitas bank sampah sederhana",
      "Kegiatan pengelolaan sampah",
      "Meningkatnya partisipasi masyarakat dalam bank sampah",
    ],
    impact:
      "Meningkatnya kesadaran masyarakat terhadap pengelolaan sampah berkelanjutan, berkurangnya limbah anorganik, dan tumbuhnya budaya peduli lingkungan berbasis ekoteologi.",
    timeline: [
      "Koordinasi dengan perangkat dusun, ketua RT, dan karang taruna",
      "Identifikasi kebutuhan sarana pemilahan sampah",
      "Pembuatan fasilitas bank sampah",
      "Penyerahan dan koordinasi mekanisme penyaluran sampah",
    ],
  },
  {
    slug: "kartini-kalipakel",
    title: "Kartini Kalipakel: Pemberdayaan dan Penguatan Keterampilan",
    status: "direncanakan",
    owner: "Nadia, Nabilla",
    summary:
      "Pelatihan keterampilan untuk ibu-ibu PKK agar organisasi kembali aktif dan lebih produktif.",
    target: "Ibu-ibu PKK Dusun Kalipakel",
    outputs: [
      "Kegiatan pelatihan bagi ibu-ibu PKK",
      "Minimal 15-20 ibu PKK mengikuti kegiatan",
      "Setiap peserta menghasilkan satu karya vas bunga dari kawat bulu",
      "Meningkatnya partisipasi ibu-ibu dalam kegiatan PKK",
    ],
    impact:
      "PKK kembali aktif sebagai wadah pemberdayaan perempuan, kebersamaan dan partisipasi sosial meningkat, keterampilan kerajinan bertambah, dan terbentuk budaya belajar serta berkarya bersama.",
    timeline: [
      "Koordinasi dengan pengurus PKK",
      "Pendataan peserta pelatihan",
      "Pelaksanaan dan praktik langsung",
      "Evaluasi keberlanjutan kegiatan PKK",
    ],
  },
  {
    slug: "kalipakel-sehat",
    title: "Kalipakel Sehat: Penguatan Edukasi Kesehatan Balita dan Lansia",
    status: "direncanakan",
    owner: "Putri, Aida, Melati",
    summary:
      "Penguatan edukasi kesehatan balita dan lansia melalui media edukatif, senam lansia, dan art therapy.",
    target:
      "Balita, orang tua balita, lansia, kader posyandu, dan keluarga peserta",
    outputs: [
      "Edukasi dampak teknologi digital dan media sosial pada perkembangan anak",
      "APE untuk Posyandu",
      "Senam lansia dan art therapy",
      "Peningkatan pengetahuan lansia mengenai hidup sehat",
    ],
    impact:
      "Poster edukasi, APE, senam lansia, dan art therapy dapat dimanfaatkan berkelanjutan sebagai kegiatan pendukung Posyandu untuk meningkatkan kualitas hidup, kesehatan fisik, dan kesehatan mental.",
    timeline: [
      "Koordinasi dengan kader posyandu dan pemerintah dusun",
      "Identifikasi kebutuhan media edukasi",
      "Pengadaan APE",
      "Pelaksanaan senam lansia dan art therapy",
    ],
  },
  {
    slug: "penguatan-literasi-pendampingan-belajar-anak",
    title: "Penguatan Literasi dan Pendampingan Belajar Anak",
    status: "direncanakan",
    owner: "Seluruh anggota",
    summary:
      "Penyediaan pojok baca dan pendampingan belajar agar anak-anak lebih mudah mengakses bahan bacaan dan kegiatan literasi.",
    target: "Anak sekolah TK-SD, orang tua, dan masyarakat Dusun Kalipakel",
    outputs: [
      "Satu pojok baca yang dapat dimanfaatkan masyarakat",
      "Buku bacaan hasil donasi",
      "Kegiatan membaca bersama dan pendampingan belajar selama masa KKN",
      "Meningkatnya motivasi belajar dan minat baca anak-anak",
    ],
    impact:
      "Meningkatnya akses masyarakat terhadap bahan bacaan, tumbuhnya minat baca dan budaya literasi pada anak-anak, serta pojok baca yang dapat dikelola berkelanjutan setelah program KKN berakhir.",
    timeline: [
      "Koordinasi lokasi pojok baca dengan pemerintah dusun dan masyarakat",
      "Penggalangan donasi buku dan bahan bacaan layak pakai",
      "Penataan pojok baca dan sarana pendukung",
      "Pendataan peserta dan jadwal pendampingan belajar",
      "Pelaksanaan membaca bersama dan literasi rutin",
      "Sosialisasi dan monitoring evaluasi program",
    ],
  },
  {
    slug: "plang-identitas-wilayah",
    title: "Pengadaan Plang Identitas Wilayah dan Navigasi Arah",
    status: "direncanakan",
    owner: "Seluruh anggota kelompok",
    summary:
      "Pengadaan plang identitas wilayah untuk memperjelas titik RT dan arah navigasi di Dusun Kalipakel.",
    target: "Ketua RT dan masyarakat dusun sebagai pengguna informasi",
    outputs: [
      "Plang identitas wilayah dan navigasi arah terpasang",
      "Serah terima plang ke RT terkait",
      "Penanda wilayah administratif yang lebih jelas",
    ],
    impact:
      "Plang menjadi penanda permanen yang memudahkan identifikasi wilayah dalam jangka panjang dan menjadi kontribusi fisik nyata kelompok KKN ke perangkat dusun.",
    timeline: [
      "Koordinasi dengan Pak Dukuh untuk memastikan jumlah RT dan titik lokasi",
      "Survei lokasi pemasangan",
      "Desain plang",
      "Pengadaan bahan dan pembuatan",
      "Pemasangan plang dan serah terima",
    ],
  },
  {
    slug: "kalipakel-tani-berdaya",
    title: "Kalipakel Tani Berdaya: Edukasi dan Pendampingan Kelompok Tani",
    status: "direncanakan",
    owner: "Seluruh anggota kelompok",
    summary:
      "Edukasi dan pendampingan kelompok tani mengenai pupuk cair eco enzyme dan pertanian ramah lingkungan.",
    target: "Ketua dan anggota Kelompok Tani Dusun Kalipakel",
    outputs: [
      "Satu kegiatan edukasi bagi Kelompok Tani",
      "Peningkatan wawasan mengenai pertanian ramah lingkungan",
      "Peluang pemanfaatan limbah organik sebagai bahan pupuk cair",
    ],
    impact:
      "Meningkatnya wawasan kelompok tani mengenai pertanian ramah lingkungan, terbukanya peluang pemanfaatan limbah organik sebagai bahan pembuatan pupuk cair, dan mendorong praktik pertanian yang lebih berkelanjutan.",
    timeline: [
      "Audiensi dan wawancara dengan ketua serta anggota kelompok tani",
      "Penentuan topik edukasi berdasarkan hasil audiensi",
      "Koordinasi dengan narasumber",
      "Penyusunan materi edukasi",
      "Pelaksanaan edukasi dan pelatihan eco enzyme",
    ],
  },
  {
    slug: "branding-umkm-kalipakel",
    title: "Branding UMKM Kalipakel",
    status: "direncanakan",
    owner: "Ezis, Syafiq",
    summary:
      "Edukasi dan pendampingan pemasaran digital agar UMKM Kalipakel memanfaatkan marketplace secara lebih optimal.",
    target: "Pelaku UMKM Dusun Kalipakel",
    outputs: [
      "Edukasi mengenai pemasaran digital bagi pelaku UMKM",
      "Peningkatan pemahaman pemanfaatan marketplace",
      "Pengetahuan dasar untuk memasarkan produk melalui platform digital",
    ],
    impact:
      "Meningkatnya kemampuan pelaku UMKM dalam memanfaatkan marketplace sebagai sarana pemasaran dan terbukanya peluang perluasan pasar bagi produk unggulan Dusun Kalipakel.",
    timeline: [
      "Koordinasi dengan pemerintah dusun dan pelaku UMKM",
      "Identifikasi kebutuhan pelaku UMKM terkait pemasaran digital",
      "Pelaksanaan edukasi dan pendampingan marketplace",
    ],
  },
];

export const activities: Activity[] = [
  {
    slug: "survei-awal-dan-pemetaan-kebutuhan",
    date: "2026-07-03",
    title: "Survei Awal dan Pemetaan Kebutuhan",
    category: "Riset Lapangan",
    summary:
      "Tim melakukan kunjungan awal untuk memetakan kebutuhan desa dan menentukan prioritas program kerja.",
    content:
      "Kegiatan ini berfokus pada observasi lapangan, diskusi dengan perangkat desa, dan pencatatan isu yang paling relevan untuk ditindaklanjuti selama masa KKN.",
    media: [
      "Foto diskusi perangkat desa",
      "Foto titik lokasi utama",
      "Catatan hasil survei",
    ],
  },
  {
    slug: "pendataan-profil-desa",
    date: "2026-07-06",
    title: "Pendataan Profil Desa",
    category: "Dokumentasi",
    summary:
      "Pengumpulan data sejarah desa, struktur pemerintahan, dan potensi ekonomi untuk halaman profil desa.",
    content:
      "Tim menyusun rangkuman profil desa agar publik bisa memahami konteks wilayah pengabdian, termasuk potensi UMKM, sumber daya alam, dan arah pengembangan desa.",
    media: ["Dokumen profil", "Foto kantor desa", "Grafik demografi"],
  },
  {
    slug: "kelas-literasi-digital",
    date: "2026-07-09",
    title: "Kelas Literasi Digital",
    category: "Edukasi",
    summary:
      "Sosialisasi penggunaan internet sehat, keamanan akun, dan etika bermedia sosial untuk peserta muda.",
    content:
      "Sesi ini diarahkan agar warga dan pelajar memahami praktik digital yang aman, produktif, dan sesuai kebutuhan mereka sehari-hari.",
    media: ["Slide materi", "Foto pemaparan", "Foto sesi tanya jawab"],
  },
  {
    slug: "pendampingan-umkm",
    date: "2026-07-12",
    title: "Pendampingan UMKM",
    category: "Ekonomi Lokal",
    summary:
      "Tim membantu foto produk, penyusunan caption, dan penataan katalog sederhana untuk promosi usaha warga.",
    content:
      "Kegiatan ini membantu produk lokal tampil lebih konsisten di media promosi digital tanpa memerlukan alat yang rumit.",
    media: ["Foto produk", "Contoh katalog", "Konten promosi"],
  },
  {
    slug: "kerja-bakti-lingkungan",
    date: "2026-07-15",
    title: "Kerja Bakti Lingkungan",
    category: "Sosial",
    summary:
      "Bersih-bersih area fasilitas umum bersama warga sekitar sebagai kegiatan kolaboratif dan dokumentatif.",
    content:
      "Kerja bakti menjadi salah satu bentuk kehadiran tim KKN yang paling mudah dirasakan manfaatnya oleh warga.",
    media: ["Foto sebelum-sesudah", "Foto bersama warga", "Catatan lokasi"],
  },
  {
    slug: "rapat-evaluasi-mingguan",
    date: "2026-07-18",
    title: "Rapat Evaluasi Mingguan",
    category: "Internal Tim",
    summary:
      "Rapat singkat untuk mengevaluasi progres, hambatan, dan kebutuhan konten website minggu berikutnya.",
    content:
      "Hasil rapat dipakai sebagai dasar update halaman proker dan dokumentasi agar seluruh konten tetap kronologis.",
    media: ["Notulen rapat", "Daftar tindak lanjut", "Snapshot progres"],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Mahasiswa 01",
    role: "Koordinator Tim",
    division: "Koordinasi",
    focus: "Sinkronisasi kegiatan dan komunikasi dengan desa",
  },
  {
    name: "Mahasiswa 02",
    role: "Sekretaris",
    division: "Administrasi",
    focus: "Notulen, surat, dan arsip dokumen",
  },
  {
    name: "Mahasiswa 03",
    role: "Bendahara",
    division: "Administrasi",
    focus: "Pencatatan kebutuhan operasional",
  },
  {
    name: "Mahasiswa 04",
    role: "Dokumentasi",
    division: "Konten",
    focus: "Foto, video, dan kurasi galeri",
  },
  {
    name: "Mahasiswa 05",
    role: "Pengelola Web",
    division: "Teknis",
    focus: "Struktur website, halaman konten, dan publikasi",
  },
  {
    name: "Mahasiswa 06",
    role: "Riset Lapangan",
    division: "Program Kerja",
    focus: "Pemetaan kebutuhan warga dan desa",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Diskusi awal dengan perangkat desa",
    type: "Foto",
    summary: "Momen saat tim memetakan kebutuhan utama pengabdian.",
  },
  {
    title: "Pemotretan produk UMKM",
    type: "Foto",
    summary: "Materi visual untuk mendukung promosi digital.",
  },
  {
    title: "Kerja bakti lingkungan",
    type: "Foto",
    summary: "Dokumentasi kolaborasi warga dan tim KKN.",
  },
  {
    title: "Presentasi literasi digital",
    type: "Video",
    summary: "Rekaman sesi edukasi singkat untuk pelajar.",
  },
  {
    title: "Rapat evaluasi mingguan",
    type: "Foto",
    summary: "Salah satu arsip internal untuk menjaga ritme kegiatan.",
  },
  {
    title: "Kurasi arsip dokumentasi",
    type: "Foto",
    summary: "Proses memilih foto dan narasi untuk publikasi web.",
  },
];

export const reports: ReportItem[] = [
  {
    title: "Laporan Akhir KKN",
    description:
      "Dokumen utama berisi ringkasan program kerja, capaian, dan evaluasi.",
    format: "PDF",
    status: "Menunggu unggahan final",
  },
  {
    title: "Rekap Dokumentasi Kegiatan",
    description: "Lampiran foto, narasi, dan kronologi kegiatan selama KKN.",
    format: "PDF",
    status: "Menunggu unggahan final",
  },
  {
    title: "Proposal Program Kerja",
    description:
      "Rencana awal program yang menjadi dasar pelaksanaan lapangan.",
    format: "PDF",
    status: "Menunggu unggahan final",
  },
];

export const contacts: ContactItem[] = [
  {
    label: "Koordinasi Tim",
    value: "Lihat daftar anggota dan peran di halaman Tim",
    href: "/tim",
  },
  {
    label: "Dokumentasi Kegiatan",
    value: "Buka kronologi dan catatan lapangan di halaman Kegiatan",
    href: "/kegiatan",
  },
  {
    label: "Arsip Laporan",
    value: "Dokumen final disiapkan di halaman Laporan",
    href: "/laporan",
  },
  {
    label: "Lokasi Pengabdian",
    value: "Padukuhan Kalipakel, Kalurahan Donotirto, Kretek, Bantul",
  },
];

export function getProkerBySlug(slug: string) {
  return prokerItems.find((item) => item.slug === slug);
}

export function getActivityBySlug(slug: string) {
  return activities.find((item) => item.slug === slug);
}
