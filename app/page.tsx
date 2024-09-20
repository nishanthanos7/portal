// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Menu } from "lucide-react";

// export default function Homepage() {
//   const categories = [
//     "समाचार",
//     "अर्थ / वाणिज्य",
//     "विचार",
//     "खेलकुद",
//     "मनोरञ्जन",
//     "प्रविधि",
//     "विज्ञान",
//     "स्वास्थ्य",
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">कान्तिपुर</h1>
//         </div>
//       </header>

//       <nav className="border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild className="lg:hidden">
//                 <Button variant="outline" size="icon">
//                   <Menu className="h-4 w-4" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="start" className="w-56">
//                 {categories.map((category) => (
//                   <DropdownMenuItem key={category} asChild>
//                     <Link href={`#${category}`}>{category}</Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <ul className="hidden lg:flex space-x-4">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <Button variant="ghost" asChild className="whitespace-nowrap">
//                     <Link href={`#${category}`}>{category}</Link>
//                   </Button>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex items-center space-x-4">
//               <Input
//                 type="search"
//                 placeholder="खोज्नुहोस्..."
//                 className="w-64 hidden md:inline-flex"
//               />
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline">थप</Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>सदस्यता लिनुहोस्</DropdownMenuItem>
//                   <DropdownMenuItem>न्युजलेटर</DropdownMenuItem>
//                   <DropdownMenuItem>हाम्रोबारे</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="container mx-auto px-4 py-8">
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//             संविधान दिवस: लोकतन्त्र र संविधानको रक्षा गर्न आह्वान
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground">
//             राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना
//             सन्देश जारी
//           </p>
//           <Image
//             src="https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/ped/sambidhan-samsodhan-0182024030620-1000x0.jpg&w=301&h=0"
//             alt="संविधान दिवस समारोह"
//             width={100}
//             height={100}
//             className="w-full object-cover rounded-lg "
//           />
//           <Button size="lg">थप पढ्नुहोस्</Button>
//         </div>

//         <div className="mt-8 bg-muted p-6 rounded-lg text-center">
//           <p className="text-2xl font-bold text-muted-foreground">
//             विज्ञापन स्थान
//           </p>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="space-y-4">
//             <Image
//               src="/placeholder.svg?height=200&width=300"
//               alt="कोरोना अपडेट"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               कोरोना अपडेट: नयाँ संक्रमितको संख्या घट्दो
//             </h3>
//             <p className="text-muted-foreground">
//               स्वास्थ्य मन्त्रालयका अनुसार पछिल्लो २४ घण्टामा थप १०० जनामा
//               कोरोना संक्रमण पुष्टि
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//           <div className="space-y-4">
//             <Image
//               src="/placeholder.svg?height=200&width=300"
//               alt="आर्थिक समाचार"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी
//             </h3>
//             <p className="text-muted-foreground">
//               केन्द्रीय बैंकले आर्थिक वृद्धि र मूल्य स्थिरतालाई प्राथमिकता दिएको
//               छ
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//           <div className="space-y-4">
//             <Image
//               src="/placeholder.svg?height=200&width=300"
//               alt="खेलकुद समाचार"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               नेपाली क्रिकेट टोली विश्वकप छनोटमा
//             </h3>
//             <p className="text-muted-foreground">
//               आईसीसी टी-२० विश्वकप २०२४ को छनोट चरणमा नेपालले उत्कृष्ट प्रदर्शन
//               गर्‍यो
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//         </div>
//       </main>

//       <footer className="border-t mt-12">
//         <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
//           © २०२३ कान्तिपुर। सर्वाधिकार सुरक्षित।
//         </div>
//       </footer>
//     </div>
//   );
// }

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Menu } from "lucide-react";

// export default function Homepage() {
//   const categories = [
//     "समाचार",
//     "अर्थ / वाणिज्य",
//     "विचार",
//     "खेलकुद",
//     "मनोरञ्जन",
//     "प्रविधि",
//     "विज्ञान",
//     "स्वास्थ्य",
//   ];

//   return (
//     <div className="min-h-screen bg-background ">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">नीलोपाटी</h1>
//         </div>
//       </header>

//       <nav className="border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild className="lg:hidden">
//                 <Button variant="outline" size="icon">
//                   <Menu className="h-4 w-4" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="start" className="w-56">
//                 {categories.map((category) => (
//                   <DropdownMenuItem key={category} asChild>
//                     <Link href={`#${category}`}>{category}</Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <ul className="hidden lg:flex space-x-4">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <Button variant="ghost" asChild className="whitespace-nowrap">
//                     <Link href={`#${category}`}>{category}</Link>
//                   </Button>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex items-center space-x-4">
//               <Input
//                 type="search"
//                 placeholder="खोज्नुहोस्..."
//                 className="w-64 hidden md:inline-flex"
//               />
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline">थप</Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>सदस्यता लिनुहोस्</DropdownMenuItem>
//                   <DropdownMenuItem>न्युजलेटर</DropdownMenuItem>
//                   <DropdownMenuItem>हाम्रोबारे</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="container mx-auto px-4 py-8 flex-col items-center">
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//             संविधान दिवस: लोकतन्त्र र संविधानको रक्षा गर्न आह्वान
//           </h2>
//           {/* <p className="text-lg md:text-xl text-muted-foreground">
//             राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना
//             सन्देश जारी
//           </p> */}
//           <div className="relative w-full max-w-2xl mx-auto">
//             <Image
//               src="https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/ped/sambidhan-samsodhan-0182024030620-1000x0.jpg&w=301&h=0"
//               alt="संविधान दिवस समारोह"
//               width={300}
//               height={200}
//               layout="responsive"
//               className="rounded-lg"
//             />
//           </div>
//           <p className="text-lg  md:text-xl text-muted-foreground text-center">
//             राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना
//             सन्देश जारी
//           </p>
//           <Button size="lg">थप पढ्नुहोस्</Button>
//         </div>

