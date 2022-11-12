import './globals.css'
import { Syne } from '@next/font/google'

const syne = Syne()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={syne.className}>{children}</body>
    </html>
  )
}
