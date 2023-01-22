import React from 'react';
import clsx from "clsx";
import {useIsMobileBreakpoint} from "../hooks/useIsMobileBreakpoint";
import PageLayout from "../layouts/pageLayout";
// import {generalFaqAccordion} from "../landingPagesMock";
// import Accordion from "../components/common/Accordion";
// import SectionSignUp from "../components/SectionSignUp";
// import Button from "../components/common/Button";
// import HeroBg from "../assets/images/faq-hero-bg.webp";
// import HeroBgMobile from "../assets/images/faq-hero-bg-mobile.webp";
import styles from "../styles/FaqPage.module.scss";

function AboutPage() {
	const isMobileBreakpoint = useIsMobileBreakpoint();

	return (
		<PageLayout
			pageTitle="About"
			pageClass={clsx(styles.faqPage, "AboutPage")}
			isLandingPageFooter
		>

			<section className="sectionAbout">
				<div className="container">
					<h1 className="sectionAboutTitle">

					</h1>

				</div>
			</section>


		</PageLayout>
	)
}

export default AboutPage;