function Card(props) {
    return (
        <>
            <div class="col-12 col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm yr-color-card yr-margin-top-card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                        
                            <h6 class="text-muted mb-4 w-100">{props.nome}<i class={props.icon}></i></h6>
                            <h3 class="mt-1">{props.total}</h3>
                            <small class="text-dark text-muted">
                                    <i class={props.sucesso}></i><span class={props.color}>{props.status}{props.statusVendas}{props.statusClientes}{props.statusAvaliacao}%</span> vs semana anterior 
                            </small>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
export default Card;