import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Investment() {
  const benefits = [
    "Minimum investment starting at $1,000",
    "Flexible investment terms (6-24 months)",
    "Quarterly returns or compounded growth",
    "Fully managed farming operations",
    "Transparent reporting and updates",
  ];

  return (
    <section id="investment" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Investment Opportunity
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-green-700">
                23% Return on Investment
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Invest in our agricultural products and farming services to
                enjoy a guaranteed 23% ROI. We make farming profitable for
                everyone.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" /> {benefit}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-green-600 hover:bg-green-700">
                Start Investing Now
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Download Investment Brochure
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Farming Investment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
