import Navbar from "../../template/Navbar";
import MainListarFuncionarios from "./MainListarFuncionarios";
import SidebarCollapse from "../../template/SidebarCollpse";

function ListaFuncionarios() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SidebarCollapse />
                    <MainListarFuncionarios />
                </div>
            </div>

        </>
    );
}
export default ListaFuncionarios;