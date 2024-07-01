"use client";
import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface Slide {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface SliderProps {
    slides?: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides = [] }) => {
    const [current, setCurrent] = useState<number>(0);

    useEffect(() => {
        console.log('Slides:', slides); // Debug log to check slides data
    }, [slides]);

    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    if (slides.length === 0) {
        return <div className='max-w-[1400px] h-[780px] w-full m-auto py-14 px-4 relative group'>No slides available</div>;
    }

    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-14 px-4 relative group'>
            <div
                style={{ backgroundImage: `url(${slides[current].image})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-700'
            >
                {/* <div className='absolute bottom-10 left-10 bg-black/50 text-white p-4 rounded'>
                    <h2 className='text-2xl font-bold'>{slides[current].title}</h2>
                    <p>{slides[current].description}</p>
                </div> */}
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronLeft onClick={previousSlide} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronRight onClick={nextSlide} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full mx-1 cursor-pointer ${
                            current === index ? 'bg-white' : 'bg-gray-500'
                        }`}
                        onClick={() => setCurrent(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
