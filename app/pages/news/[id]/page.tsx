// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// // This would typically come from a database or API
// const articles = {
//   "constitution-day": {
//     title: "संविधान दिवस: लोकतन्त्र र संविधानको रक्षा गर्न आह्वान",
//     date: "२०८० असोज ३ गते, मंगलबार",
//     author: "रमेश पौडेल",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/ped/sambidhan-samsodhan-0182024030620-1000x0.jpg&w=301&h=0",
//     content: `
//       <p>राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना सन्देश जारी गरिएको छ। यस अवसरमा, राष्ट्रपति रामचन्द्र पौडेलले संविधानको महत्व र लोकतन्त्रको रक्षा गर्न सबै नागरिकलाई आह्वान गरेका छन्।</p>
//       <p>राष्ट्रपति पौडेलले आफ्नो सन्देशमा भने, "संविधान हाम्रो अस्तित्वको आधार हो। यसलाई सुरक्षित राख्नका लागि हामी सबैले एकजुट हुनुपर्छ। हाम्रो संविधानले प्रत्याभूत गरेका अधिकारहरूको रक्षा गर्दै, हामीले यसलाई जीवन्त राख्नुपर्छ।"</p>
//       <p>प्रधानमन्त्री पुष्पकमल दाहालले पनि संविधानको कार्यान्वयनमा सबैको योगदान आवश्यक रहेको बताएका छन्। उनले भने, "हामीले संविधानमा लेखिएका हक र स्वतन्त्रताहरुलाई सुनिश्चित गर्न निरन्तर प्रयास गर्नुपर्छ। संविधानको मर्म र भावना अनुरूप राज्य सञ्चालन गर्नु हाम्रो कर्तव्य हो।"</p>
//       <p>यस वर्षको संविधान दिवसमा विभिन्न सांस्कृतिक कार्यक्रमहरू पनि आयोजना गरिएका छन्। राजधानी काठमाडौंमा आयोजित मुख्य समारोहमा देशभरका विभिन्न जातजाति र समुदायका प्रतिनिधिहरूले आ-आफ्नो संस्कृति झल्कने कार्यक्रमहरू प्रस्तुत गरेका छन्।</p>
//     `,
//   },
//   "corona-update": {
//     title: "कोरोना अपडेट: नयाँ संक्रमितको संख्या घट्दो",
//     date: "२०८० असोज २ गते, सोमबार",
//     author: "सुनिता श्रेष्ठ",
//     image: "/api/placeholder/600/400",
//     content: `
//       <p>स्वास्थ्य मन्त्रालयका अनुसार पछिल्लो २४ घण्टामा थप १०० जनामा कोरोना संक्रमण पुष्टि भएको छ। यो संख्या गत हप्ताको तुलनामा २०% ले कम हो।</p>
//       <p>मन्त्रालयका प्रवक्ता डा. संगीता कौशलले भनिन्, "हामी संक्रमण दरमा कमी देख्न पाउँदा खुसी छौं। तर, यसको अर्थ हामीले सतर्कता कम गर्नु पर्छ भन्ने होइन।"</p>
//       <p>खोप अभियानले गति लिएसँगै संक्रमण दरमा कमी आएको विश्वास गरिएको छ। हालसम्म ६०% जनसंख्याले पूर्ण खोप लगाइसकेका छन्।</p>
//     `,
//   },
//   "monetary-policy": {
//     title: "नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी",
//     date: "२०८० असोज १ गते, आइतबार",
//     author: "प्रकाश अधिकारी",
//     image: "/api/placeholder/600/400",
//     content: `
//       <p>नेपाल राष्ट्र बैंकले आर्थिक वर्ष २०८०/८१ को मौद्रिक नीति सार्वजनिक गरेको छ। यस नीतिले आर्थिक वृद्धि र मूल्य स्थिरतालाई प्राथमिकता दिएको छ।</p>
//       <p>केन्द्रीय बैंकका गभर्नर महाप्रसाद अधिकारीले भने, "हामीले यस वर्ष ६% को आर्थिक वृद्धिदर हासिल गर्ने लक्ष्य राखेका छौं। साथै, मुद्रास्फीतिलाई ६% भित्र सीमित राख्ने योजना छ।"</p>
//       <p>नयाँ नीतिले कृषि र साना तथा मझौला उद्योगहरूलाई प्राथमिकता दिएको छ। यसबाट रोजगारी सिर्जना र आयात प्रतिस्थापनमा सहयोग पुग्ने अपेक्षा गरिएको छ।</p>
//     `,
//   },
//   "cricket-worldcup": {
//     title: "नेपाली क्रिकेट टोली विश्वकप छनोटमा",
//     date: "२०८० भदौ ३० गते, शनिबार",
//     author: "अनुप खड्का",
//     image: "/api/placeholder/600/400",
//     content: `
//       <p>नेपाली राष्ट्रिय क्रिकेट टोलीले आईसीसी टी-२० विश्वकप २०२४ को छनोट चरणमा उत्कृष्ट प्रदर्शन गरेको छ। टोलीले लगातार तीन खेलमा जित हासिल गर्दै सेमिफाइनलमा प्रवेश गरेको छ।</p>
//       <p>कप्तान रोहित पौडेलले भने, "हामी यो सफलताबाट अत्यन्त उत्साहित छौं। टोलीको कडा मेहनत र एकताले यो सम्भव भएको हो।"</p>
//       <p>नेपालले अब सेमिफाइनलमा नेदरल्याण्ड्ससँग खेल्नेछ। यो खेल आगामी हप्ता हुनेछ र विजेता टोलीले विश्वकपमा स्थान सुरक्षित गर्नेछ।</p>
//     `,
//   },
// }

