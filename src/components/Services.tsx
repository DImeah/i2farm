import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
}

export default function Services() {
  const services: Service[] = [
    {
      title: "Land Cultivation",
      description:
        "We prepare and cultivate land using modern agricultural techniques to ensure optimal growing conditions.",
    },
    {
      title: "Crop Management",
      description:
        "Our experts manage the entire crop lifecycle from planting to harvest, ensuring maximum yield.",
    },
    {
      title: "Harvest & Distribution",
      description:
        "We handle harvesting, processing, and distribution to ensure your products reach the market at optimal prices.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-green-700">
              Farming Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              We offer comprehensive farming services to help you maximize your
              agricultural investments.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl text-green-700">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
