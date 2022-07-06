import NavBar from "./components/NavBar";
import NavFooter from "./components/NavFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header id="header">
        <NavBar></NavBar>
      </header>
      <main>
            <section id="products">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Nuestrros Productos</h2>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer id="footer">
            <NavFooter></NavFooter>
        </footer>
    </div>
  );
}

export default App;
