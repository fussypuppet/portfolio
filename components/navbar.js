import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Navbar() {

    useEffect(() => { // nextjs knows that this is a sign we want DOM info
        document.getElementById("home").style.color="hotpink";
    },[])

    return (
        <div>
            <Head>
                <title>Zocher Portfolio</title>
            </Head>
            <navbar>
                <ul>
                    <li>
                        <Link href="/">
                            <a id="home">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </navbar>
            <style>
            </style>
        </div>
    )
}

