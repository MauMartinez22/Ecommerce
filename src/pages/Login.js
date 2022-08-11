import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../assests/styles/login.css'

const Login = () => {
    const baseUrl = 'https://ecommerce-api-react.herokuapp.com/api/v1';

    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const toLogin = () => navigate("/user");

    const submit = data =>{

        axios.post(baseUrl+'/users/login',data)
        .then(res=>{
            localStorage.setItem('token',res.data.data.token);
            localStorage.setItem('userName',res.data.data.user.firstName +" "+ res.data.data.user.lastName)
            
            navigate('/user');
            alert("Welcome back");
            console.log(res.data)
        })
        .catch(error=>{
            if(error.response.status===404){
                alert('User no register');
            };
        })
        
    };
    

    return (
<div>
<div class="container" id="container">
	<div class="form-container sign-in-container">
		<form onSubmit={handleSubmit(submit)}>
			<h1>Sign in</h1>
			<div class="social-container">
				<a onClick={toLogin} class="social"><i class="fab fa-facebook-f"></i></a>
				<a onClick={toLogin} class="social"><i class="fab fa-google-plus-g"></i></a>
				<a onClick={toLogin} class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
            <input type="email" id='email' {...register("email")} />
			<input type="password"  id='password' {...register("password")} />
			<a onClick={toLogin}>Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlais-container">
		<div class="overlais">
			<div class="overlais-panel overlais-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				
			</div>
			<div class="overlais-panel overlais-right">
				<h1>Hello, Friend!</h1>
				<p><b>User:</b> mason@gmail.com</p>
                <p><b>Password:</b> mason1234</p>
				
			</div>
		</div>
	</div>
    </div>





       {/*<div className='login-wrapper'>
            <div className='login-container'>
                <h3>Welcome! Enter your email and password to continue.</h3>
                <div className='testData-container'>
                    <h4>Test data</h4>
                    <div>
                        <p><b>User:</b> mason@gmail.com</p>
                        <p><b>Password:</b> mason1234</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(submit)} className='form-container'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' {...register("email")} />

                    <label htmlFor="password">Password</label>
                    <input type="password"  id='password' {...register("password")} />

                    <button className='btn btn-success'>Login</button>
                </form>
    
            </div>
            
        </div>*/}



</div>
    );
};

export default Login;