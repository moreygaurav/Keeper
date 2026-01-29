import "./App.css";
import "./Style.css";
import Footer from "./Components/Footer";
import Hedar from "./Components/Hedar";
import Notes from "./Components/Notes";
import Note from "./Components/Note";



function App() {
  return (
    <>
      <Hedar />

      <div className="container">
        <div className="row d-flex flex-wrap justify-content-center">
      {Notes.map((noteitem) => {
        return (
          <Note 
            key={noteitem.id}
            id={noteitem.id}
            name={noteitem.name}
            phno={noteitem.phno}
          />
        );
      })}
      </div>
      </div>

      <Footer />
    </>
  );
}
export default App;