import type { Module, SkillKey } from "@/lib/types";

export const SKILL_LABELS: Record<SkillKey, string> = {
  visualUI: "Visual UI",
  uxThinking: "UX Thinking",
  research: "Research",
  figma: "Figma",
  designSystem: "Design System",
  accessibility: "Accessibility",
  productThinking: "Product Thinking",
  handoff: "Handoff",
  portfolio: "Portfolio",
};

export const curriculum: Module[] = [
  {
    id: "m1",
    slug: "fondasi-visual-ui",
    title: "Fondasi Visual UI",
    month: 1,
    level: "Pemula",
    tagline: "Bikin tampilan rapi, modern, dan profesional.",
    description:
      "Modul pertama untuk membangun mata desain. Kamu belajar kenapa sebuah tampilan terasa mahal atau murahan, lalu menguasai empat pilar visual: tipografi, spacing, layout, dan warna, ditutup dengan anatomi komponen UI dasar.",
    goal: "User paham cara membuat tampilan yang rapi, modern, dan profesional.",
    learningGoals: [
      "Membedakan UI yang rapi dan UI yang berantakan beserta alasannya.",
      "Menyusun hierarki tipografi yang membuat user tahu harus membaca apa dulu.",
      "Menggunakan sistem spacing 4pt/8pt secara konsisten.",
      "Membangun palet warna yang membantu prioritas, bukan sekadar cantik.",
    ],
    illustrationType: "typography",
    estimatedHours: 14,
    skills: ["visualUI"],
    lessons: [
      {
        id: "m1l1",
        title:
          "Typography Hierarchy: Cara Membuat Mata User Tahu Harus Baca Apa Dulu",
        objective:
          "Menyusun hierarki teks sehingga informasi penting langsung tertangkap dalam 1 detik pertama.",
        estimatedMinutes: 25,
        sections: [
          {
            heading: "Apa itu hierarchy",
            body: "Hierarchy adalah urutan kepentingan visual. Saat user membuka layar, matanya butuh dipandu: mana judul, mana penjelasan, mana tombol aksi. Hierarchy mengatur urutan itu lewat ukuran, ketebalan, warna, dan jarak, bukan lewat dekorasi.",
          },
          {
            heading: "Kenapa penting",
            body: "Tanpa hierarchy, semua teks terasa sama penting, dan ketika semuanya penting maka tidak ada yang penting. User jadi lelah memindai layar dan akhirnya pergi. Hierarchy yang baik membuat layar terasa ringan walaupun isinya banyak.",
          },
          {
            heading: "Cara menentukan skala",
            body: "Mulai dari ukuran body 16px sebagai dasar, lalu naik dengan rasio yang konsisten. Skala aman untuk pemula:",
            list: [
              "H1 / Display: 32-40px, weight 700, untuk judul utama satu per layar.",
              "H2: 24-28px, weight 600, untuk judul section.",
              "Body: 16px, weight 400-500, line-height 1.5-1.6.",
              "Caption / meta: 13-14px, weight 400, warna lebih redup.",
            ],
          },
          {
            heading: "Empat alat membuat hierarchy",
            body: "Hierarchy tidak hanya soal ukuran. Empat pengungkit yang bisa kamu mainkan:",
            list: [
              "Size: makin besar makin penting.",
              "Weight: bold menarik perhatian lebih cepat dari ukuran.",
              "Color/contrast: teks gelap pekat terasa lebih utama dari abu redup.",
              "Spacing: jarak yang lega mengelompokkan dan memisahkan informasi.",
            ],
          },
        ],
        goodExample:
          "Pricing card dengan nama paket kecil di atas, harga besar dan tebal sebagai fokus, lalu daftar benefit body 16px, dan satu tombol CTA berwarna solid. Mata langsung jatuh ke harga lalu ke tombol.",
        badExample:
          "Pricing card di mana nama paket, harga, dan semua benefit berukuran sama besar dengan 3 jenis font weight acak. Mata bingung harus mulai dari mana, dan tombol tenggelam di antara teks.",
        commonMistakes: [
          "Semua teks dibuat sama besar sehingga tidak ada fokus.",
          "Terlalu banyak font weight (bold, semibold, medium dipakai acak).",
          "Line height terlalu sempit sehingga paragraf terasa padat dan sesak.",
          "Contrast judul dan body kurang sehingga keduanya terlihat datar.",
        ],
        designerMahal:
          "Designer pemula bertanya: ukuran font berapa yang bagus? Designer mahal bertanya: keputusan apa yang harus user ambil di layar ini, dan bagaimana tipografi mempercepat keputusan itu?",
        miniDemo: {
          type: "typography",
          title: "Coba di Playground Typography",
          description:
            "Atur size, weight, dan line-height lalu lihat kapan hierarchy mulai terasa jelas.",
        },
        practice: [
          "Buat pricing card dengan 3 level hierarki (nama paket, harga, benefit).",
          "Ambil 1 artikel dan susun ulang menjadi judul, subjudul, body, dan caption.",
          "Duplikat header aplikasi favoritmu dan tiru skala tipografinya.",
        ],
        checklist: [
          "H1 terlihat paling penting dalam 1 detik pertama.",
          "Body nyaman dibaca dengan line-height minimal 1.5.",
          "Spacing antar teks konsisten dan mengelompokkan informasi.",
          "CTA terlihat jelas dan tidak tenggelam.",
        ],
        quiz: [
          {
            q: "Apa fungsi utama typography hierarchy?",
            options: [
              "Membuat layar terlihat penuh dekorasi",
              "Memandu mata user pada urutan kepentingan informasi",
              "Menghemat jumlah font yang dipakai",
              "Mengganti kebutuhan warna",
            ],
            answer: 1,
            explain:
              "Hierarchy memandu urutan baca, mana yang penting lebih dulu dan mana yang sekunder.",
          },
          {
            q: "Mana yang paling cepat menarik perhatian pada satu kata?",
            options: ["Italic", "Font weight bold", "Underline", "Warna abu redup"],
            answer: 1,
            explain:
              "Weight (bold) biasanya menarik perhatian lebih cepat dibanding sekadar memperbesar ukuran sedikit.",
          },
          {
            q: "Kesalahan tipografi pemula yang paling umum?",
            options: [
              "Memakai 1 keluarga font",
              "Membuat semua teks ukuran sama",
              "Memberi line-height 1.5",
              "Menggunakan body 16px",
            ],
            answer: 1,
            explain:
              "Menyamakan semua ukuran menghilangkan fokus sehingga tidak ada hierarchy.",
          },
        ],
      },
      {
        id: "m1l2",
        title: "Spacing & Grid 8pt: Rahasia Tampilan yang Terasa Mahal",
        objective:
          "Menggunakan sistem spacing konsisten supaya layout terasa rapi tanpa harus 'jago menggambar'.",
        estimatedMinutes: 22,
        sections: [
          {
            heading: "Kenapa spacing menentukan kualitas",
            body: "Mayoritas desain terlihat murahan bukan karena warnanya, tapi karena spacing-nya acak. Jarak 13px di sini, 17px di sana, 9px di tempat lain. Mata manusia sangat peka pada ketidakkonsistenan, walaupun user tidak bisa menyebut apa yang salah.",
          },
          {
            heading: "Sistem 4pt / 8pt",
            body: "Pakai kelipatan 4 atau 8 untuk semua jarak: 4, 8, 12, 16, 24, 32, 48, 64. Dengan begitu spacing-mu otomatis harmonis dan mudah diingat. 8pt adalah ritme dasar; 4pt dipakai untuk penyesuaian halus.",
            list: [
              "4px: jarak antar elemen sangat dekat (ikon dan label).",
              "8px: jarak dalam komponen kecil.",
              "16px: padding standar di dalam card.",
              "24-32px: jarak antar section.",
            ],
          },
          {
            heading: "Padding vs margin",
            body: "Padding adalah ruang di dalam elemen (jarak konten ke tepi). Margin adalah ruang di luar elemen (jarak ke elemen lain). Aturan sederhana: gunakan padding untuk 'napas' isi, margin untuk memisahkan blok.",
          },
          {
            heading: "White space bukan ruang kosong",
            body: "White space adalah alat desain aktif. Ruang lega di sekitar elemen membuat elemen itu terasa penting dan premium. Brand mewah memakai banyak white space; brand diskon memadatkan segalanya.",
          },
        ],
        goodExample:
          "Card dengan padding 24px konsisten, jarak antar elemen kelipatan 8px, dan jarak antar card 16px. Semua terasa selaras dan tenang.",
        badExample:
          "Card dengan padding 19px di atas, 11px di bawah, jarak antar elemen 7px dan 14px bergantian. Terlihat 'hampir rapi' tapi terasa mengganggu.",
        commonMistakes: [
          "Spacing acak tanpa sistem (angka ganjil sembarangan).",
          "Padding tidak simetris padahal seharusnya seimbang.",
          "Memadatkan elemen karena takut 'kosong'.",
          "Jarak antar section sama dengan jarak antar elemen dalam section.",
        ],
        designerMahal:
          "Designer mahal tidak menebak jarak. Mereka punya sistem spacing, jadi setiap keputusan bisa diulang, dijelaskan, dan diserahkan ke developer tanpa kebingungan.",
        miniDemo: {
          type: "spacing",
          title: "Coba Spacing Playground",
          description:
            "Geser padding dan aktifkan grid 8pt untuk merasakan kapan layout jadi rapi.",
        },
        practice: [
          "Ambil 1 card berantakan dan perbaiki semua spacing ke kelipatan 8.",
          "Buat sistem spacing token: xs, sm, md, lg, xl.",
          "Redesign list item agar jarak antar grup terlihat jelas.",
        ],
        checklist: [
          "Semua jarak memakai kelipatan 4 atau 8.",
          "Padding di dalam komponen simetris dan konsisten.",
          "Jarak antar section lebih besar dari jarak antar elemen.",
          "Ada white space yang cukup, tidak terasa padat.",
        ],
        quiz: [
          {
            q: "Kenapa spacing harus konsisten?",
            options: [
              "Agar file lebih kecil",
              "Karena mata peka pada ketidakkonsistenan dan menilainya berantakan",
              "Agar warna lebih cerah",
              "Supaya teks lebih besar",
            ],
            answer: 1,
            explain:
              "Konsistensi spacing membuat desain terasa rapi dan profesional secara bawah sadar.",
          },
          {
            q: "Mana yang merupakan jarak valid dalam sistem 8pt?",
            options: ["13px", "17px", "24px", "9px"],
            answer: 2,
            explain: "24 adalah kelipatan 8, sedangkan 13, 17, dan 9 tidak.",
          },
          {
            q: "Perbedaan padding dan margin?",
            options: [
              "Sama saja",
              "Padding di dalam elemen, margin di luar elemen",
              "Margin di dalam, padding di luar",
              "Keduanya hanya untuk teks",
            ],
            answer: 1,
            explain: "Padding adalah ruang internal, margin adalah ruang antar elemen.",
          },
        ],
      },
      {
        id: "m1l3",
        title: "Warna & Komponen UI Dasar yang Tidak Murahan",
        objective:
          "Membangun palet warna fungsional dan memahami anatomi komponen UI inti.",
        estimatedMinutes: 28,
        sections: [
          {
            heading: "Peran warna: primary, secondary, accent",
            body: "Primary adalah warna brand dan aksi utama. Secondary mendukung tanpa bersaing. Accent dipakai hemat untuk menarik perhatian ke hal spesifik seperti progress atau notifikasi. Aturan praktis: 60% netral, 30% pendukung, 10% warna brand.",
          },
          {
            heading: "Contrast dan keterbacaan",
            body: "Warna teks harus punya kontras cukup dengan background. Target minimal rasio 4.5:1 untuk teks normal. Banyak desain pemula memakai abu muda di atas putih sehingga teks sulit dibaca, terutama di layar terang.",
          },
          {
            heading: "Warna status",
            body: "Gunakan warna status secara konsisten dan jangan hanya mengandalkan warna:",
            list: [
              "Hijau: sukses/selesai (selalu tambahkan ikon centang atau label).",
              "Kuning: peringatan/sedang berjalan.",
              "Merah/oranye: error atau masalah accessibility.",
              "Biru: informasi atau tips.",
            ],
          },
          {
            heading: "Anatomi komponen UI inti",
            body: "Komponen yang wajib kamu kuasai dan setiap state-nya:",
            list: [
              "Button: default, hover, pressed, disabled, loading.",
              "Input: default, focus, error, success, disabled.",
              "Card: header, konten, aksi, dan padding konsisten.",
              "Navbar & Sidebar: state aktif yang jelas.",
              "Modal: overlay, fokus terkunci, tombol tutup.",
              "Empty state & Error state: ilustrasi, pesan, dan satu aksi.",
            ],
          },
        ],
        goodExample:
          "Dashboard dengan 1 warna brand biru untuk aksi utama, netral abu untuk teks dan border, hijau hanya pada badge 'selesai'. Tenang dan jelas.",
        badExample:
          "Dashboard dengan tombol merah, judul ungu, badge oranye, dan link hijau di satu layar. Mata lelah dan tidak tahu mana yang harus diklik.",
        commonMistakes: [
          "Memakai terlalu banyak warna sehingga tidak ada fokus.",
          "Mengandalkan warna saja untuk status (buruk untuk buta warna).",
          "Kontras teks terlalu rendah.",
          "Melupakan state disabled dan loading pada tombol.",
        ],
        designerMahal:
          "Designer pemula bertanya: warna apa yang bagus? Designer mahal bertanya: warna apa yang paling membantu user memahami prioritas dan mengambil keputusan?",
        miniDemo: {
          type: "buttonstate",
          title: "Coba Component State Simulator",
          description: "Lihat bagaimana button dan input berubah pada tiap state.",
        },
        practice: [
          "Buat palet warna: 1 primary, 1 secondary, 1 accent, 4 netral, 4 status.",
          "Bangun 10 komponen UI dasar dengan semua state-nya.",
          "Duplikat 5 screen aplikasi bagus dan analisis pemakaian warnanya.",
        ],
        checklist: [
          "Hanya ada satu warna aksi utama yang dominan.",
          "Kontras teks utama memenuhi minimal 4.5:1.",
          "Setiap status punya ikon/label, bukan hanya warna.",
          "Semua tombol punya state hover, pressed, dan disabled.",
        ],
        quiz: [
          {
            q: "Apa beda primary button dan secondary button?",
            options: [
              "Primary untuk aksi utama, secondary untuk aksi pendukung",
              "Primary selalu merah",
              "Secondary lebih besar",
              "Tidak ada bedanya",
            ],
            answer: 0,
            explain:
              "Primary menonjol untuk aksi paling penting; secondary lebih kalem untuk aksi alternatif.",
          },
          {
            q: "Kenapa tidak boleh mengandalkan warna saja untuk status?",
            options: [
              "Warna mahal",
              "User buta warna bisa tidak membedakannya",
              "Warna membuat file besar",
              "Tidak ada alasan",
            ],
            answer: 1,
            explain:
              "Tambahkan ikon atau teks agar status tetap terbaca oleh semua user.",
          },
        ],
      },
    ],
    checklist: [
      "Bisa menjelaskan kenapa sebuah UI terasa rapi atau berantakan.",
      "Sudah punya sistem tipografi dan spacing sendiri.",
      "Sudah membuat 10 komponen UI dasar lengkap dengan state.",
      "Sudah meredesain minimal 1 halaman buruk menjadi rapi.",
    ],
    project: {
      title: "Mini UI Kit Pribadi",
      brief:
        "Bangun satu mini UI kit berisi sistem tipografi, spacing, warna, dan komponen dasar yang bisa kamu pakai ulang di proyek berikutnya.",
      deliverables: [
        "Skala tipografi (H1-caption).",
        "Token spacing 4pt/8pt.",
        "Palet warna primary/secondary/accent/status.",
        "10 komponen UI dasar dengan seluruh state.",
      ],
    },
  },
  {
    id: "m2",
    slug: "figma-profesional",
    title: "Figma Profesional",
    month: 2,
    level: "Pemula",
    tagline: "Kerja di Figma seperti designer profesional.",
    description:
      "Figma adalah alat utama designer modern. Modul ini mengajarkan cara kerja yang rapi dan scalable: Auto Layout, components, variants, styles, variables/design tokens, prototype interaktif, dan Dev Mode untuk handoff.",
    goal: "User bisa bekerja dengan Figma seperti designer profesional.",
    learningGoals: [
      "Menyusun file Figma yang rapi dengan naming convention jelas.",
      "Menguasai Auto Layout untuk layout responsif tanpa drama.",
      "Membuat komponen dengan variants dan state lengkap.",
      "Membangun prototype interaktif dan menyiapkan handoff lewat Dev Mode.",
    ],
    illustrationType: "figma",
    estimatedHours: 16,
    skills: ["figma", "designSystem"],
    lessons: [
      {
        id: "m2l1",
        title: "Auto Layout & Components: Berhenti Menggeser Manual",
        objective:
          "Membuat komponen fleksibel yang merapikan diri sendiri dengan Auto Layout.",
        estimatedMinutes: 30,
        sections: [
          {
            heading: "Kenapa Auto Layout mengubah segalanya",
            body: "Tanpa Auto Layout, kamu menggeser setiap elemen secara manual setiap kali ada perubahan teks. Dengan Auto Layout, elemen menata diri otomatis: padding, jarak antar item, dan arah (horizontal/vertikal) diatur sekali, lalu komponen menyesuaikan ukuran konten.",
          },
          {
            heading: "Frame, grid, dan constraints",
            body: "Frame adalah wadah. Layout grid membantu menyusun kolom. Constraints menentukan bagaimana elemen menempel saat frame diubah ukurannya (pin kiri, kanan, stretch). Kombinasi ketiganya membuat desain responsif.",
          },
          {
            heading: "Components & instances",
            body: "Component adalah master; instance adalah salinan yang mengikuti master. Ubah master sekali, semua instance ikut berubah. Ini fondasi konsistensi dan kecepatan kerja.",
          },
          {
            heading: "Variants untuk state",
            body: "Variants menyatukan banyak versi komponen (default, hover, disabled) dalam satu set yang bisa di-switch lewat properti. Satu tombol bisa punya properti size, state, dan icon dalam satu tempat.",
          },
        ],
        goodExample:
          "Tombol dibuat dengan Auto Layout sehingga melebar otomatis mengikuti teks, dan punya variants untuk semua state. Mengganti teks tidak merusak layout.",
        badExample:
          "Tombol digambar manual dengan ukuran tetap. Saat teks lebih panjang, teks keluar dari kotak dan harus diperbaiki manual satu per satu.",
        commonMistakes: [
          "Tidak memakai Auto Layout sehingga semua manual.",
          "Menduplikat komponen alih-alih membuat instance.",
          "Penamaan layer berantakan (Frame 123, Rectangle 5).",
          "Membuat variant terpisah-pisah tanpa properti yang konsisten.",
        ],
        designerMahal:
          "Designer mahal membangun sekali, pakai berkali-kali. Mereka menabung waktu lewat sistem, bukan menghabiskan waktu menggeser pixel berulang.",
        miniDemo: {
          type: "none",
          title: "Latihan di Figma",
          description: "Praktik langsung di Figma menggunakan Auto Layout dan variants.",
        },
        practice: [
          "Buat button dengan 4 state: default, hover, pressed, disabled.",
          "Buat input field dengan state: default, focused, error, success.",
          "Susun ulang sebuah card memakai Auto Layout penuh.",
        ],
        checklist: [
          "Komponen merapikan diri saat konten berubah.",
          "Semua state dibuat sebagai variants, bukan file terpisah.",
          "Penamaan layer dan komponen rapi dan deskriptif.",
          "Instance dipakai, bukan duplikat manual.",
        ],
        quiz: [
          {
            q: "Apa keuntungan utama Auto Layout?",
            options: [
              "Membuat warna lebih cerah",
              "Elemen menata diri otomatis saat konten berubah",
              "Menghapus kebutuhan komponen",
              "Mempercepat ekspor gambar",
            ],
            answer: 1,
            explain: "Auto Layout membuat layout adaptif terhadap perubahan konten.",
          },
          {
            q: "Apa fungsi variants?",
            options: [
              "Menyimpan banyak state komponen dalam satu set",
              "Mengubah warna global",
              "Mengganti font",
              "Mengekspor ke kode",
            ],
            answer: 0,
            explain: "Variants menyatukan state komponen dalam properti yang bisa di-switch.",
          },
        ],
      },
      {
        id: "m2l2",
        title: "Styles, Variables & Design Tokens: Pondasi Sistem",
        objective:
          "Mengelola warna, tipografi, dan spacing sebagai token yang konsisten dan mudah diubah.",
        estimatedMinutes: 26,
        sections: [
          {
            heading: "Dari nilai mentah ke token",
            body: "Token adalah nama untuk sebuah keputusan desain. Alih-alih menulis #3461FF di banyak tempat, kamu membuat token 'color/primary'. Saat brand berubah, kamu cukup ubah satu token dan seluruh desain ikut berubah.",
          },
          {
            heading: "Styles vs Variables",
            body: "Styles cocok untuk tipografi dan efek. Variables (color, number, string, boolean) lebih fleksibel dan mendukung mode seperti light/dark. Variables menjadi dasar design token modern di Figma.",
          },
          {
            heading: "Naming convention token",
            body: "Gunakan struktur kategori/peran/varian, contoh:",
            list: [
              "color/text/primary, color/text/muted",
              "color/bg/surface, color/brand/500",
              "space/4, space/8, space/16",
              "radius/sm, radius/md, radius/lg",
            ],
          },
          {
            heading: "Dev Mode & file organization",
            body: "Dev Mode memberi developer ukuran, warna token, dan spec siap pakai. Susun file dengan halaman terpisah: Cover, Foundations, Components, Flows. Struktur rapi menghemat waktu seluruh tim.",
          },
        ],
        goodExample:
          "Seluruh warna memakai token. Mengubah brand dari biru ke ungu cukup mengganti color/brand/500 dan semua komponen ikut berubah konsisten.",
        badExample:
          "Warna hex ditulis manual di setiap komponen. Saat brand berubah, designer harus mengganti puluhan tempat dan beberapa terlewat.",
        commonMistakes: [
          "Tidak memakai token, menempel hex di mana-mana.",
          "Penamaan token tidak konsisten.",
          "Mencampur foundations dan komponen di satu halaman berantakan.",
          "Tidak memanfaatkan Dev Mode untuk handoff.",
        ],
        designerMahal:
          "Designer mahal mendesain sistem yang bisa berubah skala, bukan sekadar satu layar cantik. Token adalah cara mereka memastikan perubahan kecil tidak meledak jadi pekerjaan besar.",
        miniDemo: {
          type: "none",
          title: "Latihan token",
          description: "Bangun set token warna, spacing, dan radius di Figma Variables.",
        },
        practice: [
          "Buat mini design system: color, typography, spacing token.",
          "Konversi satu desain lama agar memakai token sepenuhnya.",
          "Buat prototype onboarding 5 screen dengan komponen ber-token.",
        ],
        checklist: [
          "Semua warna dan spacing memakai token.",
          "Naming convention token konsisten.",
          "File terbagi rapi: foundations, components, flows.",
          "Handoff siap lewat Dev Mode.",
        ],
        quiz: [
          {
            q: "Apa itu design token?",
            options: [
              "Nama untuk sebuah keputusan desain agar bisa diubah terpusat",
              "Plugin Figma berbayar",
              "Jenis font khusus",
              "Ukuran layar standar",
            ],
            answer: 0,
            explain: "Token memberi nama pada nilai desain sehingga konsisten dan mudah diubah.",
          },
          {
            q: "Kelebihan Variables dibanding Styles?",
            options: [
              "Tidak bisa dipakai untuk warna",
              "Mendukung mode seperti light/dark",
              "Hanya untuk teks",
              "Tidak bisa di-rename",
            ],
            answer: 1,
            explain: "Variables mendukung mode dan tipe data lebih beragam.",
          },
        ],
      },
    ],
    checklist: [
      "Nyaman memakai Auto Layout untuk semua komponen.",
      "Punya komponen dengan variants lengkap.",
      "Menggunakan token untuk warna, tipografi, dan spacing.",
      "Bisa menyiapkan file untuk handoff developer.",
    ],
    project: {
      title: "Starter Design System di Figma",
      brief:
        "Bangun file Figma terstruktur berisi foundations (token), komponen inti dengan variants, dan satu prototype onboarding 5 layar.",
      deliverables: [
        "Halaman Foundations berisi token.",
        "Button & Input dengan seluruh state sebagai variants.",
        "Prototype onboarding 5 layar yang bisa diklik.",
        "File rapi siap Dev Mode.",
      ],
    },
  },
  {
    id: "m3",
    slug: "ux-fundamental",
    title: "UX Fundamental",
    month: 3,
    level: "Intermediate",
    tagline: "UX bukan cuma tampilan, tapi alur dan pengalaman.",
    description:
      "Modul ini menggeser fokus dari 'cantik' ke 'masuk akal'. Kamu belajar memetakan tujuan user dan bisnis, menyusun user flow dan task flow, information architecture, wireframing, sampai menulis UX writing untuk berbagai state.",
    goal: "User paham bahwa UX bukan cuma tampilan, tapi alur dan pengalaman.",
    learningGoals: [
      "Memisahkan user goal dan business goal lalu mencari titik temunya.",
      "Membuat user flow dan task flow yang jelas.",
      "Menyusun information architecture yang mudah dinavigasi.",
      "Mendesain semua state: loading, empty, error, success.",
    ],
    illustrationType: "userflow",
    estimatedHours: 16,
    skills: ["uxThinking"],
    lessons: [
      {
        id: "m3l1",
        title: "User Flow & Task Flow: Mendesain Perjalanan, Bukan Layar",
        objective:
          "Memetakan langkah user mencapai tujuan sebelum menyentuh visual.",
        estimatedMinutes: 28,
        sections: [
          {
            heading: "User goal vs business goal",
            body: "User goal adalah apa yang ingin dicapai user (cepat checkout). Business goal adalah apa yang diinginkan bisnis (menaikkan konversi). Desain yang baik adalah jembatan: membantu user sekaligus mendukung bisnis tanpa memanipulasi.",
          },
          {
            heading: "User flow vs task flow",
            body: "User flow menggambarkan seluruh kemungkinan jalur termasuk percabangan dan error. Task flow fokus pada satu jalur ideal untuk menyelesaikan satu tugas. Mulai dari task flow agar fokus, lalu kembangkan ke user flow.",
          },
          {
            heading: "Elemen dasar flow",
            body: "Notasi sederhana yang cukup untuk komunikasi:",
            list: [
              "Start: titik masuk.",
              "Action: aksi user (klik, isi form).",
              "Decision: percabangan ya/tidak.",
              "Success: tujuan tercapai.",
              "Error: jalur gagal yang harus dirancang juga.",
            ],
          },
          {
            heading: "Information architecture",
            body: "IA adalah cara informasi dikelompokkan dan dinamai. Struktur yang baik membuat user menebak dengan benar di mana sesuatu berada. Gunakan label sesuai bahasa user, bukan bahasa internal tim.",
          },
        ],
        goodExample:
          "Flow checkout yang menampilkan jalur sukses sekaligus menangani kartu gagal dan stok habis, dengan pesan yang membantu user melanjutkan.",
        badExample:
          "Flow yang hanya menggambar 'happy path'. Saat pembayaran gagal, user terjebak tanpa petunjuk apa yang harus dilakukan.",
        commonMistakes: [
          "Langsung mendesain UI tanpa memetakan flow.",
          "Hanya merancang happy path, melupakan error.",
          "Label navigasi memakai istilah internal tim.",
          "Terlalu banyak langkah untuk satu tugas sederhana.",
        ],
        designerMahal:
          "Designer mahal merancang juga saat-saat buruk: error, koneksi putus, data kosong. Pengalaman premium terasa saat hal jelek ditangani dengan tenang.",
        miniDemo: {
          type: "userflow",
          title: "Coba User Flow Builder",
          description: "Susun node Start, Action, Decision, Success, Error secara visual.",
        },
        practice: [
          "Buat user flow aplikasi booking tiket lengkap dengan error.",
          "Buat task flow login yang ideal.",
          "Gambar information architecture tree untuk aplikasi catatan.",
        ],
        checklist: [
          "Flow punya jalur sukses dan jalur error.",
          "Setiap decision punya cabang yang jelas.",
          "Label navigasi memakai bahasa user.",
          "Jumlah langkah seminimal mungkin.",
        ],
        quiz: [
          {
            q: "Apa beda user flow dan task flow?",
            options: [
              "Sama saja",
              "User flow mencakup banyak jalur, task flow fokus satu jalur ideal",
              "Task flow lebih kompleks",
              "User flow hanya untuk mobile",
            ],
            answer: 1,
            explain: "Task flow fokus satu tugas; user flow memetakan percabangan menyeluruh.",
          },
          {
            q: "Kenapa error state penting dirancang?",
            options: [
              "Agar layar penuh",
              "Karena pengalaman dinilai saat hal buruk terjadi",
              "Supaya warna lebih banyak",
              "Tidak penting",
            ],
            answer: 1,
            explain: "Menangani error dengan baik membuat produk terasa dapat dipercaya.",
          },
        ],
      },
      {
        id: "m3l2",
        title: "Wireframe & UX Writing untuk Semua State",
        objective:
          "Membuat wireframe low-fidelity dan menulis microcopy yang membantu user di setiap state.",
        estimatedMinutes: 24,
        sections: [
          {
            heading: "Low-fi vs high-fi wireframe",
            body: "Low-fidelity fokus pada struktur dan hierarki tanpa warna/detail; cepat dibuat dan mudah diubah. High-fidelity menambah detail visual mendekati final. Mulai low-fi untuk menguji ide sebelum berinvestasi pada detail.",
          },
          {
            heading: "Empat state wajib",
            body: "Setiap layar yang menampilkan data harus merancang empat state:",
            list: [
              "Loading: skeleton atau indikator yang menenangkan.",
              "Empty: jelaskan kenapa kosong dan beri satu aksi.",
              "Error: jelaskan masalah dan cara memperbaiki.",
              "Success: konfirmasi singkat yang jelas.",
            ],
          },
          {
            heading: "UX writing yang membantu",
            body: "Microcopy bukan hiasan; ia bagian dari UX. Tulis singkat, manusiawi, dan berorientasi aksi. Hindari istilah teknis dan jangan menyalahkan user.",
          },
          {
            heading: "Form UX",
            body: "Form panjang menakutkan. Pecah jadi langkah, beri label jelas di atas field, tampilkan error inline di dekat field, dan jelaskan format yang diminta sebelum user salah.",
          },
        ],
        goodExample:
          "Empty state daftar tugas: ilustrasi ramah, teks 'Belum ada tugas. Tambahkan tugas pertamamu untuk mulai.' dan tombol 'Tambah Tugas'.",
        badExample:
          "Empty state hanya menampilkan tulisan 'No data' tanpa konteks dan tanpa aksi, membuat user bingung harus apa.",
        commonMistakes: [
          "Melompat langsung ke high-fidelity.",
          "Melupakan loading dan empty state.",
          "Pesan error menyalahkan user ('Input Anda salah').",
          "Label form ditaruh di dalam field sebagai placeholder saja.",
        ],
        designerMahal:
          "Designer mahal tahu kata-kata adalah UI. Satu kalimat empty state yang tepat bisa menyelamatkan user yang hampir menyerah.",
        miniDemo: {
          type: "wireframe",
          title: "Coba Wireframe Builder",
          description: "Susun blok wireframe sederhana lewat drag pada Playground.",
        },
        practice: [
          "Buat wireframe low-fi dashboard SaaS.",
          "Redesign form panjang menjadi multi-step yang ramah.",
          "Tulis microcopy untuk loading, empty, error, dan success.",
        ],
        checklist: [
          "Wireframe menunjukkan hierarki tanpa detail visual berlebihan.",
          "Empat state dirancang untuk layar berdata.",
          "Pesan error menjelaskan solusi, bukan menyalahkan.",
          "Label form jelas dan tidak hanya placeholder.",
        ],
        quiz: [
          {
            q: "Kapan sebaiknya memakai wireframe low-fidelity?",
            options: [
              "Saat ingin menguji struktur ide dengan cepat",
              "Saat presentasi final ke klien",
              "Saat menulis kode",
              "Tidak pernah",
            ],
            answer: 0,
            explain: "Low-fi cepat dan murah untuk menguji struktur sebelum detail.",
          },
          {
            q: "Pesan error yang baik sebaiknya?",
            options: [
              "Menyalahkan user",
              "Menjelaskan masalah dan cara memperbaikinya",
              "Memakai kode teknis",
              "Disembunyikan",
            ],
            answer: 1,
            explain: "Error yang baik memandu user keluar dari masalah dengan jelas.",
          },
        ],
      },
    ],
    checklist: [
      "Bisa memetakan user flow dan task flow.",
      "Memahami information architecture dasar.",
      "Selalu merancang loading, empty, error, success.",
      "Menulis microcopy yang membantu user.",
    ],
    project: {
      title: "UX Blueprint Aplikasi Booking",
      brief:
        "Buat blueprint UX lengkap untuk aplikasi booking: user flow, IA, wireframe low-fi, dan microcopy untuk semua state.",
      deliverables: [
        "User flow dengan jalur sukses dan error.",
        "Information architecture tree.",
        "Wireframe low-fi 5-8 layar.",
        "Kumpulan microcopy untuk setiap state.",
      ],
    },
  },
  {
    id: "m4",
    slug: "user-research",
    title: "User Research & Usability Testing",
    month: 4,
    level: "Intermediate",
    tagline: "Berhenti menebak, mulai memutuskan dari insight.",
    description:
      "Modul ini membuatmu mengambil keputusan desain berbasis bukti. Kamu belajar interview, survey, competitor analysis, persona, Jobs To Be Done, usability testing, affinity mapping, dan menyusun insight menjadi rekomendasi.",
    goal: "User berhenti menebak-nebak dan membuat keputusan desain berdasarkan insight.",
    learningGoals: [
      "Menyusun pertanyaan interview yang tidak menggiring jawaban.",
      "Menjalankan usability testing sederhana dan membaca hasilnya.",
      "Mengubah catatan mentah menjadi insight lewat affinity mapping.",
      "Memprioritaskan masalah dengan matriks impact vs effort.",
    ],
    illustrationType: "wireframe",
    estimatedHours: 15,
    skills: ["research", "uxThinking"],
    lessons: [
      {
        id: "m4l1",
        title: "Interview & Usability Testing: Mendengar Tanpa Menggiring",
        objective:
          "Menggali kebutuhan asli user lewat pertanyaan terbuka dan observasi.",
        estimatedMinutes: 26,
        sections: [
          {
            heading: "Pertanyaan yang membuka, bukan menggiring",
            body: "Pertanyaan buruk: 'Fitur ini bagus kan?' (menggiring). Pertanyaan baik: 'Coba ceritakan terakhir kali kamu melakukan X.' Tujuannya menggali cerita nyata, bukan opini sopan. Fokus pada masa lalu yang konkret, bukan masa depan yang dibayangkan.",
          },
          {
            heading: "Jobs To Be Done",
            body: "JTBD melihat produk sebagai 'dipekerjakan' user untuk menyelesaikan suatu pekerjaan. Bukan 'user ingin bor', tapi 'user ingin lubang di dinding'. Memahami job sebenarnya membuka solusi yang lebih tepat.",
          },
          {
            heading: "Usability testing sederhana",
            body: "Beri user tugas nyata lalu amati. Aturan emas: jangan membantu, jangan menjelaskan. Diam dan catat di mana mereka bingung. Lima user sudah cukup untuk menemukan mayoritas masalah besar.",
          },
          {
            heading: "Competitor analysis & persona",
            body: "Pelajari kompetitor untuk memahami standar dan celah, bukan untuk meniru. Persona adalah ringkasan pola user nyata (tujuan, frustrasi, konteks) agar tim punya gambaran sama, bukan tokoh fiktif yang dikarang.",
          },
        ],
        goodExample:
          "Saat testing, designer diam mengamati user kebingungan menemukan tombol simpan, lalu mencatat lokasi dan kata yang dicari user.",
        badExample:
          "Saat testing, designer langsung berkata 'tombolnya di pojok kanan atas kok', sehingga masalah tersembunyi dan data jadi bias.",
        commonMistakes: [
          "Mengajukan pertanyaan yang menggiring jawaban.",
          "Membantu user saat usability testing.",
          "Membuat persona karangan tanpa data.",
          "Meniru kompetitor tanpa memahami konteks.",
        ],
        designerMahal:
          "Designer mahal jatuh cinta pada masalah, bukan pada solusinya. Mereka rela idenya salah demi menemukan kebenaran tentang user.",
        miniDemo: {
          type: "none",
          title: "Simulasi interview",
          description: "Latih 10 pertanyaan interview dan uji ke 5 orang di sekitarmu.",
        },
        practice: [
          "Tulis 10 pertanyaan interview terbuka.",
          "Simulasikan interview ke 5 user.",
          "Jalankan usability test 1 tugas ke 3 orang.",
        ],
        checklist: [
          "Pertanyaan terbuka dan tidak menggiring.",
          "Saat testing, kamu diam dan mengamati.",
          "Persona dibangun dari data, bukan karangan.",
          "Mendapat minimal 3 temuan nyata.",
        ],
        quiz: [
          {
            q: "Ciri pertanyaan interview yang baik?",
            options: [
              "Menggiring ke jawaban yang diinginkan",
              "Terbuka dan menggali cerita masa lalu yang konkret",
              "Hanya bisa dijawab ya/tidak",
              "Menanyakan opini soal fitur",
            ],
            answer: 1,
            explain: "Pertanyaan terbuka tentang pengalaman nyata memberi data yang jujur.",
          },
          {
            q: "Aturan emas usability testing?",
            options: [
              "Bantu user agar cepat selesai",
              "Jangan membantu, amati di mana user bingung",
              "Jelaskan setiap layar",
              "Minta user memuji desain",
            ],
            answer: 1,
            explain: "Membantu user merusak data; observasi diam mengungkap masalah asli.",
          },
        ],
      },
      {
        id: "m4l2",
        title: "Synthesis: Mengubah Catatan Menjadi Keputusan",
        objective:
          "Menyaring data mentah menjadi insight dan prioritas yang bisa ditindaklanjuti.",
        estimatedMinutes: 22,
        sections: [
          {
            heading: "Affinity mapping",
            body: "Tulis setiap temuan di satu sticky note, lalu kelompokkan yang mirip. Pola yang muncul dari pengelompokan inilah insight. Proses ini mengubah tumpukan catatan menjadi tema yang jelas.",
          },
          {
            heading: "Pain point mapping",
            body: "Petakan titik frustrasi di sepanjang perjalanan user. Tandai di mana user paling sering tersendat. Titik dengan frustrasi tertinggi dan frekuensi terbanyak adalah kandidat utama untuk diperbaiki.",
          },
          {
            heading: "Insight vs observasi",
            body: "Observasi: 'User mengklik 3 kali sebelum menemukan menu.' Insight: 'User mengharapkan menu di lokasi berbeda karena pengalaman dari aplikasi lain.' Insight menjelaskan kenapa, bukan sekadar apa.",
          },
          {
            heading: "Prioritization matrix",
            body: "Susun masalah pada sumbu impact (dampak ke user/bisnis) dan effort (usaha). Kerjakan dulu impact tinggi effort rendah. Matriks ini menjaga tim fokus pada yang paling berharga.",
          },
        ],
        goodExample:
          "Laporan insight singkat: 3 temuan utama, masing-masing dengan bukti kutipan user dan satu rekomendasi konkret.",
        badExample:
          "Laporan berisi 40 halaman catatan mentah tanpa kesimpulan, sehingga tim tidak tahu harus mengubah apa.",
        commonMistakes: [
          "Menyajikan data mentah tanpa menyaring insight.",
          "Mencampur observasi dengan kesimpulan tanpa bukti.",
          "Memprioritaskan berdasarkan selera, bukan impact/effort.",
          "Insight tidak diikuti rekomendasi konkret.",
        ],
        designerMahal:
          "Designer mahal mengubah riset menjadi keputusan. Riset yang tidak mengubah desain hanyalah arsip yang mahal.",
        miniDemo: {
          type: "none",
          title: "Latihan affinity map",
          description: "Kelompokkan temuan menjadi tema dan tarik 3 insight utama.",
        },
        practice: [
          "Buat affinity map dari hasil interviewmu.",
          "Susun pain point map perjalanan user.",
          "Buat laporan insight 1 halaman dengan rekomendasi.",
        ],
        checklist: [
          "Temuan dikelompokkan menjadi tema.",
          "Setiap insight punya bukti dan menjelaskan 'kenapa'.",
          "Masalah diprioritaskan dengan impact vs effort.",
          "Ada rekomendasi konkret yang bisa dieksekusi.",
        ],
        quiz: [
          {
            q: "Apa tujuan affinity mapping?",
            options: [
              "Memperbanyak catatan",
              "Mengelompokkan temuan agar pola/insight muncul",
              "Membuat persona fiktif",
              "Mewarnai sticky note",
            ],
            answer: 1,
            explain: "Pengelompokan temuan memunculkan tema yang menjadi insight.",
          },
          {
            q: "Masalah mana yang dikerjakan lebih dulu di matriks impact/effort?",
            options: [
              "Impact rendah, effort tinggi",
              "Impact tinggi, effort rendah",
              "Impact rendah, effort rendah",
              "Yang paling disukai designer",
            ],
            answer: 1,
            explain: "Impact tinggi dengan effort rendah memberi hasil terbaik tercepat.",
          },
        ],
      },
    ],
    checklist: [
      "Bisa menyusun dan menjalankan interview.",
      "Bisa menjalankan usability testing sederhana.",
      "Bisa mengubah temuan menjadi insight.",
      "Bisa memprioritaskan masalah dengan matriks.",
    ],
    project: {
      title: "Research Sprint Mini",
      brief:
        "Lakukan riset singkat pada satu produk: interview, usability test, affinity map, dan laporan insight dengan rekomendasi redesign.",
      deliverables: [
        "Daftar 10 pertanyaan interview.",
        "Catatan usability test 3 user.",
        "Affinity map dengan 3 insight utama.",
        "Laporan insight 1 halaman + rekomendasi.",
      ],
    },
  },
  {
    id: "m5",
    slug: "mobile-app-design",
    title: "Mobile App Design",
    month: 5,
    level: "Intermediate",
    tagline: "Desain mobile yang nyaman digenggam satu tangan.",
    description:
      "Mendesain untuk layar kecil punya aturan sendiri: thumb zone, bottom navigation, gesture, dan pola iOS vs Android. Modul ini mengajarkan cara membuat aplikasi mobile yang terasa alami dan mudah dipakai.",
    goal: "User bisa mendesain mobile app yang nyaman dipakai.",
    learningGoals: [
      "Menempatkan aksi penting dalam jangkauan ibu jari.",
      "Menyusun navigasi mobile yang jelas.",
      "Mendesain onboarding dan form mobile yang ringan.",
      "Memahami perbedaan pola iOS dan Android.",
    ],
    illustrationType: "mobile",
    estimatedHours: 16,
    skills: ["visualUI", "uxThinking"],
    lessons: [
      {
        id: "m5l1",
        title: "Thumb Zone & Navigasi: Desain untuk Satu Tangan",
        objective:
          "Menata layout mobile berdasarkan cara tangan manusia memegang ponsel.",
        estimatedMinutes: 24,
        sections: [
          {
            heading: "Thumb zone",
            body: "Mayoritas orang memakai ponsel dengan satu tangan. Area paling mudah dijangkau ibu jari ada di bawah dan tengah layar. Letakkan aksi utama di sana; bagian atas layar paling sulit dijangkau, cocok untuk info, bukan aksi sering.",
          },
          {
            heading: "Bottom navigation",
            body: "Bottom nav menaruh menu utama dalam jangkauan ibu jari. Batasi 3-5 item, beri label teks (bukan ikon saja), dan tandai state aktif dengan jelas. Hindari menyembunyikan navigasi penting di hamburger menu.",
          },
          {
            heading: "Touch target & gesture",
            body: "Ukuran target sentuh minimal nyaman sekitar 44-48px agar tidak salah tekan. Gunakan gesture umum (swipe, tap, long-press) sesuai ekspektasi, dan selalu sediakan alternatif yang terlihat untuk gesture tersembunyi.",
          },
          {
            heading: "iOS vs Android",
            body: "iOS dan Android punya pola berbeda: posisi tombol kembali, gaya navigasi, dan komponen sistem. Hormati konvensi platform agar aplikasi terasa native, bukan asing.",
          },
        ],
        goodExample:
          "Aplikasi dengan bottom nav 4 item berlabel, tombol aksi utama mengambang di kanan bawah, dan target sentuh besar yang nyaman.",
        badExample:
          "Aplikasi menaruh semua aksi penting di pojok kiri atas dan memakai ikon tanpa label, membuat user meraih dengan susah dan menebak-nebak.",
        commonMistakes: [
          "Menaruh aksi utama di area sulit dijangkau.",
          "Touch target terlalu kecil dan berdekatan.",
          "Mengandalkan ikon tanpa label.",
          "Mengabaikan konvensi platform.",
        ],
        designerMahal:
          "Designer mahal mendesain untuk tubuh manusia, bukan hanya layar. Mereka tahu kenyamanan ibu jari adalah bagian dari pengalaman.",
        miniDemo: {
          type: "none",
          title: "Peta thumb zone",
          description: "Tandai area jangkauan ibu jari pada wireframe mobilemu.",
        },
        practice: [
          "Buat mobile app 15 screen dengan bottom nav konsisten.",
          "Rancang heatmap thumb zone untuk satu layar utama.",
          "Audit 1 aplikasi: mana aksi yang sulit dijangkau.",
        ],
        checklist: [
          "Aksi utama berada di jangkauan ibu jari.",
          "Navigasi utama 3-5 item dengan label.",
          "Touch target nyaman dan tidak berdempetan.",
          "Pola sesuai konvensi platform.",
        ],
        quiz: [
          {
            q: "Di mana sebaiknya meletakkan aksi utama di mobile?",
            options: [
              "Pojok kiri atas",
              "Area bawah/tengah yang mudah dijangkau ibu jari",
              "Tersembunyi di hamburger",
              "Di luar layar",
            ],
            answer: 1,
            explain: "Area bawah-tengah paling nyaman untuk ibu jari saat satu tangan.",
          },
          {
            q: "Berapa item ideal pada bottom navigation?",
            options: ["1-2", "3-5", "6-8", "Sebanyak mungkin"],
            answer: 1,
            explain: "3-5 item menjaga navigasi jelas dan mudah disentuh.",
          },
        ],
      },
      {
        id: "m5l2",
        title: "Onboarding, Form & State pada Mobile",
        objective:
          "Membuat first impression yang mulus dan form mobile yang tidak menyiksa.",
        estimatedMinutes: 22,
        sections: [
          {
            heading: "Onboarding yang ringan",
            body: "Onboarding terbaik singkat dan menunjukkan nilai cepat. Jangan paksa user menonton 6 slide. Tunjukkan manfaat utama, biarkan user mencoba, dan minta izin (notifikasi/lokasi) saat konteksnya jelas, bukan di awal.",
          },
          {
            heading: "Form mobile",
            body: "Mengetik di mobile melelahkan. Kurangi field seminimal mungkin, gunakan tipe keyboard yang tepat (angka untuk nomor), label di atas field, dan validasi inline. Manfaatkan autofill dan pilihan cepat.",
          },
          {
            heading: "Login & register UX",
            body: "Tawarkan login sosial bila relevan, tampilkan/ sembunyikan password, dan beri pesan error yang spesifik. Jangan reset seluruh form saat satu field salah.",
          },
          {
            heading: "Microcopy & state mobile",
            body: "Ruang sempit menuntut kata yang padat dan jelas. Rancang empty state yang mengajak aksi, dan push notification yang relevan, bukan spam. Setiap state harus terasa ramah.",
          },
        ],
        goodExample:
          "Form daftar 3 field dengan keyboard sesuai tipe, validasi inline, dan tombol lihat password. Cepat dan tidak membuat frustrasi.",
        badExample:
          "Form daftar 10 field dalam satu layar, keyboard salah tipe, error baru muncul setelah submit dan mengosongkan semua isian.",
        commonMistakes: [
          "Onboarding terlalu panjang sebelum user melihat nilai.",
          "Meminta izin notifikasi di detik pertama.",
          "Form terlalu banyak field.",
          "Reset form saat terjadi error.",
        ],
        designerMahal:
          "Designer mahal menghargai energi user. Setiap field yang dihapus dan setiap ketukan yang dipangkas adalah hadiah untuk user.",
        miniDemo: {
          type: "buttonstate",
          title: "Uji state komponen",
          description: "Lihat state input default, focus, error, success di simulator.",
        },
        practice: [
          "Buat onboarding 4 screen yang menunjukkan nilai cepat.",
          "Desain form mobile yang mudah dengan validasi inline.",
          "Buat empty state dan error state untuk satu fitur.",
        ],
        checklist: [
          "Onboarding singkat dan menunjukkan nilai.",
          "Form minimal field dengan keyboard tepat.",
          "Error inline dan tidak mengosongkan form.",
          "Empty & error state dirancang ramah.",
        ],
        quiz: [
          {
            q: "Prinsip onboarding mobile yang baik?",
            options: [
              "Sepanjang mungkin agar lengkap",
              "Singkat dan cepat menunjukkan nilai",
              "Minta semua izin di awal",
              "Tanpa teks sama sekali",
            ],
            answer: 1,
            explain: "Onboarding ringan yang cepat menunjukkan manfaat lebih efektif.",
          },
          {
            q: "Cara membuat form mobile lebih mudah?",
            options: [
              "Tambah banyak field",
              "Kurangi field & pakai keyboard yang tepat",
              "Hapus semua label",
              "Validasi hanya setelah submit",
            ],
            answer: 1,
            explain: "Sedikit field, keyboard tepat, dan validasi inline mengurangi friksi.",
          },
        ],
      },
    ],
    checklist: [
      "Memahami thumb zone dan menerapkannya.",
      "Bisa merancang navigasi mobile yang jelas.",
      "Bisa membuat onboarding dan form mobile yang ringan.",
      "Merancang semua state untuk mobile.",
    ],
    project: {
      title: "Mobile App End-to-End",
      brief:
        "Desain aplikasi mobile 15 layar mencakup onboarding, navigasi utama, form, serta empty & error state.",
      deliverables: [
        "Onboarding 4 layar.",
        "Navigasi utama + 8-10 layar inti.",
        "Form mobile dengan validasi inline.",
        "Empty state & error state.",
      ],
    },
  },
  {
    id: "m6",
    slug: "responsive-web-dashboard",
    title: "Responsive Web & Dashboard",
    month: 6,
    level: "Intermediate",
    tagline: "Dari mobile sampai dashboard SaaS yang padat data.",
    description:
      "Modul ini mengajarkan berpikir dalam breakpoint dan mendesain dashboard SaaS: sidebar, data table, filter, kartu metrik, chart, sampai halaman settings dan billing yang rapi di semua ukuran layar.",
    goal: "User mampu mendesain dashboard SaaS dan responsive web.",
    learningGoals: [
      "Mendesain layout yang adaptif di mobile, tablet, dan desktop.",
      "Menyusun anatomi dashboard yang mudah dipindai.",
      "Merancang data table dan filter yang nyaman.",
      "Membuat halaman settings dan billing yang jelas.",
    ],
    illustrationType: "dashboard",
    estimatedHours: 18,
    skills: ["visualUI", "uxThinking", "designSystem"],
    lessons: [
      {
        id: "m6l1",
        title: "Breakpoint & Layout Adaptif",
        objective:
          "Merancang satu desain yang bekerja mulus dari layar kecil sampai besar.",
        estimatedMinutes: 24,
        sections: [
          {
            heading: "Berpikir mobile-first",
            body: "Mulai dari layar terkecil memaksamu memilih yang paling penting. Saat layar membesar, kamu menambah, bukan memadatkan. Pendekatan ini menghasilkan prioritas yang jelas.",
          },
          {
            heading: "Breakpoint umum",
            body: "Gunakan breakpoint yang masuk akal, bukan terlalu banyak:",
            list: [
              "Mobile: < 640px (single column).",
              "Tablet: 640-1024px (2 kolom / sidebar collapse).",
              "Desktop: > 1024px (multi kolom + sidebar).",
            ],
          },
          {
            heading: "Reflow, bukan sekadar mengecilkan",
            body: "Responsif bukan menyusutkan desktop. Elemen harus mengatur ulang (reflow): sidebar jadi bottom nav, tabel jadi kartu, kolom menumpuk. Pikirkan struktur, bukan hanya skala.",
          },
          {
            heading: "Anatomi dashboard",
            body: "Dashboard terdiri dari sidebar navigasi, top bar, kartu metrik ringkas di atas, lalu detail (tabel/chart) di bawah. Susun dari ringkasan ke detail agar user paham keadaan dalam sekejap.",
          },
        ],
        goodExample:
          "Dashboard yang di desktop punya sidebar dan 4 kartu metrik sebaris, lalu di mobile sidebar jadi drawer dan kartu menumpuk satu kolom.",
        badExample:
          "Dashboard desktop yang di mobile hanya diperkecil sehingga teks mungil dan tabel harus digeser ke samping terus-menerus.",
        commonMistakes: [
          "Menganggap responsif = mengecilkan desktop.",
          "Terlalu banyak breakpoint sehingga sulit dirawat.",
          "Tabel tidak diadaptasi untuk layar kecil.",
          "Tidak ada hierarki ringkasan ke detail.",
        ],
        designerMahal:
          "Designer mahal merancang sistem layout, bukan tiga gambar terpisah. Mereka memastikan desain bernapas di setiap ukuran layar.",
        miniDemo: {
          type: "wireframe",
          title: "Susun layout dashboard",
          description: "Coba menyusun blok dashboard di Wireframe Builder.",
        },
        practice: [
          "Desain 1 halaman di 3 ukuran: mobile, tablet, desktop.",
          "Ubah satu tabel menjadi tampilan kartu untuk mobile.",
          "Susun anatomi dashboard dari ringkasan ke detail.",
        ],
        checklist: [
          "Desain dimulai mobile-first.",
          "Elemen reflow, bukan sekadar mengecil.",
          "Tabel beradaptasi untuk layar kecil.",
          "Ada alur ringkasan menuju detail.",
        ],
        quiz: [
          {
            q: "Apa arti desain responsif yang benar?",
            options: [
              "Mengecilkan tampilan desktop",
              "Elemen mengatur ulang sesuai ukuran layar",
              "Hanya untuk mobile",
              "Mengganti warna per layar",
            ],
            answer: 1,
            explain: "Responsif berarti reflow struktur, bukan sekadar skala.",
          },
          {
            q: "Kenapa mobile-first membantu?",
            options: [
              "Memaksa memilih yang paling penting dulu",
              "Membuat desktop tidak perlu",
              "Menghapus breakpoint",
              "Mempercepat ekspor",
            ],
            answer: 0,
            explain: "Layar kecil memaksa prioritas yang jelas.",
          },
        ],
      },
      {
        id: "m6l2",
        title: "Data Table, Filter & Halaman Settings/Billing",
        objective:
          "Menyajikan data padat agar tetap mudah dibaca dan dikelola.",
        estimatedMinutes: 26,
        sections: [
          {
            heading: "Anatomi data table",
            body: "Tabel yang baik punya header jelas, alignment angka rata kanan, baris yang mudah dipindai, dan aksi per baris yang tidak ramai. Sediakan empty state dan loading skeleton untuk tabel.",
          },
          {
            heading: "Filter & search",
            body: "Filter membantu user menemukan data tanpa kewalahan. Tampilkan filter aktif sebagai chip yang bisa dihapus, sediakan search yang cepat, dan ingat: default yang baik mengurangi kebutuhan filter.",
          },
          {
            heading: "Kartu metrik & chart",
            body: "Kartu metrik menunjukkan angka kunci plus konteks (naik/turun). Chart dipilih sesuai tujuan: tren pakai garis, perbandingan pakai bar. Jangan memakai chart hanya karena terlihat keren.",
          },
          {
            heading: "Settings & billing",
            body: "Halaman settings dikelompokkan rapi dengan label jelas dan perubahan yang aman (konfirmasi untuk aksi berisiko). Billing harus transparan: paket, tanggal, dan tombol kelola yang mudah ditemukan.",
          },
        ],
        goodExample:
          "Tabel transaksi dengan filter chip aktif, angka rata kanan, dan kartu metrik di atas yang menunjukkan total beserta perubahan persen.",
        badExample:
          "Tabel tanpa header jelas, angka rata kiri, 8 tombol aksi di tiap baris, dan tidak ada cara memfilter data.",
        commonMistakes: [
          "Angka tidak rata kanan sehingga sulit dibandingkan.",
          "Terlalu banyak aksi per baris.",
          "Tidak ada empty/loading state untuk tabel.",
          "Halaman billing membingungkan dan tidak transparan.",
        ],
        designerMahal:
          "Designer mahal membuat data padat terasa ringan. Mereka tahu kejelasan lebih bernilai daripada kepadatan informasi.",
        miniDemo: {
          type: "spacing",
          title: "Rapikan spasi tabel",
          description: "Eksperimen padding baris agar tabel mudah dipindai.",
        },
        practice: [
          "Desain data table lengkap dengan filter dan empty state.",
          "Buat 3 kartu metrik dengan indikator perubahan.",
          "Rancang halaman settings dan billing yang jelas.",
        ],
        checklist: [
          "Tabel punya header jelas dan angka rata kanan.",
          "Ada filter dan search yang membantu.",
          "Tabel punya empty dan loading state.",
          "Settings dan billing rapi serta transparan.",
        ],
        quiz: [
          {
            q: "Bagaimana sebaiknya angka pada tabel di-align?",
            options: ["Rata kiri", "Rata kanan", "Rata tengah", "Acak"],
            answer: 1,
            explain: "Angka rata kanan memudahkan perbandingan nilai.",
          },
          {
            q: "Chart untuk menampilkan tren waktu sebaiknya?",
            options: ["Pie chart", "Line chart", "Tidak pakai chart", "Tabel saja"],
            answer: 1,
            explain: "Line chart paling cocok untuk menunjukkan tren sepanjang waktu.",
          },
        ],
      },
    ],
    checklist: [
      "Bisa membuat layout adaptif 3 breakpoint.",
      "Memahami anatomi dashboard.",
      "Bisa mendesain data table dan filter yang nyaman.",
      "Bisa merancang settings dan billing yang jelas.",
    ],
    project: {
      title: "Dashboard SaaS Lengkap",
      brief:
        "Desain dashboard SaaS: login, overview, data table, detail, settings, billing, plus empty/error state dan versi mobile.",
      deliverables: [
        "Login & overview.",
        "Data table + detail page.",
        "Settings & billing.",
        "Empty/error state + versi mobile.",
      ],
    },
  },
  {
    id: "m7",
    slug: "design-system",
    title: "Design System",
    month: 7,
    level: "Mahir",
    tagline: "Desain yang scalable, konsisten, dan mudah dirawat.",
    description:
      "Design system adalah satu sumber kebenaran untuk produk. Modul ini membahas token, component library, dokumentasi, governance, naming convention, dan bagaimana accessibility dibangun ke dalam sistem sejak awal.",
    goal: "User memahami cara membuat desain yang scalable.",
    learningGoals: [
      "Memahami hubungan token, komponen, dan pola.",
      "Membangun component library inti dengan variant matrix.",
      "Mendokumentasikan komponen agar tim bisa memakainya.",
      "Menyusun governance dan naming convention.",
    ],
    illustrationType: "designsystem",
    estimatedHours: 18,
    skills: ["designSystem", "visualUI", "accessibility"],
    lessons: [
      {
        id: "m7l1",
        title: "Token, Komponen, dan Variant Matrix",
        objective:
          "Membangun sistem berlapis dari token sampai komponen yang konsisten.",
        estimatedMinutes: 28,
        sections: [
          {
            heading: "Piramida design system",
            body: "Lapisan paling bawah adalah token (nilai dasar: warna, spacing, radius). Di atasnya elemen (button, input). Lebih atas lagi pola (form, card layout). Perubahan di token mengalir ke seluruh sistem.",
          },
          {
            heading: "Dari token ke komponen",
            body: "Komponen tidak menulis nilai mentah; ia merujuk token. Button memakai color/brand/500 dan space/12. Saat token berubah, komponen ikut berubah otomatis dan tetap konsisten.",
          },
          {
            heading: "Variant matrix",
            body: "Untuk tiap komponen, petakan properti dan nilainya: size (sm/md/lg), state (default/hover/disabled), tipe (primary/secondary). Matriks ini memastikan tidak ada kombinasi yang terlupa.",
          },
          {
            heading: "Komponen inti",
            body: "Mulai dari yang paling sering dipakai:",
            list: [
              "Button, Input, Select, Checkbox, Radio.",
              "Card, Modal, Toast, Dropdown, Tabs.",
              "Table, Badge, Pagination.",
            ],
          },
        ],
        goodExample:
          "Button yang seluruh nilainya merujuk token dan punya variant matrix lengkap, sehingga semua state dan ukuran konsisten di seluruh produk.",
        badExample:
          "Banyak versi button dibuat manual dengan warna berbeda-beda, sehingga tampak mirip tapi tidak pernah benar-benar sama.",
        commonMistakes: [
          "Komponen menulis nilai mentah, bukan token.",
          "Variant tidak dipetakan sehingga ada kombinasi terlupa.",
          "Membuat terlalu banyak komponen sekaligus.",
          "Tidak ada satu sumber kebenaran.",
        ],
        designerMahal:
          "Designer mahal berpikir dalam sistem, bukan layar. Mereka membangun sekali agar tim bisa bergerak cepat tanpa kehilangan konsistensi.",
        miniDemo: {
          type: "buttonstate",
          title: "Lihat variant button",
          description: "Telusuri state komponen di Component State Simulator.",
        },
        practice: [
          "Bangun token: color, typography, spacing.",
          "Buat variant matrix untuk button dan input.",
          "Bangun 8 komponen inti yang merujuk token.",
        ],
        checklist: [
          "Komponen merujuk token, bukan nilai mentah.",
          "Variant matrix lengkap untuk komponen inti.",
          "Ada satu sumber kebenaran.",
          "Penamaan komponen konsisten.",
        ],
        quiz: [
          {
            q: "Lapisan paling dasar dalam design system?",
            options: ["Komponen", "Token", "Halaman", "Animasi"],
            answer: 1,
            explain: "Token adalah nilai dasar yang menjadi fondasi seluruh sistem.",
          },
          {
            q: "Fungsi variant matrix?",
            options: [
              "Memastikan semua kombinasi properti komponen terpetakan",
              "Mengganti warna global",
              "Mengekspor kode",
              "Membuat animasi",
            ],
            answer: 0,
            explain: "Variant matrix mencegah ada state/ukuran yang terlewat.",
          },
        ],
      },
      {
        id: "m7l2",
        title: "Dokumentasi, Governance & Accessibility Sistem",
        objective:
          "Membuat design system yang hidup: terdokumentasi, terkelola, dan inklusif.",
        estimatedMinutes: 24,
        sections: [
          {
            heading: "Dokumentasi yang dipakai",
            body: "Komponen tanpa dokumentasi akan dipakai salah. Tiap komponen perlu: kapan dipakai, kapan jangan, contoh benar/salah, dan properti. Dokumentasi yang baik mengurangi pertanyaan berulang.",
          },
          {
            heading: "Governance",
            body: "Governance mengatur siapa boleh menambah/mengubah komponen dan bagaimana prosesnya. Tanpa ini, sistem cepat berantakan. Tetapkan ritme review dan kontribusi yang jelas.",
          },
          {
            heading: "Naming convention",
            body: "Penamaan yang konsisten membuat komponen mudah ditemukan. Sepakati pola (mis. Button/Primary/Large) dan patuhi di seluruh tim. Nama yang baik adalah dokumentasi mini.",
          },
          {
            heading: "Accessibility built-in",
            body: "Bangun aksesibilitas ke dalam komponen: kontras cukup, focus state jelas, label untuk screen reader, dan target sentuh memadai. Jika komponen sudah aksesibel, seluruh produk ikut terangkat.",
          },
        ],
        goodExample:
          "Halaman dokumentasi button: contoh penggunaan, do & don't, daftar properti, dan catatan aksesibilitas. Developer dan designer paham tanpa bertanya.",
        badExample:
          "Komponen tanpa dokumentasi, penamaan acak, dan tidak ada aturan kontribusi. Setiap orang membuat versinya sendiri.",
        commonMistakes: [
          "Tidak mendokumentasikan kapan komponen dipakai.",
          "Tidak ada governance sehingga sistem melebar liar.",
          "Penamaan tidak konsisten.",
          "Aksesibilitas dipikir belakangan.",
        ],
        designerMahal:
          "Designer mahal menulis dokumentasi sebagaimana ia menulis desain: untuk membantu orang lain sukses, bukan untuk pamer.",
        miniDemo: {
          type: "none",
          title: "Tulis doc komponen",
          description: "Buat halaman do & don't untuk satu komponen.",
        },
        practice: [
          "Tulis dokumentasi untuk 3 komponen inti.",
          "Tetapkan naming convention sistem.",
          "Audit aksesibilitas pada button dan input.",
        ],
        checklist: [
          "Setiap komponen terdokumentasi do & don't.",
          "Ada aturan governance dan kontribusi.",
          "Naming convention konsisten.",
          "Aksesibilitas dibangun ke dalam komponen.",
        ],
        quiz: [
          {
            q: "Kenapa dokumentasi komponen penting?",
            options: [
              "Agar terlihat profesional saja",
              "Agar komponen dipakai dengan benar dan konsisten",
              "Untuk memperbesar file",
              "Tidak penting",
            ],
            answer: 1,
            explain: "Dokumentasi mengurangi salah pakai dan menjaga konsistensi.",
          },
          {
            q: "Kapan aksesibilitas sebaiknya dipikirkan dalam design system?",
            options: [
              "Setelah produk rilis",
              "Sejak komponen dibuat",
              "Hanya jika ada komplain",
              "Tidak perlu",
            ],
            answer: 1,
            explain: "Aksesibilitas di level komponen mengangkat seluruh produk sejak awal.",
          },
        ],
      },
    ],
    checklist: [
      "Memahami piramida token-komponen-pola.",
      "Bisa membuat variant matrix.",
      "Bisa mendokumentasikan komponen.",
      "Membangun aksesibilitas ke dalam sistem.",
    ],
    project: {
      title: "Mini Design System",
      brief:
        "Bangun design system mini lengkap dengan token, komponen inti, variant matrix, dan dokumentasi do & don't.",
      deliverables: [
        "Token: color, typography, spacing.",
        "Komponen inti (button, input, select, checkbox, radio, card, modal, toast, navbar, sidebar, table).",
        "Variant matrix tiap komponen.",
        "Dokumentasi do & don't + catatan aksesibilitas.",
      ],
    },
  },
  {
    id: "m8",
    slug: "accessibility",
    title: "Accessibility & Inclusive Design",
    month: 8,
    level: "Mahir",
    tagline: "Produk yang bisa dipakai lebih banyak orang.",
    description:
      "Aksesibilitas bukan fitur tambahan, melainkan kualitas dasar. Modul ini membahas WCAG, kontras, navigasi keyboard, focus state, dasar screen reader, label form, dan desain inklusif untuk berbagai kemampuan dan konteks.",
    goal: "User bisa membuat produk yang bisa digunakan lebih banyak orang.",
    learningGoals: [
      "Memahami prinsip dasar WCAG.",
      "Memastikan kontras dan ukuran teks memadai.",
      "Mendukung navigasi keyboard dan focus state.",
      "Menulis label dan pesan error yang aksesibel.",
    ],
    illustrationType: "accessibility",
    estimatedHours: 14,
    skills: ["accessibility", "uxThinking"],
    lessons: [
      {
        id: "m8l1",
        title: "Kontras, Keyboard & Focus State",
        objective:
          "Memastikan produk bisa dilihat dan dioperasikan oleh semua orang.",
        estimatedMinutes: 24,
        sections: [
          {
            heading: "Prinsip WCAG sederhana",
            body: "WCAG bersandar pada empat prinsip: Perceivable (bisa dilihat/didengar), Operable (bisa dioperasikan), Understandable (bisa dipahami), Robust (kompatibel dengan teknologi bantu). Ingat dengan kata POUR.",
          },
          {
            heading: "Kontras & ukuran teks",
            body: "Teks normal butuh rasio kontras minimal 4.5:1, teks besar 3:1. Body minimal 14-16px agar nyaman. Jangan menaruh teks abu tipis di atas putih atau teks putih di atas warna terang.",
          },
          {
            heading: "Navigasi keyboard",
            body: "Banyak orang tidak memakai mouse. Semua aksi penting harus bisa dicapai dengan Tab dan Enter. Urutan fokus harus logis mengikuti urutan baca, dan tidak ada jebakan fokus.",
          },
          {
            heading: "Focus state",
            body: "Focus state menunjukkan elemen mana yang sedang aktif saat navigasi keyboard. Jangan pernah menghilangkan outline fokus tanpa menggantinya dengan indikator yang jelas.",
          },
        ],
        goodExample:
          "Form yang seluruh field dan tombolnya bisa dijangkau lewat Tab, dengan focus ring jelas dan kontras teks yang nyaman dibaca.",
        badExample:
          "Form dengan outline:none di semua elemen sehingga user keyboard tidak tahu posisinya, plus teks abu tipis yang sulit dibaca.",
        commonMistakes: [
          "Menghapus outline fokus tanpa pengganti.",
          "Kontras teks terlalu rendah.",
          "Aksi penting hanya bisa lewat hover/mouse.",
          "Urutan fokus tidak logis.",
        ],
        designerMahal:
          "Designer mahal tahu aksesibilitas memperbaiki pengalaman semua orang, bukan hanya minoritas. Kontras yang baik membantu semua mata di bawah matahari.",
        miniDemo: {
          type: "contrast",
          title: "Coba Color Contrast Checker",
          description: "Cek pasangan warna teks dan background lulus standar atau tidak.",
        },
        practice: [
          "Audit kontras 3 website memakai checker.",
          "Pastikan satu form bisa dioperasikan penuh dengan keyboard.",
          "Perbaiki focus state pada komponen interaktif.",
        ],
        checklist: [
          "Kontras teks utama minimal 4.5:1.",
          "Semua aksi bisa via keyboard.",
          "Focus state terlihat jelas.",
          "Urutan fokus logis.",
        ],
        quiz: [
          {
            q: "Apa kepanjangan prinsip WCAG (POUR)?",
            options: [
              "Perceivable, Operable, Understandable, Robust",
              "Pretty, Open, Useful, Rich",
              "Power, Order, Unity, Rate",
              "Print, Output, User, Read",
            ],
            answer: 0,
            explain: "POUR: Perceivable, Operable, Understandable, Robust.",
          },
          {
            q: "Rasio kontras minimal untuk teks normal?",
            options: ["2:1", "3:1", "4.5:1", "1:1"],
            answer: 2,
            explain: "Teks normal disarankan minimal 4.5:1.",
          },
        ],
      },
      {
        id: "m8l2",
        title: "Label, Error & Inclusive Design",
        objective:
          "Membuat konten yang dipahami screen reader dan beragam tingkat kemampuan.",
        estimatedMinutes: 22,
        sections: [
          {
            heading: "Label form yang benar",
            body: "Setiap field butuh label yang terlihat dan terhubung secara semantik. Placeholder bukan pengganti label karena hilang saat user mengetik. Screen reader membaca label untuk menjelaskan field.",
          },
          {
            heading: "Pesan error aksesibel",
            body: "Error harus disampaikan lewat teks, bukan hanya warna merah. Tempatkan dekat field, jelaskan masalah dan solusinya, dan pastikan bisa dibaca screen reader.",
          },
          {
            heading: "Dasar screen reader",
            body: "Screen reader membaca struktur halaman: heading, label, tombol. Gunakan HTML semantik dan tambahkan aria-label hanya bila perlu. Gambar penting butuh alt text yang deskriptif.",
          },
          {
            heading: "Inclusive design",
            body: "Desain inklusif mempertimbangkan low literacy, lansia, koneksi lambat, dan situasi sementara (tangan terluka, layar silau). Bahasa sederhana dan target sentuh besar membantu semua orang.",
          },
        ],
        goodExample:
          "Field email dengan label terlihat 'Email', error 'Email harus mengandung @' di bawah field, dan teks alt deskriptif pada ikon penting.",
        badExample:
          "Field hanya berisi placeholder 'Email' yang hilang saat diketik, error hanya berupa border merah tanpa teks penjelasan.",
        commonMistakes: [
          "Memakai placeholder sebagai satu-satunya label.",
          "Error hanya ditandai warna.",
          "Tidak ada alt text pada gambar penting.",
          "Bahasa terlalu teknis untuk low literacy.",
        ],
        designerMahal:
          "Designer mahal merancang untuk konteks terburuk: layar silau, koneksi lambat, user lelah. Jika berhasil di situ, berhasil untuk semua.",
        miniDemo: {
          type: "contrast",
          title: "Uji status warna",
          description: "Pastikan status tidak hanya bergantung pada warna.",
        },
        practice: [
          "Perbaiki form login agar aksesibel (label + error teks).",
          "Buat checklist accessibility untuk timmu.",
          "Tulis alt text untuk 5 gambar fungsional.",
        ],
        checklist: [
          "Setiap field punya label terlihat dan terhubung.",
          "Error disampaikan lewat teks, bukan warna saja.",
          "Gambar penting punya alt text.",
          "Bahasa sederhana dan inklusif.",
        ],
        quiz: [
          {
            q: "Kenapa placeholder bukan pengganti label?",
            options: [
              "Karena warnanya gelap",
              "Karena hilang saat user mengetik",
              "Karena terlalu besar",
              "Placeholder justru lebih baik",
            ],
            answer: 1,
            explain: "Placeholder hilang saat diisi, sehingga konteks field lenyap.",
          },
          {
            q: "Cara menyampaikan error yang aksesibel?",
            options: [
              "Cukup border merah",
              "Teks penjelasan dekat field + warna",
              "Hanya ikon",
              "Tidak ditampilkan",
            ],
            answer: 1,
            explain: "Teks penjelasan memastikan semua user memahami error.",
          },
        ],
      },
    ],
    checklist: [
      "Memahami prinsip WCAG (POUR).",
      "Bisa mengecek dan memperbaiki kontras.",
      "Mendukung keyboard dan focus state.",
      "Menulis label dan error yang aksesibel.",
    ],
    project: {
      title: "Accessibility Audit & Fix",
      brief:
        "Audit aksesibilitas 3 halaman, perbaiki form login, dan susun checklist accessibility yang bisa dipakai tim.",
      deliverables: [
        "Laporan audit kontras & keyboard 3 halaman.",
        "Form login yang sudah aksesibel.",
        "Color contrast checklist.",
        "Accessibility checklist tim.",
      ],
    },
  },
  {
    id: "m9",
    slug: "product-thinking",
    title: "Product Thinking & Business UX",
    month: 9,
    level: "Mahir",
    tagline: "Designer yang paham bisnis, bukan sekadar pembuat visual.",
    description:
      "Modul ini menghubungkan desain dengan metrik bisnis: funnel, activation, retention, churn, conversion, pricing UX, dan A/B testing. Kamu belajar membela keputusan desain dengan logika bisnis dan dampak terukur.",
    goal: "User menjadi designer yang paham bisnis, bukan hanya pembuat visual.",
    learningGoals: [
      "Membaca funnel dan menemukan titik bocor.",
      "Memahami activation, retention, dan churn.",
      "Mengaitkan keputusan desain dengan metrik.",
      "Memprioritaskan ide dengan impact vs effort.",
    ],
    illustrationType: "funnel",
    estimatedHours: 16,
    skills: ["productThinking", "uxThinking"],
    lessons: [
      {
        id: "m9l1",
        title: "Funnel, Activation & Retention",
        objective:
          "Memahami perjalanan user sebagai corong yang bisa diukur dan diperbaiki.",
        estimatedMinutes: 26,
        sections: [
          {
            heading: "Funnel & titik bocor",
            body: "Funnel adalah tahapan dari user datang sampai mencapai tujuan (mendaftar, membeli). Di tiap tahap ada yang berguguran. Tugas designer menemukan tahap dengan kebocoran terbesar dan memperbaikinya.",
          },
          {
            heading: "Activation",
            body: "Activation adalah momen user pertama kali merasakan nilai produk ('aha moment'). Onboarding yang baik mempercepat momen ini. Tanpa activation, akuisisi sebanyak apa pun sia-sia.",
          },
          {
            heading: "Retention & churn",
            body: "Retention mengukur user yang kembali; churn mengukur yang pergi. Produk bertahan dari retention, bukan sekadar pendaftaran baru. Desain yang membangun kebiasaan menaikkan retention.",
          },
          {
            heading: "North Star Metric",
            body: "North Star adalah satu metrik yang paling mencerminkan nilai yang diberikan ke user. Ia menyatukan tim. Keputusan desain sebaiknya bisa dikaitkan ke North Star, bukan sekadar 'terlihat lebih bagus'.",
          },
        ],
        goodExample:
          "Designer menemukan 60% user berhenti di langkah verifikasi, lalu menyederhanakannya, dan konversi naik. Keputusan jelas berbasis funnel.",
        badExample:
          "Designer mendesain ulang seluruh halaman karena 'kurang modern' tanpa tahu tahap mana yang sebenarnya bocor.",
        commonMistakes: [
          "Mengubah desain tanpa tahu titik bocor funnel.",
          "Fokus akuisisi tapi mengabaikan retention.",
          "Tidak punya metrik untuk menilai keberhasilan.",
          "Mengukur kesuksesan dari estetika saja.",
        ],
        designerMahal:
          "Designer mahal bisa menjawab: 'Desain ini membantu metrik apa?' Mereka berbicara bahasa bisnis tanpa kehilangan empati pada user.",
        miniDemo: {
          type: "userflow",
          title: "Petakan funnel",
          description: "Gunakan flow builder untuk menggambar tahapan funnel.",
        },
        practice: [
          "Analisis funnel 1 produk SaaS dan tandai titik bocor.",
          "Tentukan kandidat North Star Metric sebuah produk.",
          "Buat rekomendasi redesign onboarding untuk activation.",
        ],
        checklist: [
          "Bisa menggambar funnel produk.",
          "Memahami activation dan momen nilai.",
          "Bisa membedakan retention dan churn.",
          "Keputusan desain dikaitkan ke metrik.",
        ],
        quiz: [
          {
            q: "Apa itu activation?",
            options: [
              "Saat user pertama merasakan nilai produk",
              "Saat user menghapus akun",
              "Total pendaftar",
              "Jumlah klik iklan",
            ],
            answer: 0,
            explain: "Activation adalah momen 'aha' saat user merasakan manfaat inti.",
          },
          {
            q: "Kenapa retention penting?",
            options: [
              "Karena produk bertahan dari user yang kembali",
              "Karena warna jadi lebih bagus",
              "Karena menambah jumlah field",
              "Tidak penting",
            ],
            answer: 0,
            explain: "Pertumbuhan sehat bertumpu pada user yang terus kembali.",
          },
        ],
      },
      {
        id: "m9l2",
        title: "Pricing UX, A/B Testing & Prioritas",
        objective:
          "Mendesain keputusan komersial dan menguji ide secara terukur.",
        estimatedMinutes: 24,
        sections: [
          {
            heading: "Pricing UX",
            body: "Halaman pricing harus membuat user cepat paham paket mana yang tepat. Sorot paket rekomendasi, jelaskan nilai (bukan sekadar fitur), dan kurangi kebingungan dengan perbandingan yang jelas.",
          },
          {
            heading: "Conversion flow",
            body: "Setiap langkah menuju konversi harus mengurangi friksi dan keraguan. Tampilkan progress, kurangi kejutan biaya, dan beri jaminan (keamanan, garansi) di titik ragu.",
          },
          {
            heading: "A/B testing",
            body: "A/B testing membandingkan dua versi untuk melihat mana yang lebih baik secara data. Uji satu perubahan bermakna pada satu waktu agar hasilnya bisa ditafsirkan. Hindari menyimpulkan dari sampel terlalu kecil.",
          },
          {
            heading: "Prioritas impact vs effort & PRD",
            body: "Tidak semua ide layak dikerjakan sekarang. Gunakan matriks impact/effort untuk memilih. Product Requirement Document (PRD) merangkum masalah, tujuan, dan kriteria sukses agar tim sejalan.",
          },
        ],
        goodExample:
          "Halaman pricing dengan 3 paket, satu ditandai 'Paling Populer', perbandingan jelas, dan CTA berbeda untuk tiap kebutuhan.",
        badExample:
          "Halaman pricing dengan 6 paket tanpa rekomendasi, daftar fitur teknis panjang, dan user bingung memilih.",
        commonMistakes: [
          "Pricing penuh jargon fitur tanpa menjelaskan nilai.",
          "Menguji terlalu banyak perubahan sekaligus.",
          "Menyimpulkan A/B test dari data terlalu sedikit.",
          "Mengerjakan ide tanpa menimbang impact/effort.",
        ],
        designerMahal:
          "Designer mahal merancang keputusan, bukan sekadar tampilan. Mereka tahu cara menguji asumsi sebelum membangun besar-besaran.",
        miniDemo: {
          type: "none",
          title: "Susun before-after",
          description: "Bandingkan conversion flow sebelum dan sesudah perbaikan.",
        },
        practice: [
          "Redesign halaman pricing agar pilihan lebih jelas.",
          "Rancang 1 eksperimen A/B untuk sebuah hipotesis.",
          "Susun before-after conversion flow dengan metrik sukses.",
        ],
        checklist: [
          "Pricing menjelaskan nilai, bukan hanya fitur.",
          "Conversion flow mengurangi friksi dan keraguan.",
          "A/B test menguji satu perubahan bermakna.",
          "Ide diprioritaskan dengan impact/effort.",
        ],
        quiz: [
          {
            q: "Prinsip dasar A/B testing?",
            options: [
              "Uji banyak perubahan sekaligus",
              "Uji satu perubahan bermakna agar hasil bisa ditafsirkan",
              "Ambil kesimpulan dari 3 user",
              "Tidak perlu data",
            ],
            answer: 1,
            explain: "Satu variabel mempermudah menafsirkan penyebab perubahan hasil.",
          },
          {
            q: "Apa fungsi PRD?",
            options: [
              "Merangkum masalah, tujuan, dan kriteria sukses",
              "Menyimpan password",
              "Mengatur warna brand",
              "Mengekspor desain",
            ],
            answer: 0,
            explain: "PRD menyelaraskan tim soal apa yang dibuat dan kenapa.",
          },
        ],
      },
    ],
    checklist: [
      "Bisa membaca funnel dan menemukan kebocoran.",
      "Memahami activation, retention, churn.",
      "Bisa merancang pricing dan conversion flow.",
      "Bisa memprioritaskan ide dengan data.",
    ],
    project: {
      title: "Product Teardown & Redesign",
      brief:
        "Bedah satu produk SaaS dari sisi bisnis, temukan titik bocor, dan usulkan redesign onboarding dengan metrik sukses.",
      deliverables: [
        "Analisis funnel + titik bocor.",
        "Rekomendasi redesign onboarding.",
        "Metrik sukses yang diusulkan.",
        "Before-after conversion flow.",
      ],
    },
  },
  {
    id: "m10",
    slug: "developer-handoff",
    title: "Collaboration with Developer",
    month: 10,
    level: "Mahir",
    tagline: "Bekerja dengan developer secara profesional.",
    description:
      "Desain hebat tidak berarti jika gagal diterjemahkan ke kode. Modul ini mengajarkan handoff, anotasi spec, Dev Mode, dasar HTML/CSS/Tailwind, mindset komponen, dan cara menjelaskan desain ke developer.",
    goal: "User bisa bekerja dengan developer secara profesional.",
    learningGoals: [
      "Menyiapkan handoff yang jelas dan lengkap.",
      "Menulis anotasi perilaku responsif dan state.",
      "Memahami dasar HTML, CSS, dan Tailwind.",
      "Berpikir dalam komponen seperti developer.",
    ],
    illustrationType: "handoff",
    estimatedHours: 15,
    skills: ["handoff", "designSystem"],
    lessons: [
      {
        id: "m10l1",
        title: "Handoff & Anotasi yang Jelas",
        objective:
          "Menyerahkan desain agar developer bisa membangun tanpa banyak menebak.",
        estimatedMinutes: 24,
        sections: [
          {
            heading: "Apa yang dibutuhkan developer",
            body: "Developer butuh lebih dari gambar: ukuran, spacing, token warna, perilaku responsif, dan state. Handoff yang baik menjawab pertanyaan sebelum ditanya, sehingga implementasi lancar.",
          },
          {
            heading: "Anotasi spec",
            body: "Beri catatan pada hal yang tidak terlihat dari gambar diam:",
            list: [
              "Perilaku saat layar mengecil (apa yang reflow).",
              "State interaktif (hover, focus, disabled, loading).",
              "Aturan teks panjang (truncate atau wrap).",
              "Animasi dan durasinya bila ada.",
            ],
          },
          {
            heading: "Dev Mode",
            body: "Dev Mode menyajikan ukuran, warna token, dan aset siap pakai untuk developer. Pastikan komponen rapi dan ber-token agar nilai yang muncul bermakna, bukan angka acak.",
          },
          {
            heading: "Design QA",
            body: "Setelah developer membangun, lakukan QA: bandingkan hasil dengan desain pada spacing, warna, dan perilaku. Sampaikan temuan dengan spesifik dan ramah, fokus pada solusi.",
          },
        ],
        goodExample:
          "Handoff dashboard dengan anotasi reflow tiap breakpoint, daftar state komponen, dan token warna, sehingga developer tidak perlu menebak.",
        badExample:
          "Mengirim screenshot tunggal tanpa anotasi, lalu kecewa karena developer salah menebak perilaku responsif.",
        commonMistakes: [
          "Hanya mengirim gambar tanpa spec.",
          "Tidak menjelaskan perilaku responsif.",
          "Melewatkan state interaktif.",
          "QA yang menyalahkan, bukan menyelesaikan.",
        ],
        designerMahal:
          "Designer mahal memperlakukan developer sebagai partner, bukan tukang. Mereka berkomunikasi jelas karena tahu produk dibangun bersama.",
        miniDemo: {
          type: "none",
          title: "Buat handoff checklist",
          description: "Susun daftar hal yang harus disertakan di setiap handoff.",
        },
        practice: [
          "Buat handoff lengkap untuk 1 halaman dashboard.",
          "Tulis anotasi responsif dan state untuk 3 komponen.",
          "Susun design QA checklist.",
        ],
        checklist: [
          "Handoff mencakup ukuran, token, dan perilaku.",
          "Anotasi responsif dan state lengkap.",
          "Komponen rapi dan ber-token untuk Dev Mode.",
          "Punya design QA checklist.",
        ],
        quiz: [
          {
            q: "Apa yang harus disertakan dalam handoff selain gambar?",
            options: [
              "Hanya warna",
              "Spacing, token, perilaku responsif, dan state",
              "Tidak ada",
              "Nama file saja",
            ],
            answer: 1,
            explain: "Developer butuh spec perilaku dan nilai, bukan sekadar visual diam.",
          },
          {
            q: "Tujuan design QA?",
            options: [
              "Menyalahkan developer",
              "Memastikan hasil build sesuai desain",
              "Membuat ulang desain",
              "Menambah fitur",
            ],
            answer: 1,
            explain: "QA membandingkan implementasi dengan desain dan menyelaraskannya.",
          },
        ],
      },
      {
        id: "m10l2",
        title: "Dasar HTML, CSS & Mindset Komponen",
        objective:
          "Memahami medium tempat desain akan hidup agar lebih realistis dan komunikatif.",
        estimatedMinutes: 24,
        sections: [
          {
            heading: "Kenapa designer perlu paham kode dasar",
            body: "Memahami HTML/CSS membuatmu mendesain hal yang mungkin dibangun, berkomunikasi dengan istilah yang sama, dan mengerti keterbatasan teknis. Kamu tidak harus jadi programmer, cukup paham mediumnya.",
          },
          {
            heading: "HTML & CSS secukupnya",
            body: "HTML adalah struktur (heading, paragraf, tombol, input). CSS mengatur tampilan (warna, spacing, layout dengan flexbox/grid). Mengenal keduanya membantumu berpikir dalam blok yang nyata.",
          },
          {
            heading: "Tailwind & token",
            body: "Tailwind memakai utilitas yang mirip token desain (p-4, text-lg, gap-2). Memahami pola ini mempermudah handoff karena bahasa desain dan kode menjadi dekat.",
          },
          {
            heading: "Component mindset & constraint",
            body: "Developer berpikir dalam komponen reusable, bukan halaman utuh. Mendesain dengan mindset yang sama (komponen + state + props) membuat desainmu lebih mudah diimplementasikan dan dirawat.",
          },
        ],
        goodExample:
          "Designer menjelaskan kartu sebagai komponen dengan props (judul, status, aksi) dan state, sehingga developer langsung paham strukturnya.",
        badExample:
          "Designer mendesain 20 kartu unik tanpa pola, memaksa developer membuat 20 implementasi terpisah.",
        commonMistakes: [
          "Mendesain hal yang sulit/mahal dibangun tanpa sadar.",
          "Tidak berpikir dalam komponen reusable.",
          "Mengabaikan keterbatasan teknis.",
          "Memakai istilah berbeda dari developer.",
        ],
        designerMahal:
          "Designer mahal memahami medium tempat karyanya hidup. Mereka mendesain untuk dibangun, bukan hanya untuk dipajang.",
        miniDemo: {
          type: "buttonstate",
          title: "Lihat komponen & state",
          description: "Perhatikan bagaimana satu komponen punya banyak state.",
        },
        practice: [
          "Buat component documentation untuk 1 komponen (props + state).",
          "Pelajari dan tiru 1 layout sederhana dengan HTML/CSS dasar.",
          "Petakan 1 halaman menjadi daftar komponen reusable.",
        ],
        checklist: [
          "Memahami struktur HTML dan dasar CSS.",
          "Mengenali pola utilitas seperti Tailwind.",
          "Berpikir dalam komponen + state + props.",
          "Mempertimbangkan keterbatasan teknis.",
        ],
        quiz: [
          {
            q: "Kenapa designer perlu paham HTML/CSS dasar?",
            options: [
              "Agar bisa menggantikan developer",
              "Agar mendesain hal yang realistis dan berkomunikasi lebih baik",
              "Agar tidak perlu Figma",
              "Tidak perlu",
            ],
            answer: 1,
            explain: "Paham medium membuat desain lebih mungkin dibangun dan komunikasi lancar.",
          },
          {
            q: "Apa inti component mindset?",
            options: [
              "Mendesain tiap halaman unik",
              "Berpikir dalam komponen reusable dengan state",
              "Menghindari komponen",
              "Hanya memakai gambar",
            ],
            answer: 1,
            explain: "Komponen reusable memudahkan implementasi dan konsistensi.",
          },
        ],
      },
    ],
    checklist: [
      "Bisa menyiapkan handoff lengkap.",
      "Bisa menulis anotasi responsif dan state.",
      "Memahami dasar HTML/CSS/Tailwind.",
      "Berpikir dalam komponen reusable.",
    ],
    project: {
      title: "Handoff Package Profesional",
      brief:
        "Siapkan paket handoff untuk satu halaman dashboard: anotasi, dokumentasi komponen, dan QA checklist.",
      deliverables: [
        "Handoff 1 halaman dengan anotasi.",
        "Anotasi perilaku responsif + state.",
        "Component documentation.",
        "Design QA checklist.",
      ],
    },
  },
  {
    id: "m11",
    slug: "ai-product-design",
    title: "AI Product Design",
    month: 11,
    level: "Mahir",
    tagline: "Produk AI yang jelas, aman, dan tidak membingungkan.",
    description:
      "Mendesain untuk AI berbeda: hasilnya tidak pasti dan butuh kepercayaan. Modul ini membahas human-AI interaction, prompt UX, explainability, trust, privacy, error recovery, regenerate, feedback loop, dan AI loading state.",
    goal: "User bisa mendesain produk AI yang jelas, aman, dan tidak membingungkan.",
    learningGoals: [
      "Mendesain interaksi manusia-AI yang jelas.",
      "Membuat prompt input dan hasil yang mudah dipahami.",
      "Membangun trust lewat explainability dan privacy.",
      "Menangani error, regenerate, dan feedback dengan baik.",
    ],
    illustrationType: "ai",
    estimatedHours: 15,
    skills: ["productThinking", "uxThinking", "visualUI"],
    lessons: [
      {
        id: "m11l1",
        title: "Prompt UX, Loading & Hasil AI",
        objective:
          "Mendesain alur dari input ke hasil AI yang terasa terkendali.",
        estimatedMinutes: 26,
        sections: [
          {
            heading: "Human-AI interaction",
            body: "AI bersifat probabilistik: hasilnya bisa berbeda dan kadang salah. Desain harus mengkomunikasikan ini dengan jujur, memberi user kendali untuk mengoreksi, dan tidak menampilkan AI seolah selalu benar.",
          },
          {
            heading: "Prompt UX",
            body: "Input prompt sebaiknya membantu user memulai: contoh prompt, placeholder yang mengarahkan, dan saran. Banyak user bingung 'harus menulis apa', jadi turunkan hambatan halaman kosong.",
          },
          {
            heading: "Loading state AI",
            body: "Proses AI bisa lama. Tampilkan progress yang menenangkan, jelaskan AI sedang bekerja, dan bila mungkin streaming hasil bertahap agar terasa cepat dan hidup.",
          },
          {
            heading: "Menampilkan & mengedit hasil",
            body: "Hasil AI harus mudah dibaca, bisa diedit, disalin, dan disimpan. Beri user kendali penuh: hasil adalah titik awal, bukan keputusan final yang dipaksakan.",
          },
        ],
        goodExample:
          "Asisten AI dengan contoh prompt, loading streaming, hasil yang bisa diedit, tombol regenerate, dan catatan kecil bahwa hasil bisa keliru.",
        badExample:
          "Asisten AI dengan input kosong tanpa panduan, loading tanpa kabar, dan hasil yang tidak bisa diedit seolah pasti benar.",
        commonMistakes: [
          "Menyajikan AI seolah selalu benar.",
          "Input kosong tanpa panduan prompt.",
          "Loading tanpa umpan balik.",
          "Hasil tidak bisa diedit atau dikoreksi.",
        ],
        designerMahal:
          "Designer mahal mendesain untuk ketidakpastian. Mereka memberi user kendali dan kejujuran, bukan ilusi kesempurnaan AI.",
        miniDemo: {
          type: "none",
          title: "Rancang AI flow",
          description: "Petakan input, loading, hasil, edit, dan regenerate.",
        },
        practice: [
          "Desain prompt input dengan contoh dan placeholder mengarahkan.",
          "Rancang loading state AI yang menenangkan.",
          "Buat tampilan hasil yang bisa diedit dan disalin.",
        ],
        checklist: [
          "AI tidak ditampilkan seolah selalu benar.",
          "Prompt input membantu user memulai.",
          "Loading memberi umpan balik jelas.",
          "Hasil bisa diedit dan dikoreksi.",
        ],
        quiz: [
          {
            q: "Kenapa desain AI harus jujur soal ketidakpastian?",
            options: [
              "Agar terlihat canggih",
              "Karena hasil AI bisa salah dan user butuh kendali",
              "Agar loading lebih cepat",
              "Tidak perlu",
            ],
            answer: 1,
            explain: "Kejujuran membangun trust dan mencegah user tersesat oleh hasil keliru.",
          },
          {
            q: "Cara menurunkan hambatan 'halaman kosong' pada prompt?",
            options: [
              "Biarkan kosong total",
              "Beri contoh prompt dan placeholder mengarahkan",
              "Sembunyikan input",
              "Larang mengetik",
            ],
            answer: 1,
            explain: "Contoh dan placeholder membantu user tahu harus menulis apa.",
          },
        ],
      },
      {
        id: "m11l2",
        title: "Trust, Privacy, Error Recovery & Feedback",
        objective:
          "Membangun kepercayaan jangka panjang pada produk AI.",
        estimatedMinutes: 24,
        sections: [
          {
            heading: "Explainability & confidence",
            body: "Saat memungkinkan, jelaskan kenapa AI memberi hasil tertentu atau tunjukkan sumber. Indikator keyakinan (confidence) membantu user menilai seberapa jauh hasil bisa dipercaya.",
          },
          {
            heading: "Privacy UX",
            body: "User berhak tahu data apa yang dipakai dan bagaimana. Sampaikan privacy notice dengan bahasa jelas di saat yang relevan, dan beri kontrol (hapus, opt-out). Transparansi membangun trust.",
          },
          {
            heading: "Error recovery & regenerate",
            body: "Saat AI gagal atau hasil kurang tepat, beri jalan keluar: regenerate, edit, atau coba prompt lain. Pesan error harus tenang dan menawarkan langkah berikutnya, bukan jalan buntu.",
          },
          {
            heading: "Feedback loop",
            body: "Tombol 'membantu / tidak membantu' memberi user suara dan membantu produk membaik. Buat ringan dan tidak mengganggu, lalu tunjukkan bahwa masukan diterima.",
          },
        ],
        goodExample:
          "Hasil AI dengan tombol helpful/not helpful, opsi regenerate, sumber rujukan, dan privacy notice singkat yang jelas.",
        badExample:
          "Hasil AI tanpa cara memberi masukan, tanpa info sumber, dan privacy notice penuh jargon hukum yang tak terbaca.",
        commonMistakes: [
          "Tidak ada jalan keluar saat hasil buruk.",
          "Privacy notice penuh jargon.",
          "Tidak ada feedback loop.",
          "Menyembunyikan keterbatasan AI.",
        ],
        designerMahal:
          "Designer mahal tahu trust dibangun pelan dan hancur cepat. Mereka melindungi kepercayaan user lewat transparansi dan kendali.",
        miniDemo: {
          type: "none",
          title: "Rancang feedback UX",
          description: "Desain pola helpful/not helpful dan regenerate.",
        },
        practice: [
          "Tambah explainability/sumber pada hasil AI.",
          "Tulis privacy notice singkat dan jelas.",
          "Desain error recovery dan feedback helpful/not helpful.",
        ],
        checklist: [
          "Ada explainability atau confidence bila relevan.",
          "Privacy disampaikan jelas dengan kontrol.",
          "Selalu ada jalan keluar dari hasil buruk.",
          "Ada feedback loop yang ringan.",
        ],
        quiz: [
          {
            q: "Apa fungsi indikator confidence pada hasil AI?",
            options: [
              "Mempercantik tampilan",
              "Membantu user menilai seberapa dipercaya hasilnya",
              "Mempercepat loading",
              "Menghapus data",
            ],
            answer: 1,
            explain: "Confidence membantu user memutuskan seberapa mengandalkan hasil.",
          },
          {
            q: "Sikap desain yang tepat saat AI gagal?",
            options: [
              "Tampilkan jalan buntu",
              "Beri jalan keluar: regenerate/edit/coba lagi",
              "Sembunyikan error",
              "Salahkan user",
            ],
            answer: 1,
            explain: "Error recovery menjaga user tetap bisa melanjutkan.",
          },
        ],
      },
    ],
    checklist: [
      "Bisa mendesain prompt UX yang membantu.",
      "Merancang loading dan hasil AI yang terkendali.",
      "Membangun trust lewat transparansi dan privacy.",
      "Menangani error, regenerate, dan feedback.",
    ],
    project: {
      title: "AI Assistant End-to-End",
      brief:
        "Desain asisten AI lengkap: prompt input, loading, hasil, edit, regenerate, save, feedback, dan privacy notice.",
      deliverables: [
        "Prompt input + loading state.",
        "Tampilan hasil yang bisa diedit + regenerate.",
        "Save & feedback helpful/not helpful.",
        "Privacy notice yang jelas.",
      ],
    },
  },
  {
    id: "m12",
    slug: "portfolio-international",
    title: "Portfolio International",
    month: 12,
    level: "Mahir",
    tagline: "Portfolio yang bersaing di level internasional.",
    description:
      "Portfolio bukan galeri gambar, melainkan bukti cara berpikirmu. Modul penutup ini mengajarkan struktur case study yang kuat, storytelling, cara presentasi, dan kesalahan portfolio junior yang harus dihindari.",
    goal: "User punya portfolio yang bisa bersaing di level internasional.",
    learningGoals: [
      "Menyusun case study dengan alur problem ke result.",
      "Menulis narasi yang menunjukkan proses berpikir.",
      "Menyiapkan presentasi portfolio untuk interview.",
      "Menghindari kesalahan umum portfolio junior.",
    ],
    illustrationType: "portfolio",
    estimatedHours: 20,
    skills: ["portfolio", "uxThinking", "productThinking"],
    lessons: [
      {
        id: "m12l1",
        title: "Struktur Case Study yang Meyakinkan",
        objective:
          "Menyusun studi kasus yang menunjukkan proses, bukan hanya hasil akhir.",
        estimatedMinutes: 30,
        sections: [
          {
            heading: "Portfolio bukan galeri",
            body: "Hiring manager tidak mencari gambar cantik, melainkan bukti cara berpikir: bagaimana kamu memahami masalah, mengambil keputusan, dan mengukur hasil. Proses lebih meyakinkan daripada mockup mengilap.",
          },
          {
            heading: "Anatomi case study",
            body: "Struktur yang kuat mengalir logis:",
            list: [
              "Problem & target user: apa masalahnya dan untuk siapa.",
              "Research & insight: temuan yang mengarahkan keputusan.",
              "User flow & wireframe: bagaimana solusi disusun.",
              "UI final & design system: hasil visual yang konsisten.",
              "Prototype & usability testing: bukti diuji ke user.",
              "Iteration: apa yang berubah setelah pengujian.",
              "Result & learning: dampak dan pelajaran.",
            ],
          },
          {
            heading: "Storytelling arc",
            body: "Case study terbaik terasa seperti cerita: ada konflik (masalah), perjuangan (proses dan keputusan sulit), dan resolusi (hasil). Tunjukkan juga keputusan yang gagal dan kenapa kamu mengubah arah.",
          },
          {
            heading: "Menulis dengan jujur",
            body: "Tulis kontribusimu dengan jujur, terutama untuk proyek tim. Gunakan angka bila ada, tapi jangan mengarang metrik. Kejujuran dan refleksi membuatmu terlihat matang.",
          },
        ],
        goodExample:
          "Case study yang menjelaskan masalah, menunjukkan satu insight kunci yang mengubah arah desain, lalu hasil dengan refleksi pelajaran yang jujur.",
        badExample:
          "Case study yang langsung memamerkan 30 mockup tanpa konteks masalah, keputusan, atau hasil.",
        commonMistakes: [
          "Hanya menampilkan hasil akhir tanpa proses.",
          "Tidak menjelaskan masalah dan target user.",
          "Mengarang metrik yang tidak nyata.",
          "Terlalu panjang tanpa poin yang jelas.",
        ],
        designerMahal:
          "Designer mahal menjual cara berpikir, bukan sekadar gambar. Mereka tahu satu case study mendalam mengalahkan sepuluh mockup dangkal.",
        miniDemo: {
          type: "none",
          title: "Pakai Portfolio Guide",
          description: "Ikuti template case study di halaman Portfolio Builder.",
        },
        practice: [
          "Susun outline 1 case study dengan struktur lengkap.",
          "Tulis problem statement dan satu insight kunci.",
          "Tulis bagian result dan learning secara jujur.",
        ],
        checklist: [
          "Ada problem statement dan target user.",
          "Proses dan keputusan terlihat, bukan hanya hasil.",
          "Ada bukti pengujian dan iterasi.",
          "Result dan learning ditulis jujur.",
        ],
        quiz: [
          {
            q: "Apa yang paling dicari hiring manager di portfolio?",
            options: [
              "Jumlah mockup",
              "Bukti cara berpikir dan pengambilan keputusan",
              "Warna paling trendi",
              "Animasi terbanyak",
            ],
            answer: 1,
            explain: "Proses berpikir lebih meyakinkan daripada sekadar visual akhir.",
          },
          {
            q: "Kesalahan umum portfolio junior?",
            options: [
              "Menjelaskan proses",
              "Hanya menampilkan hasil tanpa konteks masalah",
              "Menulis learning",
              "Menyertakan riset",
            ],
            answer: 1,
            explain: "Tanpa konteks masalah dan proses, hasil kehilangan makna.",
          },
        ],
      },
      {
        id: "m12l2",
        title: "Presentasi Portfolio & Persiapan Interview",
        objective:
          "Menyampaikan karya secara percaya diri dan terstruktur saat interview.",
        estimatedMinutes: 26,
        sections: [
          {
            heading: "Portfolio homepage",
            body: "Homepage portfolio harus cepat menjawab: siapa kamu, fokusmu, dan 3 karya terbaik. Jangan menumpuk semua proyek; kurasi yang paling kuat dan relevan dengan peran yang dituju.",
          },
          {
            heading: "Presentation deck",
            body: "Untuk interview, siapkan deck yang menuntun cerita tiap case study dalam 5-10 menit: masalah, proses, keputusan kunci, hasil. Latih agar mengalir tanpa membaca slide.",
          },
          {
            heading: "Menjawab pertanyaan",
            body: "Pewawancara akan menggali 'kenapa'. Siapkan alasan di balik tiap keputusan, trade-off yang kamu pertimbangkan, dan apa yang akan kamu ubah. Mengakui keterbatasan menunjukkan kedewasaan.",
          },
          {
            heading: "Checklist hiring manager",
            body: "Sebelum mengirim, cek dari sudut pandang penilai:",
            list: [
              "Apakah masalah dan peranku jelas?",
              "Apakah proses dan keputusan terlihat?",
              "Apakah ada bukti dampak/hasil?",
              "Apakah mudah dibaca dan tidak bertele-tele?",
            ],
          },
        ],
        goodExample:
          "Presentasi 7 menit yang mengalir dari masalah ke hasil, dengan jawaban tegas saat ditanya kenapa memilih solusi tertentu.",
        badExample:
          "Presentasi yang membaca tiap slide kata per kata, tanpa bisa menjelaskan alasan di balik keputusan desain.",
        commonMistakes: [
          "Menampilkan terlalu banyak proyek tanpa kurasi.",
          "Membaca slide alih-alih bercerita.",
          "Tidak bisa menjelaskan alasan keputusan.",
          "Mengabaikan sudut pandang penilai.",
        ],
        designerMahal:
          "Designer mahal mempresentasikan keputusan dengan percaya diri dan rendah hati sekaligus. Mereka memimpin cerita, bukan dipimpin slide.",
        miniDemo: {
          type: "none",
          title: "Latih presentasi",
          description: "Presentasikan satu case study dalam 7 menit tanpa membaca slide.",
        },
        practice: [
          "Buat portfolio homepage sederhana dengan 3 karya.",
          "Susun 1 presentation deck untuk interview.",
          "Latih menjawab 'kenapa' untuk 5 keputusan desainmu.",
        ],
        checklist: [
          "Homepage menampilkan 3 karya terkurasi.",
          "Punya deck yang mengalir per case study.",
          "Bisa menjelaskan alasan tiap keputusan.",
          "Sudah dicek dari sudut pandang penilai.",
        ],
        quiz: [
          {
            q: "Berapa karya idealnya disorot di homepage portfolio?",
            options: ["Semua proyek", "3 karya terbaik terkurasi", "1 saja", "Minimal 20"],
            answer: 1,
            explain: "Kurasi 3 karya kuat lebih berdampak daripada menumpuk semua.",
          },
          {
            q: "Apa yang paling sering digali pewawancara?",
            options: [
              "Warna favorit",
              "Alasan ('kenapa') di balik keputusan desain",
              "Jumlah jam kerja",
              "Merek laptop",
            ],
            answer: 1,
            explain: "Pewawancara ingin memahami proses berpikir di balik keputusanmu.",
          },
        ],
      },
    ],
    checklist: [
      "Bisa menyusun case study lengkap.",
      "Bisa menulis narasi proses yang jujur.",
      "Punya portfolio homepage terkurasi.",
      "Siap mempresentasikan karya saat interview.",
    ],
    project: {
      title: "Portfolio Internasional 3 Case Study",
      brief:
        "Bangun portfolio dengan 3 case study (SaaS dashboard, mobile app, conversion landing page), homepage, dan presentation deck.",
      deliverables: [
        "Case study SaaS dashboard.",
        "Case study mobile app.",
        "Case study conversion landing page.",
        "Portfolio homepage + presentation deck.",
      ],
    },
  },
];
