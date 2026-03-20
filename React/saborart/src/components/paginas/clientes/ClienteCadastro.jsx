import Navbar from "../../template/Navbar";
import MainClienteCadastro from "./MainClienteCadastro";
import SidebarCollapse from "../../template/SidebarCollpse";

function ClienteCadastro(){
    return(
        <>
         <Navbar/>
         <div class="container-fluid">
                <div class="row">
                    <SidebarCollapse/>
                    <MainClienteCadastro />
                </div>
            </div>
        </>
    );
}
export default ClienteCadastro;