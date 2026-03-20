import { Link } from "react-router";
function MainListarAluno() {
  
    const clientes = [
        { id: "1", nome: "Pedro", tel: "14991474261", cpf: "49033822814", rua: "Casa di conti", numCasa: 20, formaPag: "Dinheiro" },
        { id: "2", nome: "William", tel: "14991474261", cpf: "49033822814", rua: "Casa di conti", numCasa: 30, formaPag: "Cartão" },
        { id: "3", nome: "Vitória", tel: "14991474261", cpf: "49033822814", rua: "Casa di conti", numCasa: 40, formaPag: "Cartão" },
        { id: "4", nome: "Yasmin", tel: "14991474261", cpf: "49033822814", rua: "Casa di conti", numCasa: 50, formaPag: "PIX" },
        { id: "5", nome: "Ricardo", tel: "14991474261", cpf: "49033822814", rua: "Casa di conti", numCasa: 60, formaPag: "Dinheiro" },
    ]

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 yr-color-fundo">
                <div className="pv-cores-listar mt-5">
                    <div>
                        <span className="d-block fs-4">Listar:</span>
                        <span className="d-block fs-6">Lista de clientes</span>
                    </div>
                    <table className="table table-bordered">
                        <thead className="pv-titulo-lista">
                            <tr>
                                <th>id:</th>
                                <th>Nome:</th>
                                <th>Telefone:</th>
                                <th>CPF:</th>
                                <th>Rua:</th>
                                <th>N° casa:</th>
                                <th>Forma-pag.</th>
                                <th>Ações:</th>
                            </tr>
                        </thead>
                        <tbody className="pv-lista">
                            {
                                clientes.map((cliente) => (
                                    <tr key={cliente.id}>
                                        <td>{cliente.id}</td>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.tel}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.rua}</td>
                                        <td>{cliente.numCasa}</td>
                                        <td>{cliente.formaPag}</td>
                                        <td>
                                            <Link className="pv-listar-excluir bi bi-trash3" to={`/editar-aluno/${cliente.id}`}></Link>
                                            <Link className="bi bi-pencil-square mt-0" to={`/editar-cliente/${cliente.id}`}></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </main>
        </>
    );
}
export default MainListarAluno;