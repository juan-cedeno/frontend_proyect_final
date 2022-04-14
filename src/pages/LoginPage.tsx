import { FormEvent, useContext } from 'react';
import { Link } from 'react-router-dom'
import '../css/auth.css'
import { useForm } from '../hooks/useForm'
import { UserContext } from '../context/user/UserContext';



interface User {
    email: string,
    password: string
}

export const LoginPage = () => {

    const {login , userState} = useContext(UserContext)
    console.log(userState.user);
    

    const {form,handlenChange} = useForm<User>({
        email: '',
        password: ''
    })
    
    const {email,password} = form
    
    const handlenSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
         login (email , password)
         
    }
    
    
    return (
        <div className="cont_auth">
            <img src={require('../assets/homeCinema.svg').default} alt='movie gif'/>

           <form onSubmit={handlenSubmit}>
                <h1>movie app</h1>
               <label>Email</label>
               <input 
                autoComplete='off' 
                type="email" 
                name="email" 
                value={email}
                placeholder="Email" 
                onChange={handlenChange}
                />

               <label>Password</label>
               <input 
                type="password" 
                name="password" 
                value={password}
                placeholder="Password" 
                onChange={handlenChange}
                />

               <button>Login</button>
                <div className='cont_back_auth'>
                    <Link to='/' className='back_auth'>Go back</Link>
                    <span>Not a member? <Link to= '/auth/register'>Sign up now</Link></span>
                </div>
           </form>
        </div>
    )
}
