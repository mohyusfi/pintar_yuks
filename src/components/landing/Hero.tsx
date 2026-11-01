import { ArrowRight, Brain, Clock, GraduationCap, Users } from 'lucide-react'
import { motion, type Variants } from 'motion/react'
import { fadeInUp, staggerContainer, viewportConfig } from '~/lib/motion'

interface HeroProps {
  onOpenRegister: () => void
  onSelectProgram?: (code: string) => void
}

const FACTS = [
  {
    value: '12',
    label: 'siswa paling banyak dalam satu kelas',
  },
  {
    value: '4',
    label: 'metode belajar terarah & teruji',
  },
  {
    value: 'Gratis',
    label: 'kelas pertama dan konsultasi belajar',
  },
] as const

const HERO_BADGES = [
  {
    icon: Users,
    text: 'Maks. 12 Siswa',
    posClass: 'lp-hero-badge-top-left',
  },
  {
    icon: Brain,
    text: 'Paham Konsep',
    posClass: 'lp-hero-badge-top-right',
  },
  {
    icon: Clock,
    text: 'Presensi Real-Time',
    posClass: 'lp-hero-badge-bottom-left',
  },
  {
    icon: GraduationCap,
    text: 'SD · SMP · SMA · UTBK',
    posClass: 'lp-hero-badge-bottom-right',
  },
] as const

const heroVisualVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1,
    },
  },
}

const heroBadgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 18,
      delay: 0.28 + i * 0.12,
    },
  }),
}

export function Hero({ onOpenRegister }: HeroProps) {
  return (
    <section id="beranda" className="lp-hero">
      <div className="container">
        <div className="lp-hero-grid">
          <motion.div
            className="lp-hero-main"
            variants={staggerContainer(0.08, 0.05)}
            initial={false}
            animate="visible"
          >
            <motion.h1 variants={fadeInUp} className="lp-hero-title">
              Paham dari konsep dasar, orang tua selalu <em>tahu.</em>
            </motion.h1>

            <motion.div variants={fadeInUp} className="lp-hero-actions">
              <motion.button
                type="button"
                className="btn btn-accent btn-lg"
                onClick={onOpenRegister}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Daftar sekarang <ArrowRight className="lucide" />
              </motion.button>
              <a href="#metode-belajar" className="lp-link">
                Pelajari metode kami
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lp-hero-visual-wrapper"
            variants={heroVisualVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="lp-hero-oval-float">
              <div className="lp-hero-oval-card">
                <picture>
                  <source srcSet="/assets/hero-illustration.webp" type="image/webp" />
                  <img
                    src="/assets/hero-illustration.jpg"
                    alt="Ilustrasi siswa dan tutor Pinter Yuks belajar interaktif tatap muka"
                    className="lp-hero-oval-img"
                    width={2000}
                    height={1493}
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              </div>

              {HERO_BADGES.map((badge, idx) => {
                const Icon = badge.icon
                return (
                  <motion.div
                    key={badge.text}
                    className={`lp-hero-badge ${badge.posClass}`}
                    custom={idx}
                    variants={heroBadgeVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="lp-hero-badge-inner">
                      <Icon className="lp-hero-badge-icon" aria-hidden="true" />
                      <span className="lp-hero-badge-text">{badge.text}</span>
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.ul
          className="lp-facts"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {FACTS.map((fact) => (
            <motion.li key={fact.value} variants={fadeInUp} className="lp-fact">
              <span className="lp-fact-value">{fact.value}</span>
              <span className="lp-fact-label">{fact.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
