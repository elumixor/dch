import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";
import "./Page.css";

export default function IndexPage() {
  const { t } = useTranslation("pages");

  // Set navigation config for this page
  usePageNavigation({ next: "prabhat-samgiita" });

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">{t("index.title")}</h1>
        <p className="page-subtitle">{t("index.subtitle")}</p>
      </header>

      <div className="page-main">
        <main className="page-content">
          <p style={{ whiteSpace: "pre-line" }}>{t("index.content.p1")}</p>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.3em",
              margin: "1.5rem 0",
            }}
          >
            <strong>{t("index.content.button")}</strong>
          </p>
          <p style={{ whiteSpace: "pre-line" }}>{t("index.content.p2")}</p>
        </main>
      </div>
    </div>
  );
}
