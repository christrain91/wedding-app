import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import useCurrentStaffMember from 'hooks/useCurrentStaffMember'
import Button from 'components/Button'
import AddPhotosButton from './AddPhotosButton'
import PhotoPreviewList from './PhotoPreviewList'
import LoadIcon from 'components/LoadIcon'

export interface PostInputValue {
  comment: string
  files: File[]
}

interface PostInputProps {
  onSubmit: (value: PostInputValue) => Promise<void>
}

const PostInput = (props: PostInputProps) => {
  const { currentStaffMember } = useCurrentStaffMember()
  const [files, setFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)
  const [comment, setComment] = useState('')

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    if (!comment || loading) return
    setLoading(true)
    try {
      await props.onSubmit({ comment, files })
      setFiles([])
      setComment('')
    } finally {
      setLoading(false)
    }
  }

  const onAddPhotos = (files: File[]) => {
    setFiles(current => [...current, ...files])
  }

  const onCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setComment(e.target.value)
  } 

  if (!currentStaffMember) {
    return null
  }

  return (
    <>
      <div className="min-w-0 flex-1">
        <form onSubmit={handleSubmit} className="relative">
          <div className="rounded-xl shadow-sm overflow-hiddem">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              rows={3}
              name="comment"
              id="comment"
              className="block w-full py-3 border-0 resize-none focus:ring-0 rounded-t-xl outline-none shadow-none sm:text-sm"
              placeholder="Add your comment..."
              value={comment}
              onChange={onCommentChange}
              />
          <div className="bg-white">
            <PhotoPreviewList files={files} />
          </div>
            {/* Spacer element to match the height of the toolbar */}
            <div className="py-1" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between bg-white rounded-b-lg">
          <div className="flex items-center space-x-5">
              <div className="flex items-center">
               <AddPhotosButton onAddPhotos={onAddPhotos} />
              </div>
            </div>
            <div className="flex-shrink-0">
            <Button disabled={loading || !comment} type="submit">Post</Button>
            </div>
          </div>
        </form>
      </div>
      {loading && <LoadIcon className="mt-4" />}
    </>
  )
}

export default PostInput