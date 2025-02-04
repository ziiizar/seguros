import React, { useEffect, useState } from 'react'
import { ServiceCardType } from './Main';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import ServiceHero from './ServiceHero';

interface MobileCarouselProps {
    services: ServiceCardType[]
    currentIndex: number
}

export default function MobileCarousel({ services, currentIndex }: MobileCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(currentIndex);

    useEffect(() => {
        setActiveIndex(currentIndex);
    }, [currentIndex]);

    return (
        <Carousel className="w-full h-full">
            <CarouselContent>
                {services.map((service, index) => (
                    <CarouselItem 
                        key={service.id} 
                        className={`h-full ${index === activeIndex ? "active" : ""}`}
                    >
                        <ServiceHero currentService={service} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
