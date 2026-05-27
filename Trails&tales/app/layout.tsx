import './globals.css'

export const metadata = {
  title: 'Nomad Tribe',
  description: 'Travel Community Platform'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}