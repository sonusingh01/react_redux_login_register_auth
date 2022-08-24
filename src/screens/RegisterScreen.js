import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../AuthAction'

const RegisterScreen = () => {
  const { register, handleSubmit } = useForm()

  const { loading} = useSelector(
    (state) => state.user
  )
  const dispatch = useDispatch()


  const submitForm = (data) => {
    // if (data.password !== data.confirmPassword) {
    //   alert('Password mismatch')
    //   return
    // }
    // transform email string to lowercase to avoid case sensitivity issues during login
    data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='form-group'>
        <label htmlFor='firstName'>Name</label>
        <input
          type='text'
          className='form-input'
          {...register('name')}
          required
           name="name"
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-input'
          {...register('email')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
     
      <button type='submit' className='button' disabled={loading}>
        Login
      </button>
    </form>
  )
}

export default RegisterScreen
