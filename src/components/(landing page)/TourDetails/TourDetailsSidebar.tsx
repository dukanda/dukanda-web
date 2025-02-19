
"use client";
import { tourDetailsLeft, tourDetailsSidebar } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Select from "react-select";
import Modal from "react-modal";

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
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleOpenModal = () => {
    setStep(1); // Sempre iniciar no primeiro passo
    setPaymentMethod(""); // Resetar método de pagamento
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setStep(1);
    setPaymentMethod("");
  };

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
    setStep(1);
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
          <button
            style={{ zIndex: 0 }}
            type="button"
            className="thm-btn tour-details-two__sidebar-btn"
            onClick={handleOpenModal}
          >
            Reservar
          </button>
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

      {/* Modal Multi-step */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
          setStep(1);
        }}
        style={{
          content: {
            height: "500px",
            width: "50%",
            margin: "auto",
            padding: "",
            borderRadius: "10px",
            textAlign: "center",
          },
        }}
      >
        {step === 1 && (
          <div className="w-full">
            <h2 className="w-full p-2" >Visão Geral da Reserva</h2>

            <p className="w-full pl-4 text-start">
              Aproveite um dia inesquecível na paradisíaca Ilha do Mussulo, onde águas cristalinas e praias de areia branca proporcionam o cenário perfeito para relaxamento e diversão.
            </p>

            <section className="w-full px-4 text-start ">
              <h3 className="text-start text-[12px] 	">Detalhes da Reserva</h3>
              <article className="flex gap-2">
                <p><strong>Ticket:</strong>Aventura</p>
                <p><strong>Preço:</strong>5000 kz</p>
              </article>
            </section>
            <div className="tour-details-two__overview-bottom">
              {/* 
tour-details-two__overview-bottom-left 
*/}
              <div className="  flex justify-between px-4 ">
                <div className="  flex flex-col text-start">
                  <h3 className="tour-details-two-overview__title">Incluído</h3>
                  <ul className="list-unstyled tour-details-two__overview-bottom-list">
                    {overviewList.slice(0, 4).map((over, index) => (
                      <li key={index}>
                        <div className="icon">
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="text">
                          <p>{over}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/*
                1 tour-details-two__overview-bottom-right
                */}
                <div className="flex flex-col text-start h-full">
                  <h3 className="tour-details-two-overview__title">Não incluído</h3>
                  <ul className="list-unstyled tour-details-two__overview-bottom-right-list">
                    {overviewList.slice(4).map((over, index) => (
                      <li key={index}>
                        <div className="icon">
                          <i className="fa fa-times"></i>
                        </div>
                        <div className="text">
                          <p>{over}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* {reservationDetails && (
              <div className="w-full px-4 text-start">
                <p><strong>Tipo:</strong> {reservationDetails.type}</p>
                <p><strong>Ticket:</strong> {reservationDetails.ticket}</p>
                <p><strong>Local:</strong> {reservationDetails.place || "Não informado"}</p>
                <p><strong>Quando:</strong> {reservationDetails.when || "Não informado"}</p>
              </div>
            )} */}
            <div className="w-full flex items-end  justify-end gap-3 mb-3">
              <button onClick={() => setModalIsOpen(false)} className="thm-btn">
                Fechar
              </button>
              <button onClick={() => setStep(2)} className="thm-btn ">
                Próximo
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Selecionar Método de Pagamento</h2>
            <div className="w-full flex flex-col items-center p-5 gap-3">
              {/* Botão de seleção de pagamento */}
              <button
                className={`flex flex-row items-center px-4 py-3 gap-2 border rounded-lg thm-btn-pay ${paymentMethod === "Multicaixa Express" ? "selected bg-green-700 text-white" : ""
                  }`}
                onClick={() => setPaymentMethod("Multicaixa Express")}
              >
                <Image
                  src="/express.jpg"
                  alt="Multicaixa Express"
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
                <span>Multicaixa Express</span>
              </button>
            </div>
            <div className="w-full flex justify-end gap-3 mb-3 px-5">
              <button onClick={() => setStep(1)} className="thm-btn">
                Voltar
              </button>
              {/* Desabilita botão "Próximo" até que o usuário selecione um método */}
              <button
                onClick={() => setStep(3)}
                className="thm-btn"
                disabled={!paymentMethod}
                style={{
                  opacity: paymentMethod ? 1 : 0.5,
                  cursor: paymentMethod ? "pointer" : "not-allowed",
                }}
              >
                Próximo
              </button>
            </div>
          </div>
        )}


        {step === 3 && (
          <div>
            <h2>Confirmação</h2>
            <p>
              Seu pagamento será processado via{" "}
              <strong>{paymentMethod || "não selecionado"}</strong>.
            </p>
            <button onClick={handleCloseModal} className="thm-btn">
              Fechar
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

