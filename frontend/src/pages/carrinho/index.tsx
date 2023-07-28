import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import NavBarCustom from "../../components/navbar";
import { RootState } from "../../redux/store";
import "./index.css";
import { addProduto, removeAllQuantityOfProduct, removeProduto} from "../../redux/slices/carrinho.slice";

export default function Carrinho() {
  const dispatch = useDispatch();

  function addProductToCart(product: any){
      dispatch(addProduto(product));
  }

  function removeProductFromCart(product: any){
      dispatch(removeProduto(product));
  }

  function remove(product: any){
    dispatch(removeAllQuantityOfProduct(product));
  }

  const produto = useSelector((state: RootState) => state.carrinho);


  return (
    <div className="containerCart">
      <div style={{ width: "100%" }}>
        <NavBarCustom />
      </div>
      <h2>CARRINHO</h2>

      <table className="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Product name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    {produto.produtos.map((produto, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco * produto.quantidade}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => removeProductFromCart(produto)} disabled={produto.quantidade <= 1}>-</button>
                  {produto.quantidade}
                  <button className="btn btn-primary" onClick={() => addProductToCart(produto)}>+</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => remove(produto)}>Remove</button>
                </td>
              </tr>
            );
          })}
  </tbody>
</table>
      
    </div>
  );
}
