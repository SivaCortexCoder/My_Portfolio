import react_img from '../assets/images/react native_react_icon.png'
import html_img from '../assets/images/html_html5_icon.png'
import css_img from '../assets/images/css3_css_file_development_icon.png'
import js_img from '../assets/images/javascript_icon.png'
import node_img from '../assets/images/node_icon.png'
import express_img from '../assets/images/expressjs_logo_icon_169185.png'
import mongo_img from '../assets/images/mongodb_icon.png'
import c_img from '../assets/images/C_icon copy.png'
import Python_img from '../assets/images/python_icon.png'
import git_img from '../assets/images/git_icon.png'
import github_img from '../assets/images/github_icon.png'
import vs_img from '../assets/images/vscode_fill_icon.png'
import postman_img from '../assets/images/postman_icon.png'
import tailwind_img from '../assets/images/Tailwind.png'
import firebase_img from '../assets/images/firebase.png'
import ps_img from '../assets/images/ps_logo.png'
import illus_img from '../assets/images/illustrator_icon.png'
import canva_img from '../assets/images/canva-icon-512x512-q41pwse8.png'
import zustand_img from '../assets/images/zustand.png'
import rest_img from '../assets/images/rest_api.png'



export const personalInfo = {
    name: "Siva Kumar",
    role: "MERN Stack Developer",
    tagline: "Crafting digital experiences that inspire and delight users worldwide",
    image: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752258829/profile_g4f5a3.png",
    about: `I’m a dedicated MERN Stack developer passionate about crafting responsive web applications that make life easier. My journey started with curiosity and has grown into a love for solving real-world problems through clean, efficient code. Outside of coding, I enjoy learning new tech, building personal projects, and connecting with others in the developer community.`,
    email: "sivaofficial76@gmail.com",
    phone: "+91 9500059697",
    location: "Chennai, Tamilnadu.",
    github: "https://github.com/SivaCortexCoder",
    linkedin: "https://www.linkedin.com/in/siva-kumar-585123276/"
  };

  export const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" }
  ];



  export const skills = {
    frontend: [
      { name: "HTML", img:html_img, level: 95, color: "bg-blue-500" },            
      { name: "CSS", img:css_img, level: 88, color: "bg-green-500" },
      { name: "JavaScript", img:js_img, level: 90, color: "bg-cyan-500" },
      { name: "React Js", img:react_img, level: 92, color: "bg-blue-600" },
       { name: "Tailwind CSS", img:tailwind_img , level: 88, color: "bg-gray-700" },
        { name: "Zustand", img:zustand_img , level: 88, color: "bg-gray-700" }
    ],
    backend: [
      { name: "Node.js", img:node_img , level: 90, color: "bg-green-600" },
      { name: "Express", img:express_img, level: 85, color: "bg-yellow-500" },
      { name: "MongoDB", img:mongo_img , level: 88, color: "bg-gray-700" },
      { name: "Python", img:Python_img, level: 82, color: "bg-green-700" },
       { name: "Rest_API", img:rest_img, level: 82, color: "bg-green-700" }
      
    ],
    tools: [
      { name: "Git", img:git_img, level: 95, color: "bg-orange-500" },
      { name: "GitHub", img:github_img, level: 88, color: "bg-blue-400" },
      { name: "Postman", img:postman_img, level: 85, color: "bg-orange-400" },
      { name: "Firebase", img:firebase_img,  level: 90, color: "bg-yellow-500" },
      { name: "VS Code", img:vs_img, level: 98, color: "bg-blue-600" },
      { name: "Photoshop", img:ps_img, level: 98, color: "bg-blue-600" },
   
      { name: "Canva", img:canva_img, level: 98, color: "bg-blue-600" }
    ]
  };

