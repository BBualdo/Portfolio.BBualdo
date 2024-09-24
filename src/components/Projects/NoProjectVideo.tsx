import Image from "next/image";

const NoProjectVideo = ({techLogoPath}:{techLogoPath:string}) => {

  const formatTechLogoPath = ():string => {
    if (techLogoPath.includes("C#")) return "/icons/CS.svg";
    if (techLogoPath.includes("Azure")) return "/icons/Azure.svg";
    return techLogoPath;
  }

  return (
    <div className="flex flex-col gap-2 items-center flex-1 justify-center xs:max-lg:border-b-2 lg:border-r-2 border-white p-4">
      <Image src={formatTechLogoPath()} alt="" width={50} height={50} className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]" />
      <p className="font-bold text-base lg:text-lg text-white uppercase">Video coming soon</p>
    </div>
  );
};

export default NoProjectVideo;