import { Post } from 'hooks/usePosts'
import { getStaffMemberFromId } from 'util/staff'
import Avatar from 'components/Avatar'
import formatDistance from 'date-fns/formatDistance'
import supabase from 'util/supabase'
import { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { ScaleFade } from '@chakra-ui/transition'
import FadeInImage from 'components/FadeInImage'
import { compact } from 'lodash'

const SinglePost = (props: Post) => {
  const { content, created_at, created_by, file_ids } = props

  const fileUrls = useMemo(() => {
    return (file_ids || []).map(fileId => {
      const { data } = supabase.storage.from('post-image').getPublicUrl(fileId)
      return data?.publicURL
    })
  }, [file_ids])

  const postCreatedBy = getStaffMemberFromId(created_by)
  const createdAt = new Date(created_at)

  if (!postCreatedBy) return null

  const distance = formatDistance(createdAt, new Date(), { addSuffix: true })

  // eslint-disable-next-line @next/next/no-img-element
  const images = compact(fileUrls).map(fileUrl => <FadeInImage key={fileUrl} alt={fileUrl} src={fileUrl} className="w-full select-none" />)
  let carousel: JSX.Element | JSX.Element[] = images

  if (fileUrls.length > 0) {
    carousel = <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
      {images.map((image, index) => { 
      return <SwiperSlide key={index}>{image}</SwiperSlide>
      })}
    </Swiper>
  } 

  return <ScaleFade in>
    <div className="w-full bg-white p-3 rounded-xl">
      <div className="flex gap-x-2 align-middle items-center pb-2">
        <div>
          <Avatar className="rounded-full" staffMember={postCreatedBy} size={40} />
        </div>
        <div className="flex-1 flex flex-col align-middle pt-2">
          <span className="font-bold">{postCreatedBy.firstname} {postCreatedBy.surname}</span>
          <span className="prose mb-2 text-muted font-normal text-sm">
            {distance}
          </span>
        </div>
      </div>
      <div className="pose p-1">
        <p className="mb-1">
        {content}
        </p>
        {carousel}
      </div>
    </div>
  </ScaleFade>
}

export default SinglePost