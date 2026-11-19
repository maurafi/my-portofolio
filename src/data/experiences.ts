// [UPDATED] Experience Data List
// Description: Mengisi data pengalaman profesional, kepemimpinan organisasi, kepanitiaan nasional,
// dan pengabdian masyarakat secara lengkap sesuai MASTER PROMPT.
// Mengintegrasikan dokumentasi foto asli dari src/assets/img/experience/ ke dalam masing-masing entitas pengalaman.
// Reason: Menyajikan Section 03 Experience & Leadership dengan bukti autentik tanpa fabrikasi data.

import type { Experience } from '@/types/experiences';

export const experiences: Experience[] = [
  {
    id: 'pt-asama-indonesia-manufacturing',
    organization: 'PT Asama Indonesia Manufacturing',
    position: 'IT Intern',
    employmentType: 'Internship',
    startDate: 'Agu 2026',
    endDate: 'Des 2026',
    location: 'Karawang, Jawa Barat',
    category: 'Professional',
    summary:
      'Mendukung operasional teknologi informasi manufaktur melalui pemutakhiran data web inventory aset, asistensi troubleshooting perangkat kerja pengguna, serta perbaikan keterlacakan dokumen Change Management.',
    responsibilities: [
      'Memutakhirkan master data aset IT pada sistem web inventory untuk menjamin akurasi pencatatan perangkat keras dan periferal pabrik.',
      'Mendukung penanganan kendala teknis (troubleshooting) hardware, software operasional, dan konektivitas workstation pengguna.',
      'Membantu peningkatan kontrol administrasi IT dan merapikan dokumentasi pencatatan mutasi maupun perbaikan perangkat.',
      'Mengembangkan fokus penelusuran hubungan (traceability) antara catatan master aset dengan dokumen Change Management perusahaan.',
    ],
    achievements: [
      'Meningkatkan konsistensi data inventaris web dengan kondisi fisik riil perangkat di area operasional.',
      'Membantu efisiensi pelacakan riwayat perbaikan dan modifikasi perangkat tanpa mengekspos kerahasiaan data internal.',
    ],
    skills: ['IT Asset Inventory', 'Change Management', 'Troubleshooting', 'System Administration', 'Data Control'],
    featured: true,
  },

  {
    id: 'pt-takagi-sari-multi-utama',
    organization: 'PT Takagi Sari Multi Utama',
    position: 'Production Engineer Intern (Kaizen)',
    employmentType: 'Internship',
    startDate: 'Jan 2024',
    endDate: 'Apr 2024',
    location: 'Cikarang, Bekasi',
    category: 'Professional',
    summary:
      'Mendukung operasional lini produksi melalui pembaruan lembar instruksi kerja (harigami), standardisasi kode barang, dan pencapaian target efisiensi waktu kerja.',
    responsibilities: [
      'Mengelola dan memutakhirkan data Harigami Part menggunakan Microsoft Excel secara terstruktur dan presisi.',
      'Melakukan validasi dan rekonsiliasi kode barang untuk menyelaraskan kebutuhan inventory, packaging service-part, dan warehouse.',
      'Mendukung koordinasi teknis bersama supervisor lapangan dan teknisi lini perakitan dalam implementasi continuous improvement.',
      'Menyusun laporan teknis berkala guna memantau ketercapaian target Kaizen produksi.',
    ],
    achievements: [
      'Meningkatkan akurasi data rancangan hingga mencapai 90% melalui penertiban kode barang terpadu.',
      'Menyelesaikan target pembaruan dokumen Harigami dalam kurun waktu 5 minggu, melampaui estimasi awal mentor selama 1–2 bulan.',
    ],
    skills: ['Continuous Improvement (Kaizen)', 'Microsoft Excel', 'Data Accuracy', 'Production Operations', 'Standard Operating Procedures'],
    featured: true,
  },

  {
    id: 'himsika-head-of-education',
    organization: 'HIMSIKA (Himpunan Mahasiswa Sistem Informasi UNSIKA)',
    position: 'Head of Education Division',
    employmentType: 'Leadership',
    startDate: 'Des 2025',
    endDate: 'Sekarang',
    location: 'Universitas Singaperbangsa Karawang',
    category: 'Leadership',
    summary:
      'Merancang dan memimpin implementasi roadmap divisi edukasi selama satu tahun kepengurusan, mencakup pembinaan prestasi akademik mahasiswa serta monitoring program pembelajaran intensif.',
    responsibilities: [
      'Menyusun roadmap strategis tahunan program kerja divisi edukasi berbasis pemetaan kebutuhan kompetensi akademik mahasiswa SI.',
      'Mengoordinasikan dan memfasilitasi program Study Club yang berfokus pada penguasaan materi teknis dan analitika data.',
      'Menginisiasi Academic Achievement Support guna membimbing dan mendampingi delegasi mahasiswa dalam kompetisi ilmiah.',
      'Melakukan pemantauan dan evaluasi berkala terhadap mutu pelaksanaan program serta tingkat kepuasan peserta.',
    ],
    achievements: [
      'Academic Achievement Support: membina dan mengarahkan 100+ mahasiswa dalam penguatan kesiapan kompetisi dan akademik.',
      'Study Club: mengelola 100+ anggota aktif dalam 16 sesi pembelajaran terstruktur pada 2 bidang konsentrasi studi.',
    ],
    skills: ['Strategic Planning', 'Educational Program Management', 'Team Leadership', 'Academic Mentoring', 'Monitoring & Evaluation'],
    images: [
      '/assets/img/experience/edufair-control.JPG',
      '/assets/img/experience/edufair-guide.JPG',
      '/assets/img/experience/edufair-penyerahan.jpg',
    ],
    featured: true,
  },

  {
    id: 'edufair-himsika-project-leader',
    organization: 'Education Fair HIMSIKA',
    position: 'Project Leader',
    employmentType: 'Committee',
    startDate: 'Mar 2025',
    endDate: 'Agu 2025',
    location: 'Karawang, Jawa Barat',
    category: 'Leadership',
    summary:
      'Memimpin komite pelaksana beranggotakan 55 orang dalam merancang dan mengeksekusi perhelatan pameran dan seminar edukasi berskala nasional yang melibatkan 1.600+ peserta.',
    responsibilities: [
      'Memimpin perencanaan strategis, alokasi anggaran, dan penjadwalan timeline eksekusi acara skala besar.',
      'Mengoordinasikan 55 panitia dari berbagai divisi teknis untuk memastikan sinergi operasional sebelum dan saat hari-H.',
      'Memfasilitasi komunikasi dan koordinasi dengan 4 pembicara seminar nasional serta 9 sponsor dan mitra eksternal.',
      'Mengambil keputusan cepat dalam mitigasi risiko dan kendala teknis lapangan demi kelancaran agenda pameran.',
    ],
    achievements: [
      'Menghimpun lebih dari 1.600 peserta dari 50+ sekolah menengah atas dan perguruan tinggi di seluruh Indonesia.',
      'Mengakuisisi 9 sponsor dan mitra strategis yang menjamin kelangsungan operasional acara secara mandiri.',
    ],
    skills: ['Event Leadership', 'Stakeholder Management', 'Cross-functional Coordination', 'Budget & Timeline Management', 'Public Speaking'],
    images: [
      '/assets/img/experience/edufair-2026.JPG',
      '/assets/img/experience/edufair-sambutan.jpg',
      '/assets/img/experience/edufait-fotbar.jpg',
      '/assets/img/experience/edufair-pameran.jpg',
    ],
    featured: true,
  },

  {
    id: 'pertamina-sobat-bumi-deb',
    organization: 'Pertamina Foundation — Sobat Bumi',
    position: 'Head of Education and Environment Division',
    employmentType: 'Volunteer',
    startDate: '2025',
    endDate: '2026',
    location: 'Desa Tanjung, Banyusari, Karawang',
    category: 'Volunteer',
    summary:
      'Memimpin program inisiatif pendidikan dan kesadaran lingkungan pada program Desa Energi Berdikari (DEB), mengintegrasikan literasi anak dengan edukasi energi baru terbarukan berbasis PLTS.',
    responsibilities: [
      'Merumuskan konsep program edukasi ekologis dan literasi masyarakat berbasis kearifan lokal pedesaan.',
      'Mengoordinasikan pelaksanaan inisiatif unggulan "Pohon Literasi" untuk meningkatkan minat baca dan kesadaran lingkungan siswa sekolah dasar.',
      'Menyelenggarakan kegiatan "Study Live Case" yang mengedukasi generasi muda mengenai mekanisme dan pemanfaatan energi surya (PLTS).',
      'Membangun komunikasi kolaboratif dengan aparatur desa, tokoh masyarakat, dan Pertamina Foundation.',
    ],
    achievements: [
      'Terpilih sebagai Awardee Beasiswa Pertamina Sobat Bumi atas dedikasi dan dampak program pengabdian masyarakat.',
      'Mendorong literasi energi terbarukan di kalangan generasi muda pedesaan secara partisipatif dan berkelanjutan.',
    ],
    skills: ['Community Empowerment', 'Environmental Sustainability', 'Renewable Energy Education', 'Program Development', 'Facilitation'],
    images: [
      '/assets/img/experience/sobi-fotbar-aksi.JPG',
      '/assets/img/experience/sobi-pohon.jpg',
      '/assets/img/experience/sobi-mc.JPG',
      '/assets/img/experience/sobi-kickpff.jpg',
      '/assets/img/experience/sobi-meetup.jpg',
    ],
    featured: true,
  },

  {
    id: 'smkn-1-cikarang-selatan-osis',
    organization: 'SMKN 1 Cikarang Selatan',
    position: 'Ketua OSIS & Pemimpin Organisasi Siswa',
    employmentType: 'Leadership',
    startDate: 'Jul 2022',
    endDate: 'Jun 2023',
    location: 'Cikarang Selatan, Bekasi',
    category: 'Leadership',
    summary:
      'Memimpin 50+ pengurus OSIS dalam 9 bidang kerja, menginisiasi kemandirian organisasi lewat BUMO, dan mengawal berbagai inisiatif kesiswaan serta kegiatan sosial keagamaan sebagai Wakil Ketua Rohis.',
    responsibilities: [
      'Mengoordinasikan perumusan program kerja tahunan 9 divisi kesiswaan serta memimpin rapat koordinasi berkala.',
      'Menginisiasi pembentukan unit Badan Usaha Milik OSIS (BUMO) untuk melatih wirausaha dan mendukung pendanaan kegiatan siswa.',
      'Bertindak sebagai Wakil Ketua Rohis dan Wakil Seksi Pendidikan Berorganisasi, Politik, dan Kepemimpinan (PBPK).',
      'Menjadi jembatan komunikasi antara aspirasi siswa, majelis perwakilan kelas (MPK), dan jajaran pimpinan sekolah.',
    ],
    achievements: [
      'Memimpin lebih dari 50 pengurus OSIS dengan tingkat keterlaksanaan program kerja kesiswaan mencapai 100%.',
      'Membangun model kemandirian finansial kegiatan siswa pertama melalui unit usaha BUMO di lingkungan sekolah.',
    ],
    skills: ['Student Leadership', 'Organizational Governance', 'Team Building', 'Public Relations', 'Financial Independence'],
    images: [
      '/assets/img/experience/osis-sambutan.jpg',
      '/assets/img/experience/osis-fotbar.jpg',
      '/assets/img/experience/osis-guide.jpg',
    ],
    featured: false,
  },

  {
    id: 'smpn-1-cikarang-selatan-kir',
    organization: 'SMP Negeri 1 Cikarang Selatan',
    position: 'Anggota OSIS, KIR & Penggerak Literasi Sekolah',
    employmentType: 'Organization',
    startDate: 'Jul 2018',
    endDate: 'Jun 2021',
    location: 'Cikarang Selatan, Bekasi',
    category: 'Education',
    summary:
      'Membangun fondasi kepemimpinan dan minat ilmiah melalui Karya Ilmiah Remaja (KIR), Gerakan Literasi Sekolah (GLS), dan partisipasi kejuaraan menulis esai.',
    responsibilities: [
      'Melakukan lebih dari 10 eksperimen sains terapan sederhana dan menyusun draf laporan penelitian remaja.',
      'Aktif menggerakkan kegiatan membaca berkala dan diskusi resensi buku dalam program Gerakan Literasi Sekolah (GLS).',
      'Mewakili sekolah dalam kompetisi penulisan esai analitis di tingkat Kabupaten Bekasi.',
    ],
    achievements: [
      'Menyusun 10+ dokumentasi eksperimen sains sederhana berbasis pemecahan masalah lingkungan sehari-hari.',
      'Meraih Juara Harapan 3 Lomba Menulis Esai tingkat Kabupaten Bekasi.',
    ],
    skills: ['Scientific Writing', 'Basic Research', 'Literacy Promotion', 'Analytical Thinking'],
    featured: false,
  },

  {
    id: 'pt-pupuk-kujang-data-entry',
    organization: 'PT Pupuk Kujang',
    position: 'Data Entry Support',
    employmentType: 'Internship',
    startDate: 'Nov 2025',
    endDate: 'Nov 2025',
    location: 'Cikampek, Karawang',
    category: 'Professional',
    summary:
      'Membantu pengumpulan, validasi, dan penginputan data operasional untuk dokumentasi administrasi industri manufaktur pupuk skala nasional.',
    responsibilities: [
      'Melakukan input data operasional ke lembar kerja administrasi dengan ketelitian dan kecepatan tinggi.',
      'Mendukung verifikasi kelengkapan arsip dokumen fisik terhadap pencatatan digital operasional.',
    ],
    skills: ['Data Entry', 'Administrative Documentation', 'Data Verification', 'Detail Oriented'],
    featured: false,
  },
];
