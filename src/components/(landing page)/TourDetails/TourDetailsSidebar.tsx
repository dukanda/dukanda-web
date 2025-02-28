"use client";
import { tourDetailsLeft, tourDetailsSidebar } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Select from "react-select";
import { DialogPayment } from "@/components/ui/dialog/dialog-payment";
// import { toast } from 'react-toastify';

const typeOptions = ["Adventure", "Wildlife", "Sightseeing"].map((it) => ({
  value: it,
  label: it,
}));

const customStyle = {
  //@ts-ignore
  valueContainer: (provided) => ({
    ...provided,
    color: "#787780",
    fontSize: 13,
    fontWeight: 500,
  }),
  //@ts-ignore
  singleValue: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
  //@ts-ignore
  menu: (provided) => ({
    ...provided,
    marginTop: 5,
    border: "none",
    boxShadow: "none",
    zIndex: 10,
  }),
  //@ts-ignore
  option: (provided, state) => ({
    ...provided,
    color: "white",
    padding: "4px 20px",
    backgroundColor: state.isSelected ? "#006837" : "#313041",
    transition: "all 0.4s ease",
    cursor: "pointer",
    borderBottom:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "none"
        : "0.5px solid #ffffff33",
    "&:hover": {
      backgroundColor: "#006837",
    },
    borderRadius:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "0 0 8px 8px"
        : 0,
    fontSize: 16,
    fontWeight: 500,
  }),
  //@ts-ignore
  control: (base) => ({
    ...base,
    borderColor: "transparent",
    boxShadow: "none",
    borderRadius: "8px",
    "&:hover": {
      borderColor: "transparent",
    },
    padding: 14,
  }),
};

const { overview, overviewList, faq, superb, reviewScore, comments, reviews } = tourDetailsLeft;
export const TourDetailsSidebar = ({ packages, setSelectedPackage, description }: ITour & { setSelectedPackage: (pack: Package | null) => void, description: string }) => {
  const [selectedPackage, setSelectedPackageState] = useState<Package | null>(null);

  const packageOptions = packages?.map((pack) => ({
    value: pack.id,
    label: pack.name,
  })) || [];

  const handleSelectPackage = (selectedOption: any) => {
    const selectedPack = packages?.find((pack) => pack.id === selectedOption.value) || null;
    setSelectedPackageState(selectedPack);
    setSelectedPackage(selectedPack);
  };

  return (
    <div className=" hidden lg:block">
      <div className="tour-details-two__book-tours hidden lg:block">
        <h3 className="tour-details-two__sidebar-title hidden lg:block">Reservar passeios</h3>
        <p className="w-full text-justify -tracking-normal hidden lg:block">Clique em Reservar para escolher um pacote da tour</p>
        <form
          className="tour-details-two__sidebar-form"
        >
          {/* <div className="tour-details-two__sidebar-form-input">
            <Select
              name="ticket"
              options={packageOptions}
              onChange={handleSelectPackage}
              styles={customStyle}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              placeholder="Escolher pacote"
              instanceId="tourTypeSelect15"
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-angle-down"></i>
            </div>
          </div> */}
            <DialogPayment selectedPackage={selectedPackage} description={description} />
        </form>
      </div>
    </div>
  );
};