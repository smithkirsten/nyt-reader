import Image from 'next/image'
import { Noticia_Text } from 'next/font/google'
import styles from './page.module.css'
import globals from 'src/app/globals.css'

const noticia = Noticia_Text({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
})

export default function Home() {
  return (
    <main className={globals.main}>
      <div>

      </div>
      <section>
        <div>
          <p>some card title</p>
          <p>and other info too i guess</p>
        </div>
      </section>
    </main>
  )
}
