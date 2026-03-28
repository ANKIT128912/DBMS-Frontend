const BASE_URL = "http://localhost:5000/api/products";

// GET
export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

// ADD
export const addProduct = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

// DELETE
export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};