import { z } from "zod";
const CategoryEnum = z.enum(["hotels", "apartments", "villas", "cabins", "ryokans"]);
const AmenitiesEnum = z.enum(["wifi", "gym", "pool", "breakfast"]);

  
export const serviceSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2),
    image: z.string().min(2),
    rooms: z.coerce.number(),
    price: z.coerce.number(),
    category: CategoryEnum,
    amenities: AmenitiesEnum,
  });



  








                