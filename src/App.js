import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App(){
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Header /> + <Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    )
}

export default App;
