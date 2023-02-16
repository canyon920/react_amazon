import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from './Login'

function App(){
    return (
      <BrowserRouter>
        <div className="App">
           <Routes>
            <Route path="/login" element={ <Login />} />
           </Routes>
           <Routes>
            <Route path="/" element={[<Header /> ,<Home /> ]}/>
           </Routes>
           <Routes>
            <Route path="/checkout" element={[<Header /> ,<Checkout /> ]}/>
           </Routes>
        </div>
      </BrowserRouter>
    )
}

export default App;
