


//passing function to action

// export default function Form()
// {
// function search(formData)
// {

//     const query = formData.get("query");
//     console.log(query);
//     alert(`you searched for ${query}`);
// }


// return(
//     <form action={search}>
//         <input name="query"/>
//         <button type="submit">Search</button>
//     </form>
// );

// }

//Display a pending state during form submission
// import { useFormStatus } from 'react-dom';

// async function submitForm(query) {
//     await new Promise((res) => setTimeout(res, 1000));
// }

// function Submit() {
//     const { pending } = useFormStatus();
//     return (
//         <button type="submit" disabled={pending}>
//             {pending ? "Submitting..." : "Submit"}
//         </button>
//     );
// }

// function App({ action }) {
//     const handleSubmit = (e) => {
//         e.preventDefault(); // Prevent form submission from reloading the page
//         action();
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <Submit />
//         </form>
//     );
// }

// export default function Form() {
//     return <App action={submitForm} />;
// }
//Handling form submission errors.


//Display a form submission error without JavaScript



// export default function Form()
// {

//     async function signup(prevState,formData)
//     {
//         "use server";
//         const email = formData.get("email");

//         try{
//             await signupNewUser(email);
//             try{
//                 await signUpNewUser(email);
//                 alert(`Added ${email}`);
//             }
//             catch(err)
//             {
//                 return err.toString();
//             }
//         }
//     }




//     return(
//         <>

// <h1>Signup for my newsletter</h1>
// <p>Signup with the same email twice to see an error</p>
// <form action={signupAction} id="signup-form">
//     <label htmlFor="email">Email:</label>
//     <input name="email" id="email" placeholder="abhishek@example.com"/>
//     <button>Sign Up</button>
//     {!!message && <p>{message}</p>}
// </form>

//         </>
//     );
// }


//using formic 1
// import React from "react";
// import { useFormik } from "formik";

// export default function Form()  {
//   // useFormik() initializes form state and provides helper methods
//   const formik = useFormik({
//     initialValues: {
//       email: "", // Initial state for the email input
//     },
//     onSubmit: (values) => {
//    alert(JSON.stringify(values, null, 2)); // Alerts form data when submitted
// //   alert(values, null, 2); //[object object]
// //  console.log(values);
// //   alert(values);
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange} // is responsible for updating the form state whenever the user types in an input field.
//         value={formik.values.email} // Binds input value to state
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };



//using formic 2

// import React from 'react';
// import { useFormik } from 'formik';


// export default function Form() {

//     const formik = useFormik({

//         initialValues: { firstname: '', lastname: '', email: '' },
//         onSubmit: (values) => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     }
//     );

//     return(
//         <form onSubmit={formik.handleSubmit}>
//             <label htmlFor="firstname">First Name</label>
//             <input id="firstname" name="firstname" type="text" onChange={formik.handleChange} value={formik.values.firstname}/>

//             <label htmlFor="lastname">Second Name</label>
//             <input id="lastname" name="lastname" type="text" onChange={formik.handleChange} value={formik.values.lastname}/>

//             <label htmlFor="email">Email Address</label>
//             <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>

//             <button type="submit">Submit</button>
//         </form>
//     );

// }


//formic 3  validation


// import React from 'react';
// import { useFormik } from 'formik';



// const validate = (values) => {
//     const errors = {};
//     if (!values.firstname) {
//         errors.firstname = 'Required';
//     }
//     else if (values.firstname.length > 15) {
//         errors.firstname = 'Must be 15 character or less';
//     }

//     if (!values.lastname) {
//         errors.lastname = 'Required';
//     }
//     else if (values.lastname.length > 15) {
//         errors.lastname = 'Must be 15 character or less';
//     }


//     if (!values.email) {
//         errors.email = 'Required';
//     }
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     return errors;

// }



// export default function Form() {

//     const formik = useFormik({

//         initialValues: { firstname: '', lastname: '', email: '' },
//         validate,
//         onSubmit: (values) => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     }
//     );

//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <label htmlFor="firstname">First Name</label>
//             <input id="firstname" name="firstname" type="text" onChange={formik.handleChange} value={formik.values.firstname} />

//             {formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}

//             <label htmlFor="lastname">Second Name</label>
//             <input id="lastname" name="lastname" type="text" onChange={formik.handleChange} value={formik.values.lastname} />

//             {formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}

//             <label htmlFor="email">Email Address</label>
//             <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />

//             {formik.errors.email ? <div>{formik.errors.email}</div> : null}

//             <button type="submit">Submit</button>
//         </form>
//     );

// }