// export default function NewsArticle({ params }: { params: { id: string } }) {
//   const article = articles[params.id as keyof typeof articles]

//   if (!article) {
//     return <div>Article not found</div>
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">नीलोपाटी</h1>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-8">
//         <article className="max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center mb-6">
//             {article.title}
//           </h2>

//           <div className="text-center text-muted-foreground mb-6">
//             <p>{article.date}</p>
//             <p>{article.author}</p>
//           </div>

//           <Image
//             src={article.image}
//             alt={article.title}
//             width={600}
//             height={400}
//             layout="responsive"
//             className="rounded-lg mb-6"
//           />

//           <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
//         </article>

//         <div className="mt-8 text-center">
//           <Link href="/" passHref>
//             <Button variant="outline">मुख्य पृष्ठमा फर्कनुहोस्</Button>
//           </Link>
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
// import { Facebook, Twitter, Linkedin } from "lucide-react"

// // This would typically come from a database or API
// const articles = {
//   "constitution-day": {
//     title: "संविधान दिवस: लोकतन्त्र र संविधानको रक्षा गर्न आह्वान",
//     date: "२०८० असोज ३ गते, मंगलबार",
//     author: "रमेश पौडेल",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/ped/sambidhan-samsodhan-0182024030620-1000x0.jpg&w=301&h=0",
//     content: `
//       <p>राष्ट्रपति र प्रधानमन्त्रीद्वारा संविधान दिवसको अवसरमा शुभकामना सन्देश जारी गरिएको छ। यस अवसरमा, राष्ट्रपति रामचन्द्र पौडेलले संविधानको महत्व र लोकतन्त्रको रक्षा गर्न सबै नागरिकलाई आह्वान गरेका छन्।</p>
//       <p>राष्ट्रपति पौडेलले आफ्नो सन्देशमा भने, "संविधान हाम्रो अस्तित्वको आधार हो। यसलाई सुरक्षित राख्नका लागि हामी सबैले एकजुट हुनुपर्छ। हाम्रो संविधानले प्रत्याभूत गरेका अधिकारहरूको रक्षा गर्दै, हामीले यसलाई जीवन्त राख्नुपर्छ।"</p>
//       <p>प्रधानमन्त्री पुष्पकमल दाहालले पनि संविधानको कार्यान्वयनमा सबैको योगदान आवश्यक रहेको बताएका छन्। उनले भने, "हामीले संविधानमा लेखिएका हक र स्वतन्त्रताहरुलाई सुनिश्चित गर्न निरन्तर प्रयास गर्नुपर्छ। संविधानको मर्म र भावना अनुरूप राज्य सञ्चालन गर्नु हाम्रो कर्तव्य हो।"</p>
//       <p>यस वर्षको संविधान दिवसमा विभिन्न सांस्कृतिक कार्यक्रमहरू पनि आयोजना गरिएका छन्। राजधानी काठमाडौंमा आयोजित मुख्य समारोहमा देशभरका विभिन्न जातजाति र समुदायका प्रतिनिधिहरूले आ-आफ्नो संस्कृति झल्कने कार्यक्रमहरू प्रस्तुत गरेका छन्।</p>
//     `,
//   },
//   "corona-update": {
//     title: "कोरोना अपडेट: नयाँ संक्रमितको संख्या घट्दो",
//     date: "२०८० असोज २ गते, सोमबार",
//     author: "सुनिता श्रेष्ठ",
//     image: "https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/miscellaneous/national-day-concert-constitution-day-66-1992024035855-600x0.jpg",
//     content: `
//       <p>स्वास्थ्य मन्त्रालयका अनुसार पछिल्लो २४ घण्टामा थप १०० जनामा कोरोना संक्रमण पुष्टि भएको छ। यो संख्या गत हप्ताको तुलनामा २०% ले कम हो।</p>
//       <p>मन्त्रालयका प्रवक्ता डा. संगीता कौशलले भनिन्, "हामी संक्रमण दरमा कमी देख्न पाउँदा खुसी छौं। तर, यसको अर्थ हामीले सतर्कता कम गर्नु पर्छ भन्ने होइन।"</p>
//       <p>खोप अभियानले गति लिएसँगै संक्रमण दरमा कमी आएको विश्वास गरिएको छ। हालसम्म ६०% जनसंख्याले पूर्ण खोप लगाइसकेका छन्।</p>
//     `,
//   },
//   "monetary-policy": {
//     title: "नेपाल राष्ट्र बैंकद्वारा नयाँ मौद्रिक नीति जारी",
//     date: "२०८० असोज १ गते, आइतबार",
//     author: "प्रकाश अधिकारी",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/third-party/hom-0612024011235-1000x0.jpg&w=1001&h=0",
//     content: `
//       <p>नेपाल राष्ट्र बैंकले आर्थिक वर्ष २०८०/८१ को मौद्रिक नीति सार्वजनिक गरेको छ। यस नीतिले आर्थिक वृद्धि र मूल्य स्थिरतालाई प्राथमिकता दिएको छ।</p>
//       <p>केन्द्रीय बैंकका गभर्नर महाप्रसाद अधिकारीले भने, "हामीले यस वर्ष ६% को आर्थिक वृद्धिदर हासिल गर्ने लक्ष्य राखेका छौं। साथै, मुद्रास्फीतिलाई ६% भित्र सीमित राख्ने योजना छ।"</p>
//       <p>नयाँ नीतिले कृषि र साना तथा मझौला उद्योगहरूलाई प्राथमिकता दिएको छ। यसबाट रोजगारी सिर्जना र आयात प्रतिस्थापनमा सहयोग पुग्ने अपेक्षा गरिएको छ।</p>
//     `,
//   },
//   "cricket-worldcup": {
//     title: "नेपाली क्रिकेट टोली विश्वकप छनोटमा",
//     date: "२०८० भदौ ३० गते, शनिबार",
//     author: "अनुप खड्का",
//     image: "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/politics/rabi-lamichhaneparliyamenthearing-2-1792024032301-1000x0.jpg&w=601&h=0",
//     content: `
//       <p>नेपाली राष्ट्रिय क्रिकेट टोलीले आईसीसी टी-२० विश्वकप २०२४ को छनोट चरणमा उत्कृष्ट प्रदर्शन गरेको छ। टोलीले लगातार तीन खेलमा जित हासिल गर्दै सेमिफाइनलमा प्रवेश गरेको छ।</p>
//       <p>कप्तान रोहित पौडेलले भने, "हामी यो सफलताबाट अत्यन्त उत्साहित छौं। टोलीको कडा मेहनत र एकताले यो सम्भव भएको हो।"</p>
//       <p>नेपालले अब सेमिफाइनलमा नेदरल्याण्ड्ससँग खेल्नेछ। यो खेल आगामी हप्ता हुनेछ र विजेता टोलीले विश्वकपमा स्थान सुरक्षित गर्नेछ।</p>
//     `,
//   },
// }

