import styles from './article.module.css'

export default function Article({ article }) {
  console.log(article)
  return(
    <article className={styles.card}>
      <header className={styles.heading}>
        <h3>{article.title}</h3>
      </header>
      <p className={styles.byline}>{article.byline}</p>
      <p className={styles.abstract}>{article.abstract}</p>
    </article>
  )
}