import clsx from "clsx";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CustomInput from "./form-elements/CustomInput";
import Button from "./common/Button";
import styles from "../styles/SectionSignUp.module.scss";
import axios from "axios";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  email_address: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
});

const initialValues = { email_address: "" };

function SectionSignUp({ extraClass, isOrange }) {
  const handleSubmit = async (values, { resetForm, setValues }) => {
    try {
      const response = await axios.get(
        `http://api.traverselabs.xyz/waitlist?emailAddress=${values.email_address}`
      );

      if (response.data.success) {
        toast.success("You successfully subscribed!");
        resetForm();
        setValues(initialValues);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <section
      className={clsx(
        styles.sectionSignUp,
        "sectionSignUp",
        extraClass && extraClass
      )}
    >
      <div className="container">
        <div
          className={clsx("sectionSignUpFormWrapper", isOrange && "isOrange")}
        >
          <div className="sectionSignUpBg" />

          <div className="sectionSignUpFormInner">
            <h2 className="sectionSignUpFormTitle">
              Sign up for exclusive news & protocol drops
            </h2>

            <p className="sectionSignUpFormSubtitle">
              Users can note all relevant approvals for all their digital assets
              in Traverse’s approval manager. Each asset notes the approvals
              next to it, and users are able to revoke any approvals as desired.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
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
                <Button type="submit" variantColor="white" text="Subscribe" />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSignUp;
