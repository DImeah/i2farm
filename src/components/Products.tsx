import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Product {
  name: string;
  description: string;
  image: string;
}

export default function Products() {
  const products: Product[] = [
    {
      name: "Rice",
      description:
        "Premium quality rice grown using sustainable farming methods. Available in bulk quantities.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Beans",
      description:
        "Nutrient-rich beans varieties that are perfect for both consumption and agricultural investment.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Sesame",
      description:
        "High-yield sesame seeds with excellent market value and export potential.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Corn",
      description:
        "Premium corn varieties grown using advanced agricultural techniques for maximum yield.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
              Our Products
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-green-700">
              Premium Agricultural Products
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              We grow and supply the highest quality crops using sustainable
              farming practices.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-green-700">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
