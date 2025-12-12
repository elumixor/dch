import { useTranslation } from "react-i18next";
import { useFullscreen } from "../../hooks/useFullscreen";
import "./TopBar.css";

export default function FullscreenToggle() {
  const { t } = useTranslation("common");
  const { isFullscreen, isSupported, toggle } = useFullscreen();

  // Hide button if fullscreen is not supported
  if (!isSupported) {
    return null;
  }

  const title = isFullscreen ? t("fullscreen.exit") : t("fullscreen.enter");

  return (
    <div id="fullscreen-toggle" className="icon-button" onClick={toggle} title={title}>
      <img src="/dch/images/fullscreen.png" alt={title} />
    </div>
  );
}
