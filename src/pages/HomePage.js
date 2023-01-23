import React from 'react';
import clsx from "clsx";
import {useIsMobileBreakpoint} from "../hooks/useIsMobileBreakpoint";
import PageLayout from "../layouts/pageLayout";
import Button from "../components/common/Button";
import HomePageSectionTabs from "../components/HomePageSectionTabs";
import SectionSignUp from "../components/SectionSignUp";
import SectionHomeMobileImage from "../assets/images/home-header-mobile.webp";
import styles from "../styles/HomePage.module.scss";

function HomePage() {
	const isMobileBreakpoint = useIsMobileBreakpoint();

	return (
		<PageLayout
			pageTitle="Home"
			pageClass={clsx(styles.homePage, "homePage")}
			isLandingPageFooter
		>

			<section className="homePageSectionHeader">

				<div className="container">

					<div className="homePageSectionHeaderWrapper">

						<div className="homePageSectionHeaderTextWrapper">
							<p className="sectionHeading">
								The securest way to manage your portfolio on one platform
							</p>

							<h1>
								Explore the blockchain with your mind at ease
							</h1>

							<p className="sectionSubtitle">
								We have a live demo. <a href="www.google.com" target="_blank" className="sectionLink">Check it out</a>
							</p>

							<Button text="Launch the App"/>

						</div>

						{isMobileBreakpoint &&
						<div className="homePageSectionHeaderMobileImage">
							<img src={SectionHomeMobileImage} alt="Header background"/>
						</div>
						}

					</div>

				</div>

			</section>

			<HomePageSectionTabs/>

			<SectionSignUp extraClass="homePageSectionSignUp" isOrange/>

		</PageLayout>
	);
}
export default HomePage;
