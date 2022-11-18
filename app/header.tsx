import Link from 'next/link'
import styles from './page.module.css'

export default function Header() {
	const resumeLink = "https://connor-kuljis-resume.s3.ap-southeast-2.amazonaws.com/connor-kuljis-resume-nov-22.pdf"
	return (
		<header>
			<nav className="flex py-8 space-x-16 font-bold text-4xl">
					<Link href="/">Connor Kuljis</Link>
					<Link href="/blog">Blog</Link>
					<Link href="/guestbook">Guest Book</Link>
					<Link target="_blank" href={resumeLink}>Resume</Link>
			</nav>
		</header> 
	)
}