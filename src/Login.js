import React from 'react'
import {useFormik} from 'formik'
function Login(){
const initialValues = {
    username: "",
    password: ""
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
            <button type='submit' disabled={!formik.isValid}>Log In</button>
        </form>
    </div>
}

export default Login