export const projects = [
  {
    id: 1,
    title: "Fashion E-Commerce Platform",
    description: "Modern fashion-focused e-commerce site with Firebase auth, secure payments, and admin dashboard.",
    image: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752311600/dwdd_balana.png",
    image2: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752340917/Screenshot_2025-07-12_225131_z1s0uv.png",
    image3: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752341011/Screenshot_2025-07-12_225313_y6vsjf.png",
    tech: [
      "React.js", "Tailwind CSS", "Firebase Auth", "Node.js",
      "Express.js", "MongoDB", "Razorpay", "Cloudinary", "Zustand"
    ],
    github: "https://github.com/yourusername/fashion-ecommerce",
    live: "https://your-deployed-site.com",
    details: "Full-stack fashion e-commerce site with user auth, shopping cart, admin panel, and payment integration.",
    detailedDescription: `A modern full-stack fashion e-commerce platform designed to deliver a seamless shopping experience. 
The application allows users to browse curated fashion collections, view product details with multiple images, manage a personalized cart, and place secure online orders. 
Admins can manage inventory, orders, and users via a dedicated dashboard.

This project is focused on the fashion domain, supporting category-based browsing (e.g. men, women, accessories), product type filtering (e.g. t-shirts, shoes), and dynamic product displays. 
With Firebase Authentication, users can sign in via email/password or Google, and their cart persists across sessions. 
Razorpay integration ensures secure and smooth checkout experiences. 
The admin panel enables role-based access to manage product uploads (with Cloudinary), order fulfillment, and stock monitoring.`,
    features: [
      "Persistent shopping cart tied to Firebase UID",
      "Dynamic collections page with filter by category/type",
      "Upload & preview of multiple product images (Cloudinary + Multer)",
      "Firebase authentication (Email/Password + Google Sign-In)",
      "Order placement & Razorpay payment gateway integration",
      "Admin dashboard with role-based access to add/edit/delete products",
      "Responsive UI optimized for mobile and desktop using Tailwind CSS",
      "Orders & cart history saved in MongoDB per user session"
    ],
    testimonials: [
      {
        name: "Campus Director",
        feedback: "This platform transformed how our customers shop. The admin features and product uploads were super easy to use."
      }
    ],
    category: "Full Stack Development",
    duration: "Jan 2025 – Ongoing",
    featured: true
  },

  {
    id: 2,
    title: "Bulk Mailer",
    description: "Full-stack bulk email sender app with Excel upload and Nodemailer integration.",
    image: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752311245/businessman-email-icon-on-virtual-600nw-2325396425_fvusqb.png",
    image2: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752340611/Screenshot_2025-06-22_181830_ibc7hi.png",
    image3: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752340826/Screenshot_2025-06-22_182158_kqytmz.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "XLSX.js", "Nodemailer", "JavaScript"],
    github: "https://github.com/SivaCortexCoder/Bulk-mailer",
    live: "https://bulk-mailer-chi.vercel.app/",
    details: "Bulk email sender with Excel parsing, real-time feedback, and secure email auth.",
    detailedDescription: `A full-stack bulk mailer tool allowing users to upload Excel sheets with email lists and send personalized emails using Nodemailer.

The frontend is built using React.js, offering a form for uploading spreadsheets and collecting email credentials. 
The backend uses Express.js and NodeMailer to dispatch bulk emails, with real-time status updates and alert notifications.`,
    features: [
      "Upload Excel (XLSX) files to extract email addresses",
      "Secure sender credentials with MongoDB storage",
      "Bulk email sending via Nodemailer backend",
      "Real-time success/failure alerts with React Toastify",
      "Email preview and dynamic subject support"
    ],
    testimonials: [],
    category: "MERN Stack Utility",
    duration: "June 2025",
    featured: false
  },

  {
    id: 3,
    title: "Weather Dashboard",
    description: "Responsive weather app with OpenWeatherMap API and search history tracking.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    image2: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752340427/Screenshot_2025-05-29_132025_zpeg1h.png",
    image3: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752340443/Screenshot_2025-05-29_132103_koztda.png",
    tech: ["React.js", "Vite", "Tailwind CSS", "Axios", "OpenWeatherMap API",, "JavaScript"],
    github: "https://github.com/SivaCortexCoder/Weather-APP",
    live: "https://weather-app-nx35.vercel.app/",
    details: "Weather forecasting app with real-time updates, search history, and responsive UI.",
    detailedDescription: `A weather dashboard app that fetches real-time data from the OpenWeatherMap API using Axios and displays city-specific weather information including temperature, humidity, wind speed, and more.

Built with React + Vite for fast loading, Tailwind CSS for styling, and Context API for managing global state and search history.`,
    features: [
      "Real-time weather updates using OpenWeatherMap API",
      "Search city with recent search history",
      "Responsive design with Tailwind CSS",
      "State management via React Context API",
      "Displays temp, humidity, wind, and error handling"
    ],
    testimonials: [],
    category: "Frontend App",
    duration: "May 2025",
    featured: false
  },

  {
    id: 4,
    title: "DigiCanteen",
    description: "Digital canteen system replacing token-based ordering with modern web UI.",
    image: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752313221/sffsfs_eip3d9.png",
    image2: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752341208/Screenshot_2025-07-12_225610_ayr0iu.png",
    image3: "https://res.cloudinary.com/dvgux7v3x/image/upload/v1752341227/Screenshot_2025-07-12_225631_stsyol.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS", "JWT" ,"Context API", "Stripe"],
    github: "https://github.com/SivaCortexCoder/food_app",
    live: "https://food-app-frontend-vjgo.onrender.com",
    details: "Tokenless food ordering system with admin dashboard and order tracking.",
    detailedDescription: `The Digital Canteen Management System is a full-stack web application built using the MERN stack, designed to modernize the food ordering process in institutional canteens. It allows students and staff to register and log in through a secure JWT-based authentication system, with user credentials safely stored in MongoDB. Once logged in, users can browse a live, responsive menu, add food items to their cart, and place orders directly from the frontend. The application integrates Stripe for secure online payments, streamlining the entire ordering experience. Users can also view their order history and track real-time order status updates. On the administrative side, the platform provides a dedicated admin portal where canteen managers can manage food items, update inventory, mark items as out of stock, and monitor incoming user orders. The backend is powered by Node.js and Express, while the frontend is built using React.js for a smooth and modern user experience. With MongoDB Atlas managing the database, the system ensures efficient handling of user data, menu items, and order records. Overall, this project delivers a complete and scalable solution for digitizing canteen operations in educational institutions.`,
    features: [
      "Secure JWT-based login & signup",
      "Fully-featured menu display with images & prices",
      "Add-to-cart functionality and real-time cart updates",
      "Stripe checkout integration",
      "Order status tracking and user order history",
      "Admin dashboard for managing inventory and user orders",
      "Mobile-first, fully responsive design",
      "Clean code architecture with modular folder structure"
    ],
    testimonials: [],
    category: "Campus Solution",
    duration: "Oct 2024 - Dec 2024",
    featured: true
  }
];


  export const education = [
    {
      degree: "B.E Computer Science and Engineering",
      institution: "S.A Engineering College, Chennai.",
      
      year: "2021-2025",
      cgpa: "CGPA: 7.2/10",
      description: "Focused on Core Computer Science and Emerging Technologies"
    },
    {
      degree: " Higher Secondary Certificate (HSC).",
      institution: "Karaikudi Maharishi vidya manddir Mat Hr sec school, Karaikudi.",
      year: "2021",
      cgpa: "Percentage: 89.25%",
      description: "Completed higher secondary education with a focus on core science and mathematics subjects."
    }
  ];

 export const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      duration: "2022 - Present",
      description: "Leading development of enterprise-level applications",
      responsibilities: [
        "Led development of 3 major client projects resulting in 40% increase in user engagement",
        "Mentored junior developers and established coding best practices",
        "Architected scalable microservices using Node.js and Docker",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      role: "Frontend Developer",
      company: "StartupXYZ",
      duration: "2020 - 2022",
      description: "Crafting beautiful user interfaces and experiences",
      responsibilities: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Optimized application performance resulting in 50% faster load times",
        "Built component library used across 5+ products"
      ]
    },
    {
      role: "Junior Developer",
      company: "WebDev Agency",
      duration: "2019 - 2020",
      description: "Building foundational skills in web development",
      responsibilities: [
        "Developed client websites using HTML, CSS, and JavaScript",
        "Maintained and updated existing web applications",
        "Worked closely with senior developers to learn best practices"
      ]
    }
  ];

 export const certifications = [
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credential: "https://aws.amazon.com/certification/",
      icon: "☁️"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2022",
      credential: "https://cloud.google.com/certification",
      icon: "🌐"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2021",
      credential: "https://developers.facebook.com/certification/",
      icon: "⚛️"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2021",
      credential: "https://university.mongodb.com/",
      icon: "🍃"
    }
  ];

 export const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    // { id: 'experience', label: 'Experience' },
    // { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];