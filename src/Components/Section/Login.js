import React from 'react'
import './Login.scss'
import { AiOutlineLaptop } from "react-icons/ai";
function Login() {
  return (
    
    <>

    <section className='login'>
        <h2 className='visually-hidden'>로그인 섹션</h2>
    <header className='login-header'>
        <div className='login-icon'><AiOutlineLaptop></AiOutlineLaptop></div>
    </header>
     <section className='login-main'>
        <div className='login-title'>Sign in to LoremIpsum</div>
        <form action="" className='login-form'>
            <label htmlFor="id">Email address</label>
            <input type="email"  id='id' placeholder='example@example.com'/>
            <div className='login-form-pw'>
            <label htmlFor="pw">Password</label>
            <a href='/'>Forgot password?</a>
            </div>
            <input type="password" id='pw' placeholder='enter password' />
            <button type='button'>Sign in</button>
        </form>
     </section>
     <section className='login-auth'>
        <span>New to LoremIpsum? </span>
        <strong><a href="">Create an account.</a></strong>
     </section>
     <footer className='login-footer'>
        <div>
           <strong className='login-footer-item'>Terms</strong>
           <strong className='login-footer-item'>Privacy</strong>
           <strong className='login-footer-item'>Security</strong>
           <strong className='login-footer-item'>Contact</strong> 
        </div>
     </footer>
    </section>
        
    
    </>
  )
}

export default Login