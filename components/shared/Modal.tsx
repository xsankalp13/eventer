import React, { startTransition, useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Input } from '../ui/input'

type ModalProps = {
    newCategory: string;
    setNewCategory: React.Dispatch<React.SetStateAction<string>>;
  }

const handleAddCategory = () => {}
const Modal = ({newCategory, setNewCategory}:ModalProps) => {

    return (
    <AlertDialog>
  <AlertDialogTrigger className='p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500' >Add Category</AlertDialogTrigger>
  <AlertDialogContent className='bg-white'>
    <AlertDialogHeader>
      <AlertDialogTitle>New Cayegory</AlertDialogTitle>
      <AlertDialogDescription>
        <Input placeholder="Category Name" className='input-field mt-3' type='text' onChange={(e) => setNewCategory(e.target.value) }/>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>Add</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default Modal