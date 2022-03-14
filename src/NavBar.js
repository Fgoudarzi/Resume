
function jobs({ jobs, setValue, value }) {
    return (
        <div className="btn-container">
            {jobs.map((item, index) => {
                return (
                    <button
                        key={item.id}
                        onClick={() => setValue(index)}
                        className={`job-btn ${index === value && 'active-btn'}`}
                    >
                        {item.company}
                    </button>
                )
            })}
        </div>
    )
}
export default jobs