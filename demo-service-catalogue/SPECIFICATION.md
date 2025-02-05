### Service Catalogue Platform Prototype

#### 1. Objective

Develop a React-based prototype of a Service Catalogue Platform  
to demonstrate your ability to build a responsive, user-friendly  
web application with navigation, dynamic data handling, and state  
management.

#### 2. Project Requirements

A medium-sized IT service provider wants to develop a Service Catalogue  
Platform to showcase their services to potential clients.

The platform should allow users to:

- View a list of available services.
- Access detailed information about each service.
- Navigate through an order wizard to configure and finalize service orders.

This prototype will act as a proof of concept  
and will use mocked data for demonstration purposes.

#### 3. Core Functionality

**1.1. Service List Page**

- [x] Display a list of available services.
- [x] Each service should show:
  - [x] Service Name
  - [x] Short Description
  - [x] Price
- [x] Include a “View Details” button/link for each service to navigate to the detailed view.

**1.2. Service Details Page**

- [ ] Display detailed information about a selected service.
- [ ] Include attributes:
  - [ ] Service Name
  - [ ] Detailed Description
  - [ ] Price
- [ ] Provide a “Back to Catalogue” button to navigate back to the Service List page.

**1.3. Service Order Wizard**

- [ ] Step 1: Owner Details
  - [ ] Input field for Owner Name
  - [ ] Input field for Provisioning Date
  - [ ] Input field for Decommissioning Date
- [ ] Step 2: Cost Details
  - [ ] Display Price of the selected service
  - [ ] Input field for Additional Notes
- [ ] Step 3: Order Summary
  - [ ] Display a summary of selected service details and user inputs
  - [ ] Include buttons: Back, Next, Submit Order
- [ ] State Management:
  - [ ] Ensure user inputs are preserved when navigating between wizard steps.
  - [ ] Show a confirmation message upon order submission.

#### 1.4. Technology Stack

- [x] Framework: **React** (latest version)
- [x] State Management: **Context API** or Redux (optional)
- [x] Routing: **React Router**
- [x] Data Handling: Mocked Data (as provided below)
- [x] Styling: **CSS Modules** / TailwindCSS / Styled Components
- [x] Package Management: **npm** or yarn

#### 1.5. Mock Data (data.js)

```javascript
export const services = [
  {
    id: 1,
    name: "Antivirus as a Service",
    shortDescription: "Cloud-based antivirus solution to protect your systems.",
    detailedDescription:
      "Antivirus as a Service provides comprehensive protection against malware, ransomware, and phishing attacks. With real-time threat detection, automatic updates, and centralized management, your business remains secure and compliant.",
    price: "149 PLN/month",
  },
  {
    id: 2,
    name: "Monitoring as a Service",
    shortDescription: "Proactive monitoring for your IT infrastructure.",
    detailedDescription:
      "Monitoring as a Service offers 24/7 performance tracking and alerts for your servers, applications, and network devices. Reduce downtime and ensure optimal performance with customizable dashboards and detailed reporting.",
    price: "299 PLN/month",
  },
  {
    id: 3,
    name: "Automation as a Service",
    shortDescription: "Streamline your operations with automation.",
    detailedDescription:
      "Automation as a Service enables businesses to automate repetitive tasks and workflows. From process optimization to integration with third-party tools, improve efficiency and reduce manual errors with our flexible automation solutions.",
    price: "399 PLN/month",
  },
]
```

#### 1.6. Project Structure Example

```
/src
  /components
    /ServiceList
    /ServiceDetails
    /ServiceOrderWizard
      /Step1
      /Step2
      /Step3
  /pages
    /HomePage
    /ServiceDetailsPage
    /ServiceOrderPage
  /data
    data.js
  /services
    api.js (mocked API service file)
  /context
    WizardContext.js
  App.js
  index.js
  README.md
```

#### 5. Functional Requirements

**1. Navigation:**

- [x] `/` → Service List
- [x] `/service/:id` → Service Details
- [x] `/service/:id/order` → Order Wizard

**2. State Management:**

- [ ] Persist order wizard state across wizard steps.
- [ ] Preserve selected service data throughout the ordering process.

**3. Responsive Design:**

- [ ] Ensure the app is responsive and works well on desktop, tablet, and mobile devices.

**4. Form Validation:**

- [ ] Validate required fields in the wizard steps.
- [ ] Show appropriate error messages when inputs are invalid.

**5. User Feedback:**

- [ ] Provide loading indicators during data fetching.
- [ ] Show success/error messages for form submissions.

#### 6. Deliverables

- [x] Source Code: Hosted on a public or private GitHub/GitLab repository.
- [ ] README.md:
  - [x] Setup instructions.
  - [ ] Brief explanation of the project structure.
  - [x] Steps to run the project locally.
- [ ] Working Prototype: A functioning React app demonstrating the described functionality.
- [x] Bonus Deliverable (Optional): Deployment on Netlify, **Vercel**, or any other platform.

#### 7. Evaluation Criteria

- [ ] Code Quality: Clean, modular, and reusable components.
- [ ] UI/UX Design: Intuitive navigation and user-friendly interface.
- [ ] State Management: Proper handling of state across components.
- [ ] API Integration: Effective use of mocked data.
- [ ] Responsiveness: Proper layout and design on different devices.
- [x] Documentation: Clear and concise README file.
- [ ] Error Handling: Clear error messages and validation on user inputs.

#### 8. Bonus Points

- [ ] Implement Pagination on the service list page.
- [ ] Add Search and Filtering functionality.
- [x] Use TypeScript instead of JavaScript.
- [x] Dockerize the application for easier deployment.

#### 9. Submission Deadline

You have 7 days to complete the project. If you encounter challenges or need clarification, feel free to reach out.

#### 10. Final Notes

By the end of this project, we expect to see a functional prototype showcasing your ability to:

- Clean Code: Readable and well-structured code.
- User Experience: Ensure seamless navigation and intuitive design.
- Best Practices: Follow React development best practices.
