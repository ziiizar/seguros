'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { FormFields, Field } from "@/types/form"
import CreateLeadForm from '@/components/Lead/CreateLeadForm'
interface SurveyFormProps {
  form: FormFields
}
const SurveyForm: React.FC<SurveyFormProps> = ({ form }) => {

  console.log(form)

  const [step, setStep] = useState(1)
  const [isLoadingStep, setIsLoadingStep] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [progress, setProgress] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  useEffect(() => {
    setProgress(((step - 1) / form.fields.length) * 100)
  }, [step, form.fields.length])
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoadingStep(true)
    setStep(form.fields.length + 1)
    setTimeout(() => {
      setIsLoadingStep(false)
    }, 1000)
  }
  const handleFinalSubmit = () => {
    console.log('Form submitted:', answers)
    setShowThanks(true)
  }
  const [[page, direction], setPage] = useState([0, 0])
  const paginate = (newDirection: number) => {
    if (step + newDirection > 0 && step + newDirection <= form.fields.length + 2) {
      setPage([page + newDirection, newDirection])
      setStep(step + newDirection)
    }
  }
  const renderField = (field: Field) => {
    switch (field.type) {
      case 'short_text':
      case 'email':
      case 'website':
        return (
          <Input
            type={field.type === 'email' ? 'email' : 'text'}
            placeholder={field.properties.description || `Enter ${field.title}...`}
            value={answers[field.ref] || ''}
            onChange={(e) => setAnswers({ ...answers, [field.ref]: e.target.value })}
            className="text-lg py-6"
          />
        )
      case 'long_text':
        return (
          <Textarea
            placeholder={field.properties.description || `Enter ${field.title}...`}
            value={answers[field.ref] || ''}
            onChange={(e) => setAnswers({ ...answers, [field.ref]: e.target.value })}
            className="text-lg py-6"
          />
        )
      case 'number':
        return (
          <Input
            type="number"
            placeholder={field.properties.description || `Enter ${field.title}...`}
            value={answers[field.ref] || ''}
            onChange={(e) => setAnswers({ ...answers, [field.ref]: e.target.value })}
            min={field.validations?.min_value}
            max={field.validations?.max_value}
            className="text-lg py-6"
          />
        )
      case 'yes_no':
        return (
          <RadioGroup
            value={answers[field.ref]}
            onValueChange={(value) => setAnswers({ ...answers, [field.ref]: value })}
            className="space-y-4"
          >
            <Label className="flex items-center space-x-3 p-4 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer">
              <RadioGroupItem value="yes" />
              <span className="text-lg">Yes</span>
            </Label>
            <Label className="flex items-center space-x-3 p-4 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer">
              <RadioGroupItem value="no" />
              <span className="text-lg">No</span>
            </Label>
          </RadioGroup>
        )
        case 'date':
          return (
            <input value={answers[field.ref] || Date.now()}
            onChange={(e) => setAnswers({ ...answers, [field.ref]: e.target.value })} type="date" />
          )
      default:
        return null
    }
  }
  return (
    
      <div className="w-full h-full flex place-content-center items-center">
        <Card className="lg:w-[500px] w-[350px] h-[450px]  shadow-lg bg-white/95 backdrop-blur border-turquoise-blue-100 transition-all duration-300 hover:shadow-xl">
          <CardHeader className="text-center p-4  ">
            <CardTitle className="text-3xl font-bold  text-salmon-600">
              {form.title}
            </CardTitle>
            <CardDescription className="text-lg text-granny-smith-600">
              {form.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 min-h-[320px] flex flex-col">
            {step <= form.fields.length && (
              <div className="mb-4">
                <Progress 
                  value={progress} 
                  className="h-2 " 
                  
                />
              </div>
            )}
            <form onSubmit={(e) => e.preventDefault()} className="flex-1">
              <AnimatePresence mode="wait" custom={direction}>
                {step <= form.fields.length && (
                  <motion.div
                    key={`step${step}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-medium text-black">
                      {form.fields[step - 1].title}
                    </h3>
                    <div className="transition-all duration-300 hover:translate-y-[-2px]">
                      {renderField(form.fields[step - 1])}
                    </div>
                  </motion.div>
                )}
                {step === form.fields.length + 1 && (
                  <motion.div
                    key="step4"
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="flex-1"
                  >
                    {isLoadingStep ? (
                      <div className="flex justify-center items-center h-40">
                        <Loader2 className="w-8 h-8 animate-spin text-salmon-600" />
                      </div>
                    ) : (
                      <CreateLeadForm></CreateLeadForm>
                    )}
                  </motion.div>
                )}
                {step === form.fields.length + 2 && showThanks && (
                  <motion.div
                    key="step5"
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="space-y-6 text-center py-12"
                  >
                    <h3 className="text-2xl font-medium text-turquoise-blue-700">
                      Thank you for your submission!
                    </h3>
                    <p className="text-lg text-granny-smith-600">
                      We will be in touch with you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </CardContent>
          <CardFooter className="px-8 pb-8 border-t border-turquoise-blue-100 mt-auto">
            <div className="w-full flex justify-between items-center gap-4">
              {step < form.fields.length + 2 && (
                <>
                  {step > 1 && step !== form.fields.length + 1 && (
                    <Button
                      variant="outline"
                      onClick={() => paginate(-1)}
                      className="text-lg px-8 py-6 border-turquoise-blue-200 hover:bg-turquoise-blue-50 hover:text-turquoise-blue-700 transition-colors"
                    >
                      Back
                    </Button>
                  )}
                  {step < form.fields.length ? (
                    <Button
                      className="text-lg px-8 py-6 bg-salmon-600 hover:bg-salmon-700 transition-colors ml-auto"
                      onClick={() => paginate(1)}
                      disabled={!answers[form.fields[step - 1].ref]}
                    >
                      Next
                    </Button>
                  ) : step === form.fields.length ? (
                    <Button
                      className="text-lg px-8 py-6 bg-salmon-600 hover:bg-salmon-700 transition-colors ml-auto"
                      onClick={handleNext}
                      disabled={!answers[form.fields[step - 1].ref]}
                    >
                      Submit
                    </Button>
                  ) : null}
                </>
              )}
              {step === form.fields.length + 1 && !showThanks && (
                <Button
                  className="w-full text-lg py-6 bg-salmon-600 hover:bg-salmon-700 transition-colors"
                  onClick={handleFinalSubmit}
                  disabled={!answers.name || !answers.email}
                >
                  Finish
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
  )
}
export default SurveyForm