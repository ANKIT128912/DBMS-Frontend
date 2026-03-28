import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api.js";
import ProductForm from "../components/ProductForm.jsx";

function Dashboard() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchData();
  };

  return (
    <div style={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1>Dashboard</h1>

      {/* ADD FORM */}
      <ProductForm refresh={fetchData} />

      {/* PRODUCT LIST */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {products.map((p) => (
          <div key={p.product_id} style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "10px"
          }}>
            <h3>{p.name}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ₹{p.price}</p>
            <p>Stock: {p.stock}</p>

            <button onClick={() => handleDelete(p.product_id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;