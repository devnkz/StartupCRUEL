import Image from "next/image"

export function Images({ src }){
    return(
        <Image
          className="object-contain rounded-lg hover:scale-110 transition duration-120"
          src={src}
          width={400}
          height={400}
          alt="LOGO"
        />
    )
}