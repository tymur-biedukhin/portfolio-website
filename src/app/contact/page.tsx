import { Mail, Send, Linkedin, FileText } from 'lucide-react'

export default function () {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="grid grid-cols-2 grid-rows-2 gap-16">
        <a
          href="https://www.linkedin.com/in/tymur-biedukhin-19b408167/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 p-6 border border-border rounded-lg min-w-[400px] hover:text-white hover:border-white"
        >
          <Linkedin size={36} className="text-accent" />
          <span className="font-medium">Linkedin</span>
        </a>
        <a
          href="mailto:bedumur@gmail.com"
          className="flex flex-col items-center gap-2 p-6 border border-border rounded-lg min-w-[400px] hover:text-white hover:border-white"
        >
          <Mail size={36} className="text-accent" />

          <span className="font-medium">bedumur@gmail.com</span>
        </a>
        <a
          href="https://telegram.me/biedukhin"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 p-6 border border-border rounded-lg min-w-[400px] hover:text-white hover:border-white"
        >
          <Send size={36} className="text-accent" />
          <span className="font-medium">Telegram</span>
        </a>
        <a
          href="https://cv.djinni.co/cd/6bcfed365a6d6f4c0dbc8bfa30b1c7/CV-BIedukhin.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 p-6 border border-border rounded-lg min-w-[400px] hover:text-white hover:border-white"
        >
          <FileText size={36} className="text-accent" />
          <span className="font-medium">Resume</span>
        </a>
      </div>
    </div>
  )
}
