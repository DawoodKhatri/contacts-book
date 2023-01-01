import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ViewContact from "./components/ViewContact/ViewContact";
import AddEdit from "./components/AddEdit/AddEdit";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/new" element={<AddEdit />} />
          <Route path="/:id" element={<ViewContact />} />
          <Route path="/:id/edit" element={<AddEdit />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
