import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../redux/store";
import GridProdutos from "./gridProdutos";
import TableProdutos from "./tableProdutos";

export default function ProdutosList() {

  const { isAdmin } = useSelector((state: RootState) => state.apiLogin);
  
  if (isAdmin) {
    return <TableProdutos />;
  } else{
    return <GridProdutos />;
  }
}
