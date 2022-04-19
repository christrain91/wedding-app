import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useCurrentStaffMember from 'hooks/useCurrentStaffMember'
import Avatar from 'components/Avatar'
import Button from 'react-bootstrap/Button'


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
        <div className="flex flex-col align-middle h-screen justify-center items-center bg-white/10 backdrop-blur-md">
          <Avatar staffMember={currentStaffMember} size={450} className="rounded-full m-3" />
          <p className='text-xl font-light text-white'>
            Welcome, you have logged in as {currentStaffMember.firstname} {currentStaffMember.surname}
          </p>
          <Button className="m-3 bg-blue-600" size="lg" variant="primary" onClick={onContinueClick}>Continue</Button>
        </div>
      </div>
      : null}
  </>
}

export default Login
