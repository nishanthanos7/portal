'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Menu } from "lucide-react"

export function NepaliHomepage() {
  const categories = [
    "समाचार",
    "अर्थ / वाणिज्य",
    "विचार",
    "खेलकुद",
    "मनोरञ्जन",
    "प्रविधि",
    "विज्ञान",
    "स्वास्थ्य",
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center">कान्तिपुर</h1>
        </div>
      </header>

      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {categories.map((category) => (
                  <DropdownMenuItem key={category} asChild>
                    <Link href={`#${category}`}>{category}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ul className="hidden lg:flex space-x-4">
              {categories.map((category) => (
                <li key={category}>
                  <Button variant="ghost" asChild className="whitespace-nowrap">
                    <Link href={`#${category}`}>{category}</Link>
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <Input type="search" placeholder="खोज्नुहोस्..." className="w-64 hidden md:inline-flex" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">थप</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>सदस्यता लिनुहोस्</DropdownMenuItem>
                  <DropdownMenuItem>न्युजलेटर</DropdownMenuItem>
                  <DropdownMenuItem>हाम्रोबारे</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">संविधान दिवस: लोकतन्त्र र संविधानको रक्षा गर्न आह्वान</h2>
          <p className="text-lg md:text-xl text-muted-foreground">राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना सन्देश जारी</p>
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="संविधान दिवस समारोह"
            width={800}
            height={400}
            className="w-full object-cover rounded-lg"
          />
          <Button size="lg">थप पढ्नुहोस्</Button>
        </div>

        <div className="mt-8 bg-muted p-6 rounded-lg text-center">
          <p className="text-2xl font-bold text-muted-foreground">विज्ञापन स्थान</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="कोरोना अपडेट"
              width={300}
              height={200}
              className="w-full object-cover rounded-lg"
            />
            <h3 className="text-xl md:text-2xl font-semibold">कोरोना अपडेट: नयाँ संक्रमितको संख्या घट्दो</h3>
            <p className="text-muted-foreground">स्वास्थ्य मन्त्रालयका अनुसार पछिल्लो २४ घण्टामा थप १०० जनामा कोरोना संक्रमण पुष्टि</p>
            <Button variant="link">थप पढ्नुहोस्</Button>
          </div>
          <div className="space-y-4">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="आर्थिक समाचार"
              width={300}
              height={200}
              className="w-full object-cover rounded-lg"
            />
            <h3 className="text-xl md:text-2xl font-semibold">नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी</h3>
            <p className="text-muted-foreground">केन्द्रीय बैंकले आर्थिक वृद्धि र मूल्य स्थिरतालाई प्राथमिकता दिएको छ</p>
            <Button variant="link">थप पढ्नुहोस्</Button>
          </div>
          <div className="space-y-4">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="खेलकुद समाचार"
              width={300}
              height={200}
              className="w-full object-cover rounded-lg"
            />
            <h3 className="text-xl md:text-2xl font-semibold">नेपाली क्रिकेट टोली विश्वकप छनोटमा</h3>
            <p className="text-muted-foreground">आईसीसी टी-२० विश्वकप २०२४ को छनोट चरणमा नेपालले उत्कृष्ट प्रदर्शन गर्‍यो</p>
            <Button variant="link">थप पढ्नुहोस्</Button>
          </div>
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          © २०२३ कान्तिपुर। सर्वाधिकार सुरक्षित।
        </div>
      </footer>
    </div>
  )
}