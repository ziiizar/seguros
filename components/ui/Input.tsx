import { cn } from "@/lib/utils"

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (


  
                <input
                
                  {...props}
                  className={cn("w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 ", props.className)}
                />
            
  )
}

export default Input