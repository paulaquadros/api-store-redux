import { createSlice } from "@reduxjs/toolkit";

interface ProdutoCarrinhoInterface {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
}

export const carrinhoSlice = createSlice({
  name: "carrinhoSlice",
  initialState: {
    produtos: [] as ProdutoCarrinhoInterface[],
  },

  reducers: {
    addProduto(state, action) {
      const produto = state.produtos.find((p) => p.id === action.payload.id);

      if (produto) {
        produto.quantidade++;
      } else {
        state.produtos.push({ ...action.payload, quantidade: 1 });
      }
      return state;
    },
    removeProduto(state, action) {
      const produto = state.produtos.find((p) => p.id === action.payload.id);

      if (produto) {
        produto.quantidade--;
      }
    },
    removeAllQuantityOfProduct(state, action) {
      const index = state.produtos.findIndex((p) => p.id === action.payload.id);

      if (index !== -1) {
        state.produtos.splice(index, 1);
      }
    },
  },
});

export const { addProduto, removeProduto, removeAllQuantityOfProduct } =
  carrinhoSlice.actions;
export default carrinhoSlice.reducer;
