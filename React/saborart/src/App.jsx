import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/dashboard.css'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//import './assets/js/dashboard'
import Card from './components/Card'
import Home from './components/paginas/home/Home'
import ClienteCadastro from './components/paginas/clientes/ClienteCadastro'
import { Route, Routes } from 'react-router'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import FuncionarioCadastro from './components/paginas/funcionarios/FuncionarioCadastro'
import Login from './components/Login'
import ProdutoCadastro from './components/paginas/produtos/ProdutoCadastro'
import ListarCliente from './components/paginas/clientes/ListarCliente'
import ClienteEditar from './components/paginas/clientes/ClienteEditar'
import ListaFuncionarios from './components/paginas/funcionarios/ListarFuncionarios'


function App() {

  useEffect(() => {
    toast.success('Aluno cadastrado com sucesso!');
    toast.error('Erro ao cadastrar aluno!');
  }, []);

  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastrar-cliente' element={<ClienteCadastro />} />
        <Route path='/cadastrar-funcionario' element={<FuncionarioCadastro />} />
        <Route path='/listar-cliente' element={<ListarCliente/>}/>
        <Route path='/editar-cliente/:id' element={<ClienteEditar/>}/>
        <Route path='/cadastrar-produto' element={<ProdutoCadastro/>}/>
        <Route path='/listar-funcionario' element={<ListaFuncionarios/>}/>
      </Routes>
    </>
  )
}
export default App;
