import Link from 'next/link'
import Nav from '../components/NavBar/Nav'
import HeadPage from '../components/CommonComponents/Head'


export default function Home() {
  return (
    <>
      <HeadPage />
      <div className='containerG'>
        <Nav />
        <section className="flex flex-col space-y-5 md:space-y-10 justify-center ">
          <h1 className="max-w-full mx-1 text-2xl font-bold text-center md:text-5xl md:my-10 ">
            Welcome to Chat-App
          </h1>
          <p className="max-w-full mx-1 text-center color-text ">
            Please login to your account or create new account to continue
          </p>
          <div className="flex flex-col space-y-3 md:space-y-6 items-center">
            <Link href="/Login" className='loginRegisterBtn w-[94%] md:w-[60%] lg:w-[40%]'>LOGIN</Link>
            <Link href="/Register" className='loginRegisterBtn  w-[94%] md:w-[60%] lg:w-[40%]'>CREATE ACCOUNT</Link>
          </div>
        </section>
      </div>
    </>
  )
}
