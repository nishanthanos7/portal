import Image from "next/image";

const Trending = ({ image, title }) => {
  return (
    <>
      <div className="">
        <Image
          className="rounded-lg"
          src={image}
          alt=""
          width={200}
          height={200}
        />
        <h2 className="text-blue-600">{title}</h2>
      </div>
    </>
  );
};

export default Trending;
