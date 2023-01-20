import React from 'react';
import clsx from "clsx";
import PageLayout from "../layouts/pageLayout";
import Button from "../components/common/Button";
import styles from "../styles/HomePage.module.scss";
import HomePageSectionTabs from "../components/HomePageSectionTabs";

function HomePage() {
	return (
		<PageLayout pageTitle="Home" pageClass={clsx(styles.homePage, "homePage")}>

			<section className="sectionHomeHeader">

				<div className="container">

					<div className="sectionHomeHeaderWrapper">

						<div className="sectionHomeHeaderTextWrapper">
                <p className="sectionHeading text18">The securest way to manage your portfolio on one platform </p>
								<h1>Explore the blockchain with your mind at ease</h1>
								<p className="sectionSubtitle text24">
									We have a live demo. <a href="www.google.com" target="_blank" className="sectionLink">Check it out</a>
								</p>

								<Button text="Launch the App"/>
							</div>

					</div>

				</div>

			</section>

			<HomePageSectionTabs/>

		</PageLayout>
	);
}
export default HomePage;