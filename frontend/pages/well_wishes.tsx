import useCurrentStaffMember from 'hooks/useCurrentStaffMember'

const WellWishes = () => {
  const { currentStaffMember } = useCurrentStaffMember()

  const background = currentStaffMember?.job.department.background

  return (
    <div className="min-h-screen" style={{ background }} >
      <h1>Well Wishes</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatum, quisquam.
      </p>
    </div>
  )
}

export default WellWishes