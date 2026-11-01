import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { Header } from '~/components/landing/Header'
import { Hero } from '~/components/landing/Hero'
import { LearningMethodsSection } from '~/components/landing/LearningMethodsSection'
import { ProgramsSection } from '~/components/landing/ProgramsSection'
import { ParentsSection } from '~/components/landing/ParentsSection'
import { StepsSection } from '~/components/landing/StepsSection'
import { StoriesMarqueeSection } from '~/components/landing/StoriesMarqueeSection'
import { FaqSection } from '~/components/landing/FaqSection'
import { CtaFooter } from '~/components/landing/CtaFooter'
import { MobileDrawer } from '~/components/landing/MobileDrawer'

const RegisterModal = React.lazy(() =>
  import('~/components/landing/RegisterModal').then((mod) => ({
    default: mod.RegisterModal,
  }))
)

interface LandingSearchParams {
  daftar?: string
}

const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://pinteryuks.fiyus.me'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apa bedanya Pinter Yuks dengan tempat les lain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami menerapkan 4 metode belajar terarah (Konsep Dasar, Active Recall, Deliberate Practice, dan Klinik Personal) di kelas kecil maksimal 12 siswa. Tutor mendampingi pemahaman dari akar masalah, jadwal anti-bentrok, dan kehadiran siswa terkirim otomatis ke portal orang tua di setiap sesi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Di YouTube banyak video materi gratis. Kenapa harus belajar di Pinter Yuks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Video hanya menyajikan materi satu arah tanpa umpan balik saat anak bingung di soal yang rumit. Di Pinter Yuks, tutor memancing dialog aktif (Active Recall), mengoreksi alur berpikir saat latihan, dan try out berkala menunjukkan kesiapan riil anak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ada kelas percobaan gratis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ada. Calon siswa bisa ikut konsultasi belajar dan satu kelas pertama tanpa biaya. Setelah merasakan cara tutor mengajar, baru putuskan mau lanjut atau tidak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kalau daftar satu paket, bisa ikut kelas jenjang lain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tidak. Setiap pendaftaran untuk satu jenjang (SD, SMP, SMA, atau UTBK) supaya belajarnya fokus. Di dalam paket itu, modul cetak, latihan soal online, bantuan PR, dan try out sudah termasuk. Tidak ada biaya tambahan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Materinya sampai mana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mulai dari konsep dasar kurikulum nasional, bantuan PR, persiapan ujian semester, sampai soal penalaran, TPS, dan literasi untuk masuk PTN seperti Untad, Unhas, UI, dan ITB.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ada aplikasinya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ada, berupa website yang bisa dibuka dari HP, tablet, atau laptop tanpa perlu instal. Siswa melihat jadwal dan materi. Orang tua melihat kehadiran, nilai, dan tagihan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana cara mendaftar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Klik tombol Daftar, lalu isi data anak dan nomor WhatsApp orang tua. Admin kami mengecek kursi yang tersedia dan menghubungi Anda untuk jadwal kelas pertama.',
      },
    },
  ],
}

const coursesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Course',
      position: 1,
      name: 'Program Bimbingan Belajar SD — Paham Konsep Sejak Dini',
      description: 'Fokus pada penguasaan literasi, numerasi dasar, dan pembiasaan berpikir logis di kelas kecil maksimal 12 siswa.',
      provider: {
        '@type': 'Organization',
        name: 'Pinter Yuks',
        sameAs: SITE_URL,
      },
    },
    {
      '@type': 'Course',
      position: 2,
      name: 'Program Bimbingan Belajar SMP — Pondasi Kuat Menuju SMA Unggulan',
      description: 'Pendampingan pemahaman konsep Matematika & IPA tingkat lanjut serta persiapan ujian sekolah terpadu.',
      provider: {
        '@type': 'Organization',
        name: 'Pinter Yuks',
        sameAs: SITE_URL,
      },
    },
    {
      '@type': 'Course',
      position: 3,
      name: 'Program Bimbingan Belajar SMA — Kuasai Materi & Nilai Rapor Unggul',
      description: 'Pendalaman konsep terintegrasi untuk mendongkrak capaian akademik harian dan kesiapan seleksi perguruan tinggi.',
      provider: {
        '@type': 'Organization',
        name: 'Pinter Yuks',
        sameAs: SITE_URL,
      },
    },
    {
      '@type': 'Course',
      position: 4,
      name: 'Program Intensif UTBK-SNBT — Tembus PTN Impian',
      description: 'Drilling soal penalaran TPS, literasi Bahasa Indonesia & Inggris, serta try out berkala akurat berbasis komputer.',
      provider: {
        '@type': 'Organization',
        name: 'Pinter Yuks',
        sameAs: SITE_URL,
      },
    },
  ],
}

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): LandingSearchParams => {
    return {
      daftar: typeof search.daftar === 'string' ? search.daftar : undefined,
    }
  },
  head: () => ({
    meta: [
      { property: 'og:url', content: `${SITE_URL}/` },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(faqSchema),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(coursesSchema),
      },
    ],
  }),
  component: LandingPage,
})

function LandingPage() {
  const search = Route.useSearch()
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false)
  const [selectedPackage, setSelectedPackage] = React.useState<string>('UTBK')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    if (search.daftar) {
      setSelectedPackage(search.daftar.toUpperCase())
      setIsRegisterOpen(true)
    }
  }, [search.daftar])

  const handleOpenRegister = () => {
    setIsRegisterOpen(true)
  }

  const handleSelectProgramAndRegister = (pkgCode: string) => {
    setSelectedPackage(pkgCode)
    setIsRegisterOpen(true)
  }

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Header
        onOpenRegister={handleOpenRegister}
        onToggleMobileMenu={handleToggleMobileMenu}
      />
      <main>
        <Hero
          onOpenRegister={handleOpenRegister}
          onSelectProgram={handleSelectProgramAndRegister}
        />
        <LearningMethodsSection />
        <ProgramsSection onSelectProgram={handleSelectProgramAndRegister} />
        <ParentsSection />
        <StepsSection />
        <StoriesMarqueeSection />
        <FaqSection />
      </main>
      <CtaFooter onOpenRegister={handleOpenRegister} />

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
        onOpenRegister={handleOpenRegister}
      />

      <React.Suspense fallback={null}>
        {isRegisterOpen && (
          <RegisterModal
            isOpen={isRegisterOpen}
            onClose={() => setIsRegisterOpen(false)}
            defaultPackage={selectedPackage}
          />
        )}
      </React.Suspense>
    </>
  )
}
