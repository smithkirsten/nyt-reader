'use client'
import Image from 'next/image'
import { Noticia_Text } from 'next/font/google'
import styles from './page.module.css'
import globals from 'src/app/globals.css'
import { useEffect, useState } from 'react'
import { getArticles } from '../util'
import Article from './Components/Article'
import Filter from './Components/Filter'
import Modal from './Components/Modal'

const noticia = Noticia_Text({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'] 
})

export default function Home() {

const [articles, setArticles] = useState([])
const [filtered, setFiltered] = useState([])
const [error, setError] = useState({})
const [modal, setModal] = useState({})

useEffect(() => {
  if(!articles.length){
    (async () => {
      const data = await getArticles('world')
      data.results ?
        setArticles(data.results.filter(article => article.section !== 'admin')) :
        setError(error)
    })()
  }
}, [])

const handleFilter = (selection) => {
  console.log('filter for ', selection)
  selection === 'world' ?
    setFiltered([]) :
    setFiltered(articles.filter(article => article.subsection === selection))
}

const displayArticle = (article) => {
  console.log('modal on!')
  setModal(article)
}

const xArticle = () => {
  setModal({})
}

const determineCards = () => {
  if(filtered.length) {
    return filtered.map(article => <Article key={article.url} displayArticle={displayArticle} article={article} />)
  } else if(articles.length) {
    return articles.map(article => <Article key={article.url} displayArticle={displayArticle} article={article} />)
  } else {
    return <p>whoops, dog got the paper</p>
  }
}
  console.log(modal)
  return (
    <>
    { modal.title ? 
      <Modal article={modal} xArticle={xArticle}/> :
      <main className={globals.main}>
        <div>
          <h2>Top News Stories from the World Today</h2>
          <Filter handleFilter={handleFilter} type='world' />
        </div>
        <section className={styles.articleSection}>
          {determineCards()}
        </section>
      </main>
    }
    </>
  )
}
