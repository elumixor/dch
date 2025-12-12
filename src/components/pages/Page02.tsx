import React from "react";
import { usePageNavigation } from "../Layout/Navigation";
import MeditationTimer from "../Timer/MeditationTimer";

export default function Page02() {
	usePageNavigation({ prev: "page01", next: "page03" });

	return <MeditationTimer durationMinutes={30} />;
}
