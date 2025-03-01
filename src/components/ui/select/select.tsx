import * as React from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./radix-select"

interface SelectDemoProps {
  packages: Package[];
  onSelect: (selectedPackage: Package | null) => void;
}

export function SelectDemo({ packages = [], onSelect }: SelectDemoProps) {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(packages.length > 0 ? packages[0].name : undefined);

  return (
    <Select onValueChange={(value) => {
      const selectedPackage = packages.find(pack => pack.name === value) || null;
      setSelectedValue(value);
      onSelect(selectedPackage);
    }} value={selectedValue}>
      <SelectTrigger className="w-[250px]  h-12 ">
        <SelectValue placeholder="Selecione o pacote" />
      </SelectTrigger>
      <SelectContent className="w-[250px] h-52">
        <SelectGroup>
          <SelectLabel>Pacotes</SelectLabel>
          {packages.map(pack => (
            <SelectItem key={pack.id} value={pack.name}>{pack.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
