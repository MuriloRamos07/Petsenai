import { useState, useActionState } from "react";

function MainClienteCadastro() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
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
            let dadosCliente = JSON.stringify(

                Object.fromEntries(formData.entries()));

            await new Promise((resolve) => setTimeout(
                resolve, 2000
            ));
            console.log(dadosCliente);

            try {
                let resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: dadosCliente,
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
                        setEmail('');
                        setEstado('');
                        setTelefone('');
                        setRua('');
                    
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
                <div className="w-auto h-auto yr-cor-fundo-cadastro mt-5">
                    <div className="mt-4">
                        <span className="fs-6 yr-font-arimo-regular d-block ms-4 ">Cadastro Clientes:</span>
                        <span className="fs-6 d-block yr-font-arimo-regular yr-cor-subtitulo-clientes ms-4">Preencha com os dados do cliente</span>
                    </div>
                    <form action={acaoCadastro}>
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label mt-4 yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="nome">Nome:</label>
                                <input value={nome} onChange={(e) => setNome(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="text" name="nome" id="nome" placeholder="ex: Sabor" required />
                            </div>

                            <div className="col-12 col-md-6">
                                <label className="ms-md-0 form-label mt-4 yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="sobrenome">Sobrenome:</label>
                                <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} className="rounded-0 form-control ms-md-0 w-75 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="text" name="sobrenome" id="sobrenome" placeholder="ex: Art" required/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="telefone">Telefone:</label>
                                <input value={telefone} onChange={(e) => setTelefone(e.target.value)} className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="text" name="telefone" id="telefone" placeholder="ex: (14) 1234-43210" required/>
                            </div>

                            <div className="col-12 col-md-6">
                                <label className="ms-md-0 form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="cpf">CPF:</label>
                                <input value={cpf} onChange={(e) => setCpf(e.target.value)} required className="rounded-0 form-control ms-md-0 w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="text" name="cpf" id="cpf" placeholder="ex: 123.456.789-08" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="email">Email:</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)}  required className="rounded-0 form-control w-75 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="email" name="email" id="email" placeholder="ex:  saborart@gmail.com" />
                        </div>

                        <div className="yr-margin-top-endereco ms-4 ms-md-5">
                            <span className="yr-font-arimo-regular fs-6">Endereço:</span>
                        </div>

                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label mt-4 mt-md-5 yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="cep">CEP:</label>
                                <input value={cep} onBlur={(e) => buscarDadosCep(e.target.value)} onChange={(e) => setCep(e.target.value)} required className="rounded-0 form-control w-75 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="text" name="cep" id="cep" placeholder="ex:  17 400-000" />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label mt-4 mt-md-5 yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="cidade">Cidade:</label>
                                <input value={cidade} onChange={(e) => setCidade(e.target.value)} required className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="text" name="cidade" id="cidade" placeholder="ex: Garça" />
                            </div>


                        </div>

                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className=" form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="estado">Estado:</label>
                                <input value={estado} onChange={(e) => setEstado(e.target.value)} required className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="text" name="estado" id="estado" placeholder="ex: São Paulo" />
                            </div>

                            <div className="col-12 col-md-6">
                                <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="rua">Rua:</label>
                                <input value={rua} onChange={(e) => setRua(e.target.value)} required className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="text" name="rua" id="rua" placeholder="ex: Labieno da Costa Machado" />
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label yr-mt  yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="bairro">Bairro:</label>
                                <input value={bairro} onChange={(e) => setBairro(e.target.value)} required  className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="text" name="bairro" id="bairro" placeholder="ex: Sol Nascente" />
                            </div>

                            <div className="col-12 col-md-6">
                                <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="numero">N°:</label>
                                <input value={numero} onChange={(e) => setNumero(e.target.value)} required className="rounded-0 form-control w-25 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="text" name="numero" id="numero" placeholder="ex: 123" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <label className="form-label yr-mt yr-ms yr-font-inter-regular yr-cor-label-formulario" htmlFor="complemento">Complemento:</label>
                            <input value={complemento} onChange={(e) => setComplemento(e.target.value)} required className="rounded-0 form-control w-50 yr-ms bg-transparent border-bottom border-top-0 border-end-0 border-start-0 shadow-none yr-borda-input-cor yr-font-inter-regular yr-cor-input-formulario" type="text" name="complemento" id="complemento" placeholder="ex: Casa, Apartamento, Sobrado, etc." />
                        </div>

                        <div class=" yr-mt-botao d-grid gap-2 col-6 mx-auto yr-margin-final yr-cor-botao-cadastrar rounded-3 yr-cor-hover">
                            <button disabled={pendente} class="btn yr-cor-escrita-botao yr-font-inter-regular fs-6 " type="submit">
                            {pendente ? 'Cadastrando...' : 'Cadastrar'}
                            </button>
                        </div>
                    </form>
                </div >
            </main >
        </>
    );
}
export default MainClienteCadastro;