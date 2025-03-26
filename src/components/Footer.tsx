import Link from "next/link";
import {
  Facebook,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full border-t bg-background py-6 md:py-12"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href={"/"}>
                <Image
                  src="/ifarm_logo.png"
                  alt="ifarm logo"
                  width={70}
                  height={50}
                />
              </Link>
              {/* <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold"></span> */}
            </div>
            <p className="text-sm text-muted-foreground">
              Sustainable farming solutions with guaranteed 23% ROI on
              agricultural investments.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#products"
                  className="text-muted-foreground hover:text-green-600"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-green-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#investment"
                  className="text-muted-foreground hover:text-green-600"
                >
                  Investment
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-green-600"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-muted-foreground">
                  Km 12 Tyomu, Benue State.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-600" />
                <span className="text-muted-foreground">
                  (+234) 816-8777-841
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-muted-foreground">
                  info@ifarms_agriculture.com
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-green-600"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-green-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-green-600"
                >
                  Investment Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} iFarms Agriculture. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-green-600"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-green-600"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-green-600"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
