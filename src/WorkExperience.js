import { React } from 'react'
import Duties from './Duties'
import MoreInfo from './MoreInfo'
function WorkExperience({ jobs }) {
    const { company, dates, duties, title } = jobs
    console.log(jobs)
    return (
        <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            <Duties duties={duties} />
            <MoreInfo />
        </article>
    )
}
export default WorkExperience