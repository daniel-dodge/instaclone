import React from 'react'
import {useFormik} from 'formik'

function Register(){
const initialValues = {
        username: "",
        password: "",
        confirmPassword: ""
    }
const onSubmit = (values) => {
        console.log('submit')
    }
const validate = (values) => {
        console.log('validation')
    }
const formik = useFormik({
        initialValues,
        onSubmit,
        validate 
    })
    return <div>
        <form onSubmit={formik.handleSubmit}>
            <input type='text' name= 'username' placeholder='Username' onChange={formik.handleChange} value= {formik.values.username}/>
            <input type='text' name= 'password' placeholder='Password' onChange={formik.handleChange} value= {formik.values.password}/>
            <input type='text' name= 'confirmPassword' placeholder='Confirm Password' onChange={formik.handleChange} value= {formik.values.confirmPassword}/>
            <button type='submit' disabled={!formik.isValid}>Sign up</button>
        </form>
    </div>

}

export default Register