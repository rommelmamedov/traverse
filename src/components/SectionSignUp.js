import React from 'react';
import clsx from "clsx";
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from "./form-elements/CustomInput";
import Button from "./common/Button";
import styles from "../styles/SectionSignUp.module.scss";


function SectionSignUp({extraClass, isOrange}) {

  return (
    <section className={clsx(styles.sectionSignUp, "sectionSignUp", extraClass && extraClass)}>

      <div className="container">

        <div className={clsx("sectionSignUpFormWrapper", isOrange && "isOrange")}>

          <div className="sectionSignUpBg animateHomeSignupImg"/>

          <div className="sectionSignUpFormInner">

            <h2 className="sectionSignUpFormTitle">
              Sign up for exclusive news & protocol drops
            </h2>

            <p className="sectionSignUpFormSubtitle">
              Users can note all relevant approvals for all their digital assets in Traverse’s approval manager. Each asset notes the approvals next to it, and users are able to revoke any approvals as desired.
            </p>

            <Formik
              initialValues={{
                email_address: '',
              }}
              validationSchema={Yup.object().shape({
                email_address: Yup.string().email('Please enter a valid email address').required('Required'),
              })}
              onSubmit={values => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                }, 500);
              }}
              render={({ isSubmitting, handleReset }) => (
                <Form className="formInline">

                  <CustomInput
                    hideLabel
                    removeMarginBottom
                    type="email"
                    id="id_email_address"
                    name="email_address"
                    labelText="Email Address"
                    placeholder="Email address"
                  />

                  <Button
                    type="submit"
                    variantColor="white"
                    text="Subscribe"
                  />

                </Form>
              )}
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default SectionSignUp;
