import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
function Add() {

    async function postProducts(values){
        const res=await fetch("http://localhost:3000/products/",{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(values)
        })
        const data=await res.json()
   
    }
  return (
    <div style={{paddingTop:"50px"}}>
             <Formik
       initialValues={{ image: '', name: '', price: '' }}
       validationSchema={Yup.object({
        image: Yup.string()
        
           .required('Required'),
           name: Yup.string()
         
           .required('Required'),
         price: Yup.number().required('Required'),
       })}
       onSubmit={(values, { resetForm }) => {
        postProducts(values)
    resetForm()
       }}
     >
       <Form>
         <label htmlFor="image"> Image</label><br />
         <Field name="image" type="text" /><br />
         <ErrorMessage name="image" />
 
         <label htmlFor="name">Name </label><br />
         <Field name="name" type="text" /><br />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">Price </label><br />
         <Field name="price" type="number" /><br />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Add