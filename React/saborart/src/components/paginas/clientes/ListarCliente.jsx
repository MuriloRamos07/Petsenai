import Navbar from "../../template/Navbar";
import MainListarCliente from "./MainListarCliente";
import SidebarCollapse from "../../template/SidebarCollpse";

function ListarCliente() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SidebarCollapse />
                    <MainListarCliente />
                </div>
            </div>

        </>
    );
}
export default ListarCliente;