import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import clsx from "clsx";

function PageLayout({children, pageClass, pageTitle}) {
  return (
    <div className={clsx("pageWrapper", pageClass)}>
      <Helmet>
        <title>Traverse | {pageTitle}</title>
      </Helmet>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default PageLayout;