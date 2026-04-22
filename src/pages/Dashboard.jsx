import { useEffect, useState } from "react";
import {
  getProducts,
  deleteProduct,

  getUsers,
  deleteUser,

  getSuppliers,
  deleteSupplier,

  getOrders,
  deleteOrder,

  getReport
} from "../services/api.js";

import ProductForm from "../components/ProductForm.jsx";
import UserForm from "../components/UserForm.jsx";
import SupplierForm from "../components/SupplierForm.jsx";
import OrderForm from "../components/OrderForm.jsx";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [report, setReport] = useState([]);

  const fetchData = async () => {
    const productData = await getProducts();
    const userData = await getUsers();
    const supplierData = await getSuppliers();
    const orderData = await getOrders();
    const reportData = await getReport();

    setProducts(productData);
    setUsers(userData);
    setSuppliers(supplierData);
    setOrders(orderData);
    setReport(reportData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    fetchData();
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    fetchData();
  };

  const handleDeleteSupplier = async (id) => {
    await deleteSupplier(id);
    fetchData();
  };

  const handleDeleteOrder = async (id) => {
    await deleteOrder(id);
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
    <div style={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1>Dashboard</h1>

      {/* FORMS */}
      <h2>Add Product</h2>
      <ProductForm refresh={fetchData} />

      <h2>Add User</h2>
      <UserForm refresh={fetchData} />

      <h2>Add Supplier</h2>
      <SupplierForm refresh={fetchData} />

      <h2>Add Order</h2>
      <OrderForm refresh={fetchData} />

      {/* PRODUCTS */}
      <h2>Products</h2>
      <div style={gridStyle}>
        {products.map((p) => (
          <div key={p.product_id} style={cardStyle}>
            <h3>{p.name}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ₹{p.price}</p>
            <p>Stock: {p.stock}</p>
            <p>Supplier ID: {p.supplier_id}</p>
            <button onClick={() => handleDeleteProduct(p.product_id)}>Delete</button>
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
            <button onClick={() => handleDeleteUser(u.user_id)}>Delete</button>
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
            <button onClick={() => handleDeleteSupplier(s.supplier_id)}>Delete</button>
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
            <button onClick={() => handleDeleteOrder(o.order_id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* FULL CONNECTED REPORT */}
      <h2>Full Connected Report</h2>
      <div style={gridStyle}>
        {report.map((r) => (
          <div key={r.order_id} style={cardStyle}>
            <h3>Order #{r.order_id}</h3>
            <p>User: {r.user_name}</p>
            <p>Product: {r.product_name}</p>
            <p>Supplier: {r.supplier_name}</p>
            <p>Quantity: {r.quantity}</p>
            <p>Type: {r.order_type}</p>
            <p>Date: {r.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;