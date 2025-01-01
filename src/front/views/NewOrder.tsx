import React, { useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    backgroundColor: "black",
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "white",
  },
  text: {
    fontSize: 12,
    color: "white",
  },
});

// PDF Document Component
const MyPDFDocument: React.FC<{ orderDetails: Record<string, string> }> = ({
  orderDetails,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>Detalles de su compra</Text>

      {Object.entries(orderDetails).map(([key, value], index) => (
        <Text key={index} style={styles.text}>
          {`${key}: ${value}`}
        </Text>
      ))}
      <Text style={styles.heading}>
        Para dudas o aclaraciones favor de comunicarse a los telefonos
      </Text>
    </Page>
  </Document>
);

const NewOrder: React.FC = () => {
  const [formData, setFormData] = useState({
    Nombre: "",
    Orden: "",
    Descripcion: "",
    Total: "",
    Direccion: "",
    Telefono: "",
    TiempoDeEntrega: "",
    Cantidad: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        color: "white",
      }}
    >
      <h2>Create New Order</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>Numero de orden:</label>
          <input
            type="text"
            name="Orden"
            value={formData.Orden}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Nombre:</label>
          <input
            type="text"
            name="Nombre"
            value={formData.Nombre}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Telefono:</label>
          <textarea
            name="Telefono"
            value={formData.Telefono}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Direccion:</label>
          <input
            type="text"
            name="Direccion"
            value={formData.Direccion}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Descripcion del producto:</label>
          <input
            type="text"
            name="Descripcion"
            value={formData.Descripcion}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Cantidad de piezas:</label>
          <input
            type="text"
            name="Cantidad"
            value={formData.Cantidad}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Tiempo estimado de entrega:</label>
          <input
            type="text"
            name="TiempoDeEntrega"
            value={formData.TiempoDeEntrega}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Total:</label>
          <input
            type="text"
            name="Total"
            value={formData.Total}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
      </form>
      <PDFDownloadLink
        document={<MyPDFDocument orderDetails={formData} />}
        fileName={`Order_${formData.Orden || "New"}.pdf`}
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <h1>Generar Orden</h1>
      </PDFDownloadLink>
    </div>
  );
};

export default NewOrder;
