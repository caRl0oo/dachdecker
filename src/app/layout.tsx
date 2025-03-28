import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { siteConfig } from '@/lib/config'

// Schriftarten laden
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title.default,
    template: siteConfig.seo.title.template,
  },
  description: siteConfig.seo.metaDescription,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: siteConfig.seo.title.default,
    description: siteConfig.seo.metaDescription,
    images: siteConfig.seo.openGraph.images,
  },
  metadataBase: new URL(siteConfig.siteUrl),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {siteConfig.features.megaMenu ? (
          <Navigation />
        ) : (
          <Header />
        )}
        
        {children}
        
        <Footer />
        
        {/* Theme Switcher für Demo-Zwecke */}
        <ThemeSwitcher />
      </body>
    </html>
  )
} 