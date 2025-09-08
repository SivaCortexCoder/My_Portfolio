import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ProjectContext = createContext()

const ProjectProvider = ({children}) => {

  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
   const [personalInfo, setPersonalInfo] = useState(null);

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${baseURL}/project/all-projects`);
      setProjects(res.data.allProjects);
    } catch (error) {
      console.error(error);
    }
    finally{
      setLoading(false)
    }
  };

    const fetchPersonalInfo = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/personal-info`);
      setLoading(true)
      setPersonalInfo(res.data);
    } catch (error) {
      console.error("Error fetching personal info", error);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
    fetchPersonalInfo()
  }, []);

  return (
    <ProjectContext.Provider value={{projects, fetchData, loading,fetchPersonalInfo,personalInfo}}>
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider