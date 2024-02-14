"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { serviceSchema } from "@/lib/validations";
import { useState } from "react";
import { createService } from "@/lib/actions/service.action";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  mongoUserId: string
}

const Page = ({ mongoUserId } : Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pathname = usePathname()
  const router = useRouter()
  // 1. Define your form.
  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      rooms: 0,
      price: 0,
      category: "hotels",
      amenities: "gym",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof serviceSchema>) {
    setIsSubmitting(true);
    try {
      await createService({
        title: values.title,
        description: values.description,
        image: values.image,
        author: JSON.parse(mongoUserId),
        price: values.price,
        category: values.category,
        amenities: values.amenities,
        path: pathname
      });
      router.push('/')
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-x-8 md:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel className="px-2 py-6 text-gray-400">Title</FormLabel>
              <FormControl className="relative">
                <Input
                  {...field}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormControl>
              <FormDescription className="text-xs">Add your service name</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel className=" px-2 py-6 text-gray-400">Description</FormLabel>
              <FormControl className="relative">
                <Input
                  {...field}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormControl>
              <FormDescription className="text-xs">
                Add a nice description to your service
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel className=" px-2 py-6 text-gray-400">
                Pictures
              </FormLabel>
              <FormControl className="relative">
                <Input
                  {...field}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rooms"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel className=" px-2 py-6 text-gray-400">
                Rooms Number
              </FormLabel>
              <FormControl className="relative">
                <Input
                  type="number"
                  {...field}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormControl>
              <FormDescription className="text-xs">
                How much your service have rooms ?
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel className="px-2 py-6 text-gray-400">Price</FormLabel>
              <FormControl className="relative">
                <Input
                  type="number"
                  {...field}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormControl>
              <FormDescription className="text-xs">Add a price to your service</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel className="px-2 py-6 text-gray-400">
                Category
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full rounded border border-gray-300 p-2">
                  <SelectValue>
                    <SelectValue placeholder="Select Category" />
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hotels">Hotels</SelectItem>
                  <SelectItem value="apartments">Apartments</SelectItem>
                  <SelectItem value="villas">Villas</SelectItem>
                  <SelectItem value="cabins">Cabins</SelectItem>
                  <SelectItem value="ryokans">Ryokans</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription className="text-xs">
                Which category is your service ?
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amenities"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel className="px-2 py-6 text-gray-400">
                Amenities
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full rounded border border-gray-300 p-2">
                  <SelectValue>
                    <SelectValue placeholder="Select Amenities" />
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wifi">WI-FI</SelectItem>
                  <SelectItem value="gym">GYM</SelectItem>
                  <SelectItem value="pool">POOL</SelectItem>
                  <SelectItem value="breakfast">Break Fast</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription className="text-xs">Wi-Fi, GYM, POOL</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="my-2 bg-blue-800" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default Page;
