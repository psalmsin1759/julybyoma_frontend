
export interface Menu {
    title: string;
    path: string;
}

export interface Data {
    title: string;
    subtitle: string;
    content?: string;
    imagePath?: string;
}

export const menuData: Menu [] = [
    {
        title: "Women",
        path: "/category/women"
    },
    {
        title: "Men",
        path: "/category/men"
    },
    {
        title: "Bespoke",
        path: "/category/bespoke"
    },
    {
        title: "Company",
        path: "/category/company"
    },
]

export const heroData : Data[] = [
  {
    title: "Bespoke Elegance",
    subtitle: "Crafted Just for You",
    content:
      "Discover the art of tailor-made fashion at JulyByOma. Each outfit is designed to celebrate your individuality, offering timeless elegance with a modern touch.",
    imagePath: "/images/hero-bespoke.jpg",
  },
  {
    title: "Made-to-Order Dresses",
    subtitle: "Style That Fits Every Occasion",
    content:
      "From glamorous evening gowns to chic cocktail dresses, our made-to-order pieces are crafted with precision to ensure a perfect fit for your most memorable moments.",
    imagePath: "/images/hero-dresses.jpg",
  },
  {
    title: "Redefining Wardrobe Classics",
    subtitle: "Pants & Skirts, Tailored to Perfection",
    content:
      "Experience comfort and sophistication with our bespoke pants and skirts. Each piece is carefully designed to enhance your silhouette and elevate your everyday style.",
    imagePath: "/images/hero-essentials.jpg",
  },
];



export const categories : Data[] = [
  {
    title: "Luxury Dresses",
    subtitle: "Elegant designs for every occasion",
    imagePath: "/images/categories/category1.jpeg",
  },
  {
    title: "Chic Tops",
    subtitle: "Trendy styles for your daily looks",
    imagePath: "/images/categories/category2.jpeg",
  },
  {
    title: "Statement Accessories",
    subtitle: "Bold pieces to elevate your outfit",
    imagePath: "/images/categories/category3.jpeg",
  },
  {
    title: "Casual Wear",
    subtitle: "Comfort meets style in everyday essentials",
    imagePath: "/images/categories/category2.jpeg",
  },
];

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discountedPrice?: number;
  description: string;
  image: string;
  imageAlt?: string;
}

export const products : Product[] = [
  {
    id: 1,
    name: "Adire Maxi Dress",
    category: "Dresses",
    price: 18000,
    discountedPrice: 15000,
    description: "Hand-dyed Adire maxi dress with modern flare, perfect for casual and semi-formal occasions.",
    image: "/images/products/product1.jpeg",
    imageAlt: "/images/products/product11.jpeg",
  },
  {
    id: 2,
    name: "Ankara Peplum Top",
    category: "Tops",
    price: 12000,
    description: "Vibrant Ankara peplum blouse designed with stylish sleeves.",
    image: "/images/products/product2.jpeg",
    imageAlt: "/images/products/product22.jpeg",
  },
  {
    id: 3,
    name: "Buba & Iro Set",
    category: "Traditional",
    price: 25000,
    description: "Classic Yoruba-style Buba blouse paired with elegant Iro wrapper.",
    image: "/images/products/product3.jpeg",
    imageAlt: "",
  },
  {
    id: 4,
    name: "Kaftan Gown",
    category: "Kaftans",
    price: 22000,
    discountedPrice: 18000,
    description: "Flowy silk kaftan with embroidery around the neckline.",
    image: "/images/products/product1.jpeg",
    imageAlt: "/images/products/product11.jpeg",
  },
  {
    id: 5,
    name: "Ankara Jumpsuit",
    category: "Jumpsuits",
    price: 20000,
    description: "Trendy Ankara jumpsuit with wide legs and adjustable straps.",
    image: "/images/products/product1.jpeg",
    imageAlt: "/images/products/product11.jpeg",
  },
  {
    id: 6,
    name: "Lace Aso Ebi Gown",
    category: "Occasion Wear",
    price: 45000,
    description: "Elegant lace gown with sequins, designed for weddings and events.",
    image: "/images/products/product1.jpeg",
    imageAlt: "/images/products/product11.jpeg",
  },
  {
    id: 7,
    name: "Wrapper & Blouse",
    category: "Traditional",
    price: 28000,
    description: "Classic wrapper and blouse combo, styled with rich Ankara prints.",
    image: "/images/products/product1.jpeg",
    imageAlt: "/images/products/product11.jpeg",
  },
  {
    id: 8,
    name: "Chiffon Ankara Skirt",
    category: "Skirts",
    price: 15000,
    discountedPrice: 10000,
    description: "Layered chiffon skirt with Ankara patterns for a chic modern look.",
    image: "/images/products/product1.jpeg",
    imageAlt: "/images/products/product11.jpeg",
  },
  {
    id: 9,
    name: "Dashiki Dress",
    category: "Dresses",
    price: 17000,
    description: "Comfortable Dashiki-inspired dress with bold African prints.",
    image: "/images/products/product1.jpeg",
    imageAlt: "/images/products/product11.jpeg",
  },
  {
    id: 10,
    name: "Beaded Gele & Blouse Set",
    category: "Headwear & Tops",
    price: 32000,
    description: "Hand-beaded gele with matching Ankara blouse for cultural elegance.",
    image: "/images/products/product1.jpeg",
    imageAlt: "/images/products/product11.jpeg",
  },
]




export const homeCards = [

  {
    title: "Wedding Guest Glam",
    description:
      "Be the guest that turns heads. Our wedding guest collection features stunning gowns, statement gele styles, and lace dresses that sparkle under the spotlight. Designed to help you celebrate love in unforgettable style.",
    mediaUrl: "/videos/home/video1.mp4",
    mediaType: "video",
  },
  {
    title: "Cultural Heritage",
    description:
      "Celebrate your roots with our cultural collection. From bold Ankara prints to timeless Aso Ebi, these outfits blend traditional artistry with modern tailoring, keeping heritage alive with a contemporary twist.",
    mediaUrl: "/images/home/culture.jpeg",
    mediaType: "image",
  },
];

export interface FooterLink {
  title: string;
  path: string;
}

export const productFooterLinks : FooterLink[] = [
  {
    title: "Women",
    path: "/women"
  },
  {
    title: "Men",
    path: "/men"
  },
  {
    title: "Collections",
    path: "/collections"
  },
  {
    title: "Categories",
    path: "/categories"
  },
]

export const companyFooterLinks: FooterLink[]= [
  {
    title: "About Us",
    path: "/about"
  },
  {
    title: "FAQs",
    path: "/faqs"
  },
  {
    title: "Contact Us",
    path: "/contact"
  },
 
]

export const socialsFooterLinks : FooterLink[]= [
  {
    title: "Instagram",
    path: "https://instagram.com"
  },
  {
    title: "X",
    path: "https://instagram.com"
  },
  {
    title: "Tiktok",
    path: "https://tiktok.com"
  },
  {
    title: "Facebook",
    path: "https://facebook.com"
  },
]


export const legalFooterLinks: FooterLink[] = [
  {
    title: "Terms & Conditions",
    path: "/terms"
  },
  {
    title: "Shipping & Returns",
    path: "/returns"
  },
  {
    title: "Privacy Policy",
    path: "/privacy"
  },

]