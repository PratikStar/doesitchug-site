import logo from './logo.svg';
import './App.css';
import Blog from "./site/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./site/NoPage";
import Layout from "./site/Layout";
import Interact from "./site/Interact";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Blog />} />
                    <Route path="/interact" element={<Interact />} />
                    <Route path="/404" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
