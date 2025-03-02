import styles from "./App.module.css"
import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-around">
      <div className={styles.hello}>Hello</div>
      <Button>click me</Button>
    </div>
  )
}

export default App