// export default function NewsArticle({ params }: { params: { id: string } }) {
//   const article = articles[params.id as keyof typeof articles]

//   if (!article) {
//     return <div>Article not found</div>
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">नीलोपाटी</h1>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-8 max-w-3xl">
//         <article className="space-y-6">
//           <h2 className="text-3xl md:text-5xl font-bold text-center">
//             {article.title}
//           </h2>

//           <div className="text-center text-muted-foreground">
//             <p>{article.date}</p>
//             <p>{article.author}</p>
//           </div>

//           <div className="flex justify-center space-x-4">
//             <Button size="sm" variant="outline">
//               <Facebook className="w-4 h-4 mr-2" />
//               Share
//             </Button>
//             <Button size="sm" variant="outline">
//               <Twitter className="w-4 h-4 mr-2" />
//               Tweet
//             </Button>
//             <Button size="sm" variant="outline">
//               <Linkedin className="w-4 h-4 mr-2" />
//               Share
//             </Button>
//           </div>

//           <Image
//             src={article.image}
//             alt={article.title}
//             width={800}
//             height={400}
//             className="w-full object-cover rounded-lg"
//           />

//           <p className="text-sm text-center text-muted-foreground">
//             तस्बिर: {article.title}
//           </p>

//           <div className="prose prose-lg mx-auto text-lg" dangerouslySetInnerHTML={{ __html: article.content }} />
//         </article>

