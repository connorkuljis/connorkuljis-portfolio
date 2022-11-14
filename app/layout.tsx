import './globals.css'
import { Syne } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const syne = Syne()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

			<body className={syne.className}>
				<header className={styles.container}>

					<nav>
						<h1>
							<Link className={styles.nav} href="/">Connor Kuljis</Link>
							<Link className={styles.nav} href="/blog">Blog</Link>
							<Link className={styles.nav} href="/guestbook">Guest Book</Link>
							<Link className={styles.nav} href="/resume">Resume</Link>
						</h1>
					</nav>

				</header>

				<div>{children}</div>

			</body>
    </html>
  )
}
