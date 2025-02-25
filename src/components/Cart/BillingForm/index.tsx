import { Input } from "@escolalms/components/lib/components/atoms/Input/Input";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { InvoiceData } from "@escolalms/sdk/lib/types";
import { Formik, FormikProps } from "formik";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";

type FormProps = Omit<InvoiceData, "client_name" | "client_email">;

const initialValues: FormProps = {
  client_taxid: "",
  client_company: "",
  client_street: "",
  client_street_number: "",
  client_postal: "",
  client_city: "",
  client_country: "",
};
const BillingForm = ({
  formikRef,
}: {
  formikRef: React.RefObject<FormikProps<FormProps>>;
}) => {
  const { t } = useTranslation();

  return (
    <div className="billing-form__form">
      <Text bold>{t("InvoiceData.InvoiceData")}</Text>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validate={(values) => {
          const errors: Partial<InvoiceData> = {};

          if (!values.client_taxid) {
            errors.client_taxid = t("Required");
          }

          if (!values.client_company) {
            errors.client_company = t("Required");
          }

          if (!values.client_street) {
            errors.client_street = t("Required");
          }

          if (!values.client_street_number) {
            errors.client_street_number = t("Required");
          }

          if (!values.client_postal) {
            errors.client_postal = t("Required");
          }

          if (!values.client_city) {
            errors.client_city = t("Required");
          }

          if (!values.client_country) {
            errors.client_country = t("Required");
          }

          return errors;
        }}
        onSubmit={() => {}}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col lg={12}>
                <Input
                  type="text"
                  name="client_taxid"
                  label={t("InvoiceData.ClientTaxId")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.client_taxid}
                  error={touched.client_taxid && errors.client_taxid}
                />
              </Col>
              <Col lg={12}>
                <Input
                  type="text"
                  name="client_company"
                  label={t("InvoiceData.ClientCompanyName")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.client_company}
                  error={touched.client_company && errors.client_company}
                />
              </Col>

              <Col lg={8}>
                <Input
                  type="text"
                  name="client_street"
                  label={t("InvoiceData.ClientAddress")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.client_street}
                  error={touched.client_street && errors.client_street}
                />
              </Col>
              <Col lg={4}>
                <Input
                  type="text"
                  name="client_street_number"
                  label={t("InvoiceData.ClientStreetNumber")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.client_street_number}
                  error={
                    touched.client_street_number && errors.client_street_number
                  }
                />
              </Col>
              <Col lg={4}>
                <Input
                  type="text"
                  name="client_postal"
                  label={t("InvoiceData.ClientPostalCode")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.client_postal}
                  error={touched.client_postal && errors.client_postal}
                />
              </Col>
              <Col lg={8}>
                <Input
                  type="text"
                  name="client_city"
                  label={t("InvoiceData.ClientCity")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.client_city}
                  error={touched.client_city && errors.client_city}
                />
              </Col>
              <Col lg={12}>
                <Input
                  type="text"
                  name="client_country"
                  label={t("InvoiceData.ClientCountry")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.client_country}
                  error={touched.client_country && errors.client_country}
                />
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BillingForm;
