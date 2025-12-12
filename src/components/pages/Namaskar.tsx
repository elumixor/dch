import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";
import "./Page.css";

export default function Namaskar() {
  const { t } = useTranslation("pages");

  usePageNavigation({ prev: "spiritual-discussion" });

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">{t("page11.title")} 🙏</h1>
      </header>
    </div>
  );
}
