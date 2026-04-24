"use server"

import { revalidatePath } from "next/cache"
import { postTask } from "./cart"
import { redirect } from "next/navigation"

export const createTask = async (formData) => {

    const newTask = Object.fromEntries(formData.entries())
    console.log(newTask)

    const res = await postTask(newTask)
    if(res.ok){
        revalidatePath('/about')
    }
    return res
}

export const lastTask = async (formData) => {

    const newTask = Object.fromEntries(formData.entries())
    console.log(newTask)

    const res = await postTask(newTask)
    if(res.ok){
        revalidatePath('/about')
        redirect('/about')
    }
    return res
}