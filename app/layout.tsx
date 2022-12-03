import './globals.css'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from './header'
import Footer from './footer'

const inter = Inter({ weight: ['400']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="h-full flex flex-col pt-2 antialiased">
          <Header />
          <div className="mx-4 md:mx-48">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
