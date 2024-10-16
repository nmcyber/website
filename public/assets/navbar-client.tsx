'use client'

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const iconComponents = {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
}

interface NavbarClientProps {
  navItems: Array<{ href: string; label: string }>
  services: Array<{ name: string; description: string }>
  socialIcons: Array<{ name: string; href: string }>
}

export default function NavbarClient({ navItems, services, socialIcons }: NavbarClientProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="ml-4 md:hidden">
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </motion.svg>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <motion.nav
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className="block px-2 py-1 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services">
              <AccordionTrigger className="text-lg">
                Our Services
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </motion.li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-4 flex justify-center space-x-4">
            {socialIcons.map(({ name, href }, index) => {
              const IconComponent = iconComponents[name as keyof typeof iconComponents]
              return (
                <motion.a
                  key={index}
                  href={href}
                  className="text-muted-foreground hover:text-primary"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconComponent size={24} />
                </motion.a>
              )
            })}
          </div>
        </motion.nav>
      </SheetContent>
    </Sheet>
  )
}