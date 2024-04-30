import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is veryfied by our team to ensure our highest quality standards. Not happy? We offer a 30 day refund quarantee.",
  },
  {
    name: "For the planet",
    Icon: Leaf,
    description:
      "We've pledged 1% sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
            Your marketplace for high quality{" "}
            <span className="text-green-600">digital accets</span>.
          </h1>
          <p className="mt-6  text-lg max-w-prose text-muted-foreground">
            Welcome to Digital Assets. Every asset on our platform is verified
            by our team to ensure our height quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Tranding
            </Link>
            <Button variant="ghost"> Our quality promise &rarr; </Button>
          </div>
        </div>
        {/* TODO: List products */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:grid-x-6 lg:grid-cols-3 lg:gap-x-8 lg:grid-y-0">
            {perks.map((park) => (
              <div
                key={park.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex justify-center items-center rounded-full bg-green-200 text-green-900">
                    {<park.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {park.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {park.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
