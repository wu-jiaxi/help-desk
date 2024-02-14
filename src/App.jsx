import "./App.css";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import Admin from "./components/Admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Form />} />
            <Route path="Admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
