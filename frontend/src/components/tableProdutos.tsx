import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import React from "react";

export default function TableProdutos() {

    const { produtos } = useSelector((state: RootState) => state.apiProduto);

    return (
        <table className="table table-responsive table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th scope="col">Estoque</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto, index) => {
          return (
            <tr key={produto.id}>
              <th scope="row">{index + 1}</th>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco}</td>
              <td>{produto.estoque}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    );
}