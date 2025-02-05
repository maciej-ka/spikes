import { createContext, useContext, PropsWithChildren } from "react"
import { Service, services } from "../data/data"

const ServicesContext = createContext<Service[]>([])

export const useServices = () => useContext(ServicesContext)

const ServicesProvider = ({ children }: PropsWithChildren) => (
  <ServicesContext.Provider value={services}>
    {children}
  </ServicesContext.Provider>
)
export default ServicesProvider