//         <div className="mt-12 bg-muted p-6 rounded-lg text-center">
//           <p className="text-2xl font-bold text-muted-foreground">विज्ञापन स्थान</p>
//         </div>

//         <div className="mt-12 space-y-8">
//           <h3 className="text-2xl font-bold text-center">सम्बन्धित समाचारहरू</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {Object.values(articles).slice(0, 2).map((relatedArticle) => (
//               <div key={relatedArticle.title} className="space-y-4">
//                 <Image
//                   src={relatedArticle.image}
//                   alt={relatedArticle.title}
//                   width={300}
//                   height={200}
//                   className="w-full object-cover rounded-lg"
//                 />
//                 <h4 className="text-xl font-semibold">{relatedArticle.title}</h4>
//                 <p className="text-muted-foreground">{relatedArticle.content.split(' ').slice(0, 20).join(' ')}...</p>
//                 <Link href={`/news/${relatedArticle.title.toLowerCase().replace(/ /g, '-')}`} passHref>
//                   <Button variant="link">थप पढ्नुहोस्</Button>
//                 </Link>
//               </div>
//             ))}
//           </div>
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
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Facebook, Twitter, Linkedin } from "lucide-react";
// import { articles, getExcerpt } from "@/lib/articles";

// export default function NewsArticle({ params }: { params: { id: string } }) {
//   const article = articles[params.id as keyof typeof articles];

//   if (!article) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <h1 className="text-2xl font-bold">समाचार फेला परेन</h1>
//       </div>
//     );
//   }

//   const relatedArticles = Object.values(articles)
//     .filter((a) => a.id !== params.id)
//     .slice(0, 2);

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-center">
//             <Link href="/" className="hover:text-primary transition-colors">
//               नीलोपाटी
//             </Link>
//           </h1>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-8 max-w-3xl">
//         <article className="space-y-6">
//           <h2 className="text-3xl md:text-5xl font-bold text-center">
//             {article.title}
//           </h2>

//           <div className="text-center text-muted-foreground">
//             <p>{article.date}</p>
//             <p>{article.author}</p>
//           </div>

//           <div className="flex justify-center space-x-4">
//             <Button
//               size="sm"
//               variant="outline"
//               onClick={() =>
//                 window.open(
//                   `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//                     window.location.href
//                   )}`,
//                   "_blank"
//                 )
//               }
//             >
//               <Facebook className="w-4 h-4 mr-2" />
//               Share
//             </Button>
//             <Button
//               size="sm"
//               variant="outline"
//               onClick={() =>
//                 window.open(
//                   `https://twitter.com/intent/tweet?url=${encodeURIComponent(
//                     window.location.href
//                   )}&text=${encodeURIComponent(article.title)}`,
//                   "_blank"
//                 )
//               }
//             >
//               <Twitter className="w-4 h-4 mr-2" />
//               Tweet
//             </Button>
//             <Button
//               size="sm"
//               variant="outline"
//               onClick={() =>
//                 window.open(
//                   `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
//                     window.location.href
//                   )}&title=${encodeURIComponent(article.title)}`,
//                   "_blank"
//                 )
//               }
//             >
//               <Linkedin className="w-4 h-4 mr-2" />
//               Share
//             </Button>
//           </div>

