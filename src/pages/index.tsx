import React from 'react'
import Layout from "@Components/Layout/Layout";
import Game from "@Components/Game/Game";
import Signup from "@Components/SignUp";
import {useAuth} from "@API/auth";


export default function Home() {
    const { isSignedIn } = useAuth()
    return (
        <Layout>
            {isSignedIn ? <Game/> : <Signup/>}
        </Layout>
      )
}
