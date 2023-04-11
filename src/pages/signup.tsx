import React, {useEffect, useState} from 'react'
import Layout from "@Components/Layout/Layout";
import Game from "@Components/Game/Game";
import Signup from "@Components/SignUp";
import {useAuth} from "@API/auth";
import {ROUTES} from "@Utils/routes";
import {useRouter} from "next/router";

export default function SignUp() {
    return (
        <Layout>
            <Signup/>
        </Layout>
    )
}
