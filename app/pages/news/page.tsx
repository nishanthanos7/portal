// import AdBanner from "@/components/AdBanner";
// import Newsbody from "@/components/Newsbody";

// const News = () => {
//   const title = `दुई ब्याच उछिनेर डीआईजी बढुवा, राष्ट्रिय अनुसन्धानबाट आाएको टोली नै छुट्यो`;
//   const body = `यस पटक तीन फरक–फरक मितिमा एसएसपीमा बढुवा भएका चार ब्याचीहरुबीच डीआईजी बढुवाका लागि प्रतिस्पर्धा भएको थियो ।

//   जसमा २०५१, २०५२, २०५३ र २०५४ मा प्रहरी निरीक्षक (इन्सपेक्टर) मा भर्ना भएका चार ब्याचका करिब ३ दर्जन एसएसपीहरु प्रतिस्पर्धामा थिए । जसमा २०५२ मा इन्पेक्टर भएका शर्मासँगै २०५४ को टोलीका कार्की, केसी र अधिकारी बढुवाका लागि सिफारिसमा परेका छन् ।

//   २०५१ र २०५३ को टोली भने बढुवामा छुटेको छ । अझ यो बढुवामा २०५३ सालमा इन्सपेक्टरमा भर्ना भएकाहरु छुटेकाले उनीहरु भावि आईजीको प्रतिस्पर्धाबाट अहिलेकै अवस्थामा आउट भएका छन् ।

//   ज्सकारण २०५३ मा इन्सपेक्टर भएका एसएसपीहरु आफूहरु बढुवा नभए पनि कुनै पनि हालतमा २०५४ को टोलीलाई बढुवा गर्न नहुने लबिइङमा थिए । तर, उपप्रधान एवं गृहमन्त्री रवि लामिछानेको निर्देशनपछि बढुवा सिफारिस समितिले २०५४ को टोलीका कार्की, केसी र अधिकारीलाई बढुवाका लागि सिफारिस गरेको हो । कार्की र केसी भुटानी शरणार्थी
//    प्रकरणको अनुसन्धान गरेका अधिकृत हुन् । उनीहरुसँगै बढुवा भएका २०५४ कै टोलीका अधिकारी पनि राम्रो अफिसरमा पर्छन् ।`;
//   return (
//     <>
//       <div className="text-2xl font-medium">
//         <Newsbody
//           title={title}
//           body={body}
//           image="https://cdn.pixabay.com/photo/2018/01/19/11/48/saint-coloman-3092260_1280.jpg"
//         />
//       </div>
//       <div className="absolute top-96 right-0 ">
//         <AdBanner />
//       </div>
//       <div className="absolute top-96 left-0 ">
//         <AdBanner />
//       </div>
//       <div className="absolute top-">
//         <AdBanner />
//       </div>
//     </>
//   );
// };

// export default News;

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function NewsArticle() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center">नीलोपाटी</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <article className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            नेसनल टी कन्सर्टमा प्रधानमन्त्री ओली
          </h2>

          <div className="text-center text-muted-foreground">
            <p>२०८० असोज ३ गते, मंगलबार</p>
            <p>रमेश पौडेल</p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button size="sm" variant="outline">
              <Facebook className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button size="sm" variant="outline">
              <Twitter className="w-4 h-4 mr-2" />
              Tweet
            </Button>
            <Button size="sm" variant="outline">
              <Linkedin className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="प्रधानमन्त्री ओली कन्सर्टमा"
            width={800}
            height={400}
            className="w-full object-cover rounded-lg"
          />

          <p className="text-sm text-center text-muted-foreground">
            तस्बिर: प्रधानमन्त्री केपी शर्मा ओली नेसनल टी कन्सर्टमा सहभागी हुँदै
          </p>

          <div className="prose prose-lg mx-auto text-lg ">
            <p>
              काठमाडौं — गएराति नेसनल टी कन्सर्ट २०२४ को अवसरमा प्रधानमन्त्री
              केपी शर्मा ओली आश्चर्यजनक रूपमा उपस्थित भएका छन्। यो कार्यक्रम
              नेपाली चिया उद्योगको प्रवर्द्धन र विकासको लागि आयोजना गरिएको थियो।
            </p>
            <p>
              प्रधानमन्त्री ओलीले आफ्नो सम्बोधनमा नेपाली चियाको महत्व र यसको
              अन्तर्राष्ट्रिय बजारमा पुर्‍याउन सकिने योगदानको बारेमा जोड दिए।
              उनले भने,
            </p>
            <p>
              कार्यक्रममा विभिन्न चिया उत्पादक कम्पनीहरूले आफ्ना उत्पादनहरू
              प्रदर्शन गरेका थिए। साथै, चिया उद्योगसँग सम्बन्धित विभिन्न
              कार्यशाला र प्यानल छलफलहरू पनि आयोजना गरिएका थिए।
            </p>
            <p>
              यो कार्यक्रमले नेपाली चिया उद्योगको विकास र प्रवर्द्धनमा
              महत्त्वपूर्ण भूमिका खेल्ने आशा गरिएको छ। प्रधानमन्त्रीको
              उपस्थितिले यस क्षेत्रप्रति सरकारको प्रतिबद्धता देखाएको छ।
            </p>
          </div>
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
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="चिया निर्यात बढ्यो"
                width={300}
                height={200}
                className="w-full object-cover rounded-lg"
              />
              <h4 className="text-xl font-semibold">
                नेपाली चियाको निर्यात २०% ले बढ्यो
              </h4>
              <p className="text-muted-foreground">
                गत वर्षको तुलनामा यस वर्ष नेपाली चियाको निर्यातमा उल्लेखनीय
                वृद्धि भएको छ।
              </p>
              <Button variant="link">थप पढ्नुहोस्</Button>
            </div>
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="नयाँ चिया प्रजाति"
                width={300}
                height={200}
                className="w-full object-cover rounded-lg"
              />
              <h4 className="text-xl font-semibold">
                इलाममा नयाँ चिया प्रजातिको खोज
              </h4>
              <p className="text-muted-foreground">
                इलामका वैज्ञानिकहरूले नयाँ र उच्च गुणस्तरको चिया प्रजाति पत्ता
                लगाएका छन्।
              </p>
              <Button variant="link">थप पढ्नुहोस्</Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          © २०२३ कान्तिपुर। सर्वाधिकार सुरक्षित।
        </div>
      </footer>
    </div>
  );
}
