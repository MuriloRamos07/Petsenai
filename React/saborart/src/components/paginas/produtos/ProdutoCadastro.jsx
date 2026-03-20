import Navbar from "../../template/Navbar";
import MainProdutoCadastro from "./MainProdutoCadastro";
import SidebarCollapse from "../../template/SidebarCollpse";

function ProdutoCadastro(){
    return(
        <>
         <Navbar/>
         <div class="container-fluid">
                <div class="row">
                    <SidebarCollapse/>
                    <MainProdutoCadastro />
                </div>
            </div>
        </>
    );
}
export default ProdutoCadastro;