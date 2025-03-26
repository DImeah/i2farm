import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleUser } from "lucide-react";

interface Testimonial {
  name: string;
  since: string;
  quote: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "John Thompson",
      since: "Investor since 2020",
      quote:
        "I've been investing with GreenHarvest for 3 years now. The 23% ROI has been consistent, and their transparent reporting gives me peace of mind. Highly recommended!",
    },
    {
      name: "Sarah Williams",
      since: "Investor since 2021",
      quote:
        "As someone new to agricultural investments, I was skeptical at first. But GreenHarvest made the process easy, and I've already seen returns exceeding the promised 23%.",
    },
    {
      name: "Michael Chen",
      since: "Investor since 2019",
      quote:
        "I've diversified my investment portfolio with GreenHarvest's agricultural products. The 23% ROI has outperformed many of my traditional investments, and I appreciate their sustainable approach.",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-green-700">
              What Our Investors Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Hear from people who have invested in our agricultural products
              and services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <CircleUser className="h-10 w-10 text-green-600" />
                  <div>
                    <CardTitle className="text-lg">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription>{testimonial.since}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  &quot;{testimonial.quote}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
