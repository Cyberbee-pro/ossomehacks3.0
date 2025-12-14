import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="font-poppins text-textColor space-y-2">
        <p className="font-light text-yellow">Light (300)</p>
        <p className="font-normal text-text">Regular (400)</p>
        <p className="font-medium text-navy">Medium (500)</p>
        <p className="font-semibold text-black-custom">Semi Bold (600)</p>
        <p className="font-bold text-green-custom">Bold (700)</p>
      </div>
    </>
  );
}
