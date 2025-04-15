import styles from "./App.module.css"
import Form from "./componets/Form/Form"


function App() {
  

  return (
    <>
      <h1 className={styles.title}> esto es una prueba</h1>

      <div className={styles.container}>
        <div><Form/></div>
        <div>2</div>
      </div>
    </>
  )
}

export default App
