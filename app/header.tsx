import Link from 'next/link'

export default function Header() {
	const resumeLink = "https://connor-kuljis-resume.s3.ap-southeast-2.amazonaws.com/connor-kuljis-resume-nov-22.pdf"
	return (
		<header>
			<nav className="flex justify-center py-8 space-x-8 md:space-x-16 text-sm md:text-xl">
				<Link href="/">Home</Link>
				<Link href="blog">Blog</Link>
				<Link href="guestbook">Guest Book</Link>
				<Link target="_blank" href={resumeLink}>Resume^</Link>
			</nav>
			<div className="border-gray-300 border-t mb-4 mx-12"></div>
		</header>
	)
}
