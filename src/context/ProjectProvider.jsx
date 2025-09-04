import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ProjectContext = createContext()

const ProjectProvider = ({children}) => {

  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURL}/project/all-projects`);
      setProjects(res.data.allProjects);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProjectContext.Provider value={{projects, fetchData}}>
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider