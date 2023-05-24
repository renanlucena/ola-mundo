import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";



function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />
      <Routes>
        <Route path="/" element = {<PaginaPadrao />}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim />}/>
        </Route>


        
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
      <Rodape />
    </BrowserRouter>

  );
}

export default AppRoutes;
