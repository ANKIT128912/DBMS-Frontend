import { useState } from "react";
import { addSupplier } from "../services/api.js";

function SupplierForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    contact: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addSupplier(form);
    refresh();

    setForm({
      name: "",
      contact: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="name"
        placeholder="Supplier Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="contact"
        placeholder="Contact Number"
        value={form.contact}
        onChange={handleChange}
      />

      <button type="submit">Add Supplier</button>
    </form>
  );
}

export default SupplierForm;