import styles from './card.module.css'

function card() {
  return (
    <div className={styles.container}>
      <mdSupervisedUserCircle size={24}/>
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.273</span>
        <span className={styles.detail}>
            <span className={styles.positive}>12%</span>more than
            previous week
        </span>
      </div>
    </div>
  )
}

export default card