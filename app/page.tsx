import styles from './page.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h2>👋 Hi, my name is Connor</h2>
				<p>
					I am a Computing student - with a major in Software Engineering at Curtin University.
				</p>
				<p>
					My goal is to build software that helps people reach their potential
					and have a life full of experiences. 
				</p>
			</main>
			<footer className={styles.footer} />
		</div>
	)
}