// formic 4 tracking visited fields.
// import React from 'react';
// import { useFormik } from 'formik';



// const validate = (values) => {
//     const errors = {};
//     if (!values.firstname) {
//         errors.firstname = 'Required';
//     }
//     else if (values.firstname.length > 15) {
//         errors.firstname = 'Must be 15 character or less';
//     }

//     if (!values.lastname) {
//         errors.lastname = 'Required';
//     }
//     else if (values.lastname.length > 15) {
//         errors.lastname = 'Must be 15 character or less';
//     }


//     if (!values.email) {
//         errors.email = 'Required';
//     }
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     return errors;

// }

// export default function Form() {

//     const formik = useFormik({

//         initialValues: { firstname: '', lastname: '', email: '' },
//         validate,
//         onSubmit: (values) => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     }
//     );
//         return (
//         <form onSubmit={formik.handleSubmit}>
//             <label htmlFor="firstname">First Name</label>
//             <input id="firstname" name="firstname" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />

//             {formik.touched.firstname && formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}

//             <label htmlFor="lastname">Second Name</label>
//             <input id="lastname" name="lastname" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />

//             {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}

//             <label htmlFor="email">Email Address</label>
//             <input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />

//             {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

//             <button type="submit">Submit</button>
//         </form>
//     );

// }


// formic 5 tracking visited fields.
// import React from 'react';
// import { useFormik } from 'formik';



// const validate = (values) => {
//     const errors = {};
//     if (!values.firstname) {
//         errors.firstname = 'Required';
//     }
//     else if (values.firstname.length > 15) {
//         errors.firstname = 'Must be 15 character or less';
//     }

//     if (!values.lastname) {
//         errors.lastname = 'Required';
//     }
//     else if (values.lastname.length > 15) {
//         errors.lastname = 'Must be 15 character or less';
//     }


//     if (!values.email) {
//         errors.email = 'Required';
//     }
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     return errors;

// }

// export default function Form() {

//     const formik = useFormik({

//         initialValues: { firstname: '', lastname: '', email: '' },
//         validate,
//         onSubmit: (values) => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     }
//     );
//         return (
//         <form onSubmit={formik.handleSubmit}>
//             <label htmlFor="firstname">First Name</label>
//             <input id="firstname" name="firstname" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />

//             {formik.touched.firstname && formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}

//             <label htmlFor="lastname">Second Name</label>
//             <input id="lastname" name="lastname" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />

//             {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}

//             <label htmlFor="email">Email Address</label>
//             <input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />

//             {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

//             <button type="submit">Submit</button>
//         </form>
//     );

// }

// //formic 6 . using Yup library

// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// export default function App() {


//     const formik = useFormik(
//         {
//             initialValues: {
//                 firstname: '',
//                 lastname: '',
//                 email: '',
//             },


//             validationSchema: Yup.object({
//                 firstname: Yup.string()
//                     .max(15, 'Must be 15 character or less')
//                     .required('Required'),
//                 lastname: Yup.string()
//                     .max(20, 'Must be 20 character or less')
//                     .required("Required"),
//                 email: Yup.string()
//                     .email('Invalid email address')
//                     .required('Required'),
//             }),

//             onSubmit: values => {
//                 alert(JSON.stringify(values, null, 2));
//             },
//         }

//     );
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <label htmlFor="firstname">First Name</label>
//             <input id="firstname" name="firstname" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />

//             {formik.touched.firstname && formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}

//             <label htmlFor="lastname">Second Name</label>
//             <input id="lastname" name="lastname" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />

//             {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}

//             <label htmlFor="email">Email Address</label>
//             <input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />

//             {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

//             <button type="submit">Submit</button>
//         </form>
//     );

// }


//formic 7 . using helper method  formik.getFieldProps()

import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function App() {


    const formik = useFormik(
        {
            initialValues: {
                firstname: '',
                lastname: '',
                email: '',
            },


            validationSchema: Yup.object({
                firstname: Yup.string()
                    .max(15, 'Must be 15 character or less')
                    .required('Required'),
                lastname: Yup.string()
                    .max(20, 'Must be 20 character or less')
                    .required("Required"),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
            }),

            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
            },
        }

    );
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="text" 
            {...formik.getFieldProps('firstname')}
            />
            

            {formik.touched.firstname && formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}

            <label htmlFor="lastname">Second Name</label>
            <input id="lastname" name="lastname" type="text" {...formik.getFieldProps('lastname')} />

            {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" {...formik.getFieldProps('email')} />

            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <button type="submit">Submit</button>
        </form>
    );

}


