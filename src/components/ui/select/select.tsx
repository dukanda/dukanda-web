import * as React from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./radix-select"

interface SelectDemoProps {
  packages: Package[];
  onSelect: (selectedPackage: Package | null) => void;
}

export function SelectDemo({ packages = [], onSelect }: SelectDemoProps) {
  return (
    <Select onValueChange={(value) => {
      const selectedPackage = packages.find(pack => pack.name === value) || null;
      onSelect(selectedPackage);
    }}>
      <SelectTrigger className="w-[250px]  h-12 ">
        <SelectValue placeholder="Selecione o pacote" />
      </SelectTrigger>
      <SelectContent className="w-[250px] h-52">
        <SelectGroup>
          <SelectLabel>Pacotes</SelectLabel>
          {packages.map(pack => (
            <SelectItem key={pack.id} value={pack.id}>{pack.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
