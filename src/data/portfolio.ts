export interface CaseStep {
  key: string;
  title: string;
  guide: string;
  example: string;
}

export interface CaseStudy {
  id: string;
  label: string;
  title: string;
  summary: string;
  illustration: "dashboard" | "mobile" | "funnel";
  steps: CaseStep[];
  mistakes: string[];
}

const baseSteps = (ex: Record<string, string>): CaseStep[] => [
  {
    key: "problem",
    title: "Problem",
    guide: "Jelaskan masalah nyata yang kamu pecahkan dalam 1-2 kalimat. Hindari jargon.",
    example: ex.problem,
  },
  {
    key: "target",
    title: "Target User",
    guide: "Siapa yang terdampak? Sebutkan konteks, tujuan, dan frustrasi utamanya.",
    example: ex.target,
  },
  {
    key: "research",
    title: "Research",
    guide: "Metode apa yang kamu pakai (interview, survey, analisis)? Tunjukkan kamu tidak menebak.",
    example: ex.research,
  },
  {
    key: "insight",
    title: "Insight",
    guide: "Temuan kunci yang mengubah arah desain. Satu insight kuat lebih baik dari sepuluh data mentah.",
    example: ex.insight,
  },
  {
    key: "userflow",
    title: "User Flow",
    guide: "Gambarkan alur utama user mencapai tujuan, termasuk jalur error.",
    example: ex.userflow,
  },
  {
    key: "wireframe",
    title: "Wireframe",
    guide: "Tunjukkan struktur sebelum visual. Jelaskan keputusan layout, bukan sekadar memamerkan kotak.",
    example: ex.wireframe,
  },
  {
    key: "ui",
    title: "UI Final",
    guide: "Tampilkan hasil visual dengan konteks: kenapa warna, tipografi, dan komponen ini.",
    example: ex.ui,
  },
  {
    key: "system",
    title: "Design System",
    guide: "Tunjukkan token dan komponen yang menjaga konsistensi. Ini sinyal kematangan.",
    example: ex.system,
  },
  {
    key: "prototype",
    title: "Prototype",
    guide: "Sertakan prototype interaktif untuk membuktikan alur benar-benar bekerja.",
    example: ex.prototype,
  },
  {
    key: "testing",
    title: "Usability Testing",
    guide: "Apa yang kamu uji, ke berapa orang, dan temuan apa yang muncul?",
    example: ex.testing,
  },
  {
    key: "iteration",
    title: "Iteration",
    guide: "Tunjukkan before-after setelah pengujian. Perubahan membuktikan kamu mendengar user.",
    example: ex.iteration,
  },
  {
    key: "result",
    title: "Result",
    guide: "Dampak yang terukur jika ada (metrik, feedback). Jujur, jangan mengarang angka.",
    example: ex.result,
  },
  {
    key: "learning",
    title: "Learning",
    guide: "Apa yang kamu pelajari dan akan kamu lakukan berbeda. Refleksi menunjukkan kedewasaan.",
    example: ex.learning,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "saas",
    label: "SaaS Dashboard",
    title: "Redesign Dashboard Analytics SaaS",
    summary:
      "Studi kasus produk B2B: menyederhanakan dashboard padat data agar tim non-teknis bisa mengambil keputusan cepat.",
    illustration: "dashboard",
    steps: baseSteps({
      problem:
        "Pengguna kesulitan menemukan metrik penting karena dashboard menampilkan 30+ angka tanpa hierarki, sehingga keputusan jadi lambat.",
      target:
        "Manajer operasional non-teknis yang membuka dashboard 3x sehari untuk memantau kesehatan bisnis dalam waktu singkat.",
      research:
        "Wawancara 6 manajer dan analisis sesi pemakaian. Saya mencatat metrik mana yang paling sering dicari dan mana yang diabaikan.",
      insight:
        "80% keputusan hanya bergantung pada 4 metrik, namun keempatnya tersebar dan tertimbun. User tidak butuh lebih banyak data, mereka butuh fokus.",
      userflow:
        "Login → Overview ringkas (4 metrik kunci) → drill-down ke detail → ekspor laporan. Jalur error: data gagal dimuat menampilkan retry yang jelas.",
      wireframe:
        "Saya menaruh 4 kartu metrik utama di atas (ringkasan), lalu tabel dan chart detail di bawah, mengikuti pola 'ringkasan ke detail'.",
      ui: "Palet netral dengan satu warna brand untuk aksi utama; warna status hanya pada indikator naik/turun agar mata fokus pada perubahan penting.",
      system:
        "Token warna, spacing 8pt, dan komponen kartu metrik, tabel, serta filter chip yang dipakai konsisten di seluruh dashboard.",
      prototype:
        "Prototype klik dari overview ke detail, lengkap dengan state loading dan empty, untuk menguji apakah alur drill-down terasa alami.",
      testing:
        "Diuji ke 5 manajer dengan tugas 'temukan penyebab penurunan minggu ini'. Tiga orang awalnya bingung dengan label filter.",
      iteration:
        "Saya mengganti label filter ke bahasa user dan memindahkan filter aktif menjadi chip yang terlihat. Kebingungan hilang di pengujian kedua.",
      result:
        "Waktu menemukan metrik kunci turun signifikan dalam pengujian, dan manajer menyebut dashboard 'akhirnya bisa dibaca sekilas'.",
      learning:
        "Saya belajar bahwa menghapus sering lebih sulit dan lebih berharga daripada menambah. Fokus adalah fitur.",
    }),
    mistakes: [
      "Memamerkan banyak chart tanpa menjelaskan keputusan di baliknya.",
      "Tidak menunjukkan state loading/empty/error untuk data.",
      "Mengklaim 'meningkatkan efisiensi' tanpa konteks atau bukti.",
    ],
  },
  {
    id: "mobile",
    label: "Mobile App",
    title: "Onboarding Aplikasi Keuangan Mobile",
    summary:
      "Studi kasus mobile: memangkas onboarding yang panjang agar user cepat merasakan nilai dan tidak berhenti di tengah jalan.",
    illustration: "mobile",
    steps: baseSteps({
      problem:
        "Banyak user berhenti di onboarding 6 langkah sebelum sempat memakai fitur inti, sehingga banyak akun terdaftar tapi tidak aktif.",
      target:
        "Pengguna pertama kali aplikasi keuangan, sering memakai satu tangan saat bepergian, dengan kesabaran terbatas.",
      research:
        "Saya menganalisis titik berhenti di funnel onboarding dan mewawancarai 5 user baru tentang apa yang membuat mereka ragu.",
      insight:
        "User ragu menyerahkan data sebelum melihat manfaat. Mereka butuh merasakan nilai dulu, baru bersedia melengkapi profil.",
      userflow:
        "Buka app → lihat nilai inti dalam 1 layar → coba fitur utama → minta data hanya saat dibutuhkan → selesai. Izin diminta secara kontekstual.",
      wireframe:
        "Saya menaruh aksi utama di area thumb zone dan memecah form panjang menjadi langkah-langkah ringan dengan progress yang terlihat.",
      ui: "Tombol besar dengan touch target nyaman, microcopy yang menenangkan, dan ilustrasi ramah untuk menurunkan kecemasan soal keuangan.",
      system:
        "Komponen input mobile dengan state lengkap, tipe keyboard sesuai field, dan pola tombol yang konsisten di semua layar.",
      prototype:
        "Prototype 4 layar onboarding yang bisa diklik, termasuk state error pada input agar pengalaman terasa nyata saat diuji.",
      testing:
        "Diuji ke 5 user mobile. Mereka lebih cepat mencapai fitur inti, namun beberapa tidak menyadari fungsi tombol skip.",
      iteration:
        "Saya memperjelas tombol lanjut/lewati dan menambahkan validasi inline agar user tidak mengulang dari awal saat salah ketik.",
      result:
        "Dalam pengujian, lebih banyak user menyelesaikan onboarding dan menyebut prosesnya 'cepat dan tidak menakutkan'.",
      learning:
        "Saya belajar meminta data di saat yang tepat jauh lebih efektif daripada meminta semuanya di awal.",
    }),
    mistakes: [
      "Menampilkan layar cantik tanpa menjelaskan kendala mobile (thumb zone, keyboard).",
      "Mengabaikan state error dan empty pada form.",
      "Tidak menunjukkan iterasi setelah pengujian.",
    ],
  },
  {
    id: "conversion",
    label: "Conversion Page",
    title: "Optimasi Landing Page Konversi",
    summary:
      "Studi kasus conversion: meningkatkan kejelasan landing page agar pengunjung paham nilai dan terdorong mengambil aksi.",
    illustration: "funnel",
    steps: baseSteps({
      problem:
        "Landing page menjelaskan banyak fitur tetapi pengunjung tidak paham manfaat utamanya, sehingga sedikit yang mendaftar.",
      target:
        "Pengunjung baru yang datang dari iklan, hanya punya beberapa detik untuk memutuskan apakah produk relevan bagi mereka.",
      research:
        "Saya menganalisis funnel dari kunjungan ke pendaftaran dan membandingkan dengan 3 kompetitor untuk memahami standar dan celah.",
      insight:
        "Pengunjung pergi di bagian atas halaman karena headline berbicara soal fitur, bukan manfaat. Mereka tidak menemukan 'apa untungnya bagiku'.",
      userflow:
        "Datang dari iklan → headline manfaat jelas → bukti/keyakinan → satu CTA dominan → form singkat. Keraguan dijawab tepat sebelum CTA.",
      wireframe:
        "Saya menyusun halaman dengan ritme: manfaat, bukti sosial, cara kerja, lalu CTA, mengurangi friksi di setiap langkah.",
      ui: "Hierarki tipografi kuat pada headline, satu warna CTA dominan, dan whitespace lega agar pesan utama tidak tenggelam.",
      system:
        "Komponen seksi yang konsisten (heading, fitur, testimoni, CTA) dengan token spacing dan warna yang seragam.",
      prototype:
        "Prototype gulir halaman penuh untuk menguji apakah alur membaca mengalir mulus dari manfaat menuju CTA.",
      testing:
        "Saya melakukan tes 5 detik ke beberapa orang: apa yang mereka ingat? Banyak yang masih ragu soal harga.",
      iteration:
        "Saya menambahkan penjelasan nilai dan menjawab keraguan harga tepat di dekat CTA, lalu menyederhanakan form menjadi satu field.",
      result:
        "Dalam tes, pesan utama lebih cepat tertangkap dan lebih banyak orang mengaku 'paham produknya dalam sekali baca'.",
      learning:
        "Saya belajar bahwa conversion dimulai dari kejelasan, bukan bujukan. Bila user paham nilainya, aksi mengikuti.",
    }),
    mistakes: [
      "Headline berfokus pada fitur, bukan manfaat untuk user.",
      "Terlalu banyak CTA bersaing sehingga tidak ada aksi yang jelas.",
      "Mengaku menaikkan konversi tanpa menjelaskan apa yang diubah dan kenapa.",
    ],
  },
];

export const portfolioChecklist = [
  "Setiap case study punya problem statement yang jelas.",
  "Proses dan keputusan terlihat, bukan hanya hasil akhir.",
  "Ada bukti riset dan pengujian, bukan asumsi.",
  "Menampilkan iterasi (before-after) setelah pengujian.",
  "Result ditulis jujur, tanpa metrik karangan.",
  "Ada bagian learning/refleksi di tiap case study.",
  "Homepage hanya menyorot 3 karya terbaik.",
  "Bahasa ringkas, mudah dibaca hiring manager dalam 5 menit.",
];
