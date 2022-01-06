import React from 'react'
import {useRouter} from 'next/router'
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import { template } from '../helpers/template'

const usercheck = () => {
    const {templateString} = template;
    const router = useRouter()
    const checkUser = async() => {
        try{
            const res = await fetch(`${templateString}/api/user/signin`)
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
