import './globals.css'
import { Syne } from '@next/font/google'
// import styles from './page.module.css'
import Header from './header'

const syne = Syne()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head />
			<body className={syne.className}>
        <Header />
				<div>{children}</div>
			</body>
    </html>
  )
}
