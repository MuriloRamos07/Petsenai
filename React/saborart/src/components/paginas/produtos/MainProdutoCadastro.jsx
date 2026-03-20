import { useState, useActionState } from "react";

function MainProdutoCadastro() {

    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [tipo, setTipo] = useState('');
    const [valor, setValor] = useState('');
    const [ingredientes, setIngredientes] = useState('');

    const [estadoCadastro, acaoCadastro, pendente] = useActionState(
        async (estadoAnterior, formData) => {
            let dadosAluno = JSON.stringify(

                Object.fromEntries(formData.entries()));

            await new Promise((resolve) => setTimeout(
                resolve, 2000
            ));
            console.log(dadosAluno);

            try {
                let resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: dadosAluno,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                console.log(resposta);
                console.log(resposta.status);
                console.log(resposta.ok);
                if (resposta.status === 201) {
                    console.log('Resposta do servidor ok!');
                    if (resposta.ok === true) {
                        alert('Cadastrado com sucesso');
                        setNome('');
                        setCodigo('');
                        setIngredientes('');
                        setTipo('');
                        setValor('');
                    } else {
                        alert('Erro ao cadastrar!');
                    }
                } else {
                    console.log('Resposta do servidor erro!');
                }
            } catch (erro) {
                console.log(erro);
            }
        }
    );

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 yr-color-fundo">
                <div className="w-auto h-auto yr-cor-fundo-cadastro-produtos mt-5">
                    <div className="mt-4">
                        <span className="fs-6 yr-font-arimo-regular d-block ms-4 ">Cadastro Produtos:</span>
                        <span className="fs-6 d-block yr-font-arimo-regular yr-cor-subtitulo-clientes ms-4">Preencha com os dados do produto</span>
                    </div>
                    <form action={acaoCadastro}>
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label mt-4 yr-ms yr-font-inter-regular yr-cor-label-cadastrar-produto" htmlFor="nome">Nome:</label>
                                <input value={nome} onChange={(e) => setNome(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-produto yr-font-inter-regular yr-cor-input-cadastrar-produto" type="text" name="nome" id="nome" placeholder="ex: Sabor" />
                            </div>

                            <div className="col-12 col-md-6">
                                <label className="ms-md-0 form-label mt-4 yr-ms yr-font-inter-regular yr-cor-label-cadastrar-produto" htmlFor="sobrenome">Código:</label>
                                <input value={codigo} onChange={(e) => setCodigo(e.target.value)} className="rounded-0 form-control ms-md-0 w-75 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-produto yr-font-inter-regular yr-cor-input-cadastrar-produto" type="text" name="codigo" id="codigo" placeholder="ex: 12345678" />
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-produto" htmlFor="telefone">Tipo:</label>
                                <input value={tipo} onChange={(e) => setTipo(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-produto yr-font-inter-regular yr-cor-input-cadastrar-produto" type="text" name="tipo" id="tipo" placeholder="ex: picole" />
                            </div>

                            <div className="col-12 col-md-6">
                                <label className="ms-md-0 form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-produto" htmlFor="cpf">Valor:</label>
                                <input value={valor} onChange={(e) => setValor(e.target.value)} className="rounded-0 form-control ms-md-0 w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-produto yr-font-inter-regular yr-cor-input-cadastrar-produto" type="text" name="valor" id="valor" placeholder="ex: 3.50" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-produto" htmlFor="complemento">Ingredientes:</label>
                            <input value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} required className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-produto yr-font-inter-regular yr-cor-input-cadastrar-produto" type="text" name="ingredientes" id="ingredientes" placeholder="ex: Leite, uva, leite condensado..." />
                        </div>

                        <div class=" yr-mt-botao d-grid gap-2 col-6 mx-auto yr-margin-final yr-cor-fundo-botao-cadastrar-produto rounded-3 ">
                            <button disabled={pendente} class="btn yr-cor-bota-escrita-cadastrar-produto yr-font-inter-regular fs-6 " type="submit">
                                {pendente ? 'Cadastrando...' : 'Cadastrar'}
                            </button>
                        </div>
                    </form>
                </div >
            </main >
        </>
    );
}
export default MainProdutoCadastro;