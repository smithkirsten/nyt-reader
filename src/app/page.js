'use client'
import Image from 'next/image'
import { Noticia_Text } from 'next/font/google'
import styles from './page.module.css'
import globals from 'src/app/globals.css'
import { useEffect, useState } from 'react'
import mockData from './mockdata.json'
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
  selection === 'world' ?
    setFiltered([]) :
    setFiltered(articles.filter(article => article.subsection === selection))
}

const displayArticle = (article) => {
  console.log('modal on!')
  setModal(article)
}

const xArticle = () => {
  console.log('modal off')
  setModal({})
}

const determineCards = () => {
  if(filtered.length) {
    console.log('filtered cards rendering')
    return filtered.map(article => <Article key={article.url} displayArticle={displayArticle} article={article} />)
  } else if(articles.length) {
    return articles.map(article => <Article key={article.url} displayArticle={displayArticle} article={article} />)
  } else {
    return <p>whoops, dog got the paper</p>
  }
}

  return (
    <main className={globals.main}>
    { modal.title ? 
      <Modal article={modal} xArticle={xArticle}/> :
      <>
        <div>
          <h2>Top News Stories from the World Today</h2>
          <Filter handleFilter={handleFilter} />
        </div>
        <section className={styles.articleSection}>
          {determineCards()}
        </section>
      </>
    }
    </main>
  )
}
