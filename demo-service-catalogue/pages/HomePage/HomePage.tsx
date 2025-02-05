import styles from "./HomePage.module.css"
import { useServices } from "../../data/ServicesProvider"
import ServiceListElement from "../../components/ServiceListElement/ServiceListElement"
import { useNavigate } from "react-router-dom"
import { Service } from "../../data/data"

const HomePage = () => {
  const services = useServices()
  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.header} />
      <div className={styles.list}>
        {services.map((service) => (
          <ServiceListElement
            service={service}
            key={service.id}
            onClick={(service: Service) => navigate(`/service/${service.id}`)}
          />
        ))}
      </div>
    </div>
  )
}
export default HomePage
