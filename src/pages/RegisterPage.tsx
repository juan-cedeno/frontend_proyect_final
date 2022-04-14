
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { FormEvent, useContext } from 'react';
import Swal from 'sweetalert2';
import { UserContext } from '../context/user/UserContext';

interface UserRegister{
    name: string,
    email: string,
    password: string,
    password2: string
}

export const RegisterPage = () => {

    const {register} = useContext(UserContext)

    const {form,handlenChange} = useForm<UserRegister>({
        email: '',
        name: '',
        password:'',
        password2: ''
    })

    const {email,name,password,password2} = form

    const handlenSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (password !== password2) {
            return Swal.fire('Error' , 'Password does not match' , 'error')
        }

        register(name , email , password)
    }

    return (
        <div className="cont_auth">
        <img src={require('../assets/movieRegister.svg').default} alt='movie gif'/>

       <form onSubmit={handlenSubmit}>
            <h1>movie app</h1>

           <label>Name</label>
           <input 
            type="text" 
            autoComplete='off' 
            name="name" 
            placeholder="Name" 
            value={name}
            onChange={handlenChange}
            />

           <label>Email</label>
           <input 
            type="email" 
            name="email" 
            autoComplete='off'
            placeholder="Email" 
            value={email}
            onChange={handlenChange}
            />

           <label>Password</label>
           <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={password}
            onChange={handlenChange}
            />

           <label>Repeat password</label>
           <input 
            type="password" 
            name="password2" 
            placeholder="Repeat password" 
            value={password2}
            onChange={handlenChange}
            />

           <button>Sign up</button>

            <div className='cont_back_auth'>
                <Link to='/' className='back_auth'>Go back</Link>
                <span>Already a member? <Link to= '/auth/login'>Sign In</Link></span>
            </div>
       </form>
    </div>
    )
}
