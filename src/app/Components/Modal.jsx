import globals from '../globals.css'
import styles from './modal.module.css'
import Link from 'next/link'

export default function Modal({ article, xArticle }) {
  return (
    <div className={globals.modalBackground}>
      <div className={styles.modalContainer}>
        <div>
          <button onClick={() => xArticle()}> X </button>
        </div>
        <img src={article.multimedia[0].url} alt={article.multimedia[0].caption} className={styles.image}/>
        <div>
          <h2>{article.title}</h2>
          <p>{article.byline}</p>
          <p>{article.published_data}</p>
        </div>
        <div>
          <p>{article.abstract}</p>
        </div>
        <Link href={`http://${article.url}`}><button>Read the Full Article</button></Link>
      </div>
    </div>
  )
}