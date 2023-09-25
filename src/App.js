import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import Router from "./router";

function App() {
  return (
    <div className="col-12 overflow-none bg-white">
      <Navbar />
      <div className="row col-12">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 ">
          <Router />
        </div>
      </div>
    </div>
  );
}
export default App;
