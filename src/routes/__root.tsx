import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import '../styles/globals.css'
import { ToastProvider, Toaster } from '../components/ui/toast'
import { NavigationProgressBar } from '../components/ui/navigation-progress-bar'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
  },
})

const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://pinteryuks.fiyus.me'
const googleVerification =
  (import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined) ||
  '7KTPJeFpHxtAjJ0fOu25npnh0gBm5EmC5-zUdSKnu8U'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Pinter Yuks',
  alternateName: 'Bimbel Pinter Yuks Palu',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/og-image.png`,
  image: `${SITE_URL}/assets/og-image.png`,
  description:
    'Lembaga bimbingan belajar tatap muka di Kota Palu untuk SD, SMP, SMA, dan persiapan intensif UTBK-SNBT dengan kelas kecil maksimal 12 siswa.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Palu',
    addressRegion: 'Sulawesi Tengah',
    addressCountry: 'ID',
  },
  areaServed: {
    '@type': 'City',
    name: 'Palu',
  },
  priceRange: '$$',
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#CB2957' },
      { title: 'Pinter Yuks — Lembaga Belajar SD, SMP, SMA & Intensif UTBK di Kota Palu' },
      {
        name: 'description',
        content:
          'Pendampingan belajar tatap muka di Kota Palu untuk SD, SMP, SMA, dan persiapan UTBK-SNBT. Kelas kecil maksimal 12 siswa, paham dari konsep dasar, dan kehadiran terpantau real-time.',
      },
      // Open Graph Tags
      { property: 'og:site_name', content: 'Pinter Yuks' },
      { property: 'og:locale', content: 'id_ID' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Pinter Yuks — Lembaga Belajar SD, SMP, SMA & Intensif UTBK di Kota Palu',
      },
      {
        property: 'og:description',
        content:
          'Pendampingan belajar tatap muka di Kota Palu untuk SD, SMP, SMA, dan persiapan UTBK-SNBT. Kelas kecil maksimal 12 siswa, paham dari konsep dasar, dan kehadiran terpantau real-time.',
      },
      { property: 'og:image', content: `${SITE_URL}/assets/og-image.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Pinter Yuks — Bimbingan Belajar di Kota Palu' },
      // Twitter Card Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Pinter Yuks — Lembaga Belajar SD, SMP, SMA & Intensif UTBK di Kota Palu',
      },
      {
        name: 'twitter:description',
        content:
          'Pendampingan belajar tatap muka di Kota Palu untuk SD, SMP, SMA, dan persiapan UTBK-SNBT. Kelas kecil maksimal 12 siswa, paham dari konsep dasar, dan kehadiran terpantau real-time.',
      },
      { name: 'twitter:image', content: `${SITE_URL}/assets/og-image.png` },
      // Google Search Console Verification
      ...(googleVerification
        ? [{ name: 'google-site-verification', content: googleVerification }]
        : []),
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,500..900&family=Instrument+Sans:wght@400..700&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(organizationSchema),
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isLanding = pathname === '/' || pathname.startsWith('/metode')

  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body className={isLanding ? 'landing' : 'font-sans antialiased text-[#000000] bg-[#EEEEEE]'}>
        <NavigationProgressBar />
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <Outlet />
            <Toaster />
          </ToastProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  )
}
