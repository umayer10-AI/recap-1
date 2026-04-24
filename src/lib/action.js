"use server"

import { revalidatePath } from "next/cache"
import { postTask } from "./cart"

export const createTask = async (formData) => {

    const newTask = Object.fromEntries(formData.entries())
    console.log(newTask)

    const res = await postTask(newTask)
    if(res.ok){
        revalidatePath('/about')
    }
    return res
}