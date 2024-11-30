import * as Yup from "yup";

export const signupSchema = Yup.object({
    name: Yup.string()
          .min(3, "Le nom doit contenir au moins 3 caractères.")
          .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,  "Le nom ne peut contenir que des lettres.")
          .required("Veuillez entrer votre nom."),
    email: Yup.string()
           .email("Please enter valid email.")
           .required("Please enter your email."),

    phone: Yup.string()
            .matches(/^\+?[0-9]{9,15}$/, "Le numéro de téléphone doit contenir entre 9 et 15 chiffres et peut commencer par '+'.")
            .required("Veuillez entrer votre numéro de téléphone."),

    dnaissance: Yup.date()
                .min(new Date(2002, 0, 1), "La date de naissance doit être postérieure ou égale au 1er janvier 2002.")
                .required("Veuillez entrer votre date de naissance."),
    pays: Yup.string()
          .required("Veuillez sélectionner votre pays."),

    etat_civil: Yup.string()
                   .required("Veuillez indiquer votre état civil, s'il vous plaît."),

});