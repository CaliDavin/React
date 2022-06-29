import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/projet" element={<Projet />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);