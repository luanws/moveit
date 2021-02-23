const styles = require('./styles.module.css')

export default function Profile() {
  return (
    <div className={styles.container}>
      <img src="https://github.com/luanws.png" alt="Usuário"/>
      <div>
        <strong>Luan Silveira</strong>
        <p>Level 1</p>
      </div>
    </div>
  ) 
}