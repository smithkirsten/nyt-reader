import styles from './article.module.css'

export default function Article({ article }) {
  console.log(article)
  return(
    <article className={styles.card}>
      <img/>
      <h3>{article.title}</h3>
      <p>{article.byline}</p>
      <p>{article.abstract}</p>
    </article>
  )
}