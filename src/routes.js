import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "Paginas/Post";



function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />
      <Routes>
        <Route path="/" element = {<PaginaPadrao />}>
          <Route index element={<Inicio/>}/>
          <Route path="sobremim" element={<SobreMim />}/>
          <Route path="posts/:id" element={<Post />}/>
        </Route>


        
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
      <Rodape />
    </BrowserRouter>

  );
}

export default AppRoutes;
