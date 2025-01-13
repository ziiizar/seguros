"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Loader2, ShieldCheck, ChevronRightIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { FormFields } from "@/types/form";
import CreateLeadForm from "@/components/Lead/CreateLeadForm";
import { cn } from "@/lib/utils";
import { inter } from "@/styles/fonts";
import renderField from "@/services/RenderFormField";
import SurveyCard from "./SurveyCard";
import ThankYouCard from "./ThankYouCard";

interface SurveyFormProps {
  form: FormFields;
}


const STEPTYPES = {
  survey : "SURVEY",
  loading: "LOADING",
  potentialFit: "POTENTIALFIT",
  contact: "CONTACT",
  thanks: "THANKS",
}

interface PotentialFitCardProps {
  callback: ()=> void;
}

const PotentialFitCard : React.FC<PotentialFitCardProps>= ({
  callback: action
}) => {
  return (
    <SurveyCard className="min-h-[300px] "
      title="Great! You are a potential fit."
      description="Just one final step"
      onCancel={() => console.log("Cancelled")}
      onAccept={action}
    >
      <h3>
        Please provide your contact information so we can get in touch with you.
      </h3>
    </SurveyCard>
  );
};

const SurveyForm: React.FC<SurveyFormProps> = ({ form }) => {

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [stepTypeToRender, setStepTypeToRender] = useState(STEPTYPES.survey)

  console.log(form);
  useEffect(() => {
    setProgress(((step - 1) / form.fields.length) * 100);
  }, [step, form.fields.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };
  
  
  const paginate = (newDirection: number) => {
    if (step + newDirection > 0 && step + newDirection <= form.fields.length) {
      return setStep(step + newDirection);
    }
    if (step + newDirection > form.fields.length) {
      setStepTypeToRender(STEPTYPES.loading);
      setTimeout(() => {
        setStepTypeToRender(STEPTYPES.potentialFit);
      }, 2000);
    }
  };
  console.log(step);

  return (
    <div
      className={cn(
        "w-full h-full flex place-content-center items-center",
        inter.className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 800, damping: 70 },
            opacity: { duration: 0.2 },
          }}
        >
          {stepTypeToRender === STEPTYPES.survey && (
            <Card className="lg:w-[500px] w-[350px] min-h-[500px] shadow-lg bg-white/95 backdrop-blur transition-all duration-300 hover:shadow-xl border border-gray-200 flex flex-col  ">
              <CardHeader className=" p-0 px-5 pt-5 justify-between mt-2">
                <div className="flex gap-3 items-center mb-2">
                  <ShieldCheck className="text-salmon-600"></ShieldCheck>
                  <CardTitle className="text-2xl font-bold text-salmon-600 text-start ">
                    {form.title}
                  </CardTitle>
                </div>

                {step <= form.fields.length && (
                  <div className="mb-4 ">
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
              </CardHeader>
              <CardContent className="flex flex-col p-5 flex-grow mb-4">
                <form onSubmit={(e) => e.preventDefault()} className="flex-1">
                  <AnimatePresence mode="wait">
                    {step <= form.fields.length && (
                      <motion.div key={`step${step}`} className="space-y-6">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-xl font-medium text-black">
                            {form.fields[step - 1].title}
                          </h3>
                          <h4>
                            {form.fields[step - 1].properties.description}
                          </h4>
                        </div>

                        <div className="transition-all duration-300 ">
                          {renderField({
                            field: form.fields[step - 1],
                            answers,
                            setAnswers,
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
              <CardFooter className="pt-5 px-5 pb-6 border-t border-gray-300">
                <div className="w-full flex justify-between items-center gap-4">
                  {step <= form.fields.length && (
                    <>
                      {step > 1 &&  (
                        <Button
                          variant="ghost"
                          onClick={() => paginate(-1)}
                          className="text-lg px-4 py-4 hover:bg-salmon-200  transition-colors  rounded-md h-10 w-28 "
                        >
                          Back
                        </Button>
                      )}
                      {step < form.fields.length ? (
                        <Button
                          className="text-lg px-4 py-4 bg-salmon-600 hover:bg-salmon-700 transition-colors ml-auto rounded-md h-10 w-28 flex justify-between"
                          onClick={() => paginate(1)}
                          disabled={!answers[form.fields[step - 1].ref]}
                        >
                          <span className="text-sm">Next</span>
                          <ChevronRightIcon></ChevronRightIcon>
                        </Button>
                      ) : step === form.fields.length ? (
                        <Button
                          className="text-lg px-4 py-4 bg-salmon-600 hover:bg-salmon-700 transition-colors ml-auto rounded-md h-10 w-28 "
                          onClick={()=>paginate(1)}
                          disabled={!answers[form.fields[step - 1].ref]}
                        >
                          Submit
                        </Button>
                      ) : null}
                    </>
                  )}
                </div>
              </CardFooter>
            </Card>
          )}

          {stepTypeToRender === STEPTYPES.loading && (
            
                <div className="flex justify-center items-center h-40">
                  <Loader2 className="w-8 h-8 animate-spin text-salmon-600" />
                </div>)
 } 
 {stepTypeToRender === STEPTYPES.potentialFit && <PotentialFitCard
                  
                  callback={()=>setStepTypeToRender(STEPTYPES.contact)}
                ></PotentialFitCard>}

                
{stepTypeToRender === STEPTYPES.contact && (
            <SurveyCard className="min-h-[300px] h-[300px]" 
              title="Contact Information"
              description="Please fill out your contact details."
            >
              <CreateLeadForm callback={()=>setStepTypeToRender(STEPTYPES.thanks)}/>
            </SurveyCard>
          )}
              
       
          {stepTypeToRender === STEPTYPES.thanks && (
          <ThankYouCard></ThankYouCard>
          )}
     
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SurveyForm;
