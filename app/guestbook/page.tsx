import styles from '../page.module.css'
import { guestbook, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getGuestBookItems() {
	return prisma.guestbook.findMany({
		orderBy: {
      updated_at: 'desc'
    }
	})
}

function Post({ body, created_by, created_at } : guestbook) {
	const dd = created_at.getDate()
	const mm = created_at.getMonth()
	const yy = created_at.getFullYear()

	const dateStr = dd + " " + mm + " " + yy


	return (
		<div className={styles.card}>
			<h2>{created_by}</h2>
			<p>{body}</p>
			<a>{dateStr}</a>
		</div>
		
	)

}

export default async function GuestBook() {
	const entries: guestbook[] = await getGuestBookItems()

	return (
		<div>
			{entries.map((entry) => (
				<Post key={Number(entry.id)}{...entry} />
				))}
		</div>
	)

}
