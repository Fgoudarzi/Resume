import { FaAngleDoubleRight } from 'react-icons/fa'
function Duties({ duties }) {
    return (
        duties.map((duty,index)=>{return (
            <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        )})
       
    )
}
export default Duties