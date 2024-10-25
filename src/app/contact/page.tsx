import { Mail, Send, Linkedin, Github } from 'lucide-react'

export default function () {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="grid grid-cols-2 grid-rows-2 gap-16">
        <a
          href="https://www.linkedin.com/in/tymur-biedukhin-19b408167/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 p-6 border border-border rounded-lg min-w-[400px] hover:text-white"
        >
          <Linkedin size={36} className="text-accent" />
          <span>Linkedin</span>
        </a>
        <a
          href="mailto:bedumur@gmail.com"
          className="flex flex-col items-center gap-2 p-6 border border-border rounded-lg min-w-[400px] hover:text-white"
        >
          <Mail size={36} className="text-accent" />

          <span>bedumur@gmail.com</span>
        </a>
        <a
          href="https://telegram.me/biedukhin"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 p-6 border border-border rounded-lg min-w-[400px] hover:text-white"
        >
          <Send size={36} className="text-accent" />
          <span>Telegram</span>
        </a>
        <a
          href="https://github.com/tymur-biedukhin"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 p-6 border border-border rounded-lg min-w-[400px] hover:text-white"
        >
          <Github size={36} className="text-accent" />
          <span>Github</span>
        </a>
      </div>
    </div>
  )
}
