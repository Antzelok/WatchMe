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
    <section className="bg-black items-center p-10">
      <div className="flex justify-center gap-8">
        {offers.map((offer, index) => (
          <Card
            key={index}
            className="bg-black border-white text-center text-white hover:scale-105 transition-transform duration-300"
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
    </section>
  );
};

export default OfferCard;
