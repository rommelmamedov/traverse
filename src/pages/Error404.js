import React from 'react';
import Button from "../components/common/Button";
import Logo from "../assets/logos/traverse-logo.png";
import styles from "../styles/ErrorPage.module.scss";

function Error404() {
	return (
		<section className={styles.errorPage}>
			<div className="errorPageWrapper">
				<div className="container">
					<img className="errorPageLogo" src={Logo} alt="Traverse"/>
					<h1 className="errorPageDisplay">404</h1>
					<h2>Oops... looks like that page doesn't exist</h2>
					{/*<div className="buttonContainer errorPageButtonContainer">*/}
					{/*	<Button text="Go back"/>*/}
					{/*	<Button isLink url="/" text="Go to homepage"/>*/}
					{/*</div>*/}
				</div>
			</div>
		</section>
	);
}
export default Error404;