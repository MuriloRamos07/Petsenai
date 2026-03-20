import Navbar from "../../template/Navbar";
import MainFuncionarioEditar from "./MainFuncionarioEditar";
import SidebarCollapse from "../../template/SidebarCollpse";

function FuncionarioEditar(){
    return(
        <>
         <Navbar/>
         <div class="container-fluid">
                <div class="row">
                    <SidebarCollapse/>
                    <MainFuncionarioEditar />
                </div>
            </div>
        </>
    );
}
export default FuncionarioEditar;