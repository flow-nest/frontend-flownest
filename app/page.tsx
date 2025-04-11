import Link from "next/link";
import { ArrowRight, CheckCircle, Truck, Box, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F5EBE0] py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5D4037]">
                  Intelligent Robot Tracking & Inventory Management
                </h1>
                <p className="max-w-[600px] text-[#8B4513] md:text-xl">
                  RoboTrack provides real-time monitoring and control of your
                  robot fleet and inventory systems, optimizing warehouse
                  operations and increasing efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                    <Button className="bg-[#8B4513] text-white hover:bg-[#5D4037]">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button
                      variant="outline"
                      className="border-[#D2B48C] text-[#8B4513] hover:bg-[#F5EBE0] hover:text-[#5D4037]"
                    >
                      Request Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:order-last">
                <div className="rounded-lg border border-[#D2B48C] bg-white p-2 shadow-lg">
                  <div className="aspect-video overflow-hidden rounded bg-[#F5EBE0] flex items-center justify-center">
                    {/* This would be an image or animation of the dashboard */}
                    <div className="text-center p-8">
                      <Box className="h-16 w-16 mx-auto mb-4 text-[#8B4513]" />
                      <p className="text-lg font-medium text-[#5D4037]">
                        Dashboard Preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5D4037]">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-[#8B4513] md:text-xl">
                  Everything you need to manage your robot fleet and inventory
                  in one place
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="rounded-lg border border-[#D2B48C] bg-white p-6 shadow-sm">
                <Truck className="h-10 w-10 text-[#8B4513] mb-4" />
                <h3 className="text-xl font-bold text-[#5D4037]">
                  Real-time Tracking
                </h3>
                <p className="text-[#8B4513] mt-2">
                  Monitor your robot fleet in real-time with precise location
                  tracking and status updates.
                </p>
              </div>
              <div className="rounded-lg border border-[#D2B48C] bg-white p-6 shadow-sm">
                <Box className="h-10 w-10 text-[#8B4513] mb-4" />
                <h3 className="text-xl font-bold text-[#5D4037]">
                  Inventory Management
                </h3>
                <p className="text-[#8B4513] mt-2">
                  Keep track of your inventory levels and receive alerts when
                  stock is running low.
                </p>
              </div>
              <div className="rounded-lg border border-[#D2B48C] bg-white p-6 shadow-sm">
                <BarChart3 className="h-10 w-10 text-[#8B4513] mb-4" />
                <h3 className="text-xl font-bold text-[#5D4037]">
                  Analytics Dashboard
                </h3>
                <p className="text-[#8B4513] mt-2">
                  Gain insights into your operations with comprehensive
                  analytics and reporting tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#F5EBE0] py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5D4037]">
                  Why Choose RoboTrack?
                </h2>
                <p className="max-w-[900px] text-[#8B4513] md:text-xl">
                  Our platform offers numerous benefits to streamline your
                  operations
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              {[
                "Increase operational efficiency by up to 35%",
                "Reduce inventory discrepancies by 45%",
                "Real-time monitoring prevents costly downtime",
                "Intuitive interface requires minimal training",
                "Customizable alerts and notifications",
                "Comprehensive reporting and analytics",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 flex-none text-[#8B4513]" />
                  <p className="text-lg text-[#5D4037]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5D4037]">
                  Ready to Optimize Your Operations?
                </h2>
                <p className="max-w-[900px] text-[#8B4513] md:text-xl">
                  Join thousands of businesses already using RoboTrack to manage
                  their robot fleets and inventory
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button className="bg-[#8B4513] text-white hover:bg-[#5D4037]">
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-[#D2B48C] text-[#8B4513] hover:bg-[#F5EBE0] hover:text-[#5D4037]"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
