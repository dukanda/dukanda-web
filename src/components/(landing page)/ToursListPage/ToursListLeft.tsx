"use client";
import Autocomplete from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import toursListPage from "@/data/toursListPage";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";
import Slider from "react-rangeslider";
// import Select from "react-select";

const { categories, durations } = toursListPage;

// const typeOptions = ["Adventure", "Wildlife", "Sightseeing"].map((it) => ({
//   value: it,
//   label: it,
// }));

const customStyle = {
  valueContainer: (provided) => ({
    ...provided,
    color: "#787780",
    fontSize: 13,
    fontWeight: 500,
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
    zIndex: 10,
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

const typeOptions = [
  { value: "aventura", label: "Aventura" },
  { value: "cultural", label: "Cultural" },
  { value: "gastronomico", label: "Gastronômico" },
];


const ToursListLeft = () => {
  const [showReview, setShowReview] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [showDuration, setShowDuration] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [selected, setSelected] = useState("Adventure");
  const [priceRange, setPriceRange] = useState(2000);
  const [date, setDate] = React.useState<Date>()
  let count = 6;

  // const handleSelect = ({ value }) => {
  //   setSelected(value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = {
  //     type: selected,
  //     date: formData.get("when"),
  //     place: formData.get("place"),
  //   };
  //   console.log(data);
  // };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };


  ///
  const [selectedType, setSelectedType] = useState("");

  const handleSelect = (value: string) => {
    setSelectedType(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado");
  };

  return (
    <div className="tours-list__left">
      <div className="tours-list__sidebar">
        <div className="bg-[#faf5ee36] shadow-md p-10 rounded-lg">
          <h3 className="text-xl font-bold mb-6">Pesquisar passeios</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Autocomplete
                inputClassName="h-12 text-sm bg-white"
                placeholder={"Onde?"}
              />
              {/* <Input type="text" placeholder="Onde?" name="place" className="h-12 text-sm" /> */}
            </div>
            <div>
              {/* <Input type="date" placeholder="Quando?" name="when" className="h-12 text-sm" /> */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full h-12 justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Quando?</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Select onValueChange={handleSelect}>
                <SelectTrigger className="h-12 text-sm bg-white">
                  <SelectValue placeholder="Selecione o tipo de passeio" />
                </SelectTrigger>
                <SelectContent>
                  {typeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full h-12 bg-green-700 hover:bg-green-800 text-base font-medium">
              Pesquisar
            </Button>
          </form>
        </div>



        <div className="tour-sidebar__sorter-wrap">
          <div className="tour-sidebar__sorter-single">
            <div className="tour-sidebar__sorter-top">
              <h3>Preço</h3>
              <button
                onClick={() => setShowPrice((preShow) => !preShow)}
                className="tour-sidebar__sorter-toggler"
              ></button>
            </div>
            {showPrice && (
              <div className="tour-sidebar__sorter-content">
                <div className="tour-sidebar__price-range">
                  <div className="form-group">
                    <p>
                      <span id="min-value-rangeslider">{priceRange} kz</span>
                    </p>
                    <p>
                      <span id="max-value-rangeslider">{priceRange} kz</span>
                    </p>
                  </div>
                  <Slider
                    min={500}
                    max={10000}
                    value={priceRange}
                    onChange={handlePriceChange}
                    className="range-slider-price"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="tour-sidebar__sorter-single">
            <div className="tour-sidebar__sorter-top">
              <h3>Estrelas da tour</h3>
              <button
                onClick={() => setShowReview((preShow) => !preShow)}
                className="tour-sidebar__sorter-toggler"
              ></button>
            </div>
            {showReview && (
              <div className="tour-sidebar__sorter-content">
                <div className="tour-sidebar__sorter-inputs">
                  {Array.from(Array(5)).map((_, i) => {
                    count--;
                    return (
                      <p key={i}>
                        <input
                          type="checkbox"
                          id={`review-${count}`}
                          name="radio-group"
                        />
                        <label htmlFor={`review-${count}`}>
                          {Array.from(Array(5)).map((_, j) => (
                            <i
                              key={j}
                              className={`fa fa-star${j + 1 <= count ? " active" : ""
                                }`}
                            ></i>
                          ))}
                        </label>
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="tour-sidebar__sorter-single">
            <div className="tour-sidebar__sorter-top">
              <h3>Categoria</h3>
              <button
                onClick={() => setShowCategory((preShow) => !preShow)}
                className="tour-sidebar__sorter-toggler"
              ></button>
            </div>
            {showCategory && (
              <div className="tour-sidebar__sorter-content">
                <div className="tour-sidebar__sorter-inputs">
                  {categories.map((category, index) => (
                    <p key={index}>
                      <input
                        type="checkbox"
                        id={`cat-${index + 1}`}
                        name="radio-group"
                      />
                      <label htmlFor={`cat-${index + 1}`}>{category}</label>
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="tour-sidebar__sorter-single">
            <div className="tour-sidebar__sorter-top">
              <h3>Duração</h3>
              <button
                onClick={() => setShowDuration((preShow) => !preShow)}
                className="tour-sidebar__sorter-toggler"
              ></button>
            </div>
            {showDuration && (
              <div className="tour-sidebar__sorter-content">
                <div className="tour-sidebar__sorter-inputs">
                  {durations.map((duration, index) => (
                    <p key={index}>
                      <input
                        type="checkbox"
                        id={`duration-${index + 1}`}
                        name="radio-group"
                      />
                      <label htmlFor={`duration-${index + 1}`}>
                        {duration}
                      </label>
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursListLeft;