//         <div className="mt-8 bg-muted p-6 rounded-lg text-center">
//           <p className="text-2xl font-bold text-muted-foreground">
//             विज्ञापन स्थान
//           </p>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="space-y-4">
//             <Image
//               src="/api/placeholder/300/200"
//               alt="कोरोना अपडेट"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               कोरोना अपडेट: नयाँ संक्रमितको संख्या घट्दो
//             </h3>
//             <p className="text-muted-foreground">
//               स्वास्थ्य मन्त्रालयका अनुसार पछिल्लो २४ घण्टामा थप १०० जनामा
//               कोरोना संक्रमण पुष्टि
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//           <div className="space-y-4">
//             <Image
//               src="/api/placeholder/300/200"
//               alt="आर्थिक समाचार"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी
//             </h3>
//             <p className="text-muted-foreground">
//               केन्द्रीय बैंकले आर्थिक वृद्धि र मूल्य स्थिरतालाई प्राथमिकता दिएको
//               छ
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//           <div className="space-y-4">
//             <Image
//               src="/api/placeholder/300/200"
//               alt="खेलकुद समाचार"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               नेपाली क्रिकेट टोली विश्वकप छनोटमा
//             </h3>
//             <p className="text-muted-foreground">
//               आईसीसी टी-२० विश्वकप २०२४ को छनोट चरणमा नेपालले उत्कृष्ट प्रदर्शन
//               गर्‍यो
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//         </div>
//       </main>

//       <footer className="border-t mt-12">
//         <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
//           © २०२३ कान्तिपुर। सर्वाधिकार सुरक्षित।
//         </div>
//       </footer>
//     </div>
//   );
// }

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Menu } from "lucide-react";

// export default function Homepage() {
//   const categories = [
//     "समाचार",
//     "अर्थ / वाणिज्य",
//     "विचार",
//     "खेलकुद",
//     "मनोरञ्जन",
//     "प्रविधि",
//     "विज्ञान",
//     "स्वास्थ्य",
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">नीलोपाटी</h1>
//         </div>
//       </header>

//       <nav className="border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild className="lg:hidden">
//                 <Button variant="outline" size="icon">
//                   <Menu className="h-4 w-4" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="start" className="w-56">
//                 {categories.map((category) => (
//                   <DropdownMenuItem  key={category} asChild>
//                     <Link href={`#${category}`} className="">{category}</Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <ul className="hidden lg:flex space-x-4 ">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <Button variant="ghost" asChild className="whitespace-nowrap">
//                     <Link href={`#${category}`} className="font-bold">{category}</Link>
//                   </Button>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex items-center space-x-4">
//               <Input
//                 type="search"
//                 placeholder="खोज्नुहोस्..."
//                 className="w-64 hidden md:inline-flex"
//               />
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline">थप</Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>सदस्यता लिनुहोस्</DropdownMenuItem>
//                   <DropdownMenuItem>न्युजलेटर</DropdownMenuItem>
//                   <DropdownMenuItem>हाम्रोबारे</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="container mx-auto px-4 py-8">
//         <div className="space-y-6 flex flex-col items-center">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
//             संविधान दिवस: लोकतन्त्र र संविधानको रक्षा गर्न आह्वान
//           </h2>

//           <div className="text-center text-muted-foreground">
//             <p>२०८० असोज ३ गते, मंगलबार</p>
//             <p>रमेश पौडेल</p>
//           </div>
//           <div className="relative w-full max-w-2xl mx-auto">
//             <Image
//               src="https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/ped/sambidhan-samsodhan-0182024030620-1000x0.jpg&w=301&h=0"
//               alt="संविधान दिवस समारोह"
//               width={300}
//               height={200}
//               layout="responsive"
//               className="rounded-lg"
//             />
//           </div>
//           <p className="text-lg px-52 justify-center items-center md:text-xl text-muted-foreground   ">
//             राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना
//             सन्देश जारी

//             राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना
//             सन्देश जारी। यस अवसरमा, राष्ट्रपति रामचन्द्र पौडेलले संविधानको महत्व
//             र लोकतन्त्रको रक्षा गर्न सबै नागरिकलाई आह्वान गर्दै भने, “संविधान
//             हाम्रो अस्तित्वको आधार हो। यसलाई सुरक्षित राख्नका लागि हामी सबैले
//             एकजुट हुनुपर्छ।” प्रधानमन्त्री पुष्पकमल दाहालले पनि संविधानको
//             कार्यान्वयनमा सबैको योगदान आवश्यक रहेको बताएका छन्। उनले भने, “हामीले
//             संविधानमा लेखिएका हक र स्वतन्त्रताहरुलाई सुनिश्चित गर्न निरन्तर
//             प्रयास गर्नुपर्छ।” यस अवसरमा विभिन्न सांस्कृतिक कार्यक्रमहरू पनि
//             आयोजना गरिएका थिए।
//           </p>
//           <Button size="lg">थप पढ्नुहोस्</Button>
//         </div>

//         <div className="mt-8 bg-muted p-6 rounded-lg text-center">
//           <p className="text-2xl font-bold text-muted-foreground">
//             विज्ञापन स्थान
//           </p>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="space-y-4">
//             <Image
//               src="/api/placeholder/300/200"
//               alt="कोरोना अपडेट"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               कोरोना अपडेट: नयाँ संक्रमितको संख्या घट्दो
//             </h3>
//             <p className="text-muted-foreground">
//               स्वास्थ्य मन्त्रालयका अनुसार पछिल्लो २४ घण्टामा थप १०० जनामा
//               कोरोना संक्रमण पुष्टि
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//           <div className="space-y-4">
//             <Image
//               src="/api/placeholder/300/200"
//               alt="आर्थिक समाचार"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी
//             </h3>
//             <p className="text-muted-foreground">
//               केन्द्रीय बैंकले आर्थिक वृद्धि र मूल्य स्थिरतालाई प्राथमिकता दिएको
//               छ
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//           <div className="space-y-4">
//             <Image
//               src="/api/placeholder/300/200"
//               alt="खेलकुद समाचार"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               नेपाली क्रिकेट टोली विश्वकप छनोटमा
//             </h3>
//             <p className="text-muted-foreground">
//               आईसीसी टी-२० विश्वकप २०२४ को छनोट चरणमा नेपालले उत्कृष्ट प्रदर्शन
//               गर्‍यो
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//         </div>
//       </main>

