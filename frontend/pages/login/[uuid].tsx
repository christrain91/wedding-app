import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useCurrentStaffMember from 'hooks/useCurrentStaffMember'
import Avatar from 'components/Avatar'
import Button from 'components/Button'


const Login = () => {
  const router = useRouter()
  const { setCurrentStaffMemberUUID, getCurrentStaffMember, currentStaffMember } = useCurrentStaffMember()
  const { uuid } = router.query

  useEffect(() => {
    if (uuid) {
      const staffMember = setCurrentStaffMemberUUID(uuid.toString())
      if (!staffMember) {
        router.push('/')
      }
    }
  }, [uuid, setCurrentStaffMemberUUID, getCurrentStaffMember, router])

  const onContinueClick = () => {
    router.push('/')
  }

  return <>
    <Head>
      <title>Logging In...</title>
    </Head>
    {(currentStaffMember) ?
      <div className="bg-[url('/dino.jpeg')] bg-no-repeat bg-cover">
        <div className="flex flex-col p-3 align-middle h-screen justify-center items-center bg-white/10 backdrop-blur-md">
          <Avatar staffMember={currentStaffMember} size={400} className="rounded-full m-3" />
          <p className='text-2xl font-bold mb-2 text-center text-white'>
            Welcome... to Jurassic Park
          </p>
          <p className="text-lg font-light text-center text-white">
            You have logged in as {currentStaffMember.firstname} {currentStaffMember.surname}
          </p>
          <Button size="lg" onClick={onContinueClick}>CONTINUE</Button>
        </div>
      </div>
      : null}
  </>
}

export default Login
