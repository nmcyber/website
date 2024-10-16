"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import BackgroundArtwork from '@/components/shared/BackgroundArtwork'
import { ShieldCheck, Lock, Shield } from 'lucide-react'
import SignUpForm from './SignUpForm'

const Hero = () => {
  return (
    <section className=" flex flex-col justify-evenly min-h-[70dvh] md:pb-0 relative overflow-hidden outline-0 outline-orange-600">
      {/* pt-32 pb-0 md:pt-24  */}
      <div className="container h-[100%] relative z-20 mx-auto px-4 outline-0 outline-lime-600">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering You to<br />Thrive in and with<br />Cyber Security
            </h1>
            <p className="text-xl mb-8 text-foreground/80">
            At NMCyber, we pride in turning your workforce into cyber warriors. Our innovative approach to cybersecurity awareness and training doesn't just protect your data, it transforms your entire organisation
            </p>
            <div className="flex space-x-4">
              <Button className=' text-lg px-8 py-8 rounded-full bg-gradient-to-r from-[#045b7d] to-[#64cdf6] via-transparent '>Ask For A Demo</Button>
              <div className=" w-56 h-16 relative flex items-center justify-between overflow-hidden ">
                    <div className="bg-[#2ca8dc] rounded-tr-full rounded-br-full w-16 h-full absolute top-0 right-0 z-10 " />
                <Button className="w-full h-full rounded-full border border-[#2ca8dc] backdrop-blur-[8.40px] bg-white/5 flex items-center justify-between text-[#2ca8dc] text-xl font-semibold font-['Poppins'] leading-[14px] ">
                        Show More
                    {/* </div> */}
                </Button>
                </div>
            </div>
          </motion.div>
          <motion.div
            className=" flex md:w-1/2 items-centerr justify-center outline-0 outline-orange-600"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative ">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full filter blur-3xl" />
              {/* <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Cyber Security Visualization"
                className="rounded-lg shadow-2xl relative z-10"
              /> */}
              <SignUpForm />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {/* ARTWORK - BG-DECOR */}
      <BackgroundArtwork />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent">

      </div>
    </section>
  )
}

export default Hero