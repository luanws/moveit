const styles = require('./styles.module.css')

export default function Profile() {
  return (
    <div className={styles.container}>
      <img src="https://github.com/luanws.png" alt="Usuário" />
      <div>
        <strong>Nome</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}