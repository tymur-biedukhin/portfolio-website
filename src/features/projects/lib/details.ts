interface ProjectDetails {
  id: string
  title: string
  status: string
  domain: string
  company: string
  duration: string
  description: string
  techStack: string[]
  images: string[]
  companyLink?: string
  link?: string
}

export const details: Record<string, ProjectDetails> = {
  '1': {
    id: '1',
    title: 'Bitsten',
    status: 'Ongoing',
    domain: 'Crypto',
    company: 'Localtrade',
    duration: '12 months',
    description:
      'The premier platform for trading, investing, and managing a wide range of digital assets. Designed to cater to both novice traders and seasoned investors, exchange offers a seamless, secure, and user-friendly experience, enabling everyone to navigate the dynamic world of cryptocurrencies with confidence. ',
    techStack: [
      'Next.js',
      'Typescript',
      'Tailwind CSS',
      'Node.js',
      'Nest.js',
      'PostgreSQL',
      'Redis',
      'Docker',
      'shadcn/ui',
    ],
    images: [
      '/projects/bitsten/spot.webp',
      '/projects/bitsten/auth.webp',
      '/projects/bitsten/wallet.webp',
      '/projects/bitsten/spot-light.webp',
    ],
    companyLink: 'https://www.linkedin.com/company/local-trade/',
    link: 'https://exchange.bitsten.com/trade/BTC_USDT',
  },
  '2': {
    id: '2',
    title: 'EverDues',
    status: 'Closed',
    domain: 'Crypto',
    company: 'EverDues',
    duration: '8 months',
    description:
      'The Web3 Subscription Platform is a decentralized, blockchain-based application designed to simplify and secure recurring payments for digital subscriptions. By leveraging Web3 technology, this platform provides both creators and subscribers with a more transparent, cost-effective, and permissionless way to manage subscriptions without relying on traditional banking systems.',
    techStack: [
      'Gatsby',
      'React',
      'Typescript',
      'Tailwind CSS',
      'Everscale SDK',
      'IPFS',
    ],
    images: [
      '/projects/everdues/land-main.webp',
      '/projects/everdues/land-whatis.webp',
      '/projects/everdues/widget.webp',
      '/projects/everdues/catalog.webp',
      '/projects/everdues/deposit.webp',
      '/projects/everdues/new-service.webp',
    ],
  },
  '3': {
    id: '3',
    title: 'Smilebox',
    status: 'Ongoing',
    domain: 'E-commerce',
    company: 'Smilebox',
    duration: '3 months',
    description:
      'Gift Card Design Platform, where you have the power to turn a simple gift card into a unique and memorable token of your affection With platform, client can buy or create personalized gift card designs for any occasion, adding that special touch to gift-giving experience.',
    techStack: [
      'JavaScript',
      'React',
      'Redux',
      'Redux ToolKit',
      'SCSS',
      'jQuery',
    ],
    images: [
      '/projects/smilebox/main.webp',
      '/projects/smilebox/auth.webp',
      '/projects/smilebox/constructor.webp',
    ],
    link: 'https://smilebox.com',
  },
  '4': {
    id: '4',
    title: 'Cornerstone',
    status: 'Ongoing',
    domain: 'E-commerce',
    company: 'Bigcommerce',
    duration: '12 months',
    description:
      "BigCommerce is a robust and versatile e-commerce platform designed to empower businesses of all sizes to establish and grow their online presence At the heart of BigCommerce's appeal are its diverse and visually striking themes, which allow businesses to create an attractive and engaging online store. Cornerstone is default theme for BigCommerce",
    techStack: ['jQuery', 'Handlebars', 'Node.js', 'Stencil', 'BigCommerce'],
    images: [
      '/projects/bigcommerce/main.webp',
      '/projects/bigcommerce/cart.webp',
      '/projects/bigcommerce/popular.webp',
      '/projects/bigcommerce/auth.webp',
    ],
    companyLink: 'https://www.bigcommerce.com/',
    link: 'https://cornerstone-light-demo.mybigcommerce.com/',
  },
  '5': {
    id: '5',
    title: 'ClioArt',
    status: 'Closed',
    domain: 'Crypto',
    company: 'Kanso Code',
    duration: '3 months',
    description:
      'A generative art platform powered by Solana is a decentralized digital platform that leverages the Solana blockchain to create, showcase, and trade generative art. Generative art is a form of digital art where algorithms, often created by artists or developers, are used to generate unique and constantly evolving artworks powered by Solana',
    techStack: [
      'React',
      'Next.js',
      'Typescript',
      'Node.js',
      'Tailwind CSS',
      'Solana',
    ],
    images: [
      '/projects/clio/main.webp',
      '/projects/clio/about.webp',
      '/projects/clio/how.webp',
      '/projects/clio/gas.webp',
      '/projects/clio/faq.webp',
    ],
    companyLink: 'https://www.kansocode.com/',
  },
  '6': {
    id: '6',
    title: 'Crouton',
    status: 'Ongoing',
    domain: 'Crypto',
    company: 'LoclaTrade',
    duration: '2 weeks',
    description:
      'Telegram Mini App (TMA) + DeFi Swap protocol built on the TON (The Open Network) blockchain, designed to enable seamless, decentralized token exchanges within the TON ecosystem. The platform leverages automated market makers (AMMs) and liquidity pools to facilitate instant and permissionless token swaps, providing users with a secure and efficient DeFi experience.',
    techStack: ['React', 'Typescript', 'TON SDK', 'Tailwind CSS', 'shadcn/ui'],
    images: [
      '/projects/crouton/swap.webp',
      '/projects/crouton/pool.webp',
      '/projects/crouton/add-liq.webp',
      '/projects/crouton/connect.webp',
    ],
    companyLink: 'https://www.linkedin.com/company/local-trade/',
    link: 'https://crouton.finance/',
  },
  '7': {
    id: '7',
    title: 'Comfidence',
    status: 'Closed',
    domain: 'Real estate',
    company: 'Comfidence estate',
    duration: '1 month',
    description:
      'The Commercial Real Estate Platform is a responsive, user-focused website designed to showcase commercial property listings, enable property searches, and connect buyers and sellers in a streamlined, professional interface. The project emphasizes a sleek, professional design combined with advanced search and filtering options tailored specifically for the commercial real estate industry. This project aims to increase visibility for properties, simplify search and comparison, and provide valuable resources for investors and real estate professionals.',
    techStack: [
      'Next.js',
      'Typescript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Docker',
    ],
    images: [
      '/projects/comfidence/main.webp',
      '/projects/comfidence/about.webp',
      '/projects/comfidence/contact.webp',
    ],
  },
  '8': {
    id: '8',
    title: 'WhiteZone',
    status: 'Ongoing',
    domain: 'Crypto',
    company: 'WhiteZone',
    duration: '5 months',
    description:
      'A cutting-edge platform designed to democratize access to exclusive pre-sales, NFT drops, and token launches in the decentralized web ecosystem. Marketplace bridges the gap between high-potential projects and a diverse community of investors, collectors, and enthusiasts, ensuring that opportunities are accessible, transparent, and fair.',
    techStack: [
      'React',
      'Redux',
      'Typescript',
      'Web3Modal',
      'MaterialUI',
      'Tailwind CSS',
    ],
    images: [
      '/projects/wzone/main.webp',
      '/projects/wzone/list.webp',
      '/projects/wzone/details.webp',
      '/projects/wzone/projects.webp',
    ],
    link: 'https://app.wzone.io/',
  },
  '9': {
    id: '9',
    title: 'Bid.one',
    status: 'Closed',
    domain: 'Crypto',
    company: 'Kanso Code',
    duration: '3 months',
    description:
      'The NFT Bidding Platform is a decentralized application (dApp) designed for bidding on NFTs (non-fungible tokens) in real-time. This app focuses on creating a seamless, user-friendly experience for NFT enthusiasts, offering features that empower both creators and collectors to engage in auctions and secure digital assets on the blockchain. The project aims to deliver a visually appealing, highly functional platform with transparency and trust at its core.',
    techStack: [
      'Next.js',
      'Typescript',
      'Tailwind CSS',
      'Node.js',
      'socket.io',
      'MongoDB',
      'Solana',
      'Ethereum',
    ],
    images: [
      '/projects/bid.one/auction-1.webp',
      '/projects/bid.one/auction-2.webp',
      '/projects/bid.one/wallet.webp',
    ],
    companyLink: 'https://www.kansocode.com/',
  },
  '18': {
    id: '18',
    title: 'Range Finance',
    status: 'Closed',
    domain: 'Crypto',
    company: 'Range Finance',
    duration: '1 months',
    description:
      'Next-generation decentralized liquidity aggregator and yield optimizer built on The Open Network (TON). It enhances capital efficiency, liquidity provisioning, and automated yield strategies while leveraging TON’s high-speed, low-cost transactions.',
    techStack: [
      'React.js',
      'Typescript',
      'Tailwind CSS',
      'TON SDK',
      'shadcn/ui',
    ],
    images: [
      '/projects/range/1.webp',
      '/projects/range/2.webp',
      '/projects/range/3.webp',
      '/projects/range/4.webp',
    ],
  },
}

export const itemsCount = Object.keys(details).length
