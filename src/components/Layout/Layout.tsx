import React, { useEffect } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavigationProvider } from "./Navigation";
import TopBar from "./TopBar";
import "./Layout.css";

export default function Layout() {
	const { lang } = useParams<{ lang: string }>();
	const { i18n } = useTranslation();

	// Validate and sync language from URL
	useEffect(() => {
		if (lang && (lang === "ru" || lang === "en")) {
			if (i18n.language !== lang) {
				i18n.changeLanguage(lang);
			}
		}
	}, [lang, i18n]);

	// Redirect to Russian if invalid language
	if (!lang || (lang !== "ru" && lang !== "en")) {
		return <Navigate to="/ru" replace />;
	}

	return (
		<NavigationProvider config={{}}>
			<div className="layout-wrapper">
				<div className="layout-content">
					<TopBar />
					<Outlet />
				</div>
			</div>
		</NavigationProvider>
	);
}
