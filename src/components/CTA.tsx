import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-700 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Grow Your Wealth?
            </h2>
            <p className="max-w-[600px] text-green-100 md:text-xl">
              Start investing in our agricultural products and services today
              and enjoy a 23% return on your investment.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-100"
            >
              Start Investing Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-green-600"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