//       <footer className="border-t mt-12">
//         <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
//           © २०२३ कान्तिपुर। सर्वाधिकार सुरक्षित।
//         </div>
//       </footer>
//     </div>
//   );
// }

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Menu } from "lucide-react";

// export default function Homepage() {
//   const categories = [
//     "समाचार",
//     "अर्थ / वाणिज्य",
//     "विचार",
//     "खेलकुद",
//     "मनोरञ्जन",
//     "प्रविधि",
//     "विज्ञान",
//     "स्वास्थ्य",
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">नीलोपाटी</h1>
//         </div>
//       </header>

//       <nav className="border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild className="lg:hidden">
//                 <Button variant="outline" size="icon">
//                   <Menu className="h-4 w-4" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="start" className="w-56">
//                 {categories.map((category) => (
//                   <DropdownMenuItem key={category} asChild>
//                     <Link href={`#${category}`} className="font-extrabold">
//                       {category}
//                     </Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <ul className="hidden lg:flex space-x-4">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <Button
//                     variant="ghost"
//                     asChild
//                     className="whitespace-nowrap font-extrabold"
//                   >
//                     <Link href={`#${category}`}>{category}</Link>
//                   </Button>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex items-center space-x-4">
//               <Input
//                 type="search"
//                 placeholder="खोज्नुहोस्..."
//                 className="w-64 hidden md:inline-flex"
//               />
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline">थप</Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>सदस्यता लिनुहोस्</DropdownMenuItem>
//                   <DropdownMenuItem>न्युजलेटर</DropdownMenuItem>
//                   <DropdownMenuItem>हाम्रोबारे</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="container mx-auto px-4 py-8">
//         <div className="space-y-6 flex flex-col items-center">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
//             संविधान दिवस: लोकतन्त्र र संविधानको रक्षा गर्न आह्वान
//           </h2>

//           <div className="text-center text-muted-foreground">
//             <p>२०८० असोज ३ गते, मंगलबार</p>
//             <p>रमेश पौडेल</p>
//           </div>
//           <div className="relative w-full max-w-3xl mx-auto">
//             <Image
//               src="https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/ped/sambidhan-samsodhan-0182024030620-1000x0.jpg&w=301&h=0"
//               alt="संविधान दिवस समारोह"
//               width={600}
//               height={400}
//               layout="responsive"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="max-w-3xl mx-auto">
//             <p className="text-lg md:text-xl text-black">
//               राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना
//               सन्देश जारी राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा
//               शुभकामना सन्देश जारी। यस अवसरमा, राष्ट्रपति रामचन्द्र पौडेलले
//               संविधानको महत्व र लोकतन्त्रको रक्षा गर्न सबै नागरिकलाई आह्वान
//               गर्दै भने, "संविधान हाम्रो अस्तित्वको आधार हो। यसलाई सुरक्षित
//               राख्नका लागि हामी सबैले एकजुट हुनुपर्छ।" प्रधानमन्त्री पुष्पकमल
//               दाहालले पनि संविधानको कार्यान्वयनमा सबैको योगदान आवश्यक रहेको
//               बताएका छन्। उनले भने, "हामीले संविधानमा लेखिएका हक र
//               स्वतन्त्रताहरुलाई सुनिश्चित गर्न निरन्तर प्रयास गर्नुपर्छ।" यस
//               अवसरमा विभिन्न सांस्कृतिक कार्यक्रमहरू पनि आयोजना गरिएका थिए।
//             </p>
//           </div>
//           <Button size="lg">थप पढ्नुहोस्</Button>
//         </div>

//         <div className="mt-8 bg-muted p-6 rounded-lg text-center">
//           <p className="text-2xl font-bold text-muted-foreground">
//             विज्ञापन स्थान
//           </p>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="space-y-4">
//             <Image
//               src="https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/miscellaneous/national-day-concert-constitution-day-66-1992024035855-600x0.jpg"
//               alt="कोरोना अपडेट"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               कोरोना अपडेट: नयाँ संक्रमितको संख्या घट्दो
//             </h3>
//             <p className="text-black">
//               स्वास्थ्य मन्त्रालयका अनुसार पछिल्लो २४ घण्टामा थप १०० जनामा
//               कोरोना संक्रमण पुष्टि
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//           <div className="space-y-4">
//             <Image
//               src="https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/third-party/hom-0612024011235-1000x0.jpg&w=1001&h=0"
//               alt="आर्थिक समाचार"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी
//             </h3>
//             <p className="text-black">
//               केन्द्रीय बैंकले आर्थिक वृद्धि र मूल्य स्थिरतालाई प्राथमिकता दिएको
//               छ
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//           <div className="space-y-4">
//             <Image
//               src="https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/politics/rabi-lamichhaneparliyamenthearing-2-1792024032301-1000x0.jpg&w=601&h=0"
//               alt="खेलकुद समाचार"
//               width={300}
//               height={200}
//               className="w-full object-cover rounded-lg"
//             />
//             <h3 className="text-xl md:text-2xl font-semibold">
//               नेपाली क्रिकेट टोली विश्वकप छनोटमा
//             </h3>
//             <p className="text-black">
//               आईसीसी टी-२० विश्वकप २०२४ को छनोट चरणमा नेपालले उत्कृष्ट प्रदर्शन
//               गर्‍यो
//             </p>
//             <Button variant="link">थप पढ्नुहोस्</Button>
//           </div>
//         </div>
//       </main>

//       <footer className="border-t mt-12">
//         <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
//           © २०२३ कान्तिपुर। सर्वाधिकार सुरक्षित।
//         </div>
//       </footer>
//     </div>
//   );
// }

// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Menu } from "lucide-react"

