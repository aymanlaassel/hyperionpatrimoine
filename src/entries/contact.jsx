import { createRoot } from "react-dom/client";
import "../styles.css";
import Layout from "../components/Layout";
import Contact from "../views/Contact";

createRoot(document.getElementById("root")).render(
  <Layout current="contact.html">
    <Contact />
  </Layout>
);
