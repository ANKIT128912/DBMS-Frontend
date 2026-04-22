import { useState } from "react";
import { addOrder } from "../services/api.js";

function OrderForm({ refresh }) {
  const [form, setForm] = useState({
    product_id: "",
    user_id: "",
    quantity: "",
    order_type: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addOrder(form);
    refresh();

    setForm({
      product_id: "",
      user_id: "",
      quantity: "",
      order_type: "",
      date: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="product_id"
        placeholder="Product ID"
        value={form.product_id}
        onChange={handleChange}
      />

      <input
        name="user_id"
        placeholder="User ID"
        value={form.user_id}
        onChange={handleChange}
      />

      <input
        name="quantity"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
      />

      <input
        name="order_type"
        placeholder="IN / OUT"
        value={form.order_type}
        onChange={handleChange}
      />

      <input
        name="date"
        placeholder="YYYY-MM-DD"
        value={form.date}
        onChange={handleChange}
      />

      <button type="submit">Add Order</button>
    </form>
  );
}

export default OrderForm;