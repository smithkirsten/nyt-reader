'use client'
import Image from 'next/image'
import { Noticia_Text } from 'next/font/google'
import styles from './page.module.css'
import globals from 'src/app/globals.css'
import { useEffect, useState } from 'react'
import mockData from './mockdata.json'
import { getArticles } from '../util'
import Article from './Components/Article'

const noticia = Noticia_Text({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
})

export default function Home() {

const [articles, setArticles] = useState([])
const [filtered, setFiltered] = useState([])
const [error, setError] = useState({})

useEffect(() => {
  if(!articles.length){
    (async () => {
      const data = await getArticles()
      data.results ?
        setArticles(data.results) :
        setError(error)
    })()
    // console.log(mockData)
    // setArticles(mockData.results)
  }
}, [])

const handleFilter = (selection) => {
  console.log('filter for ', selection)
}

  return (
    <main className={globals.main}>
      <div>
        <h2>Top News Stories from the World Today</h2>
        <Article handleFilter={handleFilter} />
      </div>
      <section className={styles.articleSection}>
        {articles.map(article => <Article key={article.url} article={article} />)}
      </section>
    </main>
  )
}
