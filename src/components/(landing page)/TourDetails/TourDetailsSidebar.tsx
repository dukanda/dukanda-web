"use client";
import { tourDetailsLeft, tourDetailsSidebar } from "@/data/tourDetailsPage";
import React, { Children, useState } from "react";
import { DialogPayment } from "@/components/ui/dialog/dialog-payment";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";


const typeOptions = ["Adventure", "Wildlife", "Sightseeing"].map((it) => ({
  value: it,
  label: it,
}));

// & { setSelectedPackage: (pack: Package | null) => void, description: string }
export const TourDetailsSidebar = ({ packages, description, startDate, endDate, selectedPackage, title }: ITour & { selectedPackage: Package | null }) => {


  return (
    // <div className=" hidden lg:block">
    //   <div className="tour-details-two__book-tours hidden lg:block">
    //     <h3 className="tour-details-two__sidebar-title hidden lg:block">Reservar passeios</h3>
    //     <p className="w-full text-justify -tracking-normal hidden lg:block">Clique em Reservar para escolher um pacote da tour</p>
    //     <DialogPayment packages={packages??[]} description={description??""} endDate={endDate??""} startDate={startDate??""} selectedPackage={selectedPackage} />
    //   </div>
    // </div>
    <div className=" hidden lg:block">
      <div className="border border-orange-400 rounded-md px-4 py-3.5 shadow-sm hidden lg:block">
        <h3 className="tour-details-two__sidebar-title hidden lg:block">Reservar passeios</h3>
        <p className="w-full text-justify -tracking-normal hidden lg:block">Clique em Reservar para escolher um pacote da tour</p>
        <DialogPayment
          packages={packages ?? []}
          description={description ?? ""}
          endDate={endDate ?? ""}
          startDate={startDate ?? ""}
          selectedPackage={selectedPackage}
          title={title ?? ""}
        />
      </div>
    </div>
  );
};
