import { ChangeEventHandler, useRef } from 'react'
import { FaCamera } from 'react-icons/fa'
import { values } from 'lodash'

interface AddPhotosButtonProps {
  onAddPhotos: (files: File[]) => void
}

const AddPhotosButton = (props: AddPhotosButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const onAddPhotoClick = () => {
    fileInputRef.current?.click()
  }

  const onSelectFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const selectedFiles = e.target.files
    if (!selectedFiles) return
    props.onAddPhotos(values(selectedFiles))
  }

  return <button
     type="button"
     className="-m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
     onClick={onAddPhotoClick}
    >
      <FaCamera className="h-5 w-5" aria-hidden="true" />
      <span className="sr-only">Add photos</span>
      <input ref={fileInputRef} className="hidden" onChange={onSelectFile} type="file" multiple accept='image/*' />
    </button>
}

export default AddPhotosButton

