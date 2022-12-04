import styles from "./page.module.css"

export default function Footer() {
	return (
		<footer className="w-full flex justify-center pt-12">
			<span>
				<a 
					className="mx-3 font-bold hover:underline" 
					href="https://github.com/connorkuljis/connorkuljis-portfolio"
				>
					View on GitHub
				</a>
			</span>
		</footer>
  )
}
