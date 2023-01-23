import React from 'react';
import clsx from "clsx";
import styles from "../styles/HomePageFeatureCard.module.scss"

function HomePageFeatureCard({extraClass, title, description, icon}) {
  return (
    <article className={clsx(styles.featureCard, "featureCard", extraClass && extraClass)}>

      <h3 className="featureCardTitle">{title}</h3>

      <p className="featureCardDescription">{description}</p>

      <div className="featureCardFooter">

        <span className="featureCardIconWrapper">
          {icon}
        </span>

      </div>

    </article>
  )
}

export default HomePageFeatureCard;
