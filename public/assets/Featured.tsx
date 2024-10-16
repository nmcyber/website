import { motion } from 'framer-motion'

const infoItems = [
  { title: 'Location', content: 'Nairobi, Kenya' },
  { title: 'Team', content: '8 Coding Ninjas' },
  { title: 'Phone', content: '0724-123-4567', href: 'tel:0724-123-4567' },
  { title: 'Email', content: 'hello@itunza.co.ke', href: 'mailto:hello@itunza.co.ke' },
]

const statsItems = [
  { number: '20+', text: 'Years of Experience' },
  { number: '245', text: 'Happy Customers' },
  { number: '640', text: 'Projects Finished' },
  { number: '72+', text: 'Digital Awards' },
]

export default function Featured() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6">Information</h3>
            <div className="space-y-4">
              {infoItems.map((item, index) => (
                <p key={index} className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="font-medium text-gray-600">{item.title}</span>
                  {item.href ? (
                    <a href={item.href} className="text-blue-600 hover:underline">
                      {item.content}
                    </a>
                  ) : (
                    <span>{item.content}</span>
                  )}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {statsItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-3xl font-bold text-blue-600">{item.number}</span>
                  <p className="mt-2 text-gray-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}