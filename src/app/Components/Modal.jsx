import globals from '../globals.css'
import styles from './modal.module.css'
export default function Modal({ article }) {
  return (
    <div className={globals.modalBackground}>
      <div className={styles.modalContainer}>
        <button> X </button>
        <p>image</p>
        <div>
          <h1>title</h1>
          <p>byline</p>
          <p>published date</p>
        </div>
        <div>
          <p>url</p>
          <p>abstract</p>
        </div>
        <p></p>
      </div>
    </div>
  )
}