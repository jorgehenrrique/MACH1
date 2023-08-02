// Criando tipagem de dados por interface
interface Product {
  id: string;
  productName: string;
  productDescription: string;
  productCategory: string;
  productCost: number;
  productTags?: string[];
  productRelated?: number[];
}

export default Product;
