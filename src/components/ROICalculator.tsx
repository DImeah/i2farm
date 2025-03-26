import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InvestmentOption {
  amount: number;
  returnAmount: number;
}

export default function ROICalculator() {
  const investmentOptions: InvestmentOption[] = [
    { amount: 5000, returnAmount: 6150 },
    { amount: 10000, returnAmount: 12300 },
    { amount: 25000, returnAmount: 30750 },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-green-700">
              Calculate Your Returns
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              See how your investment grows with our 23% annual ROI.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-700">
                Investment Growth Calculator
              </CardTitle>
              <CardDescription>
                Based on our 23% annual return rate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                {investmentOptions.map((option, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium">
                      ${option.amount.toLocaleString()} Investment
                    </h3>
                    <div className="text-2xl font-bold text-green-700">
                      ${option.returnAmount.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      After 1 year
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Schedule Investment Consultation
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
