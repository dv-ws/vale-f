import {
  BarChart3,
  BellRing,
  BrainCircuit,
  CloudSun,
  DatabaseZap,
  Globe2,
  Leaf,
  LineChart,
  MapPinned,
  MessageCircle,
  RadioTower,
  Satellite,
  ShieldCheck,
  Sprout,
  TrendingDown,
  UsersRound,
  WalletCards
} from 'lucide-react';

export const brand = {
  name: 'Vale Farm Kashmir',
  shortName: 'ValeFarm',
  tabName: 'Vale Farm',
  email: 'valefarmskashmir@gmail.com',
  instagram: 'https://www.instagram.com/valefarmkashmir/',
  linkedin: 'https://www.linkedin.com/company/vale-farm-kashmir/',
  heroVideo:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4',
  farmVideo:
    'https://videos.pexels.com/video-files/2882117/2882117-uhd_2560_1440_24fps.mp4',
  motionVideos: {
    fields: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4',
    orchard: 'https://videos.pexels.com/video-files/5527320/5527320-uhd_2160_3840_24fps.mp4',
    harvesting: 'https://videos.pexels.com/video-files/6226989/6226989-uhd_3840_2160_30fps.mp4',
    paddy: 'https://videos.pexels.com/video-files/4910161/4910161-uhd_2560_1440_30fps.mp4',
    greenhouse: 'https://videos.pexels.com/video-files/4816969/4816969-uhd_2560_1440_25fps.mp4',
    seedling: 'https://videos.pexels.com/video-files/4504118/4504118-uhd_2560_1440_25fps.mp4',
    mountains: 'https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4',
    closeup: 'https://videos.pexels.com/video-files/5200372/5200372-uhd_2560_1440_25fps.mp4',
    valley: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
    drone: 'https://videos.pexels.com/video-files/854059/854059-hd_1280_720_25fps.mp4',
    wheat: 'https://videos.pexels.com/video-files/3196070/3196070-uhd_2560_1440_25fps.mp4',
    tractor: 'https://videos.pexels.com/video-files/2882118/2882118-uhd_2560_1440_24fps.mp4',
    irrigation: 'https://videos.pexels.com/video-files/5527834/5527834-uhd_2560_1440_25fps.mp4',
    leaves: 'https://videos.pexels.com/video-files/1526909/1526909-hd_1920_1080_30fps.mp4',
    crops: 'https://videos.pexels.com/video-files/4498116/4498116-uhd_2560_1440_25fps.mp4',
    footer: 'https://videos.pexels.com/video-files/3408081/3408081-uhd_2560_1440_25fps.mp4',
    contactHero: 'https://videos.pexels.com/video-files/4498119/4498119-uhd_2560_1440_25fps.mp4',
    aboutMotion: 'https://videos.pexels.com/video-files/6994052/6994052-uhd_2560_1440_30fps.mp4',
    careerMotion: 'https://videos.pexels.com/video-files/3254404/3254404-uhd_2560_1440_25fps.mp4',
    journalMotion: 'https://videos.pexels.com/video-files/856480/856480-hd_1280_720_30fps.mp4',
    platformMotion: 'https://videos.pexels.com/video-files/4434242/4434242-uhd_2560_1440_24fps.mp4'
  },
  logo: '/brand/valefarm-mark.png'
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Platform', path: '/platform' },
  { label: 'About', path: '/about' },
  { label: 'Field Notes', path: '/field-notes' },
  { label: 'Global Journal', path: '/journal' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' }
];

export const stats = [
  { value: '500M+', label: 'Farmers Worldwide', hint: 'Global farmer community' },
  { value: '40%', label: 'Food Lost to Inefficiency', hint: 'A need for smarter timing' },
  { value: '$24B', label: 'AgriTech Market by 2030', hint: 'Growing global market' },
  { value: '140M', label: 'Farming Households in India', hint: 'Large domestic opportunity' }
];

export const problemCards = [
  {
    icon: Leaf,
    title: 'Changing crop conditions',
    description:
      'Kashmir farmers increasingly need timely guidance as weather patterns, field conditions and seasonal risks become harder to predict.'
  },
  {
    icon: CloudSun,
    title: 'Decisions without live context',
    description:
      'Many farm decisions still depend on habit instead of field history, weather signals, crop stage and local advisory inputs.'
  },
  {
    icon: WalletCards,
    title: 'Market timing pressure',
    description:
      'Growers need clearer visibility into price movement, demand signals and better selling windows across local and wider markets.'
  },
  {
    icon: BellRing,
    title: 'Avoidable seasonal losses',
    description:
      'Pest pressure, disease risk, hail, dry spells and sudden climate events can quickly turn into farm-level losses without early alerts.'
  }
];

export const platformModules = [
  {
    icon: DatabaseZap,
    title: 'Season Memory',
    eyebrow: 'Farm timeline',
    description:
      'Keep crop cycles, field activity, inputs, expenses and growth milestones organised in a simple farmer-friendly record system.'
  },
  {
    icon: BrainCircuit,
    title: 'Field-Tuned Guidance',
    eyebrow: 'Local intelligence',
    description:
      'Generate practical crop suggestions shaped by local soil, climate, crop stage and regional growing patterns instead of generic advice.'
  },
  {
    icon: RadioTower,
    title: 'Risk & Weather Signals',
    eyebrow: 'Early warning layer',
    description:
      'Surface weather, pest, irrigation and disease signals before small risks become expensive seasonal problems.'
  },
  {
    icon: LineChart,
    title: 'Price Window Insights',
    eyebrow: 'Market layer',
    description:
      'Help growers compare price movement and demand cues so selling decisions are better timed and less dependent on guesswork.'
  },
  {
    icon: Satellite,
    title: 'Satellite + Field Inputs',
    eyebrow: 'Data fabric',
    description:
      'Combine field observations, weather, satellite and future sensor inputs to strengthen farm-level decision support each season.'
  },
  {
    icon: MessageCircle,
    title: 'Farmer-First Access',
    eyebrow: 'Regional UX',
    description:
      'Support regional language, voice-friendly journeys and offline/low-network workflows for practical rural adoption.'
  }
];

export const valueProps = [
  'Guidance shaped around local soil, crop stage and weather patterns',
  'A clean digital memory for farms, fields, inputs and seasons',
  'Market movement visibility to support stronger selling decisions',
  'Regional-language experiences for everyday farmer use',
  'Low-network workflows for villages and field conditions',
  'A private farm knowledge layer that becomes stronger every season'
];

export const businessModels = [
  {
    label: 'Farmer Access',
    title: 'Practical digital farming tools',
    points: ['Simple onboarding', 'Core records and advisory access', 'Premium insights as farmers scale']
  },
  {
    label: 'Partners',
    title: 'Institutional and enterprise workflows',
    points: ['Input companies', 'Agro-processing networks', 'Insurance, credit and buyer ecosystems']
  },
  {
    label: 'Programmes',
    title: 'Public-sector collaboration layer',
    points: ['Agriculture departments', 'Farmer support programmes', 'Digital literacy and advisory deployment']
  }
];

export const partnerLogos = [
  {
    name: 'SKUAST Kashmir',
    caption: 'Backed by SKUAST Kashmir',
    fallback: 'SK',
    logo: 'https://skuastkashmir.ac.in/img/logo-primary.png',
    href: 'https://skuastkashmir.ac.in/'
  },
  {
    name: 'RBIC, SKUAST-K',
    caption: 'Supported through RBIC, the rural innovation and incubation department',
    fallback: 'RBIC',
    logo: '/brand/rbic-attached.jpg',
    href: 'https://in.linkedin.com/company/rural-business-incubation-centre'
  }
];

export const farmGallery = [
  {
    title: 'Paddy fields of Kashmir',
    caption: 'Water, timing and weather intelligence matter deeply for valley agriculture.',
    image: 'https://cdn.thewire.in/wp-content/uploads/2018/04/17132808/Kashmir-Paddy-2_Reuters.jpg'
  },
  {
    title: 'Cherry farming',
    caption: 'Fruit growers need better risk signals as climate and market conditions shift.',
    image: 'https://images.moneycontrol.com/static-mcnews/2021/06/5-kashmir-cherry-farming.jpg'
  },
  {
    title: 'Vegetable gardens',
    caption: 'Small farms and kitchen gardens can benefit from simple records and advisory flows.',
    image: 'https://kashmirlife.net/wp-content/uploads/2018/07/Vegetables-Garden-up.jpg'
  },
  {
    title: 'High-value produce',
    caption: 'ValeFarm is designed around real crops, real seasons and local farmer needs.',
    image: 'https://www.kashmironline.com/blog/wp-content/uploads/2024/08/a800dc89-880d-41dd-acdf-c9428b0c059d-1.jpg'
  }
];

export const kashmirFieldNotes = [
  {
    title: 'Kashmir rice farming decline as farmers shift crops',
    source: 'Livemint',
    date: '2025',
    category: 'Crop shift',
    description:
      'A field note on why crop transition, climate pressure and changing economics require better decision support for farmers.',
    url: 'https://www.livemint.com/industry/kashmir-rice-farming-decline-climate-change-farmers-shift-to-apples-vegetables-11751609746182.html'
  },
  {
    title: 'Kashmir’s cherry crisis amid climate change',
    source: 'Kashmir Times',
    date: 'Climate risk',
    category: 'Cherry growers',
    description:
      'Highlights the need for timely weather intelligence and better farm-level planning for high-value fruit crops.',
    url: 'https://kashmirtimes.com/news/kashmirs-cherry-crisis-amid-climate-change'
  },
  {
    title: 'Dry weather leaves Kashmir’s paddy farmers struggling',
    source: 'The Wire Science',
    date: 'Water stress',
    category: 'Paddy farming',
    description:
      'Shows why irrigation signals, weather monitoring and field records can become important tools for seasonal resilience.',
    url: 'https://science.thewire.in/economy/agriculture/months-of-dry-weather-leave-kashmirs-paddy-farmers-struggling/'
  },
  {
    title: 'Kashmir apple growers worry about climate change',
    source: 'Kashmir Times',
    date: 'Orchards',
    category: 'Apple growers',
    description:
      'A reminder that orchard advisory, disease-risk awareness and climate signals need to reach growers in usable ways.',
    url: 'https://kashmirtimes.com/news/kashmir-apple-growers-worry-about-climate-change'
  },
  {
    title: 'Hailstorm ravages orchards across Kashmir',
    source: 'Kashmir Observer',
    date: '2026',
    category: 'Extreme weather',
    description:
      'Underlines why early alerts, crop insurance readiness and rapid response workflows matter for orchard communities.',
    url: 'https://kashmirobserver.net/2026/05/12/hailstorm-ravages-orchards-across-kashmir-growers-fear-losses/'
  },
  {
    title: 'Cherry crop lost due to unfavourable weather',
    source: 'Brighter Kashmir',
    date: 'Weather loss',
    category: 'Fruit crops',
    description:
      'Weather-linked losses make the case for better advisory, records and local crop intelligence.',
    url: 'https://brighterkashmir.com/55-cherry-crop-in-kashmir-lost-due-to-unfavourable-weather'
  },
  {
    title: 'Apple growers report prices halved from last year',
    source: 'Kashmir Observer',
    date: '2025',
    category: 'Market pressure',
    description:
      'Market volatility shows why growers need clearer price-window visibility and buyer intelligence.',
    url: 'https://kashmirobserver.net/2025/09/25/kashmir-apple-growers-report-prices-halved-from-last-year/'
  },
  {
    title: 'Field records for changing paddy seasons',
    source: 'ValeFarm note',
    date: 'Field context',
    category: 'Records',
    description:
      'Paddy growers need simple season records that connect water availability, field activity, weather pressure and crop outcomes.',
    url: 'https://www.livemint.com/industry/kashmir-rice-farming-decline-climate-change-farmers-shift-to-apples-vegetables-11751609746182.html'
  },
  {
    title: 'Orchard planning under uncertain weather',
    source: 'ValeFarm note',
    date: 'Risk planning',
    category: 'Orchard advisory',
    description:
      'Apple and cherry orchards need practical planning around spray timing, moisture stress, hail exposure and harvest windows.',
    url: 'https://kashmirobserver.net/2026/05/12/hailstorm-ravages-orchards-across-kashmir-growers-fear-losses/'
  }
];

export const globalJournalArticles = [
  {
    title: 'AI can be a game-changing solution for farmers',
    source: 'FAO',
    date: '2025',
    category: 'Global AI',
    description:
      'FAO highlights responsible AI as part of digital agriculture, with relevance for farmers, advisory systems and inclusive agrifood transformation.',
    url: 'https://www.fao.org/newsroom/detail/ai-can-be-a-game-changing-solution-for-farmers--fao-innovation-chief/en'
  },
  {
    title: 'Digital Agriculture and AI Innovation',
    source: 'FAO Innovation',
    date: 'Global',
    category: 'Digital agriculture',
    description:
      'A global reference on how digital technologies and AI can support precision farming, climate-smart agriculture and better market access.',
    url: 'https://www.fao.org/innovation/digital-agriculture-and-ai-innovation/en'
  },
  {
    title: 'Delivering regenerative agriculture through digitalization and AI',
    source: 'World Economic Forum',
    date: '2025',
    category: 'Regenerative farming',
    description:
      'Connects AI, digital tools and regenerative practices as a practical toolkit for resilient and sustainable farming.',
    url: 'https://www.weforum.org/stories/2025/01/delivering-regenerative-agriculture-through-digitalization-and-ai/'
  },
  {
    title: 'AI4AI: Scaling digital agriculture in India and beyond',
    source: 'World Economic Forum',
    date: '2030 goal',
    category: 'Scaling AI',
    description:
      'Shows how public-private partnerships can accelerate farmer-first digital agriculture and emerging agri-tech adoption.',
    url: 'https://initiatives.weforum.org/ai4ai/home'
  },
  {
    title: 'Harnessing AI for agricultural transformation',
    source: 'World Bank',
    date: '2025',
    category: 'Smallholder AI',
    description:
      'Explores where AI can add value for smallholder farmers, climate resilience and more inclusive agricultural systems.',
    url: 'https://www.worldbank.org/en/topic/agriculture/publication/harnessing-artificial-intelligence-for-agricultural-transformation'
  },
  {
    title: 'OpenAg: Democratizing Agricultural Intelligence',
    source: 'arXiv paper',
    date: '2025',
    category: 'Research paper',
    description:
      'A research reference on agricultural intelligence systems, explainability, local context and decision support for farmers.',
    url: 'https://arxiv.org/abs/2506.04571'
  },
  {
    title: 'Digital agriculture in action: AI for agriculture',
    source: 'FAO report',
    date: 'Report',
    category: 'AI applications',
    description:
      'A global report collecting practical examples of artificial intelligence applications across agriculture and food systems.',
    url: 'https://openknowledge.fao.org/handle/20.500.14283/cb7142en'
  },
  {
    title: 'The State of Food and Agriculture 2025',
    source: 'FAO',
    date: '2025',
    category: 'Policy',
    description:
      'A global policy reference for understanding productivity, sustainability and agricultural transformation across food systems.',
    url: 'https://www.fao.org/publications/fao-flagship-publications/the-state-of-food-and-agriculture/en'
  },
  {
    title: 'Technology for climate-smart agriculture',
    source: 'CGIAR',
    date: 'Global',
    category: 'Climate-smart farming',
    description:
      'Research-led thinking on digital tools, climate resilience and the practical systems farmers need as growing conditions shift.',
    url: 'https://www.cgiar.org/initiative/climate-resilience/'
  }
];

export const articles = [...kashmirFieldNotes, ...globalJournalArticles];

export const careerRoles = [
  {
    title: 'AI / Data Intern',
    type: 'Remote / Kashmir hybrid',
    description: 'Build crop recommendation prototypes, disease-risk signals and data pipelines for field intelligence.',
    icon: BrainCircuit
  },
  {
    title: 'Agriculture Field Associate',
    type: 'Kashmir field role',
    description: 'Support farmer onboarding, crop-cycle validation, field notes and local feedback loops.',
    icon: Sprout
  },
  {
    title: 'Product Engineer',
    type: 'Product engineering',
    description: 'Create mobile-first dashboards, offline flows and analytics modules for farmers and partners.',
    icon: BarChart3
  },
  {
    title: 'Partnerships & Growth',
    type: 'Ecosystem building',
    description: 'Work with institutions, FPOs, farmer groups, buyers and agricultural support networks.',
    icon: UsersRound
  }
];

export const trustPoints = [
  { icon: MapPinned, title: 'Kashmir-rooted', text: 'Built around regional crops, local climate, orchard realities and farmer workflows.' },
  { icon: ShieldCheck, title: 'Responsible data layer', text: 'Farm records and seasonal signals are treated as a long-term trust asset, not a one-time dashboard.' },
  { icon: Globe2, title: 'Global AI exposure', text: 'The founding team brings MNC experience and global exposure across AI, product and data systems.' },
  { icon: TrendingDown, title: 'Loss-aware design', text: 'The platform story starts from the practical problems growers face: weather shocks, price pressure and crop uncertainty.' }
];
