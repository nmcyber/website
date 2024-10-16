'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[rgba(255, 255, 255, 0.08)] bg-opacity-10 p-8 rounded-2xl border border-[#61c9f2] backdrop-filter isolatee backdrop-blur-[8px] max-w-lg w-full outline-0 outline-red-400"
    >
      <h3 className="text-3xl font-semibold text-white mb-6">Create a free account to start exploring the platform</h3>
      <div className="w-24 h-1 bg-[#2aa9df] mb-8" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" relative space-y-0 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="name@email.com" {...field} className="bg-[#456377] bg-opacity-25 focus:bg-opacity-25 text-white placeholder-white placeholder-opacity-60 border-[#126b8e] rounded-full py-8 px-8" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className=" absolute inset-y-2 right-2 w-52 cursor-pointer bg-gradient-to-r from-[#62cbf4] to-[#085f81] text-white rounded-full py-6 font-semibold hover:opacity-90 transition-opacity ">
            Create a free account
          </Button>
        </form>
      </Form>
      <div className="mt-8 text-center">
        <p className="text-[#a8b1b5] mb-4">Or Continue with</p>
        <div className="flex justify-center space-x-4">
          {['Google', 'Apple ID', 'Microsoft'].map((provider) => (
            <button key={provider} className="bg-white bg-opacity-10 text-white px-6 py-3 rounded-full hover:bg-opacity-20 transition-colors">
              {provider}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-between text-sm">
        <a href="#" className="text-[#2ca8dc] hover:underline">Sign In</a>
        <a href="#" className="text-white hover:underline">View All SSO options</a>
      </div>
    </motion.div>
  );
};

export default SignUpForm;