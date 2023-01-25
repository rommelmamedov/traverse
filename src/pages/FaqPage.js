import React from 'react';
import clsx from "clsx";
import {useIsMobileBreakpoint} from "../hooks/useIsMobileBreakpoint";
import PageLayout from "../layouts/pageLayout";
import {generalFaqAccordion} from "../landingPagesMock";
import Accordion from "../components/common/Accordion";
import SectionSignUp from "../components/SectionSignUp";
import HeroBg from "../assets/images/faq-hero-bg.webp";
import HeroBgMobile from "../assets/images/faq-hero-bg-mobile.webp";
import styles from "../styles/FaqPage.module.scss";

function FaqPage() {
	const isMobileBreakpoint = useIsMobileBreakpoint();

	return (
		<PageLayout
			pageTitle="Faq"
			pageClass={clsx(styles.faqPage, "faqPage")}
			isLandingPageFooter
		>

			<section className="sectionFaq">

				<div className="sectionFaqBg"/>

				<div className="container">

					<h1 className="sectionFaqTitle">
						Traverse Labs prides itself on being transparent, especially when it comes to your crypto and asset management
					</h1>

					<h2 className="sectionFaqAccordionTitle">
						General FAQ
					</h2>

					<Accordion list={generalFaqAccordion}/>

				</div>

			</section>

			<section className="sectionFaqHero">
				{isMobileBreakpoint? (
					<img src={HeroBgMobile} alt="Hero background"/>
				): (
					<img src={HeroBg} alt="Hero background"/>
				)}

				<div className="sectionFaqHeroTextWrapper">

					<div className="container">

						<div className="sectionFaqHeroText">

							<h2 className="sectionFaqHeroTitle h1">
								Have unanswered questions?
							</h2>

							<h3 className="sectionFaqHeroSubtitle">
								Our team is on standby, get in touch with us today!
							</h3>

							<a
								className="button"
								href="mailto:contact@traverselabs.xyz"
								rel="noreferrer"
								target="_blank"
								title="Contact Traverse"
							>
								Contact Traverse
							</a>

						</div>

					</div>

				</div>

			</section>

			<SectionSignUp/>

		</PageLayout>
	)
}

export default FaqPage;
