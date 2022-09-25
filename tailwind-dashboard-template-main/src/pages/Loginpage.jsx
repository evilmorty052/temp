import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate, Navigate,useLocation} from 'react-router-dom'
import { Navbar } from '../components'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import useMounted from '../hooks/useMounted'
// import './Loginpage.css'

export default function Loginpage() {
  const history = useNavigate()
  const { signInWithGoogle, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  // const mounted = useRef(false)
  const location = useLocation()

  // useEffect(() => {
  //   mounted.current = true
  //   return () => {
  //     mounted.current = false
  //   }
  // }, [])

  const mounted = useMounted()

  function handleRedirectToOrBack() {
    // console.log(location?.state)
    // <Navigate to='/profile'/>
    // if (location.state) {
    //   history.replace(location.state?.from)
    // } else {
      history('/dashboard')
    // }
  }

  return (
   
    <Layout className="bg-glass">
       
      <header className='text-4xl text-gradient text-center my-12 font-poppins font-extrabold'>
      <h2 className='text-4xl text-gradient text-center'>Welcome Back</h2>
      </header>
      
      <div className="max-w-md mx-auto mt-4 bg-glass2 rounded-lg px-8 py-8 mb-8">
      {/* <Card maxW='md' mx='auto' mt={4} > */}
      
        <form
          onSubmit={async e => {
            e.preventDefault()
            if (!email || !password) {
              toast({
                description: 'Credentials not valid.',
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              return
            }
            // your login logic here
            setIsSubmitting(true)
            login(email, password)
            // .then(
            //   <Navigate to={'/profile'}/>
            // )
              .then(res => {
                handleRedirectToOrBack()
                // <Navigate to={'/profile'}/>
              })
              .catch(error => {
                console.log(error.message)
                toast({
                  description: error.message,
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                })
              })
              .finally(() => {
                // setTimeout(() => {
                //   mounted.current && setIsSubmitting(false)
                //   console.log(mounted.current)
                // }, 1000)
                mounted.current && setIsSubmitting(false)
                handleRedirectToOrBack()
              })
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                name='password'
                type='password'
                autoComplete='password'
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            {/* <PasswordField /> */}
            <Button
              type='submit'
              colorScheme='pink'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
              Sign in
            </Button>
          </Stack>
        </form>
        <HStack justifyContent='space-between' my={4}>
          <Button variant='link'>
            <Link to='/register'><span className='text-gradient text-md'>Forgot Password?</span></Link>
          </Button>
          <Button variant='link' onClick={() => history('/register')}>
          <span className='text-gradient text-md'>Register</span>
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button className='w-full bg-blue-gradient py-2 rounded-full'
          variant='outline'
          width='full'
          colorScheme='red'
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then(user => {
                handleRedirectToOrBack()
                console.log(user)
              })
              .catch(e => console.log(e.message))
          }
        >
          Sign in with Google
        </Button>
        {/* </Card> */}
        </div>
    </Layout>
  )
}
