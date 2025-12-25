import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Offer = {
  title: string;
  description: string;
};

const offers: Offer[] = [
  { title: "Extended Guarantee", description: "5 years on all watches" },
  {
    title: "Credit Card Payment",
    description: "Flexible installments available",
  },
  {
    title: "20% Off Winter Offer",
    description: "Special offer on select models",
  },
];

const OfferCard = () => {
  return (
    <section className="w-full h-120 bg-black">
      <div className="px-4">
        <h2 className="text-4xl font-bold text-center text-white p-5">
          Exclusive Perks
        </h2>
        <div className="flex items-center justify-center gap-8 p-5">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className="w-full h-50 bg-black border-white text-center text-white hover:scale-105 transition-transform duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{offer.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferCard;
