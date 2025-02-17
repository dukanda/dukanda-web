"use client";
import brandTwo from "@/data/brandTwo";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container, Image } from "react-bootstrap";

const BrandTwo = ({ brandThree = false }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0); // Inicia no primeiro slide
    }
  }, [emblaApi]);

  return (
    <section className={`${brandThree ? "brand-two brand-three" : "brand-two"} py-10`}>
      <Container>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex space-x-6 md:space-x-10">
            {brandTwo.map((brand, index) => (
              <div
                key={index}
                className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] px-2"
              >
                <Image
                  src={require(`@/assets/images/brand/${brand}`).default.src}
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrandTwo;