// const articles = {
//   "constitution-day": {
//     id: "constitution-day",
//     title: "संविधान दिवस: लोकतन्त्र र संविधानको रक्षा गर्न आह्वान",
//     date: "२०८० असोज ३ गते, मंगलबार",
//     author: "रमेश पौडेल",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/ped/sambidhan-samsodhan-0182024030620-1000x0.jpg&w=301&h=0",
//     excerpt: "राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना सन्देश जारी गरिएको छ। यस अवसरमा, राष्ट्रपति रामचन्द्र पौडेलले संविधानको महत्व र लोकतन्त्रको रक्षा गर्न सबै नागरिकलाई आह्वान गरेका छन्।",
//   },
//   "corona-update": {
//     id: "corona-update",
//     title: "कोरोना अपडेट: नयाँ संक्रमितको संख्या घट्दो",
//     date: "२०८० असोज २ गते, सोमबार",
//     author: "सुनिता श्रेष्ठ",
//     image: "https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/miscellaneous/national-day-concert-constitution-day-66-1992024035855-600x0.jpg",
//     excerpt: "स्वास्थ्य मन्त्रालयका अनुसार पछिल्लो २४ घण्टामा थप १०० जनामा कोरोना संक्रमण पुष्टि भएको छ। यो संख्या गत हप्ताको तुलनामा २०% ले कम हो।",
//   },
//   "monetary-policy": {
//     id: "monetary-policy",
//     title: "नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी",
//     date: "२०८० असोज १ गते, आइतबार",
//     author: "प्रकाश अधिकारी",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/third-party/hom-0612024011235-1000x0.jpg&w=1001&h=0",
//     excerpt: "नेपाल राष्ट्र बैंकले आर्थिक वर्ष २०८०/८१ को मौद्रिक नीति सार्वजनिक गरेको छ। यस नीतिले आर्थिक वृद्धि र मूल्य स्थिरतालाई प्राथमिकता दिएको छ।",
//   },
//   "cricket-worldcup": {
//     id: "cricket-worldcup",
//     title: "नेपाली क्रिकेट टोली विश्वकप छनोटमा",
//     date: "२०८० भदौ ३० गते, शनिबार",
//     author: "अनुप खड्का",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/politics/rabi-lamichhaneparliyamenthearing-2-1792024032301-1000x0.jpg&w=601&h=0",
//     excerpt: "नेपाली राष्ट्रिय क्रिकेट टोलीले आईसीसी टी-२० विश्वकप २०२४ को छनोट चरणमा उत्कृष्ट प्रदर्शन गरेको छ। टोलीले लगातार तीन खेलमा जित हासिल गर्दै सेमिफाइनलमा प्रवेश गरेको छ।",
//   },
// }

// export default function Homepage() {
//   const categories = [
//     "समाचार",
//     "अर्थ / वाणिज्य",
//     "विचार",
//     "खेलकुद",
//     "मनोरञ्जन",
//     "प्रविधि",
//     "विज्ञान",
//     "स्वास्थ्य",
//   ]

//   const featuredArticle = articles["constitution-day"]
//   const otherArticles = Object.values(articles).filter(article => article.id !== "constitution-day")

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">नीलोपाटी</h1>
//         </div>
//       </header>

//       <nav className="border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild className="lg:hidden">
//                 <Button variant="outline" size="icon">
//                   <Menu className="h-4 w-4" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="start" className="w-56">
//                 {categories.map((category) => (
//                   <DropdownMenuItem key={category} asChild>
//                     <Link href={`#${category}`} className="font-extrabold">
//                       {category}
//                     </Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <ul className="hidden lg:flex space-x-4">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <Button variant="ghost" asChild className="whitespace-nowrap font-extrabold">
//                     <Link href={`#${category}`}>
//                       {category}
//                     </Link>
//                   </Button>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex items-center space-x-4">
//               <Input
//                 type="search"
//                 placeholder="खोज्नुहोस्..."
//                 className="w-64 hidden md:inline-flex"
//               />
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline">थप</Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>सदस्यता लिनुहोस्</DropdownMenuItem>
//                   <DropdownMenuItem>न्युजलेटर</DropdownMenuItem>
//                   <DropdownMenuItem>हाम्रोबारे</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="container mx-auto px-4 py-8">
//         <div className="space-y-6 flex flex-col items-center">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
//             {featuredArticle.title}
//           </h2>

//           <div className="text-center text-muted-foreground">
//             <p>{featuredArticle.date}</p>
//             <p>{featuredArticle.author}</p>
//           </div>
//           <div className="relative w-full max-w-3xl mx-auto">
//             <Image
//               src={featuredArticle.image}
//               alt={featuredArticle.title}
//               width={600}
//               height={400}
//               layout="responsive"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="max-w-3xl mx-auto">
//             <p className="text-lg md:text-xl text-black">
//               {featuredArticle.excerpt}
//             </p>
//           </div>
//           <Link href={`pages/news/${featuredArticle.id}`} passHref>
//             <Button size="lg">थप पढ्नुहोस्</Button>
//           </Link>
//         </div>

//         <div className="mt-8 bg-muted p-6 rounded-lg text-center">
//           <p className="text-2xl font-bold text-muted-foreground">
//             विज्ञापन स्थान
//           </p>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {otherArticles.map((article) => (
//             <div key={article.id} className="space-y-4">
//               <Image
//                 src={article.image}
//                 alt={article.title}
//                 width={300}
//                 height={200}
//                 className="w-full object-cover rounded-lg"
//               />
//               <h3 className="text-xl md:text-2xl font-semibold">
//                 {article.title}
//               </h3>
//               <p className="text-black">
//                 {article.excerpt}
//               </p>
//               <Link href={`pages/news/${article.id}`} passHref>
//                 <Button variant="link">थप पढ्नुहोस्</Button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </main>

//       <footer className="border-t mt-12">
//         <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
//           © २०२३ नीलोपाटी। सर्वाधिकार सुरक्षित।
//         </div>
//       </footer>
//     </div>
//   )
// }

// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Menu } from "lucide-react"

