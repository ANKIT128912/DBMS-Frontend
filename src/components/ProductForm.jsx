import { useState } from "react";
import { addProduct } from "../services/api.js";

function ProductForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    supplier_id: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProduct(form);
    refresh();

    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
      supplier_id: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
      <input name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} />
      <input name="supplier_id" placeholder="Supplier ID" value={form.supplier_id} onChange={handleChange} />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;