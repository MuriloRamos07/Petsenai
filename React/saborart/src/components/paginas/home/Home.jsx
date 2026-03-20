import SidebarCollapse from "../../template/SidebarCollpse";
import Navbar from "../../template/Navbar";
import MainHome from "./MainHome";

function Home() {
    return (
        <>
            <Navbar />
            <div class="container-fluid">
                <div class="row">
                    <SidebarCollapse />
                    <MainHome />

                </div>
            </div>
        </>
    );
}
export default Home;