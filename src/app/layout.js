import localFont from '@next/font/local'
import './globals.css'

const YekanBakh = localFont({
    src: [
        {
            path: '../../public/fonts/YekanBakhFaNum-400.woff2',
            weight: '400'
        },
        {
            path: '../../public/fonts/YekanBakhFaNum-600.woff2',
            weight: '600'
        },
        {
            path: '../../public/fonts/YekanBakhFaNum-800.woff2',
            weight: '800'
        }
    ],
    variable: '--font-yekanbakh'
})

export const metadata = {
    title: 'شرکت ایرانیان پرداز جم',
    description: 'Iranian Pardaz Jam Company',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fa">
            <body className={YekanBakh.className}>{children}</body>
        </html>
    )
}