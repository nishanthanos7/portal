import Dropdown from "@/components/Dropdown";
import Navbar from "@/components/Navbar";
import Newsbody from "@/components/Newsbody";
import Trending from "@/components/Trending";
import Link from "next/link";

export default function Home() {
  const time = new Date();

  const currentTime = time.toDateString();

  console.log(currentTime);

  const newsBody = `मिस ब्युनस आयर्स २०२४ को उपाधि जितेपछि आफू निकै रोमाञ्चित भएको उनले बताएकी छिन्
  
  । सुन्दरताको कुनै उमेर नहुने अनि अवरोधहरू तोड्न सक्छौं भनेर सबै महिलालाई देखाउन चाहेको रोद्रिगजले स्टेजमा भनेकी थिइन् ।
   आफूले महिला सशक्तीकरणको कुनै सीमा नभएको देखाउने चाहेको पनि उनले बताइन् । यो विवादमा सात थान मुद्दा रहेका छन् । जोशीसँग
    जोडिएका उनीहरुले पनि विशेष अदालतको फैसला चित्त नबुझाउँदै दायर भएका मुद्दा विचाराधीन छन् । २०६९ फागुन ६ गते सर्वोच्चमा जोशी विरुद्ध 
    नेपाल सरकारले दर्ता गराएको निवेदनसहित उनले पनि दायर गरेको पुनरावेदन पेश भएको थियो । 
   भ्रष्टाचार मुद्दामध्ये  यो भिआईपी प्रतिवादी भएको र पुरानो मध्येको एउटा मुद्दा हो । ५ वैशाख, काठमाडौं । नेपाल प्रहरीका चार प्रहरी वरिष्ठ उपरीक्षक (एसएसपी)हरु प्रहरी
    नायव महानिरीक्षक (डीआईजी) बढुवाका लागि सिफारिस भएका छन् । बढुवा सिफारिस समितिले शुक्रबार राति चार एसएसपीलाई डीआईजी बढुवाका लागि सिफारिस गरेको हो ।

   सिफारिस सूचीअनुसार पहिलो नम्बरमा त्रिभुवन अन्तर्राष्ट्रिय विमानस्थल कार्यालयमा
    कार्यरत कृष्णहरि शर्मा पोखरेल पहिलो नम्बरमा सिफारिस भएका छन् । दोस्रो नम्बरमा प्रहरीको महानिरीक्षकको सचिवालयमा कार्यरत एसएसपी दानबहादुर कार्की सिफारिस भएका छन् । `;
  const newsTitle = `मिस ब्युनस आयर्स`;
  const imageUrl =
    "https://cdn.pixabay.com/photo/2017/05/30/10/52/saint-2356564_1280.jpg";

  return (
    <main>
      {/* <Navbar /> */}

      <p className="flex content-end justify-end">{currentTime}</p>

      <span className="text-3xl text-blue-600">Trending news</span>
      <br />

      <hr />
      <br />

      <div className="flex items-center justify-evenly">
        <Trending
          title="hello, this is trending title"
          image={
            "https://cdn.pixabay.com/photo/2024/01/14/12/30/baseball-8507868_960_720.jpg"
          }
        />

        <Trending
          title="hello, this is  trending title"
          image={
            "https://cdn.pixabay.com/photo/2024/01/14/12/30/baseball-8507868_960_720.jpg"
          }
        />

        <Trending
          title="hello, this is  trending title"
          image={
            "https://cdn.pixabay.com/photo/2024/01/14/12/30/baseball-8507868_960_720.jpg"
          }
        />

        <Trending
          title="hello, this is  trending title"
          image={
            "https://cdn.pixabay.com/photo/2024/01/14/12/30/baseball-8507868_960_720.jpg"
          }
        />

        <Trending
          title="hello, this is  trending title"
          image={
            "https://cdn.pixabay.com/photo/2024/01/14/12/30/baseball-8507868_960_720.jpg"
          }
        />
      </div>

      <br />
      <br />

      <hr />

      <div className=" text-2xl font-medium">
        <Newsbody title={newsTitle} body={newsBody} image={imageUrl} />
      </div>
    </main>
  );
}
