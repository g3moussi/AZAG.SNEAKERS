import { Product } from '../types';
import sandalCamelImg from '../assets/images/sandal_camel_strapped_1785353483945.jpg';
import sandalBlackMuleImg from '../assets/images/sandal_black_mule_1785353496069.jpg';
import sandalHeroImg from '../assets/images/klaim_sandal_hero_1785353472195.jpg';

export const INITIAL_PRODUCTS: Product[] = [
  // MOCASSINS FEMME
  {
    id: 'azag-mocassin-cuir-italien',
    name: 'Mocassin Cuir Souple Bit Or',
    subtitle: 'Loafer en cuir véritable avec mords en laiton doré et cousu main',
    price: 449,
    originalPrice: 549,
    discountBadge: '-18%',
    isNew: true,
    isBestSeller: true,
    category: 'mocassins',
    targetAudience: 'femme',
    colors: [
      { name: 'Noir Intense', hex: '#1C1917', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80' },
      { name: 'Camel Cognac', hex: '#8B4513', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80' },
      { name: 'Bordeaux', hex: '#4A0E17', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    mainImage: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Le mocassin intemporel par excellence d’AZAG. Fabriqué dans un cuir d’agneau ultra-souple avec un montage cousu Blake traditionnel. Orné d’un mors en laiton doré, il offre un confort incomparable pour le travail et la ville.',
    materials: ['Cuir d’agneau pleine fleur 100%', 'Semelle moussée orthopédique', 'Semelle extérieure cuir avec patin gomme'],
    rating: 5.0,
    reviewsCount: 94,
    inStock: true,
    reviews: [
      {
        id: 'rev-moc-1',
        author: 'Laila K.',
        city: 'Casablanca',
        rating: 5,
        date: '20 Juillet 2026',
        comment: 'Un mocassin d’une souplesse incroyable. Je le porte tous les jours au bureau à Casa sans aucune douleur !',
        verified: true
      }
    ]
  },

  // BASKETS / SNEAKERS FEMME
  {
    id: 'azag-basket-cuir-minimaliste',
    name: 'Sneaker Prestige Cuir Blanc',
    subtitle: 'Basket chic minimaliste en cuir pleine fleur avec semelle cupsole',
    price: 479,
    originalPrice: 580,
    discountBadge: 'Bestseller',
    isBestSeller: true,
    category: 'baskets',
    targetAudience: 'femme',
    colors: [
      { name: 'Blanc / Beige', hex: '#F5F2EB', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80' },
      { name: 'Blanc / Camel', hex: '#C18553', image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    mainImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'La sneaker urbaine de luxe par AZAG. Conçue pour la femme moderne qui recherche l’élégance décontractée. Cuir italien blanc ultra-doux réhaussé de détails en daim beige naturel.',
    materials: ['Cuir de veau lisse italien', 'Doublure intérieure respirante en cuir', 'Semelle extérieure en gomme ultra-légère'],
    rating: 4.9,
    reviewsCount: 142,
    inStock: true,
    reviews: [
      {
        id: 'rev-bsk-1',
        author: 'Houda T.',
        city: 'Rabat',
        rating: 5,
        date: '18 Juillet 2026',
        comment: 'Sublimes baskets ! Le cuir est très qualitatif et la semelle amortit parfaitement la marche.',
        verified: true
      }
    ]
  },

  // ESCARPINS FEMME
  {
    id: 'azag-escarpin-cuir-nude',
    name: 'Escarpin Slingback Cuir Nude',
    subtitle: 'Chaussure à talon carré 6cm avec bride arrière et bout pointu',
    price: 429,
    originalPrice: 499,
    discountBadge: '-14%',
    isNew: true,
    category: 'escarpins',
    targetAudience: 'femme',
    colors: [
      { name: 'Nude Rosé', hex: '#E2C2B3', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80' },
      { name: 'Noir Vernis', hex: '#1C1917', image: 'https://images.unsplash.com/photo-1596149813083-bb5423887116?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: [36, 37, 38, 39, 40],
    mainImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1596149813083-bb5423887116?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596149813083-bb5423887116?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'L’escarpin slingback AZAG combine la grâce du bout effilé avec le confort moderne du talon carré de 6cm. Idéal pour sublimer vos tenues lors d’événements ou de réceptions.',
    materials: ['Cuir Nappa souple', 'Talon enfilé cuir 6cm', 'Boucle bijou dorée ajustable'],
    rating: 4.8,
    reviewsCount: 56,
    inStock: true,
    reviews: []
  },

  // BOTTINES FEMME
  {
    id: 'azag-bottine-cuir-cognac',
    name: 'Bottine Chelsea Cuir Cognac',
    subtitle: 'Bottine en cuir gras patiné avec élastiques latéraux',
    price: 529,
    originalPrice: 650,
    discountBadge: 'Édition Hiver',
    isNew: false,
    category: 'bottines',
    targetAudience: 'femme',
    colors: [
      { name: 'Cognac Patiné', hex: '#8B4513', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80' },
      { name: 'Noir Ébène', hex: '#1C1917', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    mainImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Une bottine Chelsea iconique réalisée dans un cuir pleine fleur résistant avec patine réalisée à la main dans nos ateliers de Fès. Confort thermique et style affirmé garanti.',
    materials: ['Cuir de vachette pleine fleur patiné', 'Doublure cuir thermorégulatrice', 'Semelle crantée isolante'],
    rating: 4.9,
    reviewsCount: 88,
    inStock: true,
    reviews: []
  },

  // SANDALES & MULES FEMME
  {
    id: 'azag-sandale-lanieres-camel',
    name: 'Sandale Lanières Cuir',
    subtitle: 'Sandale plate en cuir naturel fait main avec lanières fines',
    price: 299,
    originalPrice: 399,
    discountBadge: '-25%',
    isBestSeller: true,
    category: 'sandales',
    targetAudience: 'femme',
    colors: [
      { name: 'Camel Cognac', hex: '#C18553', image: sandalCamelImg }
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    mainImage: sandalCamelImg,
    secondaryImage: sandalCamelImg,
    gallery: [
      sandalCamelImg
    ],
    description: 'La sandale à lanières iconique de AZAG. Confectionnée dans un cuir de veau véritable souple et résistant, cette création sublime le pied avec élégance tout en assurant un maintien optimal grâce à sa bride ajustable à la cheville.',
    materials: ['Cuir de veau véritable 100%', 'Semelle intérieure moussée à mémoire de forme', 'Semelle extérieure anti-dérapante'],
    rating: 4.9,
    reviewsCount: 128,
    inStock: true,
    reviews: [
      {
        id: 'rev-1',
        author: 'Siham B.',
        city: 'Casablanca',
        rating: 5,
        date: '14 Juillet 2026',
        comment: 'Qualité du cuir au top ! Super confortable pour marcher toute la journée. Reçue en 24h à Casablanca.',
        verified: true
      },
      {
        id: 'rev-2',
        author: 'Kenza M.',
        city: 'Rabat',
        rating: 5,
        date: '02 Juillet 2026',
        comment: 'Exactement comme sur la photo. La pointure 38 me va parfaitement. Je recommande vivement AZAG !',
        verified: true
      }
    ]
  },
  {
    id: 'azag-mule-raphia-chic',
    name: 'Mule Raphia & Cuir Chic',
    subtitle: 'Mule tressée main en Raphia naturel et finition cuir',
    price: 349,
    originalPrice: 420,
    discountBadge: 'Tressé Main',
    isNew: true,
    category: 'mules',
    targetAudience: 'femme',
    colors: [
      { name: 'Noir Chic', hex: '#1C1917', image: sandalBlackMuleImg }
    ],
    sizes: [36, 37, 38, 39, 40],
    mainImage: sandalBlackMuleImg,
    secondaryImage: sandalBlackMuleImg,
    gallery: [
      sandalBlackMuleImg
    ],
    description: 'Mariage réussi entre le raphia tressé par nos artisanes d’Essaouira et le cuir d’agneau souple. Une mule chic et respirante conçue pour sublimer toutes vos tenues estivales et vos caftans.',
    materials: ['Raphia naturel premium d’Essaouira', 'Semelle de propreté cuir matelassée', 'Cousu artisanal'],
    rating: 4.8,
    reviewsCount: 89,
    inStock: true,
    reviews: []
  },
  {
    id: 'azag-sandale-plate-double-bride',
    name: 'Sandale Double Bride Cuir',
    subtitle: 'Sandale épurée avec boucles métalliques dorées ajustables',
    price: 279,
    originalPrice: 350,
    discountBadge: '-20%',
    category: 'sandales',
    targetAudience: 'femme',
    colors: [
      { name: 'Cognac', hex: '#8B4513', image: sandalCamelImg }
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    mainImage: sandalCamelImg,
    secondaryImage: sandalCamelImg,
    gallery: [sandalCamelImg],
    description: 'Une silhouette intemporelle à double bride. Réglez les boucles dorées selon la largeur de votre pied pour un confort sur-mesure.',
    materials: ['Cuir de vachette lisse', 'Boucles dorées inoxydables', 'Semelle anatomique moussée'],
    rating: 4.7,
    reviewsCount: 45,
    inStock: true,
    reviews: []
  },
  {
    id: 'azag-espadrille-compensee-raphia',
    name: 'Espadrille Compensée Raphia 7cm',
    subtitle: 'Espadrille chic avec lanière cheville en suédine',
    price: 379,
    originalPrice: 450,
    category: 'mules',
    targetAudience: 'femme',
    colors: [
      { name: 'Sable', hex: '#E5D3B3', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: [36, 37, 38, 39, 40],
    mainImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80'],
    description: 'L’espadrille revisité par AZAG. Alliant corde tressée artisanale et suédine douce, elle s’accorde aussi bien avec une djellaba moderne qu’une robe d’été.',
    materials: ['Semelle compensée 7cm en corde de chanvre et jute', 'Bride à nouer autour de la cheville'],
    rating: 4.8,
    reviewsCount: 78,
    inStock: true,
    reviews: []
  },
  {
    id: 'azag-sandale-monogram-blanc',
    name: 'Sandale Signature AZAG',
    subtitle: 'Modèle iconique avec médaillon gravé AZAG',
    price: 419,
    originalPrice: 490,
    discountBadge: 'Édition Limitée',
    isNew: true,
    category: 'sandales',
    targetAudience: 'femme',
    colors: [
      { name: 'Camel Royal', hex: '#C18553', image: sandalCamelImg }
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    mainImage: sandalCamelImg,
    secondaryImage: sandalCamelImg,
    gallery: [
      sandalCamelImg
    ],
    description: 'Création phare de la saison. Dotée du blason AZAG gravé sur pièce dorée, c’est le mariage réussi du luxe discret et de l’artisanat marocain d’exception.',
    materials: ['Cuir pleine fleur 100%', 'Médaillon bijou en laiton doré à l’or fin', 'Cousu main traditionnel'],
    rating: 5.0,
    reviewsCount: 39,
    inStock: true,
    reviews: []
  },

  // COLLECTION HOMME
  {
    id: 'azag-mocassin-homme-cuir',
    name: 'Mocassin Homme Prestige Cuir',
    subtitle: 'Loafer élégant fait main pour homme en cuir pleine fleur',
    price: 499,
    originalPrice: 590,
    discountBadge: 'Homme',
    isNew: true,
    isBestSeller: true,
    category: 'mocassins',
    targetAudience: 'homme',
    colors: [
      { name: 'Noir Ébène', hex: '#1C1917', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80' },
      { name: 'Cognac Supérieur', hex: '#8B4513', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    mainImage: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Le mocassin homme raffiné par excellence. Cuir véritable souple cousu main par nos maîtres artisans pour un style affaires et cérémonies impeccable.',
    materials: ['Cuir de veau premium 100%', 'Semelle moussée grand confort', 'Cousu Blake artisanal'],
    rating: 4.9,
    reviewsCount: 68,
    inStock: true,
    reviews: []
  },
  {
    id: 'azag-sneaker-homme-blanc',
    name: 'Sneaker Homme Urban Cuir',
    subtitle: 'Basket basse homme en cuir italien blanc avec finition sobre',
    price: 489,
    originalPrice: 590,
    category: 'baskets',
    targetAudience: 'homme',
    colors: [
      { name: 'Blanc Pur', hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    mainImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80'],
    description: 'Une basket homme épurée et intemporelle pour un look quotidien smart-casual.',
    materials: ['Cuir lisse souple', 'Doublure cuir pleine fleur', 'Semelle gomme antidérapante'],
    rating: 4.8,
    reviewsCount: 52,
    inStock: true,
    reviews: []
  },
  {
    id: 'azag-sandale-homme-cuir',
    name: 'Sandale Homme Cuir Artisanale',
    subtitle: 'Sandale homme en cuir véritable marron cousu main',
    price: 369,
    originalPrice: 450,
    category: 'sandales',
    targetAudience: 'homme',
    colors: [
      { name: 'Marron Cuir', hex: '#8B4513', image: sandalCamelImg }
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    mainImage: sandalCamelImg,
    secondaryImage: sandalCamelImg,
    gallery: [sandalCamelImg],
    description: 'Sandale traditionnelle masculine retravaillée pour le confort moderne. Cuir pleine fleur résistant et assise plantaire confortable.',
    materials: ['Cuir de vachette véritable', 'Semelle anatomique moussée'],
    rating: 4.9,
    reviewsCount: 41,
    inStock: true,
    reviews: []
  },

  // COLLECTION ENFANT
  {
    id: 'azag-sandale-enfant-cuir',
    name: 'Sandale Enfant Cuir Souple',
    subtitle: 'Sandale légère et ergonomique en cuir naturel pour enfant',
    price: 269,
    originalPrice: 320,
    discountBadge: 'Enfant',
    isNew: true,
    category: 'sandales',
    targetAudience: 'enfant',
    colors: [
      { name: 'Camel Naturel', hex: '#C18553', image: sandalCamelImg }
    ],
    sizes: [28, 29, 30, 31, 32, 33, 34, 35],
    mainImage: sandalCamelImg,
    secondaryImage: sandalCamelImg,
    gallery: [sandalCamelImg],
    description: 'Sandale faite main spécialement adaptée pour les enfants. Maintien parfait de la cheville et cuir respirant anti-frottements.',
    materials: ['Cuir souple hypoallergénique', 'Fermeture bride scratch pratique', 'Semelle souple anatomique'],
    rating: 4.9,
    reviewsCount: 31,
    inStock: true,
    reviews: []
  },
  {
    id: 'azag-sneaker-enfant-cuir',
    name: 'Sneaker Junior Cuir Blanc',
    subtitle: 'Basket tendance en cuir blanc avec scratchs renforcés',
    price: 289,
    originalPrice: 350,
    category: 'baskets',
    targetAudience: 'enfant',
    colors: [
      { name: 'Blanc / Camel', hex: '#F5F2EB', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: [28, 29, 30, 31, 32, 33, 34, 35],
    mainImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80'],
    description: 'Robustesse et confort pour les aventures quotidiennes de votre enfant.',
    materials: ['Cuir véritable résistant', 'Semelle amortissante'],
    rating: 4.8,
    reviewsCount: 27,
    inStock: true,
    reviews: []
  },
  {
    id: 'azag-mocassin-enfant-cuir',
    name: 'Mocassin Junior Cuir Miel',
    subtitle: 'Mocassin fait main souple pour enfants et cérémonies',
    price: 279,
    originalPrice: 330,
    category: 'mocassins',
    targetAudience: 'enfant',
    colors: [
      { name: 'Miel Doré', hex: '#C18553', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80' }
    ],
    sizes: [28, 29, 30, 31, 32, 33, 34, 35],
    mainImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80'],
    description: 'Le charme artisanal au format junior pour fêtes et cérémonies en famille.',
    materials: ['Cuir de veau ultra-souple', 'Semelle souple à picots'],
    rating: 4.9,
    reviewsCount: 19,
    inStock: true,
    reviews: []
  }
];

export const MOROCCAN_CITIES = [
  'Casablanca',
  'Rabat',
  'Marrakech',
  'Tanger',
  'Agadir',
  'Fès',
  'Meknès',
  'Oujda',
  'Tétouan',
  'Kénitra',
  'El Jadida',
  'Nador',
  'Safi',
  'Mohammedia',
  'Béni Mellal',
  'Khouribga',
  'Errachidia',
  'Taza',
  'Laâyoune',
  'Dakhla'
];

