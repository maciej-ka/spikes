// import { useQuery } from "@tanstack/react-query"
import { useQuery } from "./lib/my-little-react-query/QueryClientProvider.jsx"
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
  const { data, status } = useQuery({
    queryKey: ["pokemon", "list"],
    queryFn: () =>
      fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json()),
  })

  const { data: devices } = useQuery({
    queryKey: ["devices"],
    queryFn: () => navigator.mediaDevices.enumerateDevices()
  })
  console.log(devices);

  function renderSelect() {
    const options = status === "pending"
      ? []
      : (data as ListResponse).results

    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Pokemon" />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ name, url }) => (
            <SelectItem value={url} key={url}>{name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  return (
    <div className="h-screen flex flex-col items-center justify-around">
      <div className={styles.hello}>shadcn & react query Playground</div>
      <Button>click me</Button>
      {renderSelect()}
    </div>
  )
}

export default App
