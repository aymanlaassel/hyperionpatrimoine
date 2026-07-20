import { createRoot } from "react-dom/client";
import "../styles.css";
import Layout from "../components/Layout";
import Legal from "../views/Legal";

createRoot(document.getElementById("root")).render(
  <Layout current="mentions-legales.html" footer="legal">
    <Legal />
  </Layout>
);
