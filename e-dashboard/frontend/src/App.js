import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductLists from "./components/ProductLists";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Footer />
        <Routes>

          <Route element={<PrivateComponent />} >
          <Route path="/" element={<ProductLists/>}></Route>
          <Route path="/add" element={<AddProduct/>}></Route>
          <Route
            path="/update/:id"
            element={<UpdateProduct/>}
          ></Route>
          <Route
            path="/logout"
            element={<h1>logout product component</h1>}
          ></Route>
          <Route
            path="/profile"
            element={<h1>profile product component</h1>}
          > </Route>

        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login/>}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
