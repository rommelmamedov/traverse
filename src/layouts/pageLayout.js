import React from 'react';
import { Helmet } from 'react-helmet';
import clsx from "clsx";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function PageLayout({children, pageClass, pageTitle, isLandingPageFooter}) {

  return (
    <div className={clsx("pageWrapper", pageClass)}>
      <Helmet>
        <title>Traverse | {pageTitle}</title>
      </Helmet>
      <Header/>
      <main>
        {children}
      </main>
      <Footer isLandingPageFooter={isLandingPageFooter}/>
    </div>
  )
}

export default PageLayout;
