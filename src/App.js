import React, { useState, useEffect } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import WorkExperience from './WorkExperience'
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  return (
    <section className="section">
      <Header />
      <div className="jobs-center">

        <NavBar jobs={jobs} setValue={setValue} />
        <WorkExperience jobs={jobs[value]} />


      </div>
    </section>
  )
}

export default App
