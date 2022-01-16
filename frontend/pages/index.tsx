import type { NextPage } from 'next'
import departments from 'data/departments'
import Department from 'components/Department'

const Home: NextPage = () => {
  return <div className="p-3 md:p-5 xl:p-10">
    <div className="h[500px] bg-red bg-fixed w-full" style={{ backgroundImage: '/dino.jpg' }}></div>
    <div className='flex flex-col justify-center'>
      {departments.map(department => <Department key={department.title} department={department} />)}
    </div>
  </div >
}

export default Home


// import React, { useState } from 'react'
// import staffData from '../../data/staff'
// import StaffList from '../StaffList'
// import SearchBar from '../SearchBar'
// import { StaffMember } from '../../definitions/index'

// const SearchContainer = styled.div`
//   width: ${isMobile ? '90%' : '500px'};
//   margin: 0 auto;
//   padding-bottom: 10px;
// `

// const PageContainer = styled.div`
//   width: ${isMobile ? '100%' : '90%'};
//   margin: 0 auto;
// `

// export default function () {
//   const [hasSearch, setHasSearch] = useState(false)
//   const [staff, setStaff] = useState(staffData)
//   return (
//     <PageContainer>
//       <SearchContainer>
//         <SearchBar
//           onSearch={search => {
//             setHasSearch(!!search)
//             setStaff(filterStaff(staffData, search))
//           }}
//         />
//       </SearchContainer>
//       <StaffList staff={staff} showSearchResults={hasSearch} />
//     </PageContainer>
//   )
// }

// function filterStaff(staffData: StaffMember[], search: string): StaffMember[] {
//   search = _.trim(search.toLowerCase())

//   if (!search) {
//     return staffData
//   }

//   return _.filter(staffData, staffMember => {
//     const searchIndex = getSearchIndexForStaffMember(staffMember)
//     return !!_.find(searchIndex, indexItem => _.includes(indexItem, search))
//   })
// }

// function getSearchIndexForStaffMember(staffMember: StaffMember): String[] {
//   const paths = [
//     'firstname',
//     'surname',
//     'department.title',
//     'job.title',
//     'nicknames'
//   ]
//   const values: string[][] = _.map(paths, path => {
//     let value = _.get(staffMember, path) || ''
//     if (!_.isArray(value)) {
//       value = [value]
//     }
//     return _.map(value, str => str.toLowerCase())
//   })

//   return _.flatten(values)
// }
