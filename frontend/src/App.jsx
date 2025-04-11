import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientPage from "./modules/clients/pages/clientPage";
import MainLayout from "./components/common/layouts/MainLayout";
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ClientPage />} />
          {/* Otras rutas */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;