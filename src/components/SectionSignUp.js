import React  from 'react';
import clsx from "clsx";
import OverlayBg from "../assets/images/section-signup-bg.svg";
import OverlayBgOrange from "../assets/images/section-signup-bg-orange.svg";
import styles from "../styles/SectionSignUp.module.scss";
import CustomInput from "./form-elements/CustomInput";
import Button from "./common/Button";

function SectionSignUp({extraClass, isOrange}) {
  return (
    <section className={clsx(styles.sectionSignUp, "sectionSignUp", extraClass && extraClass)}>

      <div className="container">

        <div className={clsx("sectionSignUpFormWrapper", isOrange && "isOrange")}>

          <div className="sectionSignUpFormInner">

            <h2 className="sectionSignUpFormTitle">
              Sign up for exclusive news & protocol drops
            </h2>

            <p className="sectionSignUpFormSubtitle">
              Users can note all relevant approvals for all their digital assets in Traverse’s approval manager. Each asset notes the approvals next to it, and users are able to revoke any approvals as desired.
            </p>

            <form action="" className="formInline">
              <CustomInput
                hideLabel
                removeMarginBottom
                id="id_email_address"
                name="email_address"
                labelText="Email Address"
                placeholder="Email address"
              />

              <Button type="submit" variantColor="white" text="Subscribe"/>

            </form>

          </div>

          {isOrange? (
            <img className="sectionSignUpFormBgOverlay" src={OverlayBgOrange} alt="Background"/>
          ):(
            <img className="sectionSignUpFormBgOverlay" src={OverlayBg} alt="Background"/>
          )}

        </div>

      </div>

    </section>
  )
}

export default SectionSignUp;
