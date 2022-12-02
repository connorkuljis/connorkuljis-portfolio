import './globals.css'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from './header'
import Footer from './footer'

const syne = Inter({ weight: ['400']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
        <body className={syne.className}>
        <div className={styles.container}>
          <div className="container mx-auto">
            <Header />
            <div className={styles.wrap}>{children}</div>
          </div>
          <Footer />
        </div>
        </body>
    </html>
  )
}
