//import city from "./Images/city.gif";
import arbol from "./components/Images/arbol.gif";
//import "./App.css";

export function App() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={arbol} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
