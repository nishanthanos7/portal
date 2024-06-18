
import Image from "next/image";

const Newsbody = ({ title, body, image }: any) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <br />
      <h2 className="text-6xl mb-4 text-center text-blue-500">{title}</h2>
      <h1> - Writer</h1>

      <div className="w-full flex justify-center">
        <div className="">
        <Image 
        className="rounded-lg"
          src={image}
          width={900}
          height={900}
          alt="Picture of the author"
        />

        </div>

        
       
      </div>

      <p className="text-justify mt-4 mx-80 tracking-normal font-medium ">
        {body}
      </p>
    </div>
  );
};

export default Newsbody;

// import React from "react";

// import Image from "next/image";

// const Newsbody = () => {
//   return (
//     <>
//       <div className="flex-col text-center items-center justify-center">
//         <h2 className="text-4xl">News Title</h2>
//         <div className="justify-center items-center">
//           <Image
//             className=""
//             src="https://insidethemagic.net/wp-content/uploads/2023/09/Johnny-Depp-Captain-Jack-Sparrow-Pirates-800x400.jpg"
//             width={500}
//             height={500}
//             alt="Picture of the author"
//           />
//         </div>

//         <p>
//           news Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
//           quam, voluptates ex voluptatem vel iure quae atque itaque illo ab
//           incidunt quidem facere aut error repudiandae obcaecati dolor,
//           assumenda molestiae iusto totam temporibus doloribus similique debitis
//           perspiciatis! Enim consectetur sint obcaecati repudiandae placeat
//           distinctio unde voluptate! Provident laborum iusto iste rerum,
//           assumenda sint, facilis, similique unde earum nihil possimus quisquam?
//           Voluptatibus et tempora reprehenderit, obcaecati quo excepturi quos
//           corporis inventore placeat accusamus facere? Repudiandae saepe minus
//           quod dolores corporis repellat. Asperiores, dolores voluptates.
//           Voluptatibus similique, quo voluptatum eaque nisi exercitationem
//           maiores at maxime nesciunt distinctio labore dignissimos consectetur
//           ratione repellat!
//         </p>
//       </div>
//     </>
//   );
// };

// export default Newsbody;
