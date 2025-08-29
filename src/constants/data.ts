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
        path: "/women"
    },
    {
        title: "Men",
        path: "/men"
    },
    {
        title: "Bespoke",
        path: "/bespoke"
    },
    {
        title: "Company",
        path: "/company"
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

