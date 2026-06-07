import { BrowserRouter, Routes, Route } from "react-router-dom";

import Modal from "@/components/Modal";
import Layout from "@/components/Layout";

import Homepage from "@/pages/Homepage";
import Board from "@/pages/Board";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/board/:id" element={<Board />} />
        </Routes>
        <Modal />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
