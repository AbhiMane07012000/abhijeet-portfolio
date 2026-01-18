// src/data/projects.js

export const projectsData = [
  {
    id: "shopify-Ecommerce-application",
    title: "Shopify Ecommerce Application",
    category: "College",
    description: "Full-featured e-commerce platform with real-time shopping workflows and Razorpay integration.",
    detailedDescription: "Created and maintained a full-featured e-commerce platform using Redux Toolkit for state management. Integrated Razorpay Payment Gateway for secure transactions and Strapi Headless CMS for backend product management.",
    tech: ["React.js", "Redux Toolkit", "Bootstrap 5", "Razorpay", "Strapi"],
    github: `${process.env.NEXT_PUBLIC_GIT_URL}/E-Commerce_WebSite`
  },
  {
    id: "chat-application",
    title: "Chit Chat Real-time Chat App",
    category: "College",
    description: "Real-time chat system with Socket.IO for instant messaging and efficient API communication.",
    detailedDescription: "Built a low-latency messaging application using Socket.IO. Features include active status indicators, message history persistence, and a responsive UI built with Styled Components.",
    tech: ["React.js", "Socket.IO", "Axios", "Styled Components"],
    github: `${process.env.NEXT_PUBLIC_GIT_URL}/Chit-Chat`
  },
  {
    id: "todo-list",
    title: "Todo List App",
    category: "College",
    description: "Responsive to-do application with RESTful APIs for task management. The app allows users to create, read, update, and delete tasks seamlessly.",
    detailedDescription: "Developed a streamlined task management tool. Built a custom RESTful API with Node.js and Express to handle CRUD operations, ensuring fast and reliable data synchronization.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
    github: `${process.env.NEXT_PUBLIC_GIT_URL}/todolist`
  }
];