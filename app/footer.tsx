import styles from './page.module.css'
import React from 'react'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<a 
			  className="mx-3 font-bold hover:underline" 
				href="https://github.com/connorkuljis/connorkuljis-portfolio"
			>
				View on GitHub
			</a>
		</footer>
	)
}
