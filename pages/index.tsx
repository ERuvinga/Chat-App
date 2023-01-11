import Head from 'next/head'
import styled from 'styled-components'
import Color from '../styles/colors'
import Nav from './components/NavBar/Nav'
import Container from './components/Container/GlobalContainer'

const Welcome = styled.section`
    width: 100%;
`

const LogRegister = styled.a`
    width:40%;
    padding: 5px 2px;
    margin: auto;
    margin-bottom: 6px;

    text-align: center;
    color:${Color.primary};
    border: solid 1px ${Color.primary};
    transition: all .4s ease-in-out;

    &: hover{
      opacity:0.8;
      transform: scale(1.02);
    }

`

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat-App</title>
        <meta name="description" content="this app is chat-application use a socket.io nextjs typescript and tailwindcss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container className="flex flex-col container mg-auto "> 
          <Nav/>
          <Welcome className="flex flex-col space-y-10 justify-center ">
            <h1 className="max-w-full text-4xl font-bold text-center md:text-5xl my-10 color-text">
              Welcome to Chat-App
            </h1>
            <p className="max-w-full text-center color-text">
              Please login to your account or create new account to continue
            </p>
            <div className="flex flex-col space-y-6 items-center">
              <LogRegister href="/login" >LOGIN</LogRegister>
              <LogRegister href="/register">CREATE ACCOUNT</LogRegister>
            </div>
          </Welcome>
      </Container>
    </>
  )
}
