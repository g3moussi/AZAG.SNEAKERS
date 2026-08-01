export type Language = 'fr' | 'ar';

export interface Translations {
  // Top bar & Header
  announcement: string;
  freeShipping: string;
  codBadge: string;
  returnsBadge: string;
  
  // Navigation
  navHome: string;
  navProducts: string;
  navStory: string;
  navReviews: string;
  navFaq: string;
  navContact: string;
  cart: string;
  wishlist: string;
  search: string;
  
  // Categories
  catAll: string;
  catHomme: string;
  catFemme: string;
  catEnfant: string;

  catMocassins: string;
  catBaskets: string;
  catEscarpins: string;
  catSandales: string;
  catMules: string;
  catBottines: string;
  catCuir: string;
  catRaphia: string;

  // Hero Section
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroTagline: string;
  heroOrderBtn: string;

  // Trust Bar
  trustFreeDeliveryTitle: string;
  trustFreeDeliveryDesc: string;
  trustCodTitle: string;
  trustCodDesc: string;
  trustQualityTitle: string;
  trustQualityDesc: string;
  trustExchangeTitle: string;
  trustExchangeDesc: string;

  // Filter Sidebar
  filterTitle: string;
  filterClear: string;
  filterCategory: string;
  filterAudience: string;
  filterSizes: string;
  filterColors: string;
  filterPriceMax: string;
  filterInStockOnly: string;
  sortBy: string;
  sortPopular: string;
  sortPriceAsc: string;
  sortPriceDesc: string;
  sortRating: string;
  sortNewest: string;
  showingResults: string;
  noProductsFound: string;
  resetFilters: string;

  // Product Card & Modal
  newBadge: string;
  bestsellerBadge: string;
  inStock: string;
  outOfStock: string;
  addToCart: string;
  buyNowCOD: string;
  selectSize: string;
  selectColor: string;
  quantity: string;
  descriptionTitle: string;
  materialsTitle: string;
  sizeGuide: string;
  sizeGuideTitle: string;
  sizeGuideSubtitle: string;
  viewDetails: string;
  dhCurrency: string;

  // Cart & Wishlist Drawers
  cartTitle: string;
  cartEmpty: string;
  cartEmptyDesc: string;
  cartTotal: string;
  checkoutBtn: string;
  continueShopping: string;
  wishlistTitle: string;
  wishlistEmpty: string;

  // COD Checkout Modal
  codModalTitle: string;
  codModalSubtitle: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  cityLabel: string;
  cityPlaceholder: string;
  addressLabel: string;
  addressPlaceholder: string;
  notesLabel: string;
  notesPlaceholder: string;
  orderSummary: string;
  subtotal: string;
  shippingFee: string;
  freeShippingText: string;
  totalToPay: string;
  confirmOrderBtn: string;
  submittingOrder: string;
  orderSuccessTitle: string;
  orderSuccessDesc: string;
  openWhatsAppBtn: string;
  closeBtn: string;

  // Sections
  reviewsTitle: string;
  reviewsSubtitle: string;
  addReviewBtn: string;
  verifiedBuyer: string;
  
  brandStoryTitle: string;
  brandStorySubtitle: string;
  brandStoryP1: string;
  brandStoryP2: string;
  
  faqTitle: string;
  faqSubtitle: string;

  contactTitle: string;
  contactSubtitle: string;
  contactAddress: string;
  contactPhone: string;
  contactEmail: string;

  footerTagline: string;
  footerRights: string;

  // Floating WhatsApp
  whatsappTooltip: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    announcement: '✨ Nouvelle Collection Chaussures & Maroquinerie Cuir 2026',
    freeShipping: 'Livraison GRATUITE partout au Maroc',
    codBadge: 'Paiement à la livraison (COD)',
    returnsBadge: 'Satisfait ou Échangé sous 7 jours',

    navHome: 'Accueil',
    navProducts: 'Boutique',
    navStory: 'Notre Histoire',
    navReviews: 'Avis Clients',
    navFaq: 'FAQ',
    navContact: 'Contact',
    cart: 'Panier',
    wishlist: 'Favoris',
    search: 'Rechercher',

    catAll: 'Tous nos modèles',
    catHomme: 'HOMME',
    catFemme: 'FEMME',
    catEnfant: 'ENFANT',

