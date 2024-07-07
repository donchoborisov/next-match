'use client'

import { max } from "date-fns"
import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary"


type Props = {
  onUploadImage: (result:CloudinaryUploadWidgetResults) => void;
}


export default function ImageUploadButton({onUploadImage}:Props) {
  return (
     
    <CldUploadButton
      options={{maxFiles: 1}}
      onSuccess={onUploadImage}
      signatureEndpoint='/api/sign-image'
      uploadPreset="nm-demo"
      className={`flex items-center gap-2 border-2 border-secondary text-secondary 
      rounded-lg py-2 px-4 hover:bg-secondary/10`}
    >
     Upload New Image

    </CldUploadButton>



  )
}