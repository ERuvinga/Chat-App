import Link from 'next/link'
import Nav from '../components/NavBar/Nav'
import HeadPage from '../components/CommonComponents/Head'


export default function Home() {
  return (
    <>
      <HeadPage/>
      <div className='containerG'> 
        <Nav/>
          <section className="flex flex-col space-y-10 justify-center ">
            <h1 className="max-w-full text-4xl font-bold text-center md:text-5xl my-10 ">
              Welcome to Chat-App
            </h1>
            <p className="max-w-full text-center color-text">
              Please login to your account or create new account to continue
            </p>
            <div className="flex flex-col space-y-6 items-center">
              <Link href="/Login"  className='loginRegisterBtn'>LOGIN</Link>
              <Link href="/Register" className='loginRegisterBtn'>CREATE ACCOUNT</Link>
            </div>
          </section>
      </div>
    </>
  )
}
