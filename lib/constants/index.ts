export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "WatchMe";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Premium watches that combine precision, style, and lasting quality";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(",")
  : ["Stripe", "Cash On Delivery"];

export const SignInDefaultValues = {
  email: "",
  password: "",
};

export const SignUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const productDefaultValues = {
  name: "",
  slug: "",
  category: "",
  images: [],
  brand: "",
  description: "",
  price: "0",
  stock: 0,
};

export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 12);
