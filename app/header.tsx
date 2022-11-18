import Link from 'next/link'
import styles from './page.module.css'

export default function Header() {
	const resumeLink = "https://connor-kuljis-resume.s3.ap-southeast-2.amazonaws.com/connor-kuljis-resume-nov-22.pdf"
	return (
		<header>
			<nav className={styles.header}>
					<Link className={styles.nav} href="/">Connor Kuljis</Link>
					<Link className={styles.nav} href="/blog">Blog</Link>
					<Link className={styles.nav} href="/guestbook">Guest Book</Link>
					<Link className={styles.nav} target="_blank" href={resumeLink}>Resume</Link>
			</nav>
		</header> 
	)
}
