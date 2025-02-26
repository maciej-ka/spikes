import { Service } from "../../data/data"
import Svg from "../ui/Svg/Svg"
import styles from "./ServiceListElement.module.css"

type Props = {
  service: Service
  onClick?: (service: Service) => void
}

const ServiceListElement = ({ service, onClick = () => {} }: Props) => (
  <div className={styles.service} onClick={() => onClick(service)}>
    <div className={styles.content}>
      <div className="flex-spread align-center">
        <h2>{service.name}</h2>
        <span className={styles.price}>{service.price}</span>
      </div>
      <p className={styles.description}>{service.shortDescription}</p>
    </div>
    <Svg name={service.background} className={styles.background} />
  </div>
)

export default ServiceListElement