//           <Image
//             src={article.image}
//             alt={article.title}
//             width={800}
//             height={400}
//             className="w-full object-cover rounded-lg"
//           />

//           <p className="text-sm text-center text-muted-foreground">
//             तस्बिर: {article.title}
//           </p>

//           <div
//             className="prose prose-lg mx-auto text-lg"
//             dangerouslySetInnerHTML={{ __html: article.content }}
//           />
//         </article>

//         <div className="mt-12 bg-muted p-6 rounded-lg text-center">
//           <p className="text-2xl font-bold text-muted-foreground">
//             विज्ञापन स्थान
//           </p>
//         </div>

//         <div className="mt-12 space-y-8">
//           <h3 className="text-2xl font-bold text-center">
//             सम्बन्धित समाचारहरू
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {relatedArticles.map((relatedArticle) => (
//               <div key={relatedArticle.id} className="space-y-4">
//                 <Image
//                   src={relatedArticle.image}
//                   alt={relatedArticle.title}
//                   width={300}
//                   height={200}
//                   className="w-full object-cover rounded-lg"
//                 />
//                 <h4 className="text-xl font-semibold">
//                   {relatedArticle.title}
//                 </h4>
//                 <p className="text-muted-foreground">
//                   {getExcerpt(relatedArticle.content)}
//                 </p>
//                 <Link href={`/news/${relatedArticle.id}`} passHref>
//                   <Button variant="link">थप पढ्नुहोस्</Button>
//                 </Link>
//               </div>
//             ))}
//           </div>
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

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { articles, getExcerpt } from "@/lib/articles";

export default function NewsArticle({ params }: { params: { id: string } }) {
  const article = articles[params.id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <h1 className="text-2xl font-bold">समाचार फेला परेन</h1>
      </div>
    );
  }

  const relatedArticles = Object.values(articles)
    .filter((a) => a.id !== params.id)           //params id is a id that we give in url.. like news/[id]
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center">
            <Link href="/" className="hover:text-primary transition-colors">
              नीलोपाटी
            </Link>
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <article className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            {article.title}
          </h2>

          <div className="text-center text-muted-foreground">
            <p>{article.date}</p>
            <p>{article.author}</p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`,
                  "_blank"
                )
              }
            >
              <Facebook className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    window.location.href
                  )}&text=${encodeURIComponent(article.title)}`,
                  "_blank"
                )
              }
            >
              <Twitter className="w-4 h-4 mr-2" />
              Tweet
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    window.location.href
                  )}&title=${encodeURIComponent(article.title)}`,
                  "_blank"
                )
              }
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={400}
            className="w-full object-cover rounded-lg"
          />

          <p className="text-sm text-center text-muted-foreground">
            तस्बिर: {article.title}
          </p>

          <div
            className="prose prose-lg mx-auto text-lg"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        <div className="mt-12 bg-muted p-6 rounded-lg text-center">
          <p className="text-2xl font-bold text-muted-foreground">
            विज्ञापन स्थान
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <h3 className="text-2xl font-bold text-center">
            सम्बन्धित समाचारहरू
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <div key={relatedArticle.id} className="space-y-4">
                <Image
                  src={relatedArticle.image}
                  alt={relatedArticle.title}
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-lg"
                />
                <h4 className="text-xl font-semibold">
                  {relatedArticle.title}
                </h4>
                <p className="text-muted-foreground">
                  {getExcerpt(relatedArticle.content)}
                </p>
                <Link href={`/pages/news/${relatedArticle.id}`}>
                  <Button variant="link">थप पढ्नुहोस्</Button>
                </Link>
              </div>
            ))}
          </div>
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