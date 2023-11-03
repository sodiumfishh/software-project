import "./globals.css"

export const metadata = {
  title: 'Home | WeeConnect',
  description: 'Connecting people with similar interests',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}