    catMocassins: 'Mocassins',
    catBaskets: 'Baskets & Sneakers',
    catEscarpins: 'Escarpins',
    catSandales: 'Sandales',
    catMules: 'Mules',
    catBottines: 'Bottines',
    catCuir: 'Cuir Véritable',
    catRaphia: 'Collection Raphia',

    heroTitle: 'Chaussures & Maroquinerie',
    heroHighlight: 'Cuir Véritable',
    heroSubtitle: 'Mocassins, Baskets Chic, Escarpins, Bottines et Sandales façonnés à la main au Maroc. Un confort remarquable et un style raffiné pour toutes les occasions.',
    heroTagline: 'MAISON DE CHAUSSURES • AZAG MAROC',
    heroOrderBtn: 'Découvrir la Collection',

    trustFreeDeliveryTitle: 'Livraison Gratuite',
    trustFreeDeliveryDesc: 'Partout au Maroc en 24h à 48h',
    trustCodTitle: 'Paiement à la Livraison',
    trustCodDesc: 'Payez en espèces à la réception',
    trustQualityTitle: 'Cuir Véritable 100%',
    trustQualityDesc: 'Fabrication artisanale marocaine',
    trustExchangeTitle: 'Échange Facile',
    trustExchangeDesc: 'Changement de pointure sous 7 jours',

    filterTitle: 'Filtres de recherche',
    filterClear: 'Réinitialiser',
    filterCategory: 'Catégorie',
    filterAudience: 'Rayon',
    filterSizes: 'Pointures disponibles',
    filterColors: 'Couleurs',
    filterPriceMax: 'Prix Maximum',
    filterInStockOnly: 'En stock uniquement',
    sortBy: 'Trier par',
    sortPopular: 'Meilleures ventes',
    sortPriceAsc: 'Prix croissant',
    sortPriceDesc: 'Prix décroissant',
    sortRating: 'Les mieux notés',
    sortNewest: 'Nouveautés',
    showingResults: 'modèles trouvés',
    noProductsFound: 'Aucun modèle ne correspond à vos critères.',
    resetFilters: 'Réinitialiser les filtres',

    newBadge: 'Nouveau',
    bestsellerBadge: 'Bestseller',
    inStock: 'En stock',
    outOfStock: 'Rupture de stock',
    addToCart: 'Ajouter au Panier',
    buyNowCOD: 'Acheter Maintenant (Paiement à la Livraison)',
    selectSize: 'Sélectionnez votre pointure',
    selectColor: 'Couleur',
    quantity: 'Quantité',
    descriptionTitle: 'Description du Modèle',
    materialsTitle: 'Matériaux & Confection',
    sizeGuide: 'Guide des pointures',
    sizeGuideTitle: 'Guide des Pointures AZAG',
    sizeGuideSubtitle: 'Mesurez la longueur de votre pied en cm pour choisir la pointure idéale.',
    viewDetails: 'Aperçu Rapide',
    dhCurrency: 'DH',

    cartTitle: 'Mon Panier',
    cartEmpty: 'Votre panier est vide',
    cartEmptyDesc: 'Découvrez nos chaussures en cuir et ajoutez vos modèles préférés.',
    cartTotal: 'Total',
    checkoutBtn: 'Commander (Paiement à la livraison)',
    continueShopping: 'Continuer mes achats',
    wishlistTitle: 'Mes Favoris',
    wishlistEmpty: 'Aucun favori enregistré',

    codModalTitle: 'Commander avec Paiement à la Livraison',
    codModalSubtitle: 'Remplissez le formulaire ci-dessous. Votre commande sera directement enregistrée dans notre système d\'administration.',
    fullNameLabel: 'Nom & Prénom',
    fullNamePlaceholder: 'Ex: Mohammed Alami',
    phoneLabel: 'Numéro de Téléphone',
    phonePlaceholder: 'Ex: 0612345678',
    cityLabel: 'Ville',
    cityPlaceholder: 'Ex: Casablanca, Rabat, Marrakech...',
    addressLabel: 'Adresse de Livraison',
    addressPlaceholder: 'Quartier, Rue, N° d\'appartement ou repère...',
    notesLabel: 'Remarques / Instructions (Optionnel)',
    notesPlaceholder: 'Précisions sur la livraison ou pointure secondaire...',
    orderSummary: 'Récapitulatif du Modèle',
    subtotal: 'Sous-total',
    shippingFee: 'Frais de livraison',
    freeShippingText: 'GRATUIT',
    totalToPay: 'Total à payer à la livraison',
    confirmOrderBtn: 'Valider la Commande 🛍️',
    submittingOrder: 'Enregistrement de votre commande...',
    orderSuccessTitle: 'Commande Confirmée !',
    orderSuccessDesc: 'Merci pour votre confiance ! Votre commande a été enregistrée directement dans notre système d\'administration sans passer par WhatsApp.',
    openWhatsAppBtn: 'Fermer',
    closeBtn: 'Fermer',

