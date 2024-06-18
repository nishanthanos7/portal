import Newsbody from "@/components/Newsbody";



const States = () => {
 

  const newsTitle: string = "this is title from prop";
  const newsBody: string = "this is news body";
  return (
    <>
      <Newsbody
        title={newsTitle}
        body={newsBody}
        image={
          "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg"
        }
      />
    </>
  );
};

export default States;
