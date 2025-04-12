import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

interface Destination {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
}

interface DestinationsTwoSingleProps {
  destination: Destination;
  col: number;
}

const DestinationsTwoSingle: React.FC<DestinationsTwoSingleProps> = ({ destination, col }) => {
  const { image, title, subtitle } = destination;

  return (
    // <Col xl={col} lg={col}>
    <Link href={`/destinations/${destination.id}/details`} className=" w-[280px] relative block mb-[30px] group overflow-hidden" passHref>
      {/* Image Wrapper */}
      <div className="relative block rounded-[var(--thm-border-radius)] overflow-hidden z-[1]">
        {/* Overlay (before) */}
        <div className="absolute inset-0 bg-[rgba(var(--thm-black-rgb),0.3)] rounded-[var(--thm-border-radius)] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-[1] origin-bottom" />

        {/* Imagem */}
        <Image
          src={image}
          alt=""
          className="w-full rounded-[var(--thm-border-radius)] transform scale-[1] group-hover:scale-[1.05] transition-all duration-500 ease-in-out relative z-0"
        />

        {/* Conteúdo */}
        <div className="absolute left-[50px] bottom-[40px] z-[2]">
          {subtitle && (
            <p className="destinations-two__top-sub-title">
              {subtitle}
            </p>
          )}
          <h2 className="text-[30px] font-bold leading-[40px] tracking-[var(--thm-letter-spacing)]">
            <Link
               href={`/destinations/${destination.id}/details`}
              legacyBehavior
            >
              <a className="text-[var(--thm-base)] transition-colors duration-500 group-hover:text-[var(--thm-primary)]">
                {title}
              </a>
            </Link>
          </h2>
        </div>
      </div>
    </Link>
    // </Col>
  );
};

export default DestinationsTwoSingle;
