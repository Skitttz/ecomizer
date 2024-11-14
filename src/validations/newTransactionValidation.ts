import * as z from "zod";


export const newTransactionFormSchema = z.object({
  description: z.string().min(1,{message: 'Must be a valid description' }),
  price: z.number().min(1,{message: 'Must be a valid price' }),
  category: z.string().min(1,{message: 'This is required' }),
  type: z.enum(['income' , 'outcome']),
})

export type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;