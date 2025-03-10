import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface AutocompleteProps {
  suggestions: { value: string; id: string }[];
  onSelect: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  listClassName?: string;
  itemClassName?: string;
  hoverClassName?: string;
  reset?: boolean; 
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  suggestions,
  onSelect,
  placeholder = "Search...",
  className,
  inputClassName,
  listClassName,
  itemClassName,
  hoverClassName,
  reset,
}) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    { value: string; id: string }[]
  >([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredSuggestions(
      suggestions.filter((item) =>
        item.value.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const onChangeValueFn = (selected: { value: string; id: string }) => {
    onSelect(selected.id); // Passa o ID do item selecionado para o callback
    setQuery(selected.value); // Atualiza o campo de entrada com o valor selecionado
    setFilteredSuggestions([]); // Limpa a lista de sugestões
    setIsFocused(false); // Fecha a lista de sugestões
  };

  // Efeito para resetar o input e as sugestões
  useEffect(() => {
    if (reset) {
      setQuery(""); // Limpa o valor do input
      setFilteredSuggestions([]); // Limpa as sugestões filtradas
    }
  }, [reset]);

  return (
    <div className={cn("relative w-full", className)}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 150)}
        className={cn(
          "flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          inputClassName
        )}
        placeholder={placeholder}
      />
      {isFocused && filteredSuggestions.length > 0 && (
        <ul
          className={cn(
            "absolute z-10 mt-2 w-full rounded-md border border-gray-300 bg-white shadow-lg",
            listClassName
          )}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => onChangeValueFn(suggestion)}
              className={cn(
                "cursor-pointer px-4 py-2",
                itemClassName,
                hoverClassName ? hoverClassName : "hover:bg-indigo-100"
              )}
            >
              {suggestion.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
