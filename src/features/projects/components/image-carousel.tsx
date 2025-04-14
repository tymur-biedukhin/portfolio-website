'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

import { cn } from '@/shared/lib/style-utils'

interface Props {
  title: string
  images: string[]
}

export const ImageCarousel = ({ title, images }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())

    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

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
        <div className="flex gap-4 w-full">
          {images.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`${title} image ${idx + 1}`}
              width={480}
              height={480}
              className="w-full h-[300px] first:ml-4"
              priority={idx === 0}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-1 justify-center mt-4">
        {images.map((_, idx) => (
          <button
            key={_}
            type="button"
            className={cn(
              'transition size-1.5 bg-secondary rounded-sm',
              selected === idx && 'bg-primary w-3',
            )}
            onClick={() => emblaApi?.scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  )
}
