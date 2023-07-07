import Sidebar from '@/components/sidebar/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })
export const metadata = {
  title: 'SPOTIFY CLONE APP',
  description: 'Spotify clone website by ossy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`p-2 md:p-4 ${font.className}`}>
        <Sidebar>
           {children}
        </Sidebar>
      </body>
    </html>
  )
}
