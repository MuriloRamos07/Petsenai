import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import '../App.css'

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        let logado = localStorage.getItem('token');
        if (logado) {
            navigate('/');
        }
    }, []);
    async function fazerLogin() {
        try {
            let resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({ email: email, senha: senha }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            console.log(resposta);
            if (resposta.status === 201) {
                console.log('Resposta do servidor ok!');
                if (resposta.ok === true) {
                    // gera um token aleatório 
                    let tokenBackend = Math.random();
                    // salva no armazenamento local do navegado (Mozilla, Chrome etc)
                    localStorage.setItem('token', tokenBackend);

                    navigate('/');

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


    return (
        <>
            <div className="d-flex align-items-center py-4 bg-body-tertiary pv-img-login vh-100">


                <main className="form-signin w-100 m-auto pv-caixa-login  rounded-4">
                    <form>
                        <div className="d-flex justify-content-center">
                            <img className="pv-logo mb-3 mt-1 " src="/src/assets/img/logotipo2.png" alt="Imagem da logotipo da gelateria Sabor Art, com as letras azuis e com uma casquinha quase que escondida" />
                        </div>
                        <div className="form-floating">
                            <div className="pv-caixa-email fs-5 mb-1 ">
                                <label className="yr-font-label-login fs-6" htmlFor="email">Email:</label>
                            </div>
                            <div className="pv-caixa-email input">
                                <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" placeholder="Ex:email@gmail.com" required />
                            </div>
                        </div>
                        <div className="form-floating">
                            <div className="pv-caixa-senha fs-5 mb-1 mt-3">
                                <label className="yr-font-label-login fs-6" htmlFor="senha">Senha:</label>
                            </div>
                            <div className="pv-caixa-senha input mb-4" >
                                <input className="form-control" value={senha} onChange={(e) => setSenha(e.target.value)} type="text" name="senha" id="senha" placeholder="Digite sua senha..." required />
                            </div>
                        </div>

                        <div className="text-center w-zoom-none">
                            <button className="pv-botao w-100 border-0 yr-cor-botao-login rounded-2 yr-font-label-login yr-cor-escrita-login" onClick={fazerLogin}>Entrar</button>
                        </div>


                    </form>
                </main>

            </div>
        </>

    );
}
export default Login;