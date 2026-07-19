import { SectionHeading } from "@/components/section-heading";

const teamMembers = [
  {
    nim: "23103040106",
    name: "Kholisatun Nadia Permata Putri",
    faculty: "Syariah dan Hukum",
    prodi: "Ilmu Hukum",
    phone: "081391596224",
  },
  {
    nim: "23101040079",
    name: "Melati Kartika Putri",
    faculty: "Adab dan Ilmu Budaya",
    prodi: "Ilmu Perpustakaan",
    phone: "0882005714574",
  },
  {
    nim: "23107030034",
    name: "Nabilla Nur Zafira",
    faculty: "Ilmu Sosial dan Humaniora",
    prodi: "Ilmu Komunikasi",
    phone: "085647699596",
  },
  {
    nim: "23107010090",
    name: "Fadhila Aryaputri Ramadhani",
    faculty: "Ilmu Sosial dan Humaniora",
    prodi: "Psikologi",
    phone: "087831206211",
  },
  {
    nim: "23105030098",
    name: "Abyan Gilang Dwi Trisnarista",
    faculty: "Ushuluddin dan Pemikiran Islam",
    prodi: "Ilmu Al-Qur`an dan Tafsir",
    phone: "089648781132",
  },
  {
    nim: "23106050094",
    name: "Syafiq Rustiawanto",
    faculty: "Sains dan Teknologi",
    prodi: "Informatika",
    phone: "085713517973",
  },
  {
    nim: "23108010053",
    name: "Ahmad Waris",
    faculty: "Ekonomi dan Bisnis Islam",
    prodi: "Ekonomi Syariah",
    phone: "082137031126",
  },
  {
    nim: "23108030074",
    name: "Ezis Saputra",
    faculty: "Ekonomi dan Bisnis Islam",
    prodi: "Manajemen Keuangan Syariah",
    phone: "089504789961",
  },
  {
    nim: "22104030040",
    name: "Aidah Wahyu Ningrum",
    faculty: "Ilmu Tarbiyah dan Keguruan",
    prodi: "Pendidikan Anak Usia Dini",
    phone: "088228384220",
  },
  {
    nim: "22108030135",
    name: "Akbar Rafiq Firmansyah",
    faculty: "Ekonomi dan Bisnis Islam",
    prodi: "Manajemen Keuangan Syariah",
    phone: "0882008055037",
  },
  {
    nim: "20107030026",
    name: "Luthfi Pramudhia Iqbal",
    faculty: "Ilmu Sosial dan Humaniora",
    prodi: "Ilmu Komunikasi",
    phone: "085172125501",
  },
];

export default function TimPage() {
  return (
    <div className="space-y-8 py-4">
      <SectionHeading
        eyebrow="Lampiran I"
        title="Daftar Anggota Kelompok KKN Reguler Angkatan 120"
        description="UIN Sunan Kalijaga Yogyakarta 2026"
        align="center"
      />

      <div className="grid gap-4 md:hidden">
        {teamMembers.map((member) => (
          <article
            key={member.nim}
            className="rounded-3xl border border-border bg-white/85 p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
              {member.nim}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
              {member.name}
            </h3>
            <dl className="mt-4 grid gap-3 text-sm leading-6 text-muted">
              <div>
                <dt className="font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                  Fakultas
                </dt>
                <dd className="mt-1 text-foreground">{member.faculty}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                  Prodi
                </dt>
                <dd className="mt-1 text-foreground">{member.prodi}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                  No. Handphone
                </dt>
                <dd className="mt-1 text-foreground">{member.phone}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-3xl border border-border bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-230 border-collapse text-sm">
            <thead>
              <tr className="bg-white">
                <th className="border border-black px-4 py-3 text-center font-semibold text-foreground">
                  NIM
                </th>
                <th className="border border-black px-4 py-3 text-center font-semibold text-foreground">
                  NAMA
                </th>
                <th className="border border-black px-4 py-3 text-center font-semibold text-foreground">
                  FAKULTAS
                </th>
                <th className="border border-black px-4 py-3 text-center font-semibold text-foreground">
                  PRODI
                </th>
                <th className="border border-black px-4 py-3 text-center font-semibold text-foreground">
                  No. Handphone
                </th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.nim} className="align-top">
                  <td className="border border-black px-4 py-4 text-center text-foreground">
                    {member.nim}
                  </td>
                  <td className="border border-black px-4 py-4 text-foreground">
                    {member.name}
                  </td>
                  <td className="border border-black px-4 py-4 text-foreground">
                    {member.faculty}
                  </td>
                  <td className="border border-black px-4 py-4 text-foreground">
                    {member.prodi}
                  </td>
                  <td className="border border-black px-4 py-4 text-foreground">
                    {member.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
