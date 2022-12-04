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
        <div className="flex flex-col h-screen justify-between pt-2">
          <Header />
          <div className="flex-grow mx-4 md:mx-48 2xl:mx-96">{children}</div>
            <Footer />
        </div>
      </body>
    </html>
  )
}
