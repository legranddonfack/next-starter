import "@styles/globals.css"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['italic', 'normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat'
})

export const metadata = {
    title: 'Next-Starter',
    description: 'Starting from here...'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
        <body>
            <div className="main">
                
            </div>
            <main className="app">
                { children }
            </main>
        </body>
    </html>
  )
}

export default RootLayout