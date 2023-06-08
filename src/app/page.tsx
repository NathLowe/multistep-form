"use client"

import PageTitle from '@/components/PageTitle'
import { useInfos } from '@/stores/infos';
import Image from 'next/image'
import { ChangeEvent, useState } from 'react';


// Types
interface FieldType {
  name: 'name'|'email'|'phone';
  label: string;
  placeholder: string;
}

interface InputParams {
  value:string,
  onChange: (e:ChangeEvent<HTMLInputElement>) => void,
  name: string,
  placeholder: string,
}


// Components
const Input = ({value,onChange,name,placeholder}:InputParams) => {
  return (
    <input type='text' placeholder={placeholder} value={value} name={name} id={name} onChange={onChange}
      className='transition w-full outline-confirm border border-muted rounded-md px-4 py-3 text-primary caret-primary placeholder:text-muted-dark ' />
  )
}


// Data
const fields:FieldType[] = [
  {
    name: 'name',
    label: 'Name',
    placeholder: "e.g. Stephen King",
  },
  {
    name: 'email',
    label: 'Email Adress',
    placeholder: "e.g. stephenking@lorem.com",
  },
  {
    name: 'phone',
    label: 'Phone Number',
    placeholder: "e.g. +1 234 567 890",
  },
]

export default function Home() {
  const {fieldsValue,setFieldsValue} = useInfos(state=>({
    fieldsValue: state.infos,
    setFieldsValue: state.setInfos,
  }))
  return (
    <>
      <PageTitle
        title="Personal info"
        sub="Please provide your name, email address, and phone number."
      />
      <form action="#">
        {fields.map(({name,label,placeholder}) => (
          <div key={name} className='my-4' >
            <label htmlFor={name} className='block font-medium text-primary mb-1'>
              {label}
            </label>
            <Input placeholder={placeholder} name={name} value={fieldsValue[name]} onChange={e=>setFieldsValue(name,e.target.value)} />
          </div>
        ))}
      </form>
    </>
  )
}
