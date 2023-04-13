import styles from './modal.module.css'
import Link from 'next/link'

export default function Modal({ article, xArticle }) {
  return (
    <main className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <header className={styles.buttonHeader}>
          <button onClick={() => xArticle()} className={styles.xButton}> X </button>
        </header>
        <div>
          <img src={article.multimedia[0].url} alt={article.multimedia[0].caption} className={styles.image}/>
          <Link href={article.url}><button className={styles.readButton}>Read the Full Article</button></Link>
        </div>
        <div>
          <h2>{article.title}</h2>
          <p className={styles.byline}>{article.byline}</p>
        </div>
        <div>
          <p className={styles.abstract}>{article.abstract}</p>
        </div>
      </div>
    </main>
  )
}