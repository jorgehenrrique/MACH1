import { useState, useMemo } from 'react';

export default function ProductList() {
  const [productList, setProductList] = useState(['Product-1', 'Product-2', 'Product-3', 'Product-4']);

  const addProduct = () => {
    setProductList([...productList, 'Product-' + (productList.length + 1)]);
  };
  const rmvProduct = () => {
    setProductList(productList.slice(0, -1));
  };

  const products = useMemo(() => {
    return (
      <ul>
        {productList.map((product, idx) => {
          return (
            <li key={idx}>{product}</li>
          );
        })}
      </ul>
    );
  }, [productList]);

  return (
    <>
      <div className="container">
        <h2>Aplicando useMemo</h2>
        <button onClick={addProduct}>+</button>
        <button onClick={rmvProduct}>-</button>

        {products}
      </div>
    </>
  );
}
