import { useQuery } from "@tanstack/react-query"
import styles from "./App.module.css"
import { Button } from "./components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select"

type ListResponse = {
  results: {
    name: string
    url: string
  }[]
}

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", "list"],
    queryFn: () =>
      fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json()),
  })

  function renderSelect() {
    if (isLoading) {
      return null
    }
    const res = data! as ListResponse
    return (
      <SelectContent>
        {res.results.map(({ name, url }) => (
          <SelectItem value={url} key={url}>{name}</SelectItem>
        ))}
      </SelectContent>
    )
  }

  return (
    <div className="h-screen flex flex-col items-center justify-around">
      <div className={styles.hello}>Hello</div>
      <Button>click me</Button>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        {renderSelect()}
      </Select>
    </div>
  )
}

export default App
