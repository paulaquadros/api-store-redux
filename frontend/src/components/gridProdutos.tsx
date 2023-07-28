import { useDispatch, useSelector } from "react-redux";
import { addProduto } from "../redux/slices/carrinho.slice";
import { RootState } from "../redux/store";

export default function GridProdutos() {
    const { produtos } = useSelector((state: RootState) => state.apiProduto);
    const dispatch = useDispatch();

    function inserirCarrinho(product: any) {
        dispatch(addProduto(product));
      }
      
    return (
    <div className="row p-3">
        {produtos.map((produto, index) => {
            return (
                <div className="card col-4" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{produto.nome}</h5>
                        <p className="card-text">R$ {produto.preco}</p>
                        <p className="card-text">Estoque: {produto.estoque}</p>
                        <button className="btn btn-primary" onClick={() => inserirCarrinho(produto)}>Adicionar ao carrinho</button>
                    </div>
                </div>
            );
        }
    )}
    </div>
    )
}