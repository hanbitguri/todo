import React, {  useRef, useState } from 'react'
import './Login.scss'
import { AiOutlineLaptop } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { authAction } from '../../store/authslice';

function Login(props) {
   const [isError, setIsError] = useState(false)
   const email = useRef();
   const password = useRef();
   const dispatch = useDispatch()
   

   function submitHandler(e){
      e.preventDefault();
      if(email.current.value.length===0 || password.current.value.length===0){
         setIsError(true)
         return
      }
      dispatch(authAction.login())
   
         props.onSubmit()
         props.onSave(email.current.value)
         
      
   }

  return (
    
    <>

    <section className='login'>
        <h2 className='visually-hidden'>로그인 섹션</h2>
    <header className='login-header'>
        <div className='login-icon'><AiOutlineLaptop></AiOutlineLaptop></div>
    </header>
     <section className='login-main'>
        <div className='login-title'>Sign in to LoremIpsum</div>
        <form action="" className='login-form' onSubmit={submitHandler}>
            <label htmlFor="id">Email address</label>
           
            <input type="email"  id='id' placeholder={isError ? '다시 한번 확인해주세요' : 'example@exam.com'} className={isError ? 'invalid' : ''} ref={email}/>
            <div className='login-form-pw'>
            <label htmlFor="pw">Password</label>
            <a href='/'>Forgot password?</a>
            </div>
            <input type="password" id='pw' placeholder={isError ? '다시 한번 확인해주세요':'enter password'} className={isError ? 'invalid' : ''} ref={password}/>
            <button type='submit'>Sign in</button>
        </form>
     </section>
     <section className='login-auth'>
        <span>New to LoremIpsum? </span>
        <strong><a href="/">Create an account.</a></strong>
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