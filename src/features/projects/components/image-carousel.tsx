'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

interface Props {
  title: string
  images: string[]
}

export const ImageCarousel = ({ title, images }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  return (
    <div className="group relative">
      <button
        type="button"
        className="transition absolute left-0 top-0 bottom-0 bg-black/50 hover:bg-black/80 hidden group-hover:flex z-10 items-center px-4"
        onClick={() => emblaApi?.scrollPrev()}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        className="transition absolute right-0 top-0 bottom-0 bg-black/50 hover:bg-black/80 hidden group-hover:flex z-10 items-center px-4"
        onClick={() => emblaApi?.scrollNext()}
      >
        <ChevronRight size={24} />
      </button>
      <div ref={emblaRef} className="overflow-x-hidden">
        <div className="flex gap-4 h-[480px] w-full">
          {images.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`${title} image ${idx + 1}`}
              width={480}
              height={480}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
