import { z } from "zod";
const CategoryEnum = z.enum(["hotels", "apartments", "villas", "cabins", "ryokans"]);

export const serviceSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2),
    image: z.string(),
    rooms: z.coerce.number(),
    price: z.coerce.number(),
    location: z.string().min(2).max(50),
    category: CategoryEnum,
    amenities: z.array(z.string().min(1).max(15)).min(1).max(20),
  });



  








                