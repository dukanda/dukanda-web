"use client";
import { citiesRoutes } from "@/api/routes/Cities/index.routes";
import { tourTypesRoutes } from "@/api/routes/Tour-Types/index.routes";
import Autocomplete from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";
import { Slider } from "@/components/ui/slider";
import toursListPage from "@/data/toursListPage";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const { durations } = toursListPage;

//@ts-ignore
const ToursListLeft = ({ onFilter }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPrice, setShowPrice] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [showDuration, setShowDuration] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [date, setDate] = React.useState<Date>();
  const [citySelected, setCitySelected] = useState("");
  const [citiesAutoComplete, setCitiesAutoComplete] = useState<{ value: string; id: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [reset, setReset] = useState(false);

  const getAllCities = useQuery({
    queryKey: ['getAllCities'],
    queryFn: async () => {
      const response = await citiesRoutes.getAllCities();
      {/* @ts-ignore */ }
      setCitiesAutoComplete(response.data.items.map((city) => ({ value: city.name, id: city.id })));
      return response;
    },
  })

  const getTourTypes = useQuery({
    queryKey: ["getTourTypes"],
    queryFn: async () => {
      const response = await tourTypesRoutes.getToursTypes();
      return response.items;
    },
  });

  const handleSelectCity = (value: string) => {
    const selectedCity = citiesAutoComplete.find(city => city.value === value);
    if (selectedCity) {
      setCitySelected(selectedCity.id);
    }
  };

  // Sincronizar categoria com a URL
  useEffect(() => {
    const category = searchParams.get("type") || "";
    setSelectedCategory(category);
  }, [searchParams]);

  // Sincronizar faixa de preço com a URL
  useEffect(() => {
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    if (minPrice && maxPrice) {
      setPriceRange([parseInt(minPrice, 10), parseInt(maxPrice, 10)]);
    }
  }, [searchParams]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const queryParams = new URLSearchParams(searchParams.toString());
    queryParams.set("type", categoryId);
    router.push(`?${queryParams.toString()}`);
    onFilter({ type: categoryId });
  };

  const handlePriceChange = (value: number[]) => {
    // O valor mínimo é fixado em 0, e o máximo é controlado pelo cursor
    const maxPrice = Math.min(value[0], 10000); // Limita o máximo a 10000
    setPriceRange([0, maxPrice]);
    const queryParams = new URLSearchParams(searchParams.toString());
    queryParams.set("minPrice", "0");
    queryParams.set("maxPrice", maxPrice.toString());
    router.push(`?${queryParams.toString()}`);
    onFilter({ minPrice: 0, maxPrice });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filters = {
      city: citySelected,
      date,
      type: selectedCategory,
      priceRange,
    };
    onFilter(filters);
  };

  const handleClearFilters = () => {
    setCitySelected("");
    setDate(undefined);
    setSelectedCategory("");
    setPriceRange([0, 10000]);
    setReset(true);

    // Limpar filtros da URL
    router.push("?");
    onFilter({});
  };

  React.useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

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
                reset={reset}
              />
            </div>
            <div>
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
            <Button type="submit" className="w-full h-12 bg-green-700 hover:bg-green-800 text-base font-medium">
              Pesquisar
            </Button>
            <Button type="button" onClick={handleClearFilters} className="w-full h-12 bg-gray-500 hover:bg-gray-600 text-base font-medium mt-2">
              Limpar
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
                  <span>
                    {/* {priceRange[0]} KZ */}
                  </span>
                  <span>{priceRange[1]} KZ</span>
                </div>
                <Slider
                  defaultValue={priceRange}
                  min={0}
                  max={10000}
                  step={100}
                  onValueChange={handlePriceChange}
                  className=""
                />

                <Button type="button" variant={"outline"} onClick={handleClearFilters} className="w-full h-12 text-base font-medium my-3">
                  Limpar
                </Button>
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
                {getTourTypes.isLoading ? (
                  <p>Carregando categorias...</p>
                ) : (
                  getTourTypes.data?.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <RadioGroup
                        value={selectedCategory}
                        onValueChange={handleCategorySelect}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={category.id.toString()}
                          id={`cat-${category.id}`}
                          className="rounded-md shadow-sm"
                        />
                        <label
                          htmlFor={`cat-${category.id}`}
                          className="cursor-pointer text-gray-700"
                        >
                          {category.name}
                        </label>
                      </RadioGroup>
                    </div>
                  ))
                )}
                <Button type="button" variant={"outline"} onClick={handleClearFilters} className="w-full h-12 text-base font-medium my-3">
                  Limpar
                </Button>
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