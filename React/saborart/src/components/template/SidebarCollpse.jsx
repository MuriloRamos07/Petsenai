import { Link, useNavigate } from "react-router";

function SidebarCollapse() {    

    const navigate = useNavigate();
    function sair(){
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <>
            <div className=" sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                <div
                    className="offcanvas-md offcanvas-end  yr-cor-fundo-sidebar yr-sidebar "
                    tabIndex="-1"
                    id="sidebarMenu"
                    aria-labelledby="sidebarMenuLabel"
                >
                    <div className="offcanvas-header">

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            data-bs-target="#sidebarMenu"
                            aria-label="Close"
                        ></button>

                    </div>
                    <div className='align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none cabecalho'>
                        <img className="yr-margin-logo rounded-circle yr-tamanho-logo-mobile" src="/src/assets/img/HF.png" alt="logo dashboard" />
                        <div className="d-flex flex-column">
                            <span className="fs-4 ms-3 yr-font-titulo ">Sabor Art</span>
                            <span className="yr-tamanho-subtitulo ms-3 yr-font-subtitulo ">Dashboard de Gestão</span>
                        </div>
                    </div>

                    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                        <ul className="nav flex-column">
                            <li className="mb-1 ms-4 ms-md-2">
                                <Link className="text-decoration-none ms-4 d-flex align-items-center border-none rounded-2 mt-md-2" to="/">
                                    <div className="yr-tamanho-botao-dashboard ">
                                        <i className="bi bi-bar-chart yr-cor-icone-dashboard-sidebar fs-5 "></i>
                                        <span className='yr-font-sidebar-opcoes fs-6 ms-4 text-black'>Dashboard</span>
                                    </div>
                                </Link>

                            </li>

                            <hr className="my-2" />

                            <li className="mb-1 ms-4 ms-md-3">
                                <button
                                    className="btn btn-toggle collapsed rounded border-0 d-inline-flex align-items-center INTEIRO"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#clientes-collapse"
                                    aria-expanded="false"
                                >
                                    <div className='ms-3 ms-md-1 me-3 me-md-4'> 
                                    <i class="bi bi-people yr-cor-icone-clientes fs-5"></i></div>
                                    <div className='yr-font-sidebar-opcoes yr-margin-top-sidebar'>Clientes </div>
                                </button>
                                <div className="collapse" id="clientes-collapse">

                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li>
                                            <Link
                                                to="/cadastrar-cliente"
                                                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            >
                                                <i class="bi bi-person yr-cor-opcoes-sidebar-expandida ms-3"></i>
                                                <span className='yr-cor-opcoes-sidebar-expandida ms-2'>Cadastrar</span>
                                            </Link
                                            >
                                        </li>
                                        <li>
                                            <Link
                                                to="/listar-cliente"
                                                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            >
                                                <i class="bi bi-list-task yr-cor-opcoes-sidebar-expandida ms-3"></i>
                                                <span className='yr-cor-opcoes-sidebar-expandida ms-2'>Listar</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <hr className="my-2" />

                            <li className="mb-1 ms-4 ms-md-3">
                                <button
                                    className="btn btn-toggle collapsed  rounded border-0 d-inline-flex align-items-center"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#funcionarios-collapse"
                                    aria-expanded="false"
                                >
                                    <div className='ms-3 ms-md-1 me-3 me-md-4'> <i class="bi bi-people yr-cor-icone-funcionarios fs-5"></i></div>
                                    <div className='yr-font-sidebar-opcoes yr-margin-top-sidebar'>Funcionários</div>


                                </button>
                                <div className="collapse" id="funcionarios-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li>
                                            <Link
                                                to="/cadastrar-funcionario"
                                                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            >
                                                <i class="bi bi-person yr-cor-opcoes-sidebar-expandida ms-3"></i>
                                                <span className='yr-cor-opcoes-sidebar-expandida ms-2'>Cadastrar</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/listar-funcionario"
                                                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            >
                                                <i class="bi bi-list-task yr-cor-opcoes-sidebar-expandida ms-3"></i>
                                                <span className='yr-cor-opcoes-sidebar-expandida ms-2'>Listar</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <hr className="my-2" />

                            <li className="mb-1 ms-4 ms-md-3">
                                <button
                                    className="btn btn-toggle collapsed  rounded border-0 d-inline-flex align-items-center "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#produtos-collapse"
                                    aria-expanded="false"
                                >
                                    <div className='ms-3 ms-md-1 me-3 me-md-4'> <i class="bi bi-box-seam yr-cor-icone-produtos fs-5"></i></div>
                                    <div className='yr-font-sidebar-opcoes yr-margin-top-sidebar'>Produtos</div>


                                </button>
                                <div className="collapse" id="produtos-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li>
                                            <Link
                                                to="/cadastrar-produto"
                                                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            >
                                                <i class="bi bi-person yr-cor-opcoes-sidebar-expandida ms-3"></i>
                                                <span className='yr-cor-opcoes-sidebar-expandida ms-2'>Cadastrar</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            >
                                                <i class="bi bi-list-task yr-cor-opcoes-sidebar-expandida ms-3"></i>
                                                <span className='yr-cor-opcoes-sidebar-expandida ms-2'>Listar</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <hr className="my-2" />

                            <li className="mb-1 ms-4 ms-md-3">
                                <button
                                    className="btn btn-toggle collapsed  rounded border-0 d-inline-flex align-items-center"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#vendas-collapse"
                                    aria-expanded="false"
                                >
                                    <div className='ms-3 ms-md-1 me-3 me-md-4'> <i class="bi bi-cart2 yr-cor-icone-vendas fs-5"></i></div>
                                    <div className='yr-font-sidebar-opcoes yr-margin-top-sidebar'>Vendas</div>


                                </button>
                                <div className="collapse" id="vendas-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li>
                                            <Link
                                                to="#"
                                                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            >
                                                <i class="bi bi-person yr-cor-opcoes-sidebar-expandida ms-3"></i>
                                                <span className='yr-cor-opcoes-sidebar-expandida ms-2'>Cadastrar</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                            >
                                                <i class="bi bi-list-task yr-cor-opcoes-sidebar-expandida ms-3"></i>
                                                <span className='yr-cor-opcoes-sidebar-expandida ms-2'>Listar</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        </ul>

                        <hr className="my-2" />

                        <ul className="nav flex-column">
                            <li className="nav-item mb-1 ms-4 ms-md-2">
                                <Link className="text-decoration-none ms-4 d-flex align-items-center " to={`/login`} onClick={sair}>
                                    <div className="yr-tamanho-botao-dashboard mt-2">
                                        <i className="bi bi-door-closed fs-5 yr-cor-icone-sair"  aria-hidden="true"></i>
                                        <span className='yr-font-sidebar-opcoes fs-6 mt-3 ms-4 text-black'>Sair</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <hr className="my-2" />
                    </div>
                </div>
            </div>
            
        </>
    );
}


export default SidebarCollapse;