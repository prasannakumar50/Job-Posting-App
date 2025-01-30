import Header from "../components/Header"
import { useState } from "react";
const Post = ()=>{

 const [jobType, setJobType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [qualifications, setQualifications] = useState("");

    const handleSubmit = ()=>{

    }
    return(
        <div>
            <Header />
            <main className="container py-3">
                <h1 className="mb-3">Post a Job</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>Job Type:</label>
                    <input type="text" className="form-control"/>
                    </div>

                    <div>
                    <label>Company Name:</label>
                    <input type="text" className="form-control"/>
                    </div>

                    <div>
                    <label>Location:</label>
                    <input type="text" className="form-control"/>
                    </div>

                    <div>
                    <label>Salary:</label>
                    <input type="number" className="form-control"/>
                    </div>

                    <div>
                    <label>Description :</label>
                    <textarea type="text" className="form-control"/>
                    </div>

                    <div>
                    <label>Qualification:</label>
                    <textarea type="text" className="form-control"/>
                    </div>
                    <br />


                    <button type="submit" className="btn btn-primary">Post</button>

                </form>

            </main>
        </div>
    )
}


export default Post