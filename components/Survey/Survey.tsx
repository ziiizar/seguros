'use client'

import { useState } from 'react'
import Image from "next/image"
import { FormFields, Field } from "@/types/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DynamicSurveyFormProps {
  form: FormFields
  backgroundImage: string
}

const DynamicSurveyForm: React.FC<DynamicSurveyFormProps> = ({ form, backgroundImage }) => {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleInputChange = (id: string, value: string) => {
    setFormData(prevData => ({ ...prevData, [id]: value }))
  }

  const renderField = (field: Field) => {
    switch (field.type) {
      case 'short_text':
      case 'email':
      case 'website':
        return (
          <Input
            type={field.type === 'email' ? 'email' : 'text'}
            id={field.ref}
            name={field.ref}
            placeholder={field.properties.description || `Enter ${field.title}...`}
            value={formData[field.ref] || ''}
            onChange={(e) => handleInputChange(field.ref, e.target.value)}
            className="w-full"
          />
        )
      case 'long_text':
        return (
          <Textarea
            id={field.ref}
            name={field.ref}
            placeholder={field.properties.description || `Enter ${field.title}...`}
            value={formData[field.ref] || ''}
            onChange={(e) => handleInputChange(field.ref, e.target.value)}
            className="w-full"
          />
        )
      case 'number':
        return (
          <Input
            type="number"
            id={field.ref}
            name={field.ref}
            placeholder={field.properties.description || `Enter ${field.title}...`}
            value={formData[field.ref] || ''}
            onChange={(e) => handleInputChange(field.ref, e.target.value)}
            min={field.validations?.min_value}
            max={field.validations?.max_value}
            className="w-full"
          />
        )
      case 'date':
        return (
          <Input
            type="date"
            id={field.ref}
            name={field.ref}
            value={formData[field.ref] || ''}
            onChange={(e) => handleInputChange(field.ref, e.target.value)}
            className="w-full"
          />
        )
      case 'yes_no':
        return (
          <RadioGroup
            onValueChange={(value) => handleInputChange(field.ref, value)}
            value={formData[field.ref]}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id={`${field.ref}-yes`} />
              <Label htmlFor={`${field.ref}-yes`}>Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id={`${field.ref}-no`} />
              <Label htmlFor={`${field.ref}-no`}>No</Label>
            </div>
          </RadioGroup>
        )
      default:
        return null
    }
  }

  return (
    <main className="w-screen h-screen flex">
      <div className="w-[40%] h-full relative">
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className="w-[60%] flex place-content-center items-center">
        <article className="w-full max-w-2xl p-8">
          <h1 className="text-3xl font-bold mb-6">{form.title}</h1>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {form.fields.map((field: Field) => (
              <div key={field.ref} className="space-y-2">
                <Label htmlFor={field.ref} className="text-lg font-medium">
                  {field.title}
                </Label>
                {renderField(field)}
              </div>
            ))}
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </article>
      </div>
    </main>
  )
}

export default DynamicSurveyForm

