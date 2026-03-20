import { Link } from "react-router";

function MainListarFuncionarios() {

    const clientes = [
        { id: "1", nome: "Pedro", sobrenome: "Vieira", tel: "14991474261", cpf: "49033822814", email: "nicocoreano8@gmail.com", senha: "222", dataContratacao: "20/01/2026", remuneracao: "R$7000", cep: "17400100", cidade: "Garça", estado: "SP", rua: "Geraldo Pereira dos Santos", bairro: "s", numCasa: 10, complemento: "casa" },
        { id: "1", nome: "Pedro", sobrenome: "Vieira", tel: "14991474261", cpf: "49033822814", email: "nicocoreano8@gmail.com", senha: "222", dataContratacao: "20/01/2026", remuneracao: "R$7000", cep: "17400100", cidade: "Garça", estado: "SP", rua: "Geraldo Pereira dos Santos", bairro: "s", numCasa: 10, complemento: "casa" },
        { id: "2", nome: "William", sobrenome: "Veira", tel: "14991474261", cpf: "49033822814", rua: "Casa di conti", numCasa: 30, formaPag: "Cartão" },
        { id: "3", nome: "Vitória", sobrenome: "Vieira", tel: "14991474261", cpf: "49033822814", rua: "Casa di conti", numCasa: 40, formaPag: "Cartão" },
        { id: "4", nome: "Yasmin", tel: "14991474261", cpf: "49033822814", rua: "Casa di conti", numCasa: 50, formaPag: "PIX" },
        { id: "5", nome: "Ricardo", tel: "14991474261", cpf: "49033822814", rua: "Casa di conti", numCasa: 60, formaPag: "Dinheiro" },
    ]

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 yr-color-fundo">
                <div className="pv-cores-listar-funcionarios mt-5">
                    <div>
                        <span className="d-block fs-4 text-light ms-4 mt-1">Listar:</span>
                        <span className="d-block fs-6 text-light ms-4 mt-1">Lista de funcionarios</span>
                    </div>
                    <div className="table-responsive ">
                        <table className="pv-table-funcionarios table-bordered ">
                            <thead className="pv-titulo-lista-funcionarios">
                                <tr>
                                    <th>id:</th>
                                    <th>Nome:</th>
                                    <th>Telefone:</th>
                                    <th>CPF:</th>
                                    <th>email:</th>
                                    <th>Ações:</th>
                                </tr>
                            </thead>
                            <tbody className="pv-lista-funcionarios table-hover">
                                {
                                    clientes.map((cliente) => (
                                        <tr key={cliente.id}>
                                            <td style={{ maxWidth: 'auto' }}>{cliente.id}</td>
                                            <td style={{maxWidth: 'auto'}}>{cliente.nome}</td>
                                            <td style={{ maxWidth: 'auto' }}>{cliente.tel}</td>
                                            <td style={{maxWidth: 'auto'}}> {cliente.cpf}</td>
                                            <td style={{maxWidth: 'auto'}}> {cliente.email}</td>
                                            <td>
                                                <Link className="pv-listar-excluir bi bi-trash3" to={`/editar-aluno/${cliente.id}`}></Link>
                                                <Link className="bi bi-pencil-square mt-0" to={`/editar-aluno/${cliente.id}`}></Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}
export default MainListarFuncionarios