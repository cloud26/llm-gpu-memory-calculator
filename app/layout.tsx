import type { Metadata } from 'next'

export const metadata: Metadata = {
  other: {
    'google-adsense-account': 'ca-pub-8472112646404075',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 