'use client'
import Image from 'next/image'
import { Noticia_Text } from 'next/font/google'
import styles from './page.module.css'
import globals from 'src/app/globals.css'
import { useEffect, useState } from 'react'
import mockData from './mockdata.json'

const noticia = Noticia_Text({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
})

export default function Home() {

const [articles, setArticles] = useState([])

useEffect(() => {
  if(!articles.length){
    console.log(mockData)
    setArticles(mockData.results)
  }


}, [])

  return (
    <main className={globals.main}>
      <div>
        <h2>Top News Stories Today</h2>
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
