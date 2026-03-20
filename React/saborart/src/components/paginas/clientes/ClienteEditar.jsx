import Navbar from "../../template/Navbar";
import MainClienteEditar from "./MainClienteEditar";
import SidebarCollapse from "../../template/SidebarCollpse";

function ClienteEditar(){
    return(
        <>
         <Navbar/>
         <div class="container-fluid">
                <div class="row">
                    <SidebarCollapse/>
                    <MainClienteEditar />
                </div>
            </div>
        </>
    );
}
export default ClienteEditar;