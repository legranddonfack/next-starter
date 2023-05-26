import "@styles/globals.css"
import { Montserrat } from "next/font/google"
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"

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
        <body className="main">
            <Navbar/>
            <main className="main-container">
                { children }
            </main>
            <Footer/>
        </body>
    </html>
  )
}

export default RootLayout