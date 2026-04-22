import { useEffect, useState } from "react";
import {
  getProducts,
  deleteProduct,
  getUsers,
  getSuppliers,
  getOrders
} from "../services/api.js";

import ProductForm from "../components/ProductForm.jsx";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    const productData = await getProducts();
    const userData = await getUsers();
    const supplierData = await getSuppliers();
    const orderData = await getOrders();

    setProducts(productData);
    setUsers(userData);
    setSuppliers(supplierData);
    setOrders(orderData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchData();
  };

  const cardStyle = {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "40px"
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh"
      }}
    >
      <h1>Dashboard</h1>

      {/* ADD PRODUCT FORM */}
      <ProductForm refresh={fetchData} />

      {/* PRODUCTS */}
      <h2 style={{ marginTop: "30px" }}>Products</h2>
      <div style={gridStyle}>
        {products.map((p) => (
          <div key={p.product_id} style={cardStyle}>
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

      {/* USERS */}
      <h2>Users</h2>
      <div style={gridStyle}>
        {users.map((u) => (
          <div key={u.user_id} style={cardStyle}>
            <h3>{u.name}</h3>
            <p>Email: {u.email}</p>
            <p>Password: {u.password}</p>
          </div>
        ))}
      </div>

      {/* SUPPLIERS */}
      <h2>Suppliers</h2>
      <div style={gridStyle}>
        {suppliers.map((s) => (
          <div key={s.supplier_id} style={cardStyle}>
            <h3>{s.name}</h3>
            <p>Contact: {s.contact}</p>
          </div>
        ))}
      </div>

      {/* ORDERS */}
      <h2>Orders</h2>
      <div style={gridStyle}>
        {orders.map((o) => (
          <div key={o.order_id} style={cardStyle}>
            <h3>Order #{o.order_id}</h3>
            <p>Product ID: {o.product_id}</p>
            <p>User ID: {o.user_id}</p>
            <p>Quantity: {o.quantity}</p>
            <p>Type: {o.order_type}</p>
            <p>Date: {o.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;