'use client'

import ServiceCard from "@/components/Services/ServiceCard";
import HealthInsurance from "@/public/Health Insurance.webp";
import LifeInsurance from "@/public/Life Insurance.webp";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

const ServiceAside = ({
  setSelectedService,
}: {
  setSelectedService: Dispatch<SetStateAction<'health' | 'life'>>;
}) => {

    const t = useTranslations('ServicesMain');
  
  return (
    <section className="w-[35%] flex flex-col gap-4 h-full">
      {/* <h4 className="font-semibold">Explore Services</h4> */}
      <ServiceCard
        color="blue"
        image={HealthInsurance.src}
        name={t('healthCard')}
        onClick={() => setSelectedService('health')}
        
      />
      <ServiceCard
        color="orange"
        image={LifeInsurance.src}
        name={t('lifeCard')}
        onClick={() => setSelectedService('life')}
      />
    </section>
  );
};

export default ServiceAside;
