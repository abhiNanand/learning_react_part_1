import {useState} from 'react';


export default function Form()
{

const initialValues ={email:"",password:""};
const [formValues,setFormValues]=useState(initialVales);
const [formErrors,setFormsErrors]=useState({});
const [isSubmitting,setIsSubmitting]= useState(false);


    return(
<h1>Hello</h1>
    );
}