// const articles = {
//   "constitution-day": {
//     id: "constitution-day",
//     title: "संविधान दिवस: लोकतन्त्र र संविधानको रक्षा गर्न आह्वान",
//     date: "२०८० असोज ३ गते, मंगलबार",
//     author: "रमेश पौडेल",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/ped/sambidhan-samsodhan-0182024030620-1000x0.jpg&w=301&h=0",
//     excerpt: "राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना सन्देश जारी गरिएको छ। यस अवसरमा, राष्ट्रपति रामचन्द्र पौडेलले संविधानको महत्व र लोकतन्त्रको रक्षा गर्न सबै नागरिकलाई आह्वान गरेका छन्।",
//   },
//   "corona-update": {
//     id: "corona-update",
//     title: "कोरोना अपडेट: नयाँ संक्रमितको संख्या घट्दो",
//     date: "२०८० असोज २ गते, सोमबार",
//     author: "सुनिता श्रेष्ठ",
//     image: "https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/miscellaneous/national-day-concert-constitution-day-66-1992024035855-600x0.jpg",
//     excerpt: "स्वास्थ्य मन्त्रालयका अनुसार पछिल्लो २४ घण्टामा थप १०० जनामा कोरोना संक्रमण पुष्टि भएको छ। यो संख्या गत हप्ताको तुलनामा २०% ले कम हो।",
//   },
//   "monetary-policy": {
//     id: "monetary-policy",
//     title: "नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी",
//     date: "२०८० असोज १ गते, आइतबार",
//     author: "प्रकाश अधिकारी",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/third-party/hom-0612024011235-1000x0.jpg&w=1001&h=0",
//     excerpt: "नेपाल राष्ट्र बैंकले आर्थिक वर्ष २०८०/८१ को मौद्रिक नीति सार्वजनिक गरेको छ। यस नीतिले आर्थिक वृद्धि र मूल्य स्थिरतालाई प्राथमिकता दिएको छ।",
//   },
//   "cricket-worldcup": {
//     id: "cricket-worldcup",
//     title: "नेपाली क्रिकेट टोली विश्वकप छनोटमा",
//     date: "२०८० भदौ ३० गते, शनिबार",
//     author: "अनुप खड्का",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/politics/rabi-lamichhaneparliyamenthearing-2-1792024032301-1000x0.jpg&w=601&h=0",
//     excerpt: "नेपाली राष्ट्रिय क्रिकेट टोलीले आईसीसी टी-२० विश्वकप २०२४ को छनोट चरणमा उत्कृष्ट प्रदर्शन गरेको छ। टोलीले लगातार तीन खेलमा जित हासिल गर्दै सेमिफाइनलमा प्रवेश गरेको छ।",
//   },
// }

// const marqueeItems = [
//   { type: 'news', content: 'ताजा समाचार: नेपालमा नयाँ शैक्षिक नीति लागू' },
//   { type: 'price', item: 'सुन', value: '९८,५००' },
//   { type: 'price', item: 'चाँदी', value: '१,२५०' },
//   { type: 'news', content: 'अन्तर्राष्ट्रिय समाचार: नयाँ वैश्विक जलवायु सम्झौता' },
//   { type: 'price', item: 'तेल', value: '१६०' },
//   { type: 'price', item: 'डलर', value: '१३२.५' },
// ]

// export default function Homepage() {
//   const categories = [
//     "समाचार",
//     "अर्थ / वाणिज्य",
//     "विचार",
//     "खेलकुद",
//     "मनोरञ्जन",
//     "प्रविधि",
//     "विज्ञान",
//     "स्वास्थ्य",
//   ]

//   const featuredArticle = articles["constitution-day"]
//   const otherArticles = Object.values(articles).filter(article => article.id !== "constitution-day")

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">नीलोपाटी</h1>
//         </div>
//       </header>

//       <nav className="border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild className="lg:hidden">
//                 <Button variant="outline" size="icon">
//                   <Menu className="h-4 w-4" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="start" className="w-56">
//                 {categories.map((category) => (
//                   <DropdownMenuItem key={category} asChild>
//                     <Link href={`#${category}`} className="font-extrabold">
//                       {category}
//                     </Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <ul className="hidden lg:flex space-x-4">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <Button variant="ghost" asChild className="whitespace-nowrap font-extrabold">
//                     <Link href={`#${category}`}>
//                       {category}
//                     </Link>
//                   </Button>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex items-center space-x-4">
//               <Input
//                 type="search"
//                 placeholder="खोज्नुहोस्..."
//                 className="w-64 hidden md:inline-flex"
//               />
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline">थप</Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>सदस्यता लिनुहोस्</DropdownMenuItem>
//                   <DropdownMenuItem>न्युजलेटर</DropdownMenuItem>
//                   <DropdownMenuItem>हाम्रोबारे</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="bg-yellow-300 text-black py-2 overflow-hidden">
//         <div className="marquee-container">
//           <ul className="marquee-content" aria-label="ताजा समाचार र मूल्य अपडेट">
//             {marqueeItems.map((item, index) => (
//               <li key={index} className="inline-block mr-8">
//                 {item.type === 'news' ? (
//                   <span>{item.content}</span>
//                 ) : (
//                   <span>{item.item}: रु. {item.value}</span>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <main className="container mx-auto px-4 py-8">
//         <div className="space-y-6 flex flex-col items-center">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
//             {featuredArticle.title}
//           </h2>

//           <div className="text-center text-muted-foreground">
//             <p>{featuredArticle.date}</p>
//             <p>{featuredArticle.author}</p>
//           </div>
//           <div className="relative w-full max-w-3xl mx-auto">
//             <Image
//               src={featuredArticle.image}
//               alt={featuredArticle.title}
//               width={600}
//               height={400}
//               layout="responsive"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="max-w-3xl mx-auto">
//             <p className="text-lg md:text-xl text-black">
//               {featuredArticle.excerpt}
//             </p>
//           </div>
//           <Link href={`pages/news/${featuredArticle.id}`} passHref>
//             <Button size="lg">थप पढ्नुहोस्</Button>
//           </Link>
//         </div>

//         <div className="mt-8 bg-muted p-6 rounded-lg text-center">
//           <p className="text-2xl font-bold text-muted-foreground">
//             विज्ञापन स्थान
//           </p>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {otherArticles.map((article) => (
//             <div key={article.id} className="space-y-4">
//               <Image
//                 src={article.image}
//                 alt={article.title}
//                 width={300}
//                 height={200}
//                 className="w-full object-cover rounded-lg"
//               />
//               <h3 className="text-xl md:text-2xl font-semibold">
//                 {article.title}
//               </h3>
//               <p className="text-black">
//                 {article.excerpt}
//               </p>
//               <Link href={`pages/news/${article.id}`} passHref>
//                 <Button variant="link">थप पढ्नुहोस्</Button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </main>

