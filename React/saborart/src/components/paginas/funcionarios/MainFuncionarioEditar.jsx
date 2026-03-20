import { useParams } from "react-router";
import { useState, useActionState, useEffect } from "react";

function MainFuncionarioEditar() {

    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataContratacao, setDataContratacao] = useState('');
    const [remuneracao, setRemuneracao] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    let urlViaCep = `https://viacep.com.br/ws/${cep}/json/ `;

    async function buscarDadosCep() {
        try {
            let resposta = await fetch(urlViaCep);
            let dadosCep = await resposta.json();
            setRua(dadosCep.logradouro);
            setBairro(dadosCep.bairro);
            setEstado(dadosCep.estado);
            setCidade(dadosCep.localidade);
            console.log(dadosCep);
        }
        catch (erro) {
            console.log(erro);
        }
    }

    const [estadoCadastro, acaoCadastro, pendente] = useActionState(
        async (estadoAnterior, formData) => {
            let dadosFuncionario = JSON.stringify(

                Object.fromEntries(formData.entries()));

            await new Promise((resolve) => setTimeout(
                resolve, 2000
            ));
            console.log(dadosFuncionario);

            try {
                let resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                    method: 'POST',
                    body: dadosFuncionario,
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
                        setSobrenome('');
                        setBairro('');
                        setCep('');
                        setCidade('');
                        setComplemento('');
                        setCpf('');
                        setDataContratacao('');
                        setEmail('');
                        setEstado('');
                        setNumero('');
                        setRemuneracao('');
                        setRua('');
                        setSenha('');
                        setTelefone('');
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

    useEffect(() => {
        async function getDadosFuncionario() {
            let resposta = await
                fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            let dadosFuncionario = await resposta.json();
            console.log(dadosFuncionario);
            setNome(dadosFuncionario.name);
            setSobrenome(dadosFuncionario.username);
            setEmail(dadosFuncionario.email);
            setRua(dadosFuncionario.address.street);
            setCidade(dadosFuncionario.address.city);
            setEstado(dadosFuncionario.address.suite);
            setTelefone(dadosFuncionario.phone);

        }
        getDadosFuncionario();

    }, [id]);


    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 yr-color-fundo">
                <div className="w-auto h-auto yr-cor-fundo-cadastrar-funcionarios mt-5">
                    <div className="mt-4">
                        <span className="fs-6 yr-font-arimo-regular d-block ms-4 ">Editar Funcionários</span>
                        <span className="fs-6 d-block yr-font-arimo-regular yr-cor-subtitulo-clientes ms-4">Preencha com os novos dados do funcionário</span>
                    </div>
                    <form action={acaoCadastro}>
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label mt-4 yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="nome">Nome:</label>
                                <input value={nome} onChange={(e) => setNome(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="nome" id="nome" placeholder="ex: Sabor" />
                            </div>

                            <div className="col-12 col-md-6">
                                <label className="ms-md-0 form-label mt-4 yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="sobrenome">Sobrenome:</label>
                                <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} className="rounded-0 form-control ms-md-0 w-75 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="sobrenome" id="sobrenome" placeholder="ex: Art" />
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="telefone">Telefone:</label>
                                <input value={telefone} onChange={(e) => setTelefone(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="telefone" id="telefone" placeholder="ex: (14) 1234-43210" />
                            </div>

                            <div className="col-12 col-md-6">
                                <label className="ms-md-0 form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="cpf">CPF:</label>
                                <input value={cpf} onChange={(e) => setCpf(e.target.value)} className="rounded-0 form-control ms-md-0 w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="cpf" id="cpf" placeholder="ex: 123.456.789-08" />
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="email">Email:</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-0 form-control w-75 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="email" name="email" id="email" placeholder="ex:  saborart@gmail.com" />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="ms-md-0 form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="cpf">Senha:</label>
                                <input value={senha} onChange={(e) => setSenha(e.target.value)} className="rounded-0 form-control ms-md-0 w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="senha" id="senha" placeholder="ex: mudar123" />
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="email">Data Contratação:</label>
                                <input value={dataContratacao} onChange={(e) => setDataContratacao(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="date" name="email" id="email" placeholder="ex:  02/03/1990" />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="ms-md-0 form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="cpf">Remuneração:</label>
                                <input value={remuneracao} onChange={(e) => setRemuneracao(e.target.value)} className="rounded-0 form-control ms-md-0 w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="senha" id="senha" placeholder="ex: 2.800" />
                            </div>
                        </div>

                        <div className="yr-margin-top-endereco ms-4 ms-md-5">
                            <span className="yr-font-arimo-regular fs-6">Endereço:</span>
                        </div>

                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label mt-4 mt-md-5 yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="cep">CEP:</label>
                                <input value={cep} onBlur={(e) => buscarDadosCep(e.target.value)} onChange={(e) => setCep(e.target.value)} className="rounded-0 form-control w-75 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="cep" id="cep" placeholder="ex:  17 400-000" />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label mt-4 mt-md-5 yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="cidade">Cidade:</label>
                                <input value={cidade} onChange={(e) => setCidade(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="cidade" id="cidade" placeholder="ex: Garça" />
                            </div>


                        </div>

                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className=" form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="estado">Estado:</label>
                                <input value={estado} onChange={(e) => setEstado(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="estado" id="estado" placeholder="ex: São Paulo" />
                            </div>

                            <div className="col-12 col-md-6">
                                <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="rua">Rua:</label>
                                <input value={rua} onChange={(e) => setRua(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="rua" id="rua" placeholder="ex: Labieno da Costa Machado" />
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label yr-mt  yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="bairro">Bairro:</label>
                                <input value={bairro} onChange={(e) => setBairro(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="bairro" id="bairro" placeholder="ex: Sol Nascente" />
                            </div>

                            <div className="col-12 col-md-6">
                                <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="numero">N°:</label>
                                <input value={numero} onChange={(e) => setNumero(e.target.value)} className="rounded-0 form-control w-25 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="numero" id="numero" placeholder="ex: 123" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-cadastrar-funcionario" htmlFor="complemento">Complemento:</label>
                            <input value={complemento} onChange={(e) => setComplemento(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-cor-borda-input-cadastrar-funcionario yr-font-inter-regular yr-cor-input-cadastrar-funcionario" type="text" name="complemento" id="complemento" placeholder="ex: Casa, Apartamento, Sobrado, etc." />
                        </div>

                        <div class=" yr-mt-botao d-grid gap-2 col-6 mx-auto yr-margin-final yr-cor-botao-cadastrar-funcionario rounded-3 ">
                            <button disabled={pendente} class="btn yr-cor-escrita-botao-cadastrar-funcionario yr-font-inter-regular fs-6 " type="submit">
                                {pendente ? 'Atualizando...' : 'Atualizar'}
                            </button>
                        </div>
                    </form>
                </div >
            </main >
        </>
    );
}
export default MainFuncionarioEditar;