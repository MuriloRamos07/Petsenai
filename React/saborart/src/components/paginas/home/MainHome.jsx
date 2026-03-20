import Card from "../../Card";
import ChartLine from "../../ChartLine";
import ChartPie from "../../ChartPie";
import SimpleBarChart from "../../BarChart";
import BarChartHorizontal from "../../BarChartHorizontal";

function MainHome() {
    let status = 18.3;
    let statusVendas = 13.5;
    let statusClientes = 10.8;
    let statusAvaliacao = 0.1;

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 yr-color-fundo ">
                <div className="row">
                    <Card color="text-success" status={status} sucesso="bi bi-graph-up-arrow text-success" icon="bi bi-currency-dollar text-success fs-6 float-end yr-icon" total="R$ 4.185" nome="Receita total" />
                    <Card color="text-success" statusVendas={statusVendas} sucesso="bi bi-graph-up-arrow text-success" icon="bi bi-cart2 fs-6 float-end yr-icon text-primary" total="547" nome="Vendas" />
                    <Card icon="bi bi-people fs-6 float-end yr-icon yr-color-cliente" sucesso="bi bi-graph-up-arrow text-success" color="text-success" statusClientes={statusClientes} total="512" nome="Clientes" />
                    <Card icon="bi bi-star fs-6 float-end yr-icon text-warning" statusAvaliacao={statusAvaliacao} total="4.9" nome="Avaliação Média" sucesso="bi bi-graph-up-arrow text-success" color="text-success" />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ChartLine />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ChartPie />
                    </div>
                    <div className="col-md-6">
                        <SimpleBarChart/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                    <BarChartHorizontal/>
                    </div>
                </div>
            </main>
        </>
    );
}
export default MainHome;