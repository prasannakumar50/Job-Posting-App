import { Link } from "react-router-dom"

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg bg-primary text-light">
            <div className="container ">
               <Link className="navbar-brand fs-4 text-light " to="/"  >Intern House</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   <li className="nav-item"><Link className="nav-link text-light" to="">Job Posting</Link></li>
                   <li className="nav-item"><Link className="nav-link text-light" to="/jobs/post">Post a Job</Link></li>
                          
               </ul>
               </div>
            </div>
            
        </nav>

    </header>
)
   
    



export default Header