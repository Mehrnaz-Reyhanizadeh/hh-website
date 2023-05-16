import Image from "next/image";
function InterestsDetails({ data }) {
  return (
    <>
      <div>
        <Image src={data.imageSrc} alt={data.imageAlt} width={data.width} />
        <h5 className="text-center mt-2">{data.firstTitle}</h5>
        <p className="text-center">{data.secendTitle}</p>
      </div>
    </>
  );
}

export default InterestsDetails;
