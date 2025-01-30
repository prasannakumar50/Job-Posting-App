import useFetch from "../useFetch";
import { Link } from "react-router-dom";
const Jobs = () => {
  const { data, loading, error } = useFetch(`https://backend-jobs-sage.vercel.app/jobs`);
  console.log(data);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error while fetching data</p>}
    <div className="row"> 
      {data &&
        data.map((job) => (
          
            
             <div className="col-md-4 mb-4">
              <div className="card">
               
                    <div className="card-body" >
                    <h4>{job.title}</h4>
                    <p><b>Company name:</b> {job.companyName}</p>
                    <p><b>Location:</b> {job.location}</p>
                    <p><b>JobType:</b> {job.jobType}</p>
                    
                    <Link className="btn btn-primary me-3" to={`/jobs/id/${job._id}`}>See Details</Link>
                    <Link className="btn btn-danger" to="">Delete</Link>
                    
                </div>
              </div>
            </div>
         
        ))}
         </div>
    </div>
  );
};

export default Jobs;
