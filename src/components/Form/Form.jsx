import { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import "./Form.scss";
import { sendPost, getCategories } from "../../helpers/sendRequest";

// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Text is required"),
  categorie: Yup.string().required("Category is required"),
  // image: Yup.mixed()
  //   .required("An image is required")
    // .test(
    //   "fileFormat",
    //   "Unsupported Format",
    //   value => value && SUPPORTED_FORMATS.includes(value.type)
    // ),
});

const FormPost = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  const categNames = categories.map((x) => x.name);

  const handleSubmit = (values) => {
    const catId = categories.find((item) => item.name === values.categorie).id;
console.log(values)
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("category_id", catId);
    formData.append("image", values.file, values.file.name);

    sendPost(formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          title: "",
          categorie: "",
          file: undefined,
          content: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          handleSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched, setFieldValue, getFieldProps, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <legend className="form-title">Plaats een blog bericht</legend>
            <label className="form-input">
              <p className="form-label">Berichtnaam</p>
              <Field
                type="text"
                className="form-item"
                name="title"
                error={touched.title && errors.title}
                placeholder="Geen titel"
              />
              <ErrorMessage
                className="error-message"
                name="title"
                component={"p"}
              />
            </label>
            <label className="form-input">
              <div id="select">
                <p className="form-label">Categorie</p>
                <div className="select-arrow"></div>
              </div>

              <Field
                as="select"
                className="form-item"
                name="categorie"
                required="required"
                error={errors.categorie && touched.categorie}
              >
                <option value="Geen categorie">Geen categorie</option>
                {categNames.map((el, index) => {
                  return (
                    <option key={index} value={el}>
                      {el}
                    </option>
                  );
                })}
              </Field>
              <ErrorMessage
                className="error-message"
                name="categorie"
                component={"p"}
              />
            </label>
            <label className="form-input">
              <p className="form-label">Header afbeelding</p>
              <input
                id="file"
                name="image"
                error={errors.image && touched.image}
                type="file"
                accept="image/*"
                className="form-item"
                onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage
                className="error-message"
                name="image"
                component={"p"}
              />
            </label>
            <label className="form-input">
              <p className="form-label">Bericht</p>
              <textarea
                className="form-text-area"
                name="content"
                error={touched.content && errors.content}
                {...getFieldProps("content")}
              />
              <ErrorMessage
                className="error-message"
                name="content"
                component={"p"}
              />
            </label>
            <div className="form-btn">
              <Button
                type={"submit"}
                className={"form-submit"}
                text={"Bericht aanmaken"}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default FormPost;
