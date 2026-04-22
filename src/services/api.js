const PRODUCT_URL = "https://dbms-backend-93db.onrender.com/api/products";
const USER_URL = "https://dbms-backend-93db.onrender.com/api/users";
const SUPPLIER_URL = "https://dbms-backend-93db.onrender.com/api/suppliers";
const ORDER_URL = "https://dbms-backend-93db.onrender.com/api/orders";


// =======================
// PRODUCTS
// =======================

// GET PRODUCTS
export const getProducts = async () => {
  const res = await fetch(PRODUCT_URL);
  return res.json();
};

// ADD PRODUCT
export const addProduct = async (data) => {
  const res = await fetch(PRODUCT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

// DELETE PRODUCT
export const deleteProduct = async (id) => {
  const res = await fetch(`${PRODUCT_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};


// =======================
// USERS
// =======================

export const getUsers = async () => {
  const res = await fetch(USER_URL);
  return res.json();
};


// =======================
// SUPPLIERS
// =======================

export const getSuppliers = async () => {
  const res = await fetch(SUPPLIER_URL);
  return res.json();
};


// =======================
// ORDERS
// =======================

export const getOrders = async () => {
  const res = await fetch(ORDER_URL);
  return res.json();
};