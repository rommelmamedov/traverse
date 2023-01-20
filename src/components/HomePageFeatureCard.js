import React from 'react';
import clsx from "clsx";

function HomePageFeatureCard({extraClass, title, description, icon}) {
  return (
    <article className={clsx("featureCard", extraClass && extraClass)}>

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
