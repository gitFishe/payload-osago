import type {FieldHook} from "payload";
import {slugify} from "payload/shared";

export const generateSlugHook: FieldHook = ({ value, data, originalDoc }) => {
    // Якщо slug ввели руками — залишаємо
    if (typeof value === 'string' && value.trim()) return slugify(value.trim()) || ''

    // Інакше беремо title (під час редагування інколи зручно мати fallback на originalDoc)
    const title = (data?.title ?? originalDoc?.title ?? '').toString().trim()
    return slugify(title) || ''
}
