import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "Alexandros Papas",
      email: "alex@luxwatch.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Maria Konstantinou",
      email: "maria@luxwatch.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Nikos Georgiou",
      email: "nikos@gmail.com",
      password: hashSync("123456", 10),
      role: "user",
    },
    {
      name: "Eleni Markou",
      email: "eleni@gmail.com",
      password: hashSync("123456", 10),
      role: "user",
    },
    {
      name: "Dimitris Ioannou",
      email: "dimitris@gmail.com",
      password: hashSync("123456", 10),
      role: "user",
    },
  ],

  products: [
    {
      name: "Chronos Elite Automatic",
      slug: "chronos-elite-automatic",
      category: "Men",
      description:
        "Luxury automatic watch with sapphire crystal and stainless steel case.",
      images: [
        "/images/watches/chronos-elite-1.jpg",
        "/images/watches/chronos-elite-2.jpg",
      ],
      price: 2499,
      brand: "Chronos",
      rating: 4.8,
      numReviews: 14,
      stock: 6,
      isFeatured: true,
      banner: "/images/banners/chronos.jpg",
    },
    {
      name: "Aurum Classic Gold",
      slug: "aurum-classic-gold",
      category: "Men",
      description:
        "Timeless gold-plated watch crafted for modern sophistication.",
      images: [
        "/images/watches/aurum-classic-1.jpg",
        "/images/watches/aurum-classic-2.jpg",
      ],
      price: 1899,
      brand: "Aurum",
      stock: 4,
    },
    {
      name: "Noir Steel Minimal",
      slug: "noir-steel-minimal",
      category: "Men",
      description: "Minimal black steel watch with Swiss quartz movement.",
      images: [
        "/images/watches/noir-steel-1.jpg",
        "/images/watches/noir-steel-2.jpg",
      ],
      price: 1299,
      brand: "Noir",
      stock: 10,
    },
    {
      name: "Luna Rose Gold",
      slug: "luna-rose-gold",
      category: "Women",
      description:
        "Elegant rose gold watch designed for refined feminine style.",
      images: [
        "/images/watches/luna-rose-1.jpg",
        "/images/watches/luna-rose-2.jpg",
      ],
      price: 1599,
      brand: "Luna",
      stock: 5,
    },
    {
      name: "Étoile Pearl Edition",
      slug: "etoile-pearl-edition",
      category: "Women",
      description: "Luxury pearl dial watch inspired by Parisian elegance.",
      images: [
        "/images/watches/etoile-pearl-1.jpg",
        "/images/watches/etoile-pearl-2.jpg",
      ],
      price: 1799,
      brand: "Étoile",
      stock: 3,
    },
    {
      name: "Serena Silver Slim",
      slug: "serena-silver-slim",
      category: "Women",
      description:
        "Slim silver watch with diamond-cut detailing for everyday luxury.",
      images: [
        "/images/watches/serena-silver-1.jpg",
        "/images/watches/serena-silver-2.jpg",
      ],
      price: 1399,
      brand: "Serena",
      stock: 9,
    },
  ],
};

export default sampleData;
