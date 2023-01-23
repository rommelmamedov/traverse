import React from 'react';
import clsx from "clsx";
import {useIsMobileBreakpoint} from "../hooks/useIsMobileBreakpoint";
import PageLayout from "../layouts/pageLayout";
import {aboutAccordion, aboutTeam} from "../landingPagesMock";
// import HeroBg from "../assets/images/faq-hero-bg.webp";
// import HeroBgMobile from "../assets/images/faq-hero-bg-mobile.webp";
import AboutPageTeamCard from "../components/AboutPageTeamCard";
import Accordion from "../components/common/Accordion";
import styles from "../styles/AboutPage.module.scss";

function AboutPage() {
	const isMobileBreakpoint = useIsMobileBreakpoint();

	return (
		<PageLayout
			pageTitle="About"
			pageClass={clsx(styles.aboutPage, "AboutPage")}
			isLandingPageFooter
		>

			<section className="sectionAboutTeam">

				<div className="container">

					<h1 className="sectionAboutTitle">
						At Traverse Labs, we build applications that unlock new capabilities for blockchain users to manage and interact with their holdings. We are currently developing our first product: the Traverse Dashboard
					</h1>

					<h2 className="sectionAboutTeamTitle">The Traverse Team</h2>

					<ul className="teamCardList listUnstyled">
						{aboutTeam.map((member, idx) => (
							<li key={idx}>
								<AboutPageTeamCard
									name={member.name}
									title={member.title}
									link={member.link}
									linkUrl={member.url}
								/>
							</li>
						))}
					</ul>

				</div>

			</section>

			<section className="sectionAboutAccordion">

				<div className="container">

					<h2 className="sectionAboutAccordionTitle">
						More About Traverse
					</h2>

					<Accordion
						list={aboutAccordion}
					/>

				</div>

			</section>

		</PageLayout>
	)
}

export default AboutPage;