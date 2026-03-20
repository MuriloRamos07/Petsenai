import Navbar from "../../template/Navbar";
import MainFuncionarioCadastro from "./MainVendasCadastro";
import SidebarCollapse from "../../template/SidebarCollpse";

function VendasCadastro(){
    return(
        <>
         <Navbar/>
         <div class="container-fluid">
                <div class="row">
                    <SidebarCollapse/>
                    <MainFuncionarioCadastro />
                </div>
            </div>
        </>
    );
}
export default VendasCadastro;