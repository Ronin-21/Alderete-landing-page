const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 5000;

// Permite todas las solicitudes desde el frontend
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.post("/api/odoo/lead", async (req, res) => {
  try {
    const response = await axios.post(
      "https://ronin-webdesign.odoo.com/jsonrpc",
      req.body,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al conectar con Odoo" });
  }
});

app.post("/api/odoo/login", async (req, res) => {
  try {
    const response = await axios.post(
      "https://ronin-webdesign.odoo.com/web/session/authenticate",
      req.body,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al conectar con Odoo" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
