import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex-auto z-0   ">
      {/* w-full h-full */}
    {/* <!-- SVG Background positioned at the top right --> */}
   
    {/* <!-- Content --> */}
    {/* <div className="absolute z-30 inset-0 grid grid-cols-2 container items-center justify-center h-full outline outline-2 outline-fuchsia-800 text-white">
      <div>
        <h1 className="text-5xl font-bold">Empowering You to Thrive in and with Cybersecurity</h1>
        <p className="mt-4 text-2xl">Discover. Transform. Thrive.</p>
      </div>
      <div>Shield</div>
    </div> */}
    <Hero />
</section>

  )
}
