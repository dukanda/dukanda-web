"use client";
import { toursRoutes } from "@/api/routes/Tours/index.routes";
import { MultiStepPaymentForm } from "@/components/app/payment-form/page";
import { TourManagementTable } from "@/components/app/tour-management-table/page";
import { DialogPayment } from "@/components/ui/dialog/dialog-payment";
import { useQuery } from "@tanstack/react-query";

export default function Teste() {

  const getFeaturedTours = useQuery({
    queryKey: ['getFeaturedTours'],
    queryFn: async () => {
      const response = await toursRoutes.getFeaturedTours();
      return response;
    },
  })

  // const getFeaturedTours = useQuery({
  //   queryKey: ['getFeaturedTours'],
  //   queryFn: async () => {
  //     const response = await toursRoutes.getFeaturedTours();
  //     return response;
  //   },
  // })


  console.log("api", getFeaturedTours.data?.data);
  return (
    <div>
      {/* <MultiStepPaymentForm />
      <TourManagementTable /> */}
      <DialogPayment />
    </div>
  )
}