    reviewsTitle: 'Avis de nos Clients',
    reviewsSubtitle: 'Ce que disent nos clients satisfaits à travers le Maroc.',
    addReviewBtn: 'Donner mon avis',
    verifiedBuyer: 'Achat Vérifié',

    brandStoryTitle: 'L\'Artisanat Marocain Réinventé',
    brandStorySubtitle: 'AZAG combine la tradition du cuir véritable et le design contemporain pour vous offrir des chaussures élégantes et durables.',
    brandStoryP1: 'Chaque paire AZAG est confectionnée à la main dans nos ateliers partenaires au Maroc. Nous sélectionnons rigoureusement les meilleurs cuirs d\'agneau et de veau pour garantit un toucher doux et une grande résistance.',
    brandStoryP2: 'Grâce à nos semelles orthopédiques intégrées et notre montage artisanal, nous offrons un confort exceptionnel du matin au soir.',

    faqTitle: 'Questions Fréquentes (FAQ)',
    faqSubtitle: 'Tout ce que vous devez savoir sur la commande, la livraison et les retours.',

    contactTitle: 'Contactez-nous',
    contactSubtitle: 'Une question sur un modèle ou votre pointure ? Notre équipe est à votre disposition.',
    contactAddress: 'Casablanca, Maroc',
    contactPhone: '+212 7 52 42 42 60',
    contactEmail: 'contact@azag.ma',

    footerTagline: 'AZAG MAROC - Excellence du cuir artisanal marocain.',
    footerRights: 'Tous droits réservés. Conçu avec passion au Maroc.',

