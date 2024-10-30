'use client'

import { TypeAnimation } from 'react-type-animation'

import { Routes } from '@/shared/navigation'

export default function Home() {
  return (
    <>
      <h1 className="max-lg:hidden z-10 absolute bottom-12 left-[calc(20%+2.5rem)] text-xl text-primary font-light max-w-[560px]">
        Hello, I’m{' '}
        <span className="text-accent font-bold">Tymur Biedukhin</span>, Web
        Engineer since <span className="text-accent font-bold">2017</span> based
        in Lisbon, Portugal.
      </h1>
      <div className="absolute top-0 h-screen w-screen flex flex-col gap-4 justify-center items-center font-medium">
        <div className="space-x-4 text-6xl text-primary max-sm:text-center">
          <span>I build</span>
          <br className="sm:hidden" />
          <TypeAnimation
            preRenderFirstString
            sequence={[
              'web apps',
              1500,
              'solutions',
              3000,
              'innovations',
              1500,
            ]}
            repeat={Number.POSITIVE_INFINITY}
            className="text-accent whitespace-nowrap"
          />
        </div>
        <a
          href={Routes.PROJECTS}
          className="text-lg text-secondary underline hover:text-primary"
        >
          See projects
        </a>
      </div>
    </>
  )
}
