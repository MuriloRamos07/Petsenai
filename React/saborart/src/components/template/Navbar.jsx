
function Navbar() {
    return (
        <>
            <header className="d-flex flex-wrap  py-3 yr-fundo-navbar">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img className="yr-margin-logo" src="/src/assets/img/HF.png" alt="" />
                    <div className="d-flex flex-column">
                        <span className="fs-4 ms-3 yr-font-titulo yr-cor-titulo">Sabor Art</span>
                        <span className="yr-tamanho-subtitulo ms-3 yr-font-subtitulo yr-cor-subtitulo">Dashboard de Gestão</span>
                    </div>
                </a>
                <div className="flex-grow-1"></div>
                <ul className="navbar-nav flex-row d-md-none mb-0 mt-1 fs-5 ">
                <li className="nav-item text-nowrap me-4">
                    <button
                        className="nav-link px-2 text-primary"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="bi bi-list yr-cor-titulo " aria-hidden="true"></i>
                    </button>
                </li>
            </ul>
            </header >
            
        </>
    );
}

export default Navbar;