    whatsappTooltip: 'Besoin d\'aide ? Discutez avec nous',
  },

  ar: {
    announcement: '✨ تشكيلة جديدة 2026 - أحذية ومنتجات جلدية فاخرة',
    freeShipping: 'توصيل مجاني لجميع مدن المغرب 🇲🇦',
    codBadge: 'الدفع عند الاستلام بعد المعاينة',
    returnsBadge: 'ضمان الاستبدال خلال 7 أيام',

    navHome: 'الرئيسية',
    navProducts: 'المتجر',
    navStory: 'قصتنا',
    navReviews: 'آراء العملاء',
    navFaq: 'أسئلة شائعة',
    navContact: 'اتصل بنا',
    cart: 'السلة',
    wishlist: 'المفضلة',
    search: 'بحث',

    catAll: 'جميع الموديلات',
    catHomme: 'رجال',
    catFemme: 'نساء',
    catEnfant: 'أطفال',

    catMocassins: 'موكاسان (Mocassins)',
    catBaskets: 'أحذية رياضية أنيقة',
    catEscarpins: 'أحذية كعب عالي',
    catSandales: 'صنادل جلدية',
    catMules: 'ميول (Mules)',
    catBottines: 'أحذية شتوية (Bottines)',
    catCuir: 'جلد طبيعي 100%',
    catRaphia: 'تشكيلة الرافية',

    heroTitle: 'أحذية ومنتجات جلدية',
    heroHighlight: 'من الجلد الطبيعي 100%',
    heroSubtitle: 'موكاسان، أحذية رياضية أنيقة، صنادل وميول مصنوعة يدوياً بالمغرب باحترافية عالية. راحة ممتازة وتصميم راقٍ لجميع المناسبات.',
    heroTagline: 'دار الأحذية الفاخرة • أزاغ المغرب AZAG',
    heroOrderBtn: 'اكتشف التشكيلة الجديدة',

    trustFreeDeliveryTitle: 'توصيل مجاني',
    trustFreeDeliveryDesc: 'لكافة مدن المغرب خلال 24 إلى 48 ساعة',
    trustCodTitle: 'الدفع عند الاستلام',
    trustCodDesc: 'ادفع نقداً بعد استلام طلبك ومعاينته',
    trustQualityTitle: 'جلد طبيعي أصلي 100%',
    trustQualityDesc: 'صناعة تقليدية مغربية عالية الجودة',
    trustExchangeTitle: 'استبدال سهل',
    trustExchangeDesc: 'تغيير المقاس مجاناً خلال 7 أيام',

    filterTitle: 'تصفية المنتجات',
    filterClear: 'إعادة ضبط',
    filterCategory: 'الصنف',
    filterAudience: 'القسم',
    filterSizes: 'المقاسات المتوفرة',
    filterColors: 'الألوان',
    filterPriceMax: 'السعر الأقصى',
    filterInStockOnly: 'المتوفر في المخزون فقط',
    sortBy: 'ترتيب حسب',
    sortPopular: 'الأكثر مبيعاً',
    sortPriceAsc: 'السعر: من الأقل للأعلى',
    sortPriceDesc: 'السعر: من الأعلى للأقل',
    sortRating: 'الأعلى تقييماً',
    sortNewest: 'الأحدث',
    showingResults: 'موديل متوفر',
    noProductsFound: 'لم يتم العثور على أي موديل يطابق خيارات البحث.',
    resetFilters: 'إعادة تصفية البحث',

    newBadge: 'جديد',
    bestsellerBadge: 'الأكثر طلباً',
    inStock: 'متوفر',
    outOfStock: 'غير متوفر حالياً',
    addToCart: 'إضافة إلى السلة',
    buyNowCOD: 'اشترِ الآن (الدفع عند الاستلام)',
    selectSize: 'اختر المقاس المناسب',
    selectColor: 'اللون',
    quantity: 'الكمية',
    descriptionTitle: 'وصف الموديل',
    materialsTitle: 'المواد والتصنيع',
    sizeGuide: 'دليل المقاسات',
    sizeGuideTitle: 'دليل مقاسات AZAG',
    sizeGuideSubtitle: 'قس طول قدمك بالسنتيمتر لاختيار المقاس المضبوط.',
    viewDetails: 'نظرة سريعة',
    dhCurrency: 'درهم',

    cartTitle: 'سلة التسوق',
    cartEmpty: 'سلتك فارغة حالياً',
    cartEmptyDesc: 'استكشف تشكيلة الأحذية الجلدية وأضف موديلاتك المفضلة.',
    cartTotal: 'المجموع الإجمالي',
    checkoutBtn: 'تأكيد الطلب (الدفع عند الاستلام)',
    continueShopping: 'متابعة التسوق',
    wishlistTitle: 'قائمة المفضلة',
    wishlistEmpty: 'لا توجد منتجات في المفضلة',

    codModalTitle: 'طلب شحن - الدفع عند الاستلام',
    codModalSubtitle: 'يرجى إدخال معلوماتك أدناه لتأكيد طلبك مباشرة في نظام الإدارة.',
    fullNameLabel: 'الاسم الكامل',
    fullNamePlaceholder: 'مثال: محمد العلمي',
    phoneLabel: 'رقم الهاتف',
    phonePlaceholder: 'مثال: 0612345678',
    cityLabel: 'المدينة',
    cityPlaceholder: 'مثال: الدار البيضاء، الرباط، مراكش...',
    addressLabel: 'عنوان التوصيل',
    addressPlaceholder: 'الحي، الشارع، رقم الشقة أو علامة مميزة...',
    notesLabel: 'ملاحظات إضافية (اختياري)',
    notesPlaceholder: 'أي تفاصيل خاصة بالتوصيل أو مقاس إضافي...',
    orderSummary: 'تفاصيل الموديل والمواصفات',
    subtotal: 'المجموع الفرعي',
    shippingFee: 'مصاريف التوصيل',
    freeShippingText: 'مـجـانـاً 🚚',
    totalToPay: 'المبلغ الإجمالي عند الاستلام',
    confirmOrderBtn: 'تأكيد الطلب الآن 🛍️',
    submittingOrder: 'جاري تسجيل طلبك...',
    orderSuccessTitle: 'تم تسجيل طلبك بنجاح!',
    orderSuccessDesc: 'شكراً لثقتكم بنا! تم تسجيل طلبكم مباشرة في لوحة التحكم بنجاح دون الحاجة لتطبيق الواتساب.',
    openWhatsAppBtn: 'إغلاق',
    closeBtn: 'إغلاق',

    reviewsTitle: 'آراء وتقييمات زبنائنا',
    reviewsSubtitle: 'شهادات حقيقية من عملائنا في مختلف مدن المملكة المغربية.',
    addReviewBtn: 'أضف رأيك',
    verifiedBuyer: 'مشتري مؤكد',

    brandStoryTitle: 'أصالة الصنعة المغربية ولمسة الموضة العصرية',
    brandStorySubtitle: 'تجمع علامة AZAG بين أصالة الجلد المغربي الطبيعي والتصميم العصري لتقديم أحذية راقية ومريحة تدوم طويلاً.',
    brandStoryP1: 'يتم تصنيع كل زوج من أحذية AZAG بعناية فائقة بأيدي حرفيين مغاربة. نختار أجود أنواع الجلود الطبيعية لضمان ملمس ناعم وقوة تحمل ممتازة.',
    brandStoryP2: 'بفضل نعلنا المريح والتصميم الطبي الداعم، نضمن لك راحة فائقة لقدميك طوال اليوم.',

    faqTitle: 'الأسئلة الشائعة',
    faqSubtitle: 'كل ما تحتاج معرفته حول الطلب، الشحن، وطريقة الاستبدال.',

    contactTitle: 'تواصل معنا',
    contactSubtitle: 'هل لديك استفسار عن مقاس أو موديل معين؟ فريقنا في خدمتك طوال اليوم.',
    contactAddress: 'الدار البيضاء، المغرب',
    contactPhone: '+212 7 52 42 42 60',
    contactEmail: 'contact@azag.ma',

    footerTagline: 'AZAG المغرب - الجودة والأناقة في الجلد المغربي الطبيعي.',
    footerRights: 'جميع الحقوق محفوظة. صُنِع بكل شغف في المغرب.',

    whatsappTooltip: 'تحتاج مساعدة؟ تحدث معنا عبر الواتساب',
  }
};

