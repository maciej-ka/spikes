import { useParams } from "react-router-dom"

const ServiceDetailsPage = () => {
  const { id } = useParams()
  return <div>Service Details Page id: {id}</div>
}

export default ServiceDetailsPage
