import Link from "next/link"


const SurveysPage = () => {
    return (
      <div className="flex gap-10">SurveysPage
         <Link href={"/Admin/Surveys/NewSurvey"}>Surveys</Link>
      </div>
      
    )
  }
  
  export default SurveysPage