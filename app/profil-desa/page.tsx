import { SectionHeading } from "@/components/section-heading";

const demographics = [
  {
    label: "Jumlah keluarga",
    value:
      "Angka resmi per padukuhan belum dipublikasikan di data desa daring — perlu dikonfirmasi langsung ke Dukuh Kalipakel atau Kalurahan Donotirto",
  },
  {
    label: "Mata pencaharian dominan",
    value:
      "Petani dan petani penggarap (lahan datar untuk pertanian, perkebunan, perikanan), pembudidaya ikan air tawar, serta pelaku UMKM olahan pangan",
  },
  {
    label: "Potensi unggulan",
    value:
      "Produk olahan pangan lokal (wedang uwuh, adrem, rempeyek), kerajinan kain perca, dan tradisi budaya seperti Umbul Donga",
  },
];

const structure = [
  "Dukuh Kalipakel: Bapak Jayusman, sebagai kepala wilayah padukuhan",
  "Koordinasi RT di wilayah Padukuhan Kalipakel, di bawah Kalurahan Donotirto",
  "Lembaga kemasyarakatan tingkat kalurahan: LPMD, PKK, Karang Taruna, dan Kelompok Tani",
  "Kelompok Wanita Tani (KWT) Rukun Tani Kalipakel dan pelaku UMKM lokal",
];

export default function ProfilDesaPage() {
  return (
    <div className="space-y-12 py-4">
      <SectionHeading
        eyebrow="Profil Padukuhan"
        title="Padukuhan Kalipakel, Kalurahan Donotirto, Kretek, Bantul"
        description="Halaman ini menampung sejarah, struktur, data dasar, dan potensi Padukuhan Kalipakel agar arsip KKN punya konteks yang kuat, bukan hanya dokumentasi visual."
      />

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-border bg-white/80 p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold sm:text-xl">Sejarah Singkat</h3>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-[15px]">
            Kalipakel adalah salah satu dari 13 padukuhan yang membentuk
            Kalurahan Donotirto, Kapanewon Kretek, Kabupaten Bantul. Menurut
            catatan sejarah kalurahan, Donotirto terbentuk dari penggabungan
            tiga kelurahan lama berdasarkan Peraturan Daerah tahun 1946, yaitu
            eks-Kelurahan Gadingharjo, Banyudono, dan Kradenan. Kalipakel
            merupakan bagian dari eks-Kelurahan Gadingharjo, bersama padukuhan
            Gading Lumbung, Palangjiwan, Gadingharjo, dan Gadingdaton.
          </p>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-[15px]">
            Struktur pemerintahan desa sebelumnya mengacu pada Rijksblad tahun
            1920, terdiri dari lurah, kamitua, jogoboyo, kebayan, dan ulu-ulu,
            sebelum berkembang menjadi struktur kalurahan modern seperti saat
            ini. Secara geografis, Donotirto memiliki luas sekitar 470,27 Ha,
            berbatasan dengan Desa Parangtritis di sisi selatan (kawasan pesisir
            selatan Yogyakarta), dan berjarak kurang lebih 17 km dari pusat
            Kabupaten Bantul.
          </p>
        </article>
        <article className="rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold sm:text-xl">
            Struktur Pemerintahan
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted sm:text-[15px]">
            {structure.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-6 text-muted">
            Padukuhan Kalipakel berkoordinasi langsung dengan Pemerintah
            Kalurahan Donotirto, dipimpin oleh Lurah Jurahimi bersama Carik
            Munir Sulastama dan jajaran kaur/kasi kalurahan.
          </p>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {demographics.map((item) => (
          <article
            key={item.label}
            className="rounded-3xl border border-border bg-white/75 p-5 shadow-sm sm:p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-strong">
              {item.label}
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground">
              {item.value}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <article className="rounded-3xl border border-border bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(255,250,242,0.92))] p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold sm:text-xl">Potensi Desa</h3>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-[15px]">
            Kalipakel dikenal dengan tradisi budaya Umbul Donga, sebuah upacara
            adat tahunan yang digelar di Sasono Loyo Kalipakel dengan kirab
            gunungan dari Lapangan Voli Kalipakel, serta gelar budaya pagelaran
            wayang kulit semalam suntuk sebagai bagian dari merti dusun. Di
            bidang ekonomi, warga menggerakkan UMKM binaan Kalurahan Donotirto
            seperti wedang uwuh, adrem, rempeyek, dan kerajinan kain perca
            (dompet, tas, pouch), yang pernah tampil dalam Bantul Creative Expo.
            Kelompok Wanita Tani Rukun Tani Kalipakel juga aktif dalam pelatihan
            pengolahan pangan lokal bersama Dinas Ketahanan Pangan dan Pertanian
            Kabupaten Bantul.
          </p>
        </article>
        <article className="rounded-3xl border border-border bg-white/80 p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold sm:text-xl">
            Catatan Verifikasi Data
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-[15px]">
            Data kualitatif di halaman ini disusun dari sumber kalurahan dan
            publikasi daerah yang tersedia, sedangkan data kuantitatif seperti
            jumlah KK, jumlah penduduk, dan rincian mata pencaharian per
            padukuhan tetap perlu dikonfirmasi ulang saat pembaruan berikutnya.
            Jika angka resmi sudah didapat, cukup perbarui isi array{" "}
            <code>demographics</code> tanpa mengubah struktur desain agar
            halaman tetap konsisten.
          </p>
        </article>
      </section>
    </div>
  );
}
