import styles from "./page.module.css"

export default function Footer() {
	return (
		<footer className={styles.footer}>
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
