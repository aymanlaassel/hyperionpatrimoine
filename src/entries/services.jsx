import { createRoot } from "react-dom/client";
import "../styles.css";
import Layout from "../components/Layout";
import Services from "../views/Services";

createRoot(document.getElementById("root")).render(
  <Layout current="services.html">
    <Services />
  </Layout>
);
