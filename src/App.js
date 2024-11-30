import React from "react";
import { useFormik } from "formik";
import "./App.css";
import { signupSchema } from "./schemas";

const initialValues = {
  name: '',
  email: '',
  phone: '',
  dnaissance: '',
  pays: '',
  etat_civil: '',
};

function App() {

const {values, handleBlur, handleChange, handleSubmit, touched, errors} = useFormik({
  initialValues,
  validationSchema: signupSchema,
  onSubmit: (values) => {
     console.log("Form Submitted:", values);
  },
});

console.log("Erreurs de validation:", errors);

const paysList = ["France", "Maroc", "Algérie", "Tunisie", "Canada", "États-Unis", "Italie"];
const etatCivilList = ["Célibataire", "Marié(e)", "Divorcé(e)", "Veuf/Veuve"]

  return (
    <div className="app">
      <form className="signup_form" onSubmit={handleSubmit}>
        <h1>Formulaire d'Informations </h1>

        {/* Section 1: Personal Information */}
        <section className="form_section">
          <h2>Détails Personnels</h2>
          <div className="form_row">
            <input
              type="text"
              name="name"
              placeholder="Ex : Manal CHAAB"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <div className='error_container'>
               {errors.name && touched.name && (
                   <p className='form_error'>{errors.name}</p>
               )}
            </div>
            <input
              type="email"
              name="email"
              placeholder="Ex : nom@example.com"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <div className='error_container'>
            {errors.email && touched.email && (
              <p className='form_error'>{errors.email}</p>
            )}

            </div>
            <input
              type="text"
              name="phone"
              placeholder="Ex : +212 6 XX XX XX XX"
              value={values.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <div className='error_container'>
               {errors.phone && touched.phone && (
                   <p className='form_error'>{errors.phone}</p>
               )}
            </div>
            <input
              type="date"
              name="dnaissance"
              value={values.dnaissance}
              onBlur={handleBlur}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <div className='error_container'>
               {errors.dnaissance && touched.dnaissance && (
                   <p className='form_error'>{errors.dnaissance}</p>
               )}
            </div>

  <select name="pays"
          value={values.pays}
          onBlur={handleBlur}
          onChange={handleChange}
          onSubmit={handleSubmit}>
    <option value="">-- Sélectionnez votre pays --</option>
    {paysList.map((pays, index) => (
      <option key={index} value={pays.toLowerCase()}>{pays}</option>
    ))}
  </select>
              <div className='error_container'>
               {errors.pays && touched.pays && (
                   <p className='form_error'>{errors.pays}</p>
               )}
            </div>

  <select name="etat_civil"
          value={values.etat_civil}
          onBlur={handleBlur}
          onChange={handleChange}
          onSubmit={handleSubmit}>
    <option>-- état civil ----</option>
    { etatCivilList.map((etat,index) => (
      <option key={index} value={etat.toLowerCase()}> {etat}</option>
    ))
    }

  </select>
              <div className='error_container'>
               {errors.etat_civil && touched.etat_civil && (
                   <p className='form_error'>{errors.etat_civil}</p>
               )}
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default App;
