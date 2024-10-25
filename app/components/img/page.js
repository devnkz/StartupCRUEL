import Image from "next/image"

export function Images({ src }){
    return(
        <Image
          className="object-contain rounded-lg transition duration-120"
          src={src}
          width={400}
          height={400}
          alt="LOGO"
        />
    )
}