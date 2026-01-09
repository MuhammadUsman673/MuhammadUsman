import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: 'Muhammad Usman - Full Stack Developer & Figma Designer',
  description: 'Full Stack Developer specializing in MERN stack and Figma design. 3+ years experience building exceptional web applications.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'Figma Designer', 'React Developer', 'Web Developer'],
  authors: [{ name: 'Muhammad Usman' }],
  openGraph: {
    title: 'Muhammad Usman - Full Stack Developer',
    description: 'Full Stack Developer & Figma Designer with 3+ years experience',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body>{children}</body>
    </html>
  )
}