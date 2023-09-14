"use client"
import { Inter } from 'next/font/google';
import styles from './styles.module.css';
import '../styles/global.css'
import Header from '../components/Header'


const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFont.className}>
      <body className={styles.container}>
      <Header/>
        <main>{children}</main>
        </body>
    </html>
  )
}
