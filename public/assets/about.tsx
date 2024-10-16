import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="section_2" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/svg/orange_undraw_building_websites.svg"
              alt="Team building websites"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-end items-center mb-6">
              <h2 className="text-3xl font-bold mr-4">Our Story</h2>
              <Image
                src="/images/svg/itunza_sample_logo.svg"
                alt="Itunza Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-4">About Itunza Software Solutions</h3>

            <p className="text-lg text-gray-600 mb-6">
              At the heart of our service is a team of exceptionally skilled developers, each bringing a unique set of talents and expertise in various technology domains. Our team's commitment to innovation and excellence ensures that we consistently deliver cutting-edge software solutions tailored to meet the specific needs of our clients.
            </p>

            <p className="text-lg text-gray-600">
              With years of experience in the industry, we've honed our skills to provide top-notch web development, mobile applications, and custom software solutions. Our passion for technology and problem-solving drives us to stay ahead of the curve, implementing the latest trends and best practices in every project we undertake.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}