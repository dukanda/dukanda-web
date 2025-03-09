"use client";
import { citiesRoutes } from "@/api/routes/Cities/index.routes";
import Autocomplete from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import toursListPage from "@/data/toursListPage";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown, Star } from "lucide-react";
import React, { useState } from "react";

const { categories, durations } = toursListPage;

const typeOptions = [
  { value: "aventura", label: "Aventura" },
  { value: "cultural", label: "Cultural" },
  { value: "gastronomico", label: "Gastronômico" },
];


const ToursListLeft = () => {
  const [showPrice, setShowPrice] = useState(true);
  const [showReview, setShowReview] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [showDuration, setShowDuration] = useState(true);
  const [priceRange, setPriceRange] = useState([500, 10000]);
  const [selected, setSelected] = useState("Adventure");
  const [date, setDate] = React.useState<Date>();
  const [citySelected, setCitySelected] = useState("");
  const [citiesAutoComplete, setCitiesAutoComplete] = useState<{ value: string; id: string }[]>([]);
  let count = 6;

  const [selectedType, setSelectedType] = useState("");


  const getAllCities = useQuery({
    queryKey: ['getAllCities'],
    queryFn: async () => {
      const response = await citiesRoutes.getAllCities();
      setCitiesAutoComplete(response.data.items.map((city) => ({ value: city.name, id: city.id })));
      return response;
    },
  })

  console.log("gey all", citiesAutoComplete)
  const handleSelect = (value: string) => {
    setSelectedType(value);
  };

  const handleSelectCity = (value: string) => {
    const selectedCity = citiesAutoComplete.find(city => city.value === value);
    if (selectedCity) {
      setCitySelected(selectedCity.id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado");
  };

  return (
    <div className="tours-list__left">
      <div className="tours-list__sidebar">
        <div className="bg-[#faf5ee13] shadow-sm p-10 rounded-lg border">
          <h3 className="text-xl font-bold mb-6">Pesquisar passeios</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              {/* @ts-ignore */}
              <Autocomplete
                suggestions={citiesAutoComplete}
                onSelect={handleSelectCity}
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
        <div className="p-8 mt-6 border border-gray-300 rounded-lg space-y-6">
          {/* Preço */}
          <div>
            <div className="flex items-center justify-between border-b pb-2 mb-4">
              <h3 className="text-lg font-semibold">Preço</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPrice((prev) => !prev)}
              >
                <ChevronDown
                  className={`transition-transform ${showPrice ? "rotate-180" : ""}`}
                />
              </Button>
            </div>
            {showPrice && (
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-semibold text-gray-700">
                  <span>{priceRange[0]} KZ</span>
                  <span>{priceRange[1]} KZ</span>
                </div>
                <Slider
                  defaultValue={priceRange}
                  min={500}
                  max={10000}
                  step={100}
                  onValueChange={(value) => setPriceRange(value)}
                  className=""
                />
              </div>
            )}
          </div>

          {/* Estrelas da Tour */}
          <div>
            <div className="flex items-center justify-between border-b pb-2 mb-4">
              <h3 className="text-lg font-semibold">Estrelas da tour</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowReview((prev) => !prev)}
              >
                <ChevronDown
                  className={`transition-transform ${showReview ? "rotate-180" : ""}`}
                />
              </Button>
            </div>
            {showReview && (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => {
                  const rating = 5 - i;
                  return (
                    <div key={rating} className="flex items-center space-x-2">
                      <RadioGroup className="flex items-center space-x-2">
                        <RadioGroupItem value="" id={`review-${rating}`} className="rounded-md shadow-sm" />
                        <label
                          htmlFor={`review-${rating}`}
                          className="flex items-center space-x-1 cursor-pointer text-gray-700"
                        >
                          {Array.from({ length: 5 }).map((_, j) => (
                            <span
                              key={j}
                            // className={`text-lg ${j < rating ? "text-yellow-500 fill-orange-700" : "text-gray-300"
                            //   }`}
                            >
                              <Star className={`text-lg ${j < rating ? "text-orange-400 fill-orange-400" : "text-gray-300"
                                }`} />
                            </span>
                          ))}
                        </label>
                      </RadioGroup>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Categoria */}
          <div>
            <div className="flex items-center justify-between border-b pb-2 mb-4">
              <h3 className="text-lg font-semibold">Categoria</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCategory((prev) => !prev)}
              >
                <ChevronDown
                  className={`transition-transform ${showCategory ? "rotate-180" : ""}`}
                />
              </Button>
            </div>
            {showCategory && (
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroup defaultValue="comfortable" className="flex items-center space-x-2">
                      <RadioGroupItem value="" id={`cat-${index}`} className="rounded-md shadow-sm" />
                      <label
                        htmlFor={`cat-${index}`}
                        className="cursor-pointer text-gray-700"
                      >
                        {category}
                      </label>
                    </RadioGroup>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Duração */}
          <div>
            <div className="flex items-center justify-between border-b pb-2 mb-4">
              <h3 className="text-lg font-semibold">Duração</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowDuration((prev) => !prev)}
              >
                <ChevronDown
                  className={`transition-transform ${showDuration ? "rotate-180" : ""}`}
                />
              </Button>
            </div>
            {showDuration && (
              <div className="space-y-3">
                {durations.map((duration, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroup defaultValue="comfortable" className="flex items-center space-x-2 rounded-none shadow-none">
                      <RadioGroupItem value={`duration-${index}`} id={`duration-${index}`} className="rounded-md shadow-sm" />
                      <label
                        htmlFor={`duration-${index}`}
                        className="cursor-pointer text-gray-700"
                      >
                        {duration}
                      </label>
                    </RadioGroup>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursListLeft;
