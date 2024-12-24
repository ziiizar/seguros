import { axiosInstance } from "@/lib/utils"

export const fetchFormById = async (form_id: string) => {
    const form = await axiosInstance.get(`forms/${form_id}`)
    return form.data

  }
export const fetchForms = async () => {
    const form = await axiosInstance.get(`forms`)
    return form.data

  }
