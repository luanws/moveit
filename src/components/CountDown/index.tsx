const styles = require('./styles.module.css')

export default function CountDown() {
  return (
    <div className={styles.container}>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <span>:</span>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </div>
  )
}