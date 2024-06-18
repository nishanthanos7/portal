"use client"

import Newsbody from "@/components/Newsbody";

import useStore from "@/components/store";

const Interview = () => {
  const { isLogin }: any = useStore();
  console.log("the user login is  :", isLogin);

  const newsTitle =
    "पञ्जाब र बैंगलुरु भिड्दै : हार्ने टोलीको प्लेअफ खेल्ने सम्भावना समाप्त";
  const newsBody: string = ` पञ्जाब र बैंगलुरबिच अहिलेसम्म ३२ वटा आईपीएल खेल भएका छन् ।
   १७ मा पञ्जाब र १५ मा बैंगलुरु विजयी पञ्जाबका लागि शशांक सिंह, जोनी बेयरस्टो र प्रभसिमरन सिंह राम्रो लयमा छन् । 
   तीनै जनाले २५० भन्दा बढी रन बनाएका छन् । टोलीका लागि शशांक सिंहले सर्वाधिक ३१५ रन बनाएका छन् । बलिङमा हर्षल पटेल शीर्ष स्थानमा छन् ।
    उनले ११ खेलमा १७ विकेट लिएका छन् ।भएको छ । दुवै टोली धर्मशालामा एकपटक
   मात्र भिडेका छन् ।  सन् २०११ मा भएको खेलमा पञ्जाब १ सय ११ रनले विजयी भएको थियो। `;
  return (
    <>
      <div className=" text-2xl font-medium ">
        <Newsbody
          title={newsTitle}
          body={newsBody}
          image={
            "https://cdn.pixabay.com/photo/2023/06/16/21/13/landscape-8068793_1280.jpg"
          }
        />
      </div>
    </>
  );
};

export default Interview;
