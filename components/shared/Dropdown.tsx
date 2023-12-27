import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import { ICategory } from '@/lib/database/models/category.model'
import Modal from './Modal'
type DropdownProps = {
    value?: string,
    onChangeHandler?: () => void
    
}

const Dropdown = ({value, onChangeHandler} : DropdownProps) => {
    const [newCategory, setNewCategory] = useState<string>('');
    const [categories, setCategories] = useState<ICategory[]>([]);
  return (
    <Select>
        <SelectTrigger className="select-field">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
            {categories.length > 0 && categories.map((category) => (
                <SelectItem key={category._id} value={category._id} className='select-item p-regular-14'>
                    {category.name}
                </SelectItem>
            ))}
            <Modal newCategory={newCategory} setNewCategory={setNewCategory}/>
        </SelectContent>
    </Select>

  )
}

export default Dropdown