//       <footer className="border-t mt-12">
//         <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
//           © २०२३ नीलोपाटी। सर्वाधिकार सुरक्षित।
//         </div>
//       </footer>
//     </div>
//   )
// }

// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Menu } from "lucide-react"

// const articles = {
//   "constitution-day": {
//     id: "constitution-day",
//     title: "संविधान दिवस: लोकतन्त्र र संविधानको रक्षा गर्न आह्वान",
//     date: "२०८० असोज ३ गते, मंगलबार",
//     author: "रमेश पौडेल",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/ped/sambidhan-samsodhan-0182024030620-1000x0.jpg&w=301&h=0",
//     excerpt: "राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना सन्देश जारी गरिएको छ। यस अवसरमा, राष्ट्रपति रामचन्द्र पौडेलले संविधानको महत्व र लोकतन्त्रको रक्षा गर्न सबै नागरिकलाई आह्वान गरेका छन्।",
//   },
//   "corona-update": {
//     id: "corona-update",
//     title: "कोरोना अपडेट: नयाँ संक्रमितको संख्या घट्दो",
//     date: "२०८० असोज २ गते, सोमबार",
//     author: "सुनिता श्रेष्ठ",
//     image: "https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/miscellaneous/national-day-concert-constitution-day-66-1992024035855-600x0.jpg",
//     excerpt: "स्वास्थ्य मन्त्रालयका अनुसार पछिल्लो २४ घण्टामा थप १०० जनामा कोरोना संक्रमण पुष्टि भएको छ। यो संख्या गत हप्ताको तुलनामा २०% ले कम हो।",
//   },
//   "monetary-policy": {
//     id: "monetary-policy",
//     title: "नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी",
//     date: "२०८० असोज १ गते, आइतबार",
//     author: "प्रकाश अधिकारी",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/third-party/hom-0612024011235-1000x0.jpg&w=1001&h=0",
//     excerpt: "नेपाल राष्ट्र बैंकले आर्थिक वर्ष २०८०/८१ को मौद्रिक नीति सार्वजनिक गरेको छ। यस नीतिले आर्थिक वृद्धि र मूल्य स्थिरतालाई प्राथमिकता दिएको छ।",
//   },
//   "cricket-worldcup": {
//     id: "cricket-worldcup",
//     title: "नेपाली क्रिकेट टोली विश्वकप छनोटमा",
//     date: "२०८० भदौ ३० गते, शनिबार",
//     author: "अनुप खड्का",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/politics/rabi-lamichhaneparliyamenthearing-2-1792024032301-1000x0.jpg&w=601&h=0",
//     excerpt: "नेपाली राष्ट्रिय क्रिकेट टोलीले आईसीसी टी-२० विश्वकप २०२४ को छनोट चरणमा उत्कृष्ट प्रदर्शन गरेको छ। टोलीले लगातार तीन खेलमा जित हासिल गर्दै सेमिफाइनलमा प्रवेश गरेको छ।",
//   },
// }

// const marqueeItems = [
//   { type: 'news', content: 'ताजा समाचार: नेपालमा नयाँ शैक्षिक नीति लागू' },
//   { type: 'price', item: 'सुन', value: '९८,५००' },
//   { type: 'price', item: 'चाँदी', value: '१,२५०' },
//   { type: 'news', content: 'अन्तर्राष्ट्रिय समाचार: नयाँ वैश्विक जलवायु सम्झौता' },
//   { type: 'price', item: 'तेल', value: '१६०' },
//   { type: 'price', item: 'डलर', value: '१३२.५' },
// ]

// export default function Homepage() {
//   const categories = [
//     "समाचार",
//     "अर्थ / वाणिज्य",
//     "विचार",
//     "खेलकुद",
//     "मनोरञ्जन",
//     "प्रविधि",
//     "विज्ञान",
//     "स्वास्थ्य",
//   ]

//   const featuredArticle = articles["constitution-day"]
//   const otherArticles = Object.values(articles).filter(article => article.id !== "constitution-day")

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">नीलोपाटी</h1>
//         </div>
//       </header>

//       <nav className="border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild className="lg:hidden">
//                 <Button variant="outline" size="icon">
//                   <Menu className="h-4 w-4" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="start" className="w-56">
//                 {categories.map((category) => (
//                   <DropdownMenuItem key={category} asChild>
//                     <Link href={`#${category}`} className="font-extrabold">
//                       {category}
//                     </Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <ul className="hidden lg:flex space-x-4">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <Button variant="ghost" asChild className="whitespace-nowrap font-extrabold">
//                     <Link href={`#${category}`}>
//                       {category}
//                     </Link>
//                   </Button>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex items-center space-x-4">
//               <Input
//                 type="search"
//                 placeholder="खोज्नुहोस्..."
//                 className="w-64 hidden md:inline-flex"
//               />
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline">थप</Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>सदस्यता लिनुहोस्</DropdownMenuItem>
//                   <DropdownMenuItem>न्युजलेटर</DropdownMenuItem>
//                   <DropdownMenuItem>हाम्रोबारे</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
//         <div className="marquee-container">
//           <ul className="marquee-content" aria-label="ताजा समाचार र मूल्य अपडेट">
//             {marqueeItems.map((item, index) => (
//               <li key={index} className="inline-block mr-8">
//                 {item.type === 'news' ? (
//                   <span>{item.content}</span>
//                 ) : (
//                   <span>{item.item}: रु. {item.value}</span>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <main className="container mx-auto px-4 py-8">
//         <div className="space-y-6 flex flex-col items-center">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
//             {featuredArticle.title}
//           </h2>

//           <div className="text-center text-muted-foreground">
//             <p>{featuredArticle.date}</p>
//             <p>{featuredArticle.author}</p>
//           </div>
//           <div className="relative w-full max-w-3xl mx-auto">
//             <Image
//               src={featuredArticle.image}
//               alt={featuredArticle.title}
//               width={600}
//               height={400}
//               layout="responsive"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="max-w-3xl mx-auto">
//             <p className="text-lg md:text-xl text-black">
//               {featuredArticle.excerpt}
//             </p>
//           </div>
//           <Link href={`pages/news/${featuredArticle.id}`} passHref>
//             <Button size="lg">थप पढ्नुहोस्</Button>
//           </Link>
//         </div>

