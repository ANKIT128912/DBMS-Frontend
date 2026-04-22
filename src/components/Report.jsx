import { useEffect, useState } from "react";
import { getReport } from "../services/api.js";

function Report() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    const data = await getReport();
    setReport(data);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Full Connected Report</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))",
          gap: "20px"
        }}
      >
        {report.map((r) => (
          <div
            key={r.order_id}
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "10px"
            }}
          >
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

export default Report;