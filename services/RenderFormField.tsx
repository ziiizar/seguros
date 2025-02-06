import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/types/form";
import { Dispatch } from "react";

export default function renderField({
  field,
  answers,
  setAnswers,
}: {
  field: Field;
  answers: Record<string, string>;
  setAnswers: Dispatch<Record<string, string>>;
}) {
  switch (field.type) {
    case "short_text":
    case "email":
    case "website":
      return (
        <Input
          type={field.type === "email" ? "email" : "text"}
          placeholder={
            field.properties.description || `Enter ${field.title}...`
          }
          value={answers[field.ref] || ""}
          onChange={(e) =>
            setAnswers({ ...answers, [field.ref]: e.target.value })
          }
          className="text-lg py-6"
        />
      );
    case "long_text":
      return (
        <Textarea
          placeholder={
            field.properties.description || `Enter ${field.title}...`
          }
          value={answers[field.ref] || ""}
          onChange={(e) =>
            setAnswers({ ...answers, [field.ref]: e.target.value })
          }
          className="text-lg py-6"
        />
      );
    case "number":
      return (
        <div>
          <Input
            type="text"
            placeholder={
              field.properties.description || `Enter ${field.title}...`
            }
            value={answers[field.ref] || ""}
            onChange={(e) =>
              setAnswers({ ...answers, [field.ref]: e.target.value })
            }
            min={field.validations?.min_value}
            max={field.validations?.max_value}
            className="text-lg py-6"
          />
          {!/^\d*$/.test(answers[field.ref] || "") && (
            <p className="text-red-500 text-sm mt-1">
              Only numbers are allowed
            </p>
          )}
        </div>
      );
    case "yes_no":
      return (
        <RadioGroup
          value={answers[field.ref]}
          onValueChange={(value) =>
            setAnswers({ ...answers, [field.ref]: value })
          }
          className="space-y-4 "
        >
          <Label className="flex items-center space-x-3 p-4 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer ">
            <RadioGroupItem value="yes" />
            <span className="text-lg ">Yes</span>
          </Label>
          <Label className="flex items-center space-x-3 p-4 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer">
            <RadioGroupItem value="no" />
            <span className="text-lg">No</span>
          </Label>
        </RadioGroup>
      );
    case "date":
      return (
        <input
          value={answers[field.ref] || Date.now()}
          onChange={(e) =>
            setAnswers({ ...answers, [field.ref]: e.target.value })
          }
          type="date"
        />
      );
    case "multiple_choice":
      return (
        <RadioGroup
          value={answers[field.ref]}
          onValueChange={(value) =>
            setAnswers({ ...answers, [field.ref]: value })
          }
          className="space-y-2 grid grid-cols-2 grid-rows-[auto,repeat(minmax(10px,1fr))] place-content-start items-center"
        >
          {field.properties.choices &&
            field.properties.choices.map((choice, index) => (
              <Label
                key={index}
                className="flex space-x-3 p-4 border-[0.5px] border-gray-400/35 rounded-lg hover:bg-gray-100 cursor-pointer h-12 place-content-start items-center first:mt-2 "
              >
                <RadioGroupItem className="" value={choice.label} />
                <span className="lg:text-lg text-sm">{choice.label}</span>
              </Label>
            ))}
        </RadioGroup>
      );
    default:
      return null;
  }
}
