import styles from './article.module.css'

export default function Article({ article, displayArticle }) {
  return(
    <button className={styles.card} onClick={displayArticle(article)}>
      <header className={styles.heading}>
        <h3>{article.title}</h3>
      </header>
      <p className={styles.byline}>{article.byline}</p>
      <p className={styles.abstract}>{article.abstract}</p>
    </button>
  )
}