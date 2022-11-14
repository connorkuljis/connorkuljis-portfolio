import styles from './page.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h2>👋 Hi, my name is Connor</h2>
				<p>
					I study Software Engineering at Curtin University
				</p>
			</main>
		</div>
	)
}
