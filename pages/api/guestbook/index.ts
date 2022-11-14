import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method == 'GET') {
		const entries = prisma.guestbook.findMany()

		return res.json(entries)
	}
	return res.send('Method not allowed.');
}
