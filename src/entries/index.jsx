import { createRoot } from "react-dom/client";
import "../styles.css";
import Layout from "../components/Layout";
import Home from "../views/Home";

createRoot(document.getElementById("root")).render(
  <Layout current="index.html">
    <Home />
  </Layout>
);