//         <div className="mt-8 bg-muted p-6 rounded-lg text-center">
//           <p className="text-2xl font-bold text-muted-foreground">
//             विज्ञापन स्थान
//           </p>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {otherArticles.map((article) => (
//             <div key={article.id} className="space-y-4">
//               <Image
//                 src={article.image}
//                 alt={article.title}
//                 width={300}
//                 height={200}
//                 className="w-full object-cover rounded-lg"
//               />
//               <h3 className="text-xl md:text-2xl font-semibold">
//                 {article.title}
//               </h3>
//               <p className="text-black">
//                 {article.excerpt}
//               </p>
//               <Link href={`pages/news/${article.id}`} passHref>
//                 <Button variant="link">थप पढ्नुहोस्</Button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </main>

//       <footer className="border-t mt-12">
//         <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
//           © २०२३ नीलोपाटी। सर्वाधिकार सुरक्षित।
//         </div>
//       </footer>
//     </div>
//   )
// }

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Menu } from "lucide-react";
// import { articles, getExcerpt } from "@/lib/articles";

// const marqueeItems = [
//   { type: "news", content: "ताजा समाचार: नेपालमा नयाँ शैक्षिक नीति लागू" },
//   { type: "price", item: "सुन", value: "९८,५००" },
//   { type: "price", item: "चाँदी", value: "१,२५०" },
//   {
//     type: "news",
//     content: "अन्तर्राष्ट्रिय समाचार: नयाँ वैश्विक जलवायु सम्झौता",
//   },
//   { type: "price", item: "तेल", value: "१६०" },
//   { type: "price", item: "डलर", value: "१३२.५" },
// ];

// export default function Homepage() {
//   const categories = [
//     "समाचार",
//     "अर्थ / वाणिज्य",
//     "विचार",
//     "खेलकुद",
//     "मनोरञ्जन",
//     "प्रविधि",
//     "विज्ञान",
//     "स्वास्थ्य",
//   ];

//   const featuredArticle = articles["constitution-day"];
//   const otherArticles = Object.values(articles).filter(
//     (article) => article.id !== "constitution-day"
//   );

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">नीलोपाटी</h1>
//         </div>
//       </header>

//       <nav className="border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild className="lg:hidden">
//                 <Button variant="outline" size="icon">
//                   <Menu className="h-4 w-4" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="start" className="w-56">
//                 {categories.map((category) => (
//                   <DropdownMenuItem key={category} asChild>
//                     <Link href={`#${category}`} className="font-extrabold">
//                       {category}
//                     </Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <ul className="hidden lg:flex space-x-4">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <Button
//                     variant="ghost"
//                     asChild
//                     className="whitespace-nowrap font-extrabold"
//                   >
//                     <Link href={`#${category}`}>{category}</Link>
//                   </Button>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex items-center space-x-4">
//               <Input
//                 type="search"
//                 placeholder="खोज्नुहोस्..."
//                 className="w-64 hidden md:inline-flex"
//               />
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline">थप</Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>सदस्यता लिनुहोस्</DropdownMenuItem>
//                   <DropdownMenuItem>न्युजलेटर</DropdownMenuItem>
//                   <DropdownMenuItem>हाम्रोबारे</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
//         <div className="marquee-container">
//           <ul
//             className="marquee-content"
//             aria-label="ताजा समाचार र मूल्य अपडेट"
//           >
//             {marqueeItems.map((item, index) => (
//               <li key={index} className="inline-block mr-8">
//                 {item.type === "news" ? (
//                   <span>{item.content}</span>
//                 ) : (
//                   <span>
//                     {item.item}: रु. {item.value}
//                   </span>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <main className="container mx-auto px-4 py-8">
//         <div className="space-y-6 flex flex-col items-center">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
//             {featuredArticle.title}
//           </h2>

//           <div className="text-center text-muted-foreground">
//             <p>{featuredArticle.date}</p>
//             <p>{featuredArticle.author}</p>
//           </div>
//           <div className="relative w-full max-w-3xl mx-auto">
//             <Image
//               src={featuredArticle.image}
//               alt={featuredArticle.title}
//               width={600}
//               height={400}
//               layout="responsive"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="max-w-3xl mx-auto">
//             <p className="text-lg md:text-xl text-black">
//               {getExcerpt(featuredArticle.content)}
//             </p>
//           </div>
//           <Link href={`pages/news/${featuredArticle.id}`} passHref>
//             <Button size="lg">थप पढ्नुहोस्</Button>
//           </Link>
//         </div>

//         <div className="mt-8 bg-muted p-6 rounded-lg text-center">
//           <p className="text-2xl font-bold text-muted-foreground">
//             विज्ञापन स्थान
//           </p>
//         </div>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {otherArticles.map((article) => (
//             <div key={article.id} className="space-y-4">
//               <Image
//                 src={article.image}
//                 alt={article.title}
//                 width={300}
//                 height={200}
//                 className="w-full object-cover rounded-lg"
//               />
//               <h3 className="text-xl md:text-2xl font-semibold">
//                 {article.title}
//               </h3>
//               <p className="text-black">{getExcerpt(article.content)}</p>
//               <Link href={`pages/news/${article.id}`} passHref>
//                 <Button variant="link">थप पढ्नुहोस्</Button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </main>

//       <footer className="border-t mt-12">
//         <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
//           © २०२३ नीलोपाटी। सर्वाधिकार सुरक्षित।
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Menu, ThermometerIcon } from "lucide-react";
import { articles, getExcerpt } from "@/lib/articles";

const marqueeItems = [
  { type: "news", content: "ताजा समाचार: नेपालमा नयाँ शैक्षिक नीति लागू" },
  { type: "price", item: "सुन", value: "९८,५००" },
  { type: "price", item: "चाँदी", value: "१,२५०" },
  {
    type: "news",
    content: "अन्तर्राष्ट्रिय समाचार: नयाँ वैश्विक जलवायु सम्झौता",
  },
  { type: "price", item: "तेल", value: "१६०" },
  { type: "price", item: "डलर", value: "१३२.५" },
];

