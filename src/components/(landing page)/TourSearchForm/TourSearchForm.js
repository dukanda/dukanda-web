import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";

const typeOptions = ["Selecione","Aventura", "Vida Selvagem", "Passeios Turísticos"].map((it) => ({
  value: it,
  label: it,
}));


const customStyle = {
  container: (provided) => ({
    ...provided,
    zIndex: 100000,
    color: "#006837"
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 5,
    border: "none",
    boxShadow: "none",
    height: 0,
  }),
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
        : "0.5px solidrgba(189, 4, 4, 0.2)",
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
  control: (base) => ({
    ...base,
    height: 0,
    borderColor: "transparent",
    boxShadow: "none",
    borderRadius: "8px",
    "&:hover": {
      borderColor: "transparent",
    },
  }),
};

const TourSearchForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState("Selecione");

  const handleSelect = ({ value }) => {
    setSelected(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      type: selected,
      date: startDate,
      place: formData.get("place"),
    };
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="tour-search-one">
      <div className="tour-search-one__inner">
        <div className="tour-search-one__inputs">
          <div className="tour-search-one__input-box">
            <label htmlFor="place">Onde Ir</label>
            <input
              type="text"
              placeholder="Pesquisa"
              name="place"
              id="place"
            />
          </div>
          <div className="tour-search-one__input-box">
            <label>Quando Ir</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="hasDatepicker"
              placeholderText="Selecione"
            />
          </div>
          <div className="tour-search-one__input-box tour-search-one__input-box-last">
            <label htmlFor="type">O que fazer</label>
            <Select
              defaultValue={typeOptions[0]}
              name="type"
              options={typeOptions}
              onChange={handleSelect}
              styles={customStyle}
              isSearchable={false}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
              instanceId="tourTypeSelect"
            />
          </div>
        </div>
        <div className="tour-search-one__btn-wrap">
          <button type="submit" className="thm-btn tour-search-one__btn">
            Encontrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default TourSearchForm;
