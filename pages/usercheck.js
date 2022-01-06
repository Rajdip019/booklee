import React from 'react'
import {useRouter} from 'next/router'
import { ChakraProvider, Spinner } from '@chakra-ui/react'

const usercheck = () => {
    const router = useRouter()
    const checkUser = async() => {
        try{
            const res = await fetch("https://booklee.vercel.app/api/user/signin")
            router.push('/')
        }catch{
            null
        }
      }
      checkUser();
    return (
        <div className='flex justify-center pt-[45vh]'>
        <div className=''>
        <ChakraProvider>
            <Spinner size='xl' thickness='4px' color='blue.500'/>
        </ChakraProvider>
        </div>
        </div>
    )
}

export default usercheck
