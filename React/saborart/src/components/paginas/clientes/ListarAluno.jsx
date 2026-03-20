import Navbar from "../../template/Navbar";
import SidebarCollapse from "../../template/SidebarCollpse";
import MainListarAluno from "./MainListarAluno";

function ListarAluno() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SidebarCollapse />
                    <MainListarAluno />
                </div>
            </div>

        </>
    );
}
export default ListarAluno;