// Arabic Product Translation Helper Data
export const ARABIC_PRODUCT_DATA: Record<string, {
  name: string;
  subtitle: string;
  description: string;
  materials: string[];
  colorNames: Record<string, string>;
  reviews?: Array<{ author: string; city: string; comment: string }>;
}> = {
  'azag-mocassin-cuir-italien': {
    name: 'موكاسان جلد طبيعي مرن بالإبزيم الذهبي',
    subtitle: 'حذاء موكاسان من الجلد الطبيعي مع إبزيم نحاسي وخياطة يدوية',
    description: 'الموكاسان الكلاسيكي الأنيق من AZAG. مصنوع من جلد الحمل الطبيعي فائـق المرونة بخياطة تقليدية متينة. مرمز بإبزيم نحاسي ذهبي فاخر، يوفر راحة استثنائية للعمل والارتداء اليومي.',
    materials: ['جلد حمل طبيعي 100%', 'نعل داخلي طبي مبطن', 'نعل خارجي جلدي مقاوم للانزلاق'],
    colorNames: {
      'Noir Intense': 'أسود فاخر',
      'Camel Cognac': 'جملي كونياك',
      'Bordeaux': 'بورديو عذبي'
    },
    reviews: [
      { author: 'ليلى ك.', city: 'الدار البيضاء', comment: 'موكاسان مريح جداً ولين. أرتديه يومياً في العمل بدون أي ألم في القدمين!' }
    ]
  },
  'azag-basket-cuir-minimaliste': {
    name: 'حذاء رياضي أنيق جلد أبيض فاخر',
    subtitle: 'سنيكرز عصري بجلد طبيعي ممتاز ونعل مريح جداً',
    description: 'الحذاء الرياضي الفاخر من AZAG. صُمم للمرأة العصرية التي تبحث عن الأناقة والراحة. جلد إيطالي أبيض ناعم مع لمسات راقية من الساتان والغزال الطبيعي.',
    materials: ['جلد عجل طبيعي ناعم', 'بطانة داخلية جصية تتنفس', 'نعل خفيف مضاد للصدمات'],
    colorNames: {
      'Blanc / Beige': 'أبيض / بيج',
      'Blanc / Camel': 'أبيض / جملي'
    },
    reviews: [
      { author: 'هودى ت.', city: 'الرباط', comment: 'حذاء رائع جداً! الجلد ممتاز والنعل مريح جداً أثناء المشي.' }
    ]
  },
  'azag-escarpin-cuir-nude': {
    name: 'حذاء كعب راقٍ جلد نيود بكعب مربّع',
    subtitle: 'حذاء بكعب 6 سم مريح وحزام خلفي أنيق',
    description: 'الأناقة المغربية في أبهى صورها. حذاء بكعب مربّع ثابت يوفر التوازن والراحة مع إطلالة أنثوية ساحرة للمناسبات وحفلات العمل.',
    materials: ['جلد طبيعي وردي نيود', 'نعل طبي مضاد للانزلاق'],
    colorNames: {
      'Nude Rose': 'وردي نيود',
      'Noir Patiné': 'أسود ملكي'
    }
  },
  'azag-sandal-camel-strapped': {
    name: 'صندل جلدي جملي بسيور متعددة',
    subtitle: 'صندل صيفي أنيق بجلد كوفاني أصلي ونعل مبطن',
    description: 'الصندل الصيفي الأكثر إقبالاً من AZAG. بسيور جلدية مرنة تلتف بجمالية حول القدم ونعل خفيف ومريح للغاية للرحلات والأيام الصيفية.',
    materials: ['جلد كوفاني طبيعي 100%', 'وسادة قدم مريحة للظهر'],
    colorNames: {
      'Camel Cognac': 'جملي أصلي',
      'Noir Mât': 'أسود مطفي',
      'Terracotta': 'طين أحمر'
    }
  },
  'azag-mule-noir-elegance': {
    name: 'ميول جلدي أسود بفيونكة فاخرة',
    subtitle: 'حذاء ميول صيفي بجلد أسود مصقول وتصميم مفتوح',
    description: 'ميول أنيق ومريح يجمع بين سهولة الارتداء والأناقة اليومية. مناسب للمنزل، الخروج السريع، والمناسبات الصيفية.',
    materials: ['جلد طبيعي مصقول', 'نعل مطاطي مرن'],
    colorNames: {
      'Noir Intense': 'أسود عميق',
      'Moka': 'موكا دافئ'
    }
  },
  'azag-mocassin-homme-cuir': {
    name: 'موكاسان رجالي جلد طبيعي فاخر',
    subtitle: 'حذاء لوفر رجالي بخياطة يدوية ونعل طبي مريح',
    description: 'الموكاسان الرجالي الأصلي من AZAG. مصنوع يدوياً بجلد طبيعي فاخر يمنحك الهيبة والأناقة في اللقاءات والمناسبات الرسمية واليومية.',
    materials: ['جلد طبيعي فاخر 100%', 'بطانة جلود طبيعية', 'نعل خفيف مريح'],
    colorNames: {
      'Marron Foncé': 'بني غامق',
      'Noir Mât': 'أسود مطفي',
      'Cognac': 'كونياك مذهب'
    }
  }
};

