export default function Home() {
  return (
    <>
      <h1 className="z-10 absolute bottom-12 left-[calc(20%+2.5rem)] text-xl text-white font-light max-w-[560px]">
        Hello, I’m{' '}
        <span className="text-accent font-bold">Tymur Biedukhin</span>, Team
        Lead and Senior Software Engineer Based in Lisbon, Portugal.
      </h1>
      <div className="h-screen w-screen flex justify-center items-center gap-2 text-6xl font-medium">
        <span className="text-white">I build</span>
        <span className="text-accent">web apps</span>
      </div>
    </>
  )
}
