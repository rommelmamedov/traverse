import clsx from "clsx";
import styles from "../styles/AboutTeamCard.module.scss";

function AboutPageTeamCard({ image, name, title, link, linkUrl, extraClass }) {
  return (
    <article
      className={clsx(styles.teamCard, "teamCard", extraClass && extraClass)}
    >
      <div className="teamCardImageWrapper">
        <img src={image} alt={name} />
      </div>

      <h3 className="teamCardTitle">{name}</h3>

      <div className="teamCardFooter">
        {title && title}
        <br />
        {link && (
          <span>
            Email:&nbsp;
            <a
              className="teamCardLink"
              href={linkUrl}
              rel="noreferrer"
              target="_blank"
              title={link}
            >
              {link}
            </a>
          </span>
        )}
      </div>
    </article>
  );
}

export default AboutPageTeamCard;
