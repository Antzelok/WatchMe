import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ShieldCheck, CreditCard, Percent } from "lucide-react";

type Offer = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const offers: Offer[] = [
  {
    title: "Extended Guarantee",
    description: "5 years on all watches",
    icon: <ShieldCheck size={35} />,
  },
  {
    title: "Credit Card Payment",
    description: "Flexible installments available",
    icon: <CreditCard size={35} />,
  },
  {
    title: "20% Off Winter Offer",
    description: "Special offer on select models",
    icon: <Percent size={35} />,
  },
];
const OfferCard = () => {
  return (
    <section className="bg-black items-center p-10">
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {offers.map((offer, index) => (
          <Card
            key={index}
            className="w-70 h-60 bg-black border-white text-center text-white hover:scale-105 transition-transform duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl">{offer.title}</CardTitle>
            </CardHeader>
            <div className="text-orange-500 flex items-center justify-center">
              {offer.icon}
            </div>
            <CardContent>
              <CardDescription>{offer.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OfferCard;
