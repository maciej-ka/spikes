import { useParams } from "react-router-dom"
import ServiceOrderWizard from "../../components/ServiceOrderWizard/ServiceOrderWizard"

const ServiceOrderPage = () => {
  const { id } = useParams()
  console.log(id)

  return <ServiceOrderWizard />
}

export default ServiceOrderPage
