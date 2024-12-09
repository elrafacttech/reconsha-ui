import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const carouselItems = [
    {
        title: 'Learn how to get started on Reconsha',
        subtitle: 'Reconsha will guide you through the basics of our platform.',
        buttonText: 'Explore Reconsha',
    },
    {
        title: 'Find the perfect resources for your project',
        subtitle: 'Connect with skilled developers ready to join your team.',
        buttonText: 'Browse Resources',
    },
    {
        title: 'Fastly Get started with your next project',
        subtitle: 'Create your first proposal and start working with clients.',
        buttonText: 'Start Now',
    },
];

export function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative overflow-hidden rounded-lg bg-[#1DB954] text-white">
            <div className="relative px-6 py-12 sm:px-12 sm:py-16">
                <div className="relative z-10 max-w-[60%]">
                    <p className="text-lg sm:text-xl">
                        {carouselItems[currentSlide].subtitle}
                    </p>
                    <h1 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
                        {carouselItems[currentSlide].title}
                    </h1>
                    <Button
                        variant="secondary"
                        className="mt-6 bg-white text-[#1DB954] hover:bg-white/90"
                    >
                        {carouselItems[currentSlide].buttonText}
                    </Button>
                </div>

                <div className="absolute bottom-4 left-6 flex gap-2 sm:left-12">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            className={`h-1.5 w-8 rounded-full transition-colors ${
                                index === currentSlide
                                    ? 'bg-white'
                                    : 'bg-white/50'
                            }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>

                <div className="absolute right-6 top-1/2 -translate-y-1/2 sm:right-12">
                    <img
                        src="https://via.placeholder.com/200x200.png?text=Illustration"
                        alt="Illustration"
                        width={200}
                        height={200}
                        className="h-auto w-auto"
                    />
                </div>
            </div>
        </div>
    );
}
