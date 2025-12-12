import React from "react";
import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";
import MeditationTimer from "../Timer/MeditationTimer";

export default function Page05() {
	const { t } = useTranslation("pages");

	usePageNavigation({ prev: "page03", next: "page06" });

	return (
		<MeditationTimer
			durationMinutes={30}
			title={t("page05.title")}
			subtitle={t("page05.subtitle")}
		/>
	);
}
