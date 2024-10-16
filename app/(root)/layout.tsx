import React from "react";
import Navbar from "@/components/navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" relative ">
        {/* background-background */}
      <Navbar />
        <section className="flex min-w-[100vw] flex-1 flex-col px-0 mx-0 max-md:pb-0 sm:px-0 relative z-0 ">
          {/* min-h-[90dvh] */}
        {/* <h1 className=" absolute top-[40%] left-5 z-1 text-orange-500 text-4xl">Home - NMCyber</h1> */}
            {children}
        </section>
    </main>
  );
};

export default Layout;