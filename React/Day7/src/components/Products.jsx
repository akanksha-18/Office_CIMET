import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      const result = await axios.get("https://fakestoreapi.com/products");
      setData(result.data);
    }
    fetch();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product) => (
          <li key={product.id} className="bg-white border rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600 mt-1">{product.description}</p>
            <p className="text-xl font-bold mt-2">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
