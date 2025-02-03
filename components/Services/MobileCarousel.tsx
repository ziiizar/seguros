import React from 'react'
import { ServiceCardType } from './Main';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import ServiceHero from './ServiceHero';

interface MobileCarouselProps {
    services: ServiceCardType[]
    currentIndex: number
  }
  export default function MobileCarousel({ services, currentIndex }: MobileCarouselProps) {
  return (
    <Carousel className="w-full h-full" index={currentIndex}>
      <CarouselContent>
        {services.map((service) => (
          <CarouselItem key={service.id} className="h-full">
            <ServiceHero currentService={service} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
