import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";

export default function Home() {
  return (
    <div id="hero" className="relative min-h-screen">
      <div className=" grid grid-cols-2">
        <div className="bg-blue-950 min-h-screen" />
        <div />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 ">
        <div className="flex justify-center items-center h-full">
          <div className="text-9xl font-black space-y-2">
            <h1 className="flex flex-col text-white border-4 ">
              <span>
                HE
                <span className="bg-white text-sm pt-20">........................................</span>
              </span>
              <span className="flex items-end">
                <span>LLO</span>
                <RxDotFilled
                  viewBox="5 -3 20 10"
                  width={128}
                  height={128}
                  className="text-blue-950"
                />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
