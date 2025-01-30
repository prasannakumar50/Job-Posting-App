import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Jobs from "./pages/Jobs";



function App() {
  return (
    <div>
      <Header />
      <main className="container py-3">
        <input
          type="text"
          placeholder="Search by title"
          className="form-control"
        />

        <div className="py-2">
          <h3>All Jobs</h3>
        </div>

       <Jobs />

         
      </main>
    </div>
  );
}

export default App;
