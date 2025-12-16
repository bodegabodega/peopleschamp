"use client"

import { JSX, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import React from "react";

type SlideshowProps = {
  block: Slideshow
}

export default function SlideshowComponent(props: SlideshowProps): JSX.Element {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider mb-2">
          {props.block.imagesCollection.items.map((image, index) => (
            <div key={index} className="keen-slider__slide">
              <img src={image.url} alt={`Slide ${index + 1}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <SlideIndicator count={instanceRef.current.track.details.slides.length} currentIndex={currentSlide} />
      )}
    </>
  )
}

function SlideIndicator({ count, currentIndex }: { count: number; currentIndex: number }) {
  const segmentWidth = 100 / count;

  return (
    <div className="relative w-full h-0.5 bg-gray-300 rounded overflow-hidden">
      {/* Highlight bar */}
      <div
        className="absolute top-0 h-full bg-gray-800 transition-all duration-300 ease-out"
        style={{
          width: `${segmentWidth}%`,
          left: `${currentIndex * segmentWidth}%`,
        }}
      />
    </div>
  );
}