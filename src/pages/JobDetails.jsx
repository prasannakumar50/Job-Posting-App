import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "../components/Header";

const JobDetails = () => {
    const { jobId } = useParams();
    console.log("Job ID:", jobId);

    const { data: job,  error } = useFetch(`https://backend-jobs-sage.vercel.app/jobs/id/${jobId}`);

    if (error) {
        console.error("Error fetching job data:", error);
    }

    console.log("Fetched Job Data:", job);

   
    if (!job) {
        return <p>Loading job details...</p>;
    }

    return (
        <div>
            <Header />
            <div className="container py-4">
            
                <h4>{job.title}</h4>
                <div className="card">
                    <div className="card-body">
                        <p><b>Company name:</b> {job.companyName}</p>
                        <p><b>Location:</b> {job.location}</p>
                        <p><b>Salary:</b> {job.salary}</p>
                        <p><b>Job Type:</b> {job.jobType}</p>
                        <p><b>Description:</b> {job.jobDescription}</p>
                        <p><b>Qualifications:</b> <ol>
    {job.qualifications?.map((qualification, index) => (
      <li key={index}>{qualification}</li>
    ))}
  </ol></p> 
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default JobDetails;
