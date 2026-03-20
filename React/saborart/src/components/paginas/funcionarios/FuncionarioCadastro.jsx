import Navbar from "../../template/Navbar";
import MainFuncionarioCadastro from "./MainFuncionarioCadastro";
import SidebarCollapse from "../../template/SidebarCollpse";

function FuncionarioCadastro(){
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
export default FuncionarioCadastro;