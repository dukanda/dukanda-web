import * as React from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./radix-select"



export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[250px]  h-12 ">
        <SelectValue placeholder="Selecione o pacote" />
      </SelectTrigger>
      <SelectContent className="w-[250px] h-52">
        <SelectGroup>
          <SelectLabel>Pacotes</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
