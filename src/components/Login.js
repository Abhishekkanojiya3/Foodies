import { useFormik } from 'formik'
;
import { useNavigate } from 'react-router-dom';
const validate = values => {
    const errors = {}

    if(!values.name){
        errors.name = 'Required'
    }
    if(!values.email){
        errors.email = 'Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
}

const Login = () => {
    const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
        name: '',
        email:''
    },
    validate,
    onSubmit: values =>{
        navigate("/")
    }
  })
 
    
    return(
        <div className="form-container">
        <form onSubmit={formik.handleSubmit} className="login-form">
            <h2>Login</h2>

            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={formik.errors.name ? 'error' : ''}
            />
            {formik.errors.name ? <div className="error-message">{formik.errors.name}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={formik.errors.email ? 'error' : ''}
            />
            {formik.errors.email ? <div className="error-message">{formik.errors.email}</div> : null}

            <button type="submit" className="submit-btn">Submit</button>
        </form>
    </div>
);
};
 
export default Login