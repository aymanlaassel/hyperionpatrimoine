import { createRoot } from "react-dom/client";
import "../styles.css";
import Layout from "../components/Layout";
import Sav from "../views/Sav";

createRoot(document.getElementById("root")).render(
  <Layout isHome={false}>
    <Sav />
  </Layout>
);