export default function Homepage() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    "समाचार",
    "अर्थ / वाणिज्य",
    "विचार",
    "खेलकुद",
    "मनोरञ्जन",
    "प्रविधि",
    "विज्ञान",
    "स्वास्थ्य",
  ];

  const featuredArticle = articles["constitution-day"];
  const otherArticles = Object.values(articles).filter(
    (article) => article.id !== "constitution-day"
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        {/* <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              {currentDateTime.toLocaleString("ne-NP", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <ThermometerIcon className="h-4 w-4" />
              <span>२५°C</span>
            </div>
          </div>
        </div> */}
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-5xl font-bold text-center text-blue-700">
            नीलोपाटी
          </h1>
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
                    <Link href={`#${category}`} className="font-extrabold">
                      {category}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ul className="hidden lg:flex space-x-4">
              {categories.map((category) => (
                <li key={category}>
                  <Button
                    variant="ghost"
                    asChild
                    className="whitespace-nowrap font-extrabold"
                  >
                    <Link href={`#${category}`}>{category}</Link>
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <Input
                type="search"
                placeholder="खोज्नुहोस्..."
                className="w-64 hidden md:inline-flex"
              />
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

      <div className="bg-red-600 text-primary-foreground py-2 overflow-hidden">
        <div className="marquee-container">
          <ul
            className="marquee-content"
            aria-label="ताजा समाचार र मूल्य अपडेट"
          >
            {marqueeItems.map((item, index) => (
              <li key={index} className="inline-block mr-8">
                {item.type === "news" ? (
                  <span>{item.content}</span>
                ) : (
                  <span>
                    {item.item}: रु. {item.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
            {featuredArticle.title}
          </h2>

          <div className="text-center text-muted-foreground">
            <p>{featuredArticle.date}</p>
            <p>{featuredArticle.author}</p>
          </div>
          <div className="relative w-full max-w-3xl mx-auto">
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.title}
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-black">
              {getExcerpt(featuredArticle.content)}
            </p>
          </div>
          <Link href={`pages/news/${featuredArticle.id}`}>
            <Button className="bg-blue-600" size="lg">
              थप पढ्नुहोस्
            </Button>
          </Link>
        </div>

        <div className="mt-8 bg-muted p-6 rounded-lg text-center">
          <p className="text-2xl font-bold text-muted-foreground">
            विज्ञापन स्थान
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherArticles.map((article) => (
            <div key={article.id} className="space-y-4">
              <Image
                src={article.image}
                alt={article.title}
                width={300}
                height={200}
                className="w-full object-cover rounded-lg"
              />
              <h3 className="text-xl md:text-2xl font-semibold">
                {article.title}
              </h3>
              <p className="text-black">{getExcerpt(article.content)}</p>
              <Link href={`pages/news/${article.id}`}>
                <Button className="text-blue-600" variant="link">
                  थप पढ्नुहोस्
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          © २०२३ नीलोपाटी। सर्वाधिकार सुरक्षित।
        </div>
      </footer>
    </div>
  );
}

// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Menu, ThermometerIcon } from "lucide-react"
// import { articles, getExcerpt } from "@/lib/articles"

// const marqueeItems = [
//   { type: "news", content: "ताजा समाचार: नेपालमा नयाँ शैक्षिक नीति लागू" },
//   { type: "price", item: "सुन", value: "९८,५००" },
//   { type: "price", item: "चाँदी", value: "१,२५०" },
//   { type: "news", content: "अन्तर्राष्ट्रिय समाचार: नयाँ वैश्विक जलवायु सम्झौता" },
//   { type: "price", item: "तेल", value: "१६०" },
//   { type: "price", item: "डलर", value: "१३२.५" },
// ]

// const nepaliNumerals = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
// const nepaliWeekdays = ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार'];
// const nepaliMonths = ['बैशाख', 'जेठ', 'असार', 'श्रावण', 'भदौ', 'असोज', 'कार्तिक', 'मंसिर', 'पुष', 'माघ', 'फागुन', 'चैत'];

// function toNepaliNumeral(num: number): string {
//   return num.toString().split('').map(digit => nepaliNumerals[parseInt(digit)]).join('');
// }

// function formatDateTimeNepali(date: Date): string {
//   const year = toNepaliNumeral(date.getFullYear());
//   const month = nepaliMonths[date.getMonth()];
//   const day = toNepaliNumeral(date.getDate());
//   const weekday = nepaliWeekdays[date.getDay()];
//   const hours = toNepaliNumeral(date.getHours());
//   const minutes = toNepaliNumeral(date.getMinutes());
//   const seconds = toNepaliNumeral(date.getSeconds());

//   return `${year} ${month} ${day}, ${weekday}: ${hours}:${minutes}:${seconds}`;
// }

// export default function Homepage() {
//   const [currentDateTime, setCurrentDateTime] = useState<string>('')

//   useEffect(() => {
//     const updateDateTime = () => {
//       setCurrentDateTime(formatDateTimeNepali(new Date()))
//     }
//     updateDateTime() // Initial call
//     const timer = setInterval(updateDateTime, 1000)
//     return () => clearInterval(timer)
//   }, [])

//   const categories = [
//     "समाचार",
//     "अर्थ / वाणिज्य",
//     "विचार",
//     "खेलकुद",
//     "मनोरञ्जन",
//     "प्रविधि",
//     "विज्ञान",
//     "स्वास्थ्य",
//   ]

//   const featuredArticle = articles["constitution-day"]
//   const otherArticles = Object.values(articles).filter(
//     (article) => article.id !== "constitution-day"
//   )

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-2">
//           <div className="flex justify-between items-center">
//             <div className="text-sm text-muted-foreground">
//               {currentDateTime}
//             </div>
//             <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//               <ThermometerIcon className="h-4 w-4" />
//               <span>२५°C</span>
//             </div>
//           </div>
//         </div>
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">नीलोपाटी</h1>
//         </div>
//       </header>

//       {/* Rest of the component remains unchanged */}
//       {/* ... */}
//     </div>
//   )
// }
