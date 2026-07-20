import { createRoot } from "react-dom/client";
import "../styles.css";
import Layout from "../components/Layout";
import About from "../views/About";

createRoot(document.getElementById("root")).render(
  <Layout current="a-propos.html">
    <About />
  </Layout>
);
