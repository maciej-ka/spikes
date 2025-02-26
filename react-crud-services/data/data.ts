import { SvgName } from "../components/ui/Svg/Svg"

export type Service = {
  id: number
  name: string
  shortDescription: string
  detailedDescription: string
  price: string
  background: SvgName
}

export const services: Service[] = [
  {
    id: 1,
    name: "Antivirus as a Service",
    shortDescription: "Cloud-based antivirus solution to protect your systems.",
    detailedDescription:
      "Antivirus as a Service provides comprehensive protection against malware, ransomware, and phishing attacks. With real-time threat detection, automatic updates, and centralized management, your business remains secure and compliant.",
    price: "149 PLN/month",
    background: "invaders",
  },
  {
    id: 2,
    name: "Monitoring as a Service",
    shortDescription: "Proactive monitoring for your IT infrastructure.",
    detailedDescription:
      "Monitoring as a Service offers 24/7 performance tracking and alerts for your servers, applications, and network devices. Reduce downtime and ensure optimal performance with customizable dashboards and detailed reporting.",
    price: "299 PLN/month",
    background: "monitoring",
  },
  {
    id: 3,
    name: "Automation as a Service",
    shortDescription: "Streamline your operations with automation.",
    detailedDescription:
      "Automation as a Service enables businesses to automate repetitive tasks and workflows. From process optimization to integration with third-party tools, improve efficiency and reduce manual errors with our flexible automation solutions.",
    price: "399 PLN/month",
    background: "automation",
  },
  {
    id: 4,
    name: "Backup as a Service",
    shortDescription: "Secure data backup and recovery.",
    detailedDescription:
      "Backup as a Service ensures your critical data is protected with automated backups and reliable recovery options. Safeguard your business from data loss with our scalable and compliant solutions.",
    price: "249 PLN/month",
    background: "backup",
  },
  {
    id: 5,
    name: "Disaster Recovery",
    shortDescription: "Ensure business continuity during disruptions.",
    detailedDescription:
      "Disaster Recovery as a Service offers a robust solution for maintaining operations during unexpected events. With quick recovery times and strategic planning, reduce downtime and protect your assets.",
    price: "599 PLN/month",
    background: "recovery",
  },
  {
    id: 6,
    name: "Storage as a Service",
    shortDescription: "Scalable cloud storage for your business.",
    detailedDescription:
      "Storage as a Service provides secure and cost-effective cloud storage tailored to your needs. Access your data anytime, anywhere, with advanced security features and seamless integration.",
    price: "199 PLN/month",
    background: "clubs",
  },
  {
    id: 7,
    name: "AI as a Service",
    shortDescription: "Leverage AI to drive innovation.",
    detailedDescription:
      "AI as a Service provides tools and platforms for implementing AI-driven solutions in your business. From predictive analytics to chatbots, transform your operations with cutting-edge technology.",
    price: "499 PLN/month",
    background: "diamonds",
  },
  {
    id: 8,
    name: "Database as a Service",
    shortDescription: "Managed database solutions for your business.",
    detailedDescription:
      "Database as a Service offers scalable and secure database hosting with 24/7 support. Focus on your applications while we handle maintenance, backups, and optimization.",
    price: "349 PLN/month",
    background: "hearts",
  },
  {
    id: 9,
    name: "Security as a Service",
    shortDescription: "End-to-end security solutions.",
    detailedDescription:
      "Security as a Service provides robust protection against cyber threats with firewall management, intrusion detection, and threat mitigation strategies, ensuring your business remains secure.",
    price: "399 PLN/month",
    background: "spades",
  },
  {
    id: 10,
    name: "DevOps as a Service",
    shortDescription: "Streamlined software delivery and operations.",
    detailedDescription:
      "DevOps as a Service helps you accelerate software delivery with CI/CD pipelines, infrastructure automation, and performance monitoring. Achieve faster releases and improved collaboration.",
    price: "499 PLN/month",
    background: "clubs",
  },
  {
    id: 11,
    name: "Email as a Service",
    shortDescription: "Reliable email hosting for your team.",
    detailedDescription:
      "Email as a Service provides secure and professional email hosting with custom domains, spam filtering, and robust administrative controls for seamless communication.",
    price: "99 PLN/month",
    background: "diamonds",
  },
  {
    id: 12,
    name: "VPN as a Service",
    shortDescription: "Secure remote access to your network.",
    detailedDescription:
      "VPN as a Service ensures secure and encrypted connections for remote employees, providing privacy and protection against cyber threats.",
    price: "199 PLN/month",
    background: "hearts",
  },
  {
    id: 13,
    name: "Analytics as a Service",
    shortDescription: "Data insights for better decision-making.",
    detailedDescription:
      "Analytics as a Service offers powerful tools for data analysis, visualization, and reporting. Uncover trends and make informed decisions with our user-friendly dashboards.",
    price: "349 PLN/month",
    background: "spades",
  },
  {
    id: 14,
    name: "Integration as a Service",
    shortDescription: "Seamless integration between tools and platforms.",
    detailedDescription:
      "Integration as a Service connects your systems and applications, enabling smooth data flow and enhanced collaboration for improved business efficiency.",
    price: "299 PLN/month",
    background: "clubs",
  },
  {
    id: 15,
    name: "IoT as a Service",
    shortDescription: "Simplify IoT implementation.",
    detailedDescription:
      "IoT as a Service provides the infrastructure and tools needed to deploy and manage IoT devices, ensuring seamless connectivity and data processing.",
    price: "599 PLN/month",
    background: "diamonds",
  },
  {
    id: 16,
    name: "Blockchain as a Service",
    shortDescription: "Enable blockchain applications easily.",
    detailedDescription:
      "Blockchain as a Service offers the tools and platforms needed to develop, deploy, and manage blockchain solutions, streamlining operations and enhancing transparency.",
    price: "799 PLN/month",
    background: "hearts",
  },
  {
    id: 17,
    name: "Support as a Service",
    shortDescription: "On-demand technical support.",
    detailedDescription:
      "Support as a Service ensures your business gets expert help when needed with our team of professionals ready to resolve issues and provide guidance.",
    price: "149 PLN/month",
    background: "spades",
  },
  {
    id: 18,
    name: "Compliance as a Service",
    shortDescription: "Stay compliant with industry regulations.",
    detailedDescription:
      "Compliance as a Service offers tools and expertise to ensure your business meets legal and regulatory requirements, minimizing risks and penalties.",
    price: "399 PLN/month",
    background: "clubs",
  },
  {
    id: 19,
    name: "Testing as a Service",
    shortDescription: "Efficient software testing solutions.",
    detailedDescription:
      "Testing as a Service provides end-to-end testing for your software applications, ensuring reliability and performance with automated and manual testing.",
    price: "299 PLN/month",
    background: "diamonds",
  },
  {
    id: 20,
    name: "CMS as a Service",
    shortDescription: "Managed content management system.",
    detailedDescription:
      "CMS as a Service offers a robust platform for creating, managing, and optimizing your website content, with full support and scalability.",
    price: "249 PLN/month",
    background: "hearts",
  },
  {
    id: 21,
    name: "Collaboration",
    shortDescription: "Enhance team collaboration.",
    detailedDescription:
      "Collaboration as a Service provides tools and platforms for real-time communication, project management, and file sharing, enabling seamless teamwork.",
    price: "199 PLN/month",
    background: "spades",
  },
  {
    id: 22,
    name: "Chatbot as a Service",
    shortDescription: "Automate customer interactions.",
    detailedDescription:
      "Chatbot as a Service delivers intelligent virtual assistants to handle customer queries, improving response times and enhancing user satisfaction.",
    price: "299 PLN/month",
    background: "clubs",
  },
  {
    id: 23,
    name: "Video Conferencing",
    shortDescription: "High-quality video communication.",
    detailedDescription:
      "Video Conferencing as a Service ensures reliable, secure, and feature-rich virtual meeting solutions for businesses of all sizes.",
    price: "249 PLN/month",
    background: "diamonds",
  },
  {
    id: 24,
    name: "eCommerce as a Service",
    shortDescription: "Build and scale online stores.",
    detailedDescription:
      "eCommerce as a Service offers end-to-end solutions for setting up, managing, and optimizing online stores, complete with analytics and marketing tools.",
    price: "499 PLN/month",
    background: "hearts",
  },
  {
    id: 25,
    name: "HR as a Service",
    shortDescription: "Simplify HR processes.",
    detailedDescription:
      "HR as a Service provides tools for payroll, benefits management, recruitment, and employee engagement, reducing administrative overhead.",
    price: "399 PLN/month",
    background: "spades",
  },
  {
    id: 26,
    name: "CRM as a Service",
    shortDescription: "Improve customer relationship management.",
    detailedDescription:
      "CRM as a Service delivers powerful tools for tracking customer interactions, managing sales pipelines, and enhancing customer engagement.",
    price: "349 PLN/month",
    background: "clubs",
  },
  {
    id: 27,
    name: "ERP as a Service",
    shortDescription: "Centralized enterprise resource planning.",
    detailedDescription:
      "ERP as a Service integrates key business processes into a single system, providing insights and improving operational efficiency.",
    price: "599 PLN/month",
    background: "diamonds",
  },
  {
    id: 28,
    name: "Payment Gateway",
    shortDescription: "Streamlined payment processing.",
    detailedDescription:
      "Payment Gateway as a Service enables secure and efficient payment processing, supporting multiple payment methods and currencies.",
    price: "199 PLN/month",
    background: "hearts",
  },
  {
    id: 29,
    name: "Search as a Service",
    shortDescription: "Advanced search functionality.",
    detailedDescription:
      "Search as a Service offers high-performance search and indexing tools to enhance website or application user experience.",
    price: "149 PLN/month",
    background: "spades",
  },
  {
    id: 30,
    name: "Social Media",
    shortDescription: "Manage your social presence.",
    detailedDescription:
      "Social Media as a Service provides tools for scheduling, monitoring, and analyzing social media performance to grow your brand.",
    price: "299 PLN/month",
    background: "clubs",
  },
  {
    id: 31,
    name: "Learning Management",
    shortDescription: "Online learning made easy.",
    detailedDescription:
      "Learning Management as a Service provides platforms for creating and managing online courses, tracking progress, and engaging learners.",
    price: "399 PLN/month",
    background: "diamonds",
  },
  {
    id: 32,
    name: "Voice as a Service",
    shortDescription: "Cloud-based voice solutions.",
    detailedDescription:
      "Voice as a Service offers VoIP solutions, virtual phone systems, and advanced call management features to streamline communication.",
    price: "249 PLN/month",
    background: "hearts",
  },
  {
    id: 33,
    name: "Hosting as a Service",
    shortDescription: "Reliable web hosting.",
    detailedDescription:
      "Hosting as a Service provides scalable and secure hosting solutions, with 24/7 support and optimized performance.",
    price: "199 PLN/month",
    background: "spades",
  },
  {
    id: 34,
    name: "Kubernetes as a Service",
    shortDescription: "Simplify container orchestration.",
    detailedDescription:
      "Kubernetes as a Service offers managed Kubernetes clusters, enabling effortless scaling and deployment of containerized applications.",
    price: "499 PLN/month",
    background: "clubs",
  },
  {
    id: 35,
    name: "Mobile App as a Service",
    shortDescription: "Develop and deploy mobile apps.",
    detailedDescription:
      "Mobile App as a Service provides tools and support for building, deploying, and managing mobile applications across platforms.",
    price: "599 PLN/month",
    background: "diamonds",
  },
  {
    id: 36,
    name: "Big Data as a Service",
    shortDescription: "Harness the power of big data.",
    detailedDescription:
      "Big Data as a Service offers data storage, processing, and analytics solutions to unlock insights and drive business value.",
    price: "699 PLN/month",
    background: "hearts",
  },
  {
    id: 37,
    name: "API as a Service",
    shortDescription: "Scalable API management.",
    detailedDescription:
      "API as a Service provides tools for designing, deploying, and managing APIs with advanced analytics and monitoring.",
    price: "349 PLN/month",
    background: "spades",
  },
  {
    id: 38,
    name: "Identity as a Service",
    shortDescription: "Simplify identity management.",
    detailedDescription:
      "Identity as a Service offers secure authentication, single sign-on (SSO), and access management solutions for your business.",
    price: "299 PLN/month",
    background: "clubs",
  },
  {
    id: 39,
    name: "Desktop as a Service",
    shortDescription: "Virtual desktop solutions.",
    detailedDescription:
      "Desktop as a Service provides secure and scalable virtual desktops, enabling remote work and reducing hardware dependency.",
    price: "399 PLN/month",
    background: "diamonds",
  },
  {
    id: 40,
    name: "Gaming as a Service",
    shortDescription: "Cloud-based gaming platforms.",
    detailedDescription:
      "Gaming as a Service delivers seamless gaming experiences with low-latency performance and support for multiplayer environments.",
    price: "599 PLN/month",
    background: "hearts",
  },
  {
    id: 41,
    name: "Service as a Service",
    shortDescription: "Meta-level service for all your services.",
    detailedDescription:
      "Service as a Service provides services to manage your other services. With redundant redundancies and recursive recursion, it's the ultimate solution for overcomplicating simplicity!",
    price: "999 PLN/month",
    background: "spades",
  },
  {
    id: 42,
    name: "Support Desk",
    shortDescription: "Managed customer support solutions.",
    detailedDescription:
      "Support Desk as a Service offers ticketing systems, knowledge bases, and live chat support for effective customer service.",
    price: "299 PLN/month",
    background: "clubs",
  },
  {
    id: 43,
    name: "Microservices",
    shortDescription: "Adopt microservices architecture.",
    detailedDescription:
      "Microservices as a Service provides tools and expertise to help you design, deploy, and manage microservices for scalable applications.",
    price: "499 PLN/month",
    background: "diamonds",
  },
  {
    id: 44,
    name: "Fleet Management",
    shortDescription: "Track and manage vehicles efficiently.",
    detailedDescription:
      "Fleet Management as a Service offers GPS tracking, maintenance alerts, and driver performance monitoring for your fleet.",
    price: "349 PLN/month",
    background: "hearts",
  },
  {
    id: 45,
    name: "Robotics as a Service",
    shortDescription: "Integrate robotics into operations.",
    detailedDescription:
      "Robotics as a Service provides flexible solutions for deploying and managing robots for manufacturing, logistics, and more.",
    price: "899 PLN/month",
    background: "spades",
  },
  {
    id: 46,
    name: "Event Management",
    shortDescription: "Plan and execute events seamlessly.",
    detailedDescription:
      "Event Management as a Service offers tools for event registration, ticketing, and attendee engagement to ensure successful events.",
    price: "399 PLN/month",
    background: "clubs",
  },
  {
    id: 47,
    name: "AI Training as a Service",
    shortDescription: "Develop AI expertise in your team.",
    detailedDescription:
      "AI Training as a Service provides courses, resources, and mentorship to help your team master AI technologies.",
    price: "499 PLN/month",
    background: "diamonds",
  },
  {
    id: 48,
    name: "Video Editing",
    shortDescription: "Professional video editing solutions.",
    detailedDescription:
      "Video Editing as a Service provides tools and expertise for creating high-quality video content tailored to your needs.",
    price: "299 PLN/month",
    background: "hearts",
  },
  {
    id: 49,
    name: "Legal as a Service",
    shortDescription: "On-demand legal expertise.",
    detailedDescription:
      "Legal as a Service offers access to legal professionals, contract drafting, and compliance advice for businesses.",
    price: "399 PLN/month",
    background: "spades",
  },
  {
    id: 50,
    name: "Translation as a Service",
    shortDescription: "Accurate translations for global reach.",
    detailedDescription:
      "Translation as a Service provides fast and professional translation services in multiple languages, ensuring clear communication worldwide.",
    price: "249 PLN/month",
    background: "clubs",
  },
]
