const projects = [
  {
    title: 'Bitsten',
    description: 'Cryptocurrency exchange',
    coverImg: 'https://picsum.photos/200/200',
  },
  {
    title: 'EverDues',
    description: 'Web3 Subscriptions Platform',
    coverImg: 'https://picsum.photos/200/200',
  },
  {
    title: 'Smilebox',
    description: 'Otkrytki',
    coverImg: 'https://picsum.photos/200/200',
  },
  {
    title: 'Bigcommerce',
    description: 'E-commerce store constructor',
    coverImg: 'https://picsum.photos/200/200',
  },
  {
    title: 'NDA',
    description: 'Smart Demographic Analysis Tool',
    coverImg: '',
  },
  {
    title: 'NDA',
    description: 'Healthcare platform for the US market',
    coverImg: '',
  },
  {
    title: 'NDA',
    description: 'Medical establishment audit system for Middle East market',
    coverImg: '',
  },
  {
    title: 'NDA',
    description: 'Automotive platform',
    coverImg: '',
  },
  {
    title: 'ClioArt',
    description: 'NFT Artist marketplace',
    coverImg: 'https://picsum.photos/200/200',
  },
  {
    title: 'Crouton',
    description: 'TON DeFi swap',
    coverImg: 'https://picsum.photos/200/200',
  },
  {
    title: 'Comfidence estate',
    description: 'Commercial real estate agency website',
    coverImg: 'https://picsum.photos/200/200',
  },
  {
    title: 'Bid.one',
    description: 'NFT bidding platform',
    coverImg: 'https://picsum.photos/200/200',
  },
  {
    title: 'NDA',
    description: 'Supply chain management system',
    coverImg: '',
  },
  {
    title: 'NDA',
    description: 'Online education vendor account management',
    coverImg: '',
  },
  {
    title: 'NDA',
    description: 'One of the biggest telecom enteprises in SEA region',
    coverImg: '',
  },
]

const middle = Math.ceil(projects.length / 2)

export default function () {
  return (
    <div className="w-3/6 mx-auto pt-36 pb-20">
      <h1 className="text-5xl text-primary">projects</h1>
      <div className="grid grid-cols-2 gap-6 pt-16">
        <div className="grid gap-6">
          {projects.slice(0, middle).map((project) => (
            <a
              href="/"
              key={project.title}
              className="relative group rounded-lg border border-border min-h-[200px]"
            >
              {project.coverImg ? (
                <img
                  src={project.coverImg}
                  alt="1"
                  className="w-full h-full rounded-lg"
                />
              ) : (
                <div className="flex items-center justify-center bg-black w-full h-full rounded-lg">
                  <span className="text-5xl font-medium text-primary">NDA</span>
                </div>
              )}
              <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex flex-col items-center justify-center bg-accent text-black text-center space-y-2 rounded-lg p-12 font-medium">
                <h2 className="text-xl">{project.title}</h2>
                <span className="text-sm">{project.description}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="grid gap-6">
          {projects.slice(middle).map((project, idx) => (
            <a
              href="/"
              key={project.title}
              style={{
                height: `${((idx % 3) + 1) * 200}px`,
              }}
              className="relative group rounded-lg border border-border"
            >
              {project.coverImg ? (
                <img
                  src={project.coverImg}
                  alt="1"
                  className="w-full h-full rounded-lg"
                />
              ) : (
                <div className="flex items-center justify-center bg-black w-full h-full rounded-lg">
                  <span className="text-5xl font-medium text-primary">NDA</span>
                </div>
              )}
              <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex flex-col items-center justify-center bg-accent text-black text-center space-y-2 rounded-lg p-12 font-medium">
                <h2 className="text-xl">{project.title}</h2>
                <span className="text-sm">{project.description}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