// Category text helper
export function getCategoryLabel(category: string, lang: Language): string {
  const t = TRANSLATIONS[lang];
  switch (category) {
    case 'mocassins': return t.catMocassins;
    case 'baskets': return t.catBaskets;
    case 'escarpins': return t.catEscarpins;
    case 'sandales': return t.catSandales;
    case 'mules': return t.catMules;
    case 'bottines': return t.catBottines;
    case 'cuir': return t.catCuir;
    case 'raphia': return t.catRaphia;
    default: return category;
  }
}

export function getTranslatedProduct(product: import('../types').Product, lang: Language): import('../types').Product {
  if (lang !== 'ar') return product;
  const arData = ARABIC_PRODUCT_DATA[product.id];
  if (!arData) {
    return {
      ...product,
      colors: product.colors.map(c => ({
        ...c,
        name: c.name.replace('Noir', 'أسود').replace('Blanc', 'أبيض').replace('Camel', 'جملي')
      }))
    };
  }

  return {
    ...product,
    name: arData.name || product.name,
    subtitle: arData.subtitle || product.subtitle,
    description: arData.description || product.description,
    materials: arData.materials || product.materials,
    colors: product.colors.map(c => ({
      ...c,
      name: arData.colorNames?.[c.name] || c.name
    })),
    reviews: arData.reviews ? product.reviews.map((r, i) => ({
      ...r,
      author: arData.reviews![i]?.author || r.author,
      city: arData.reviews![i]?.city || r.city,
      comment: arData.reviews![i]?.comment || r.comment,
    })) : product.reviews
  };
}
