
"use client";
import { tourDetailsLeft, tourDetailsSidebar } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Select from "react-select";
import { DialogPayment } from "@/components/ui/dialog/dialog-payment";

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
export const TourDetailsSidebar = () => {
  const [type, setType] = useState("Adventure");
  const [ticket, setTicket] = useState("Adventure");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [reservationDetails, setReservationDetails] = useState<any>(null);


  //@ts-ignore
  const handleSelectTicket = ({ value }) => {

    setTicket(value);
  };

  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      type,
      ticket,
      place: formData.get("place"),
      when: formData.get("when"),
    };
    setReservationDetails(data);
    setModalIsOpen(true);
  };

  return (
    <div className="tour-details-two__sidebar">
      <div className="tour-details-two__book-tours">
        <h3 className="tour-details-two__sidebar-title">Reservar passeios</h3>
        <form
          onSubmit={handleSubmit}
          className="tour-details-two__sidebar-form"
        >
          <div className="tour-details-two__sidebar-form-input">
            <Select
              name="ticket"
              options={typeOptions}
              //@ts-ignore
              onChange={handleSelectTicket}
              styles={customStyle}
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              placeholder="Escolher ticket"
              instanceId="tourTypeSelect15"
            />
            <div className="tour-details-two__sidebar-form-icon">
              <i className="fa fa-angle-down"></i>
            </div>
          </div>
          <DialogPayment />
        </form>
      </div>

      <div className="tour-details-two__last-minute">
        <h3 className="tour-details-two__sidebar-title">Recentes</h3>
        <ul className="tour-details-two__last-minute-list list-unstyled">
          {tourDetailsSidebar.map(({ id, title, image, price, location }) => (
            <li key={id}>
              <div className="tour-details-two__last-minute-image cursor-pointer">
                <Image
                  src={require(`@/assets/images/resources/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="tour-details-two__last-minute-content cursor-pointer">
                <h6>{price} kz</h6>
                <h5>{title}</h5>
                <p>{location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

