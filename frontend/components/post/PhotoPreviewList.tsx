interface PhotoPreviewListProps {
  files: File[]
}

const PhotoPreviewList = (props: PhotoPreviewListProps) => {
  if (!props.files?.length) {
    return null
  }

  return <div className="p-3 bg-white flex gap-2">
    {props.files.map(file => <PhotoPreview key={file.name} file={file} />)}
  </div>
}

const PhotoPreview = (props: { file: File }) =>  {
  const url = URL.createObjectURL(props.file) 

  // eslint-disable-next-line @next/next/no-img-element
  const image = <img className="w-auto h-auto shadow" src={url} alt={props.file.name} />

  return <div className="w-20 h-20 flex flex-col justify-center items-center align-middle object-cover p-1 bg-gray-100 rounded">
    {image}
  </div>
}



export default PhotoPreviewList