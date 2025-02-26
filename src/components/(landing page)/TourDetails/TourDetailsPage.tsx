import TourDetailsOne from "./TourDetailsOne"
import TourDetailsTwo from "./TourDetailsTwo";

const TourDetailsPage = ({ title, basePrice, startDate, endDate, tourTypes, cityName, agencyLogoUrl, agencyName, created }: ITour) => {
  return (
    <>
      <TourDetailsOne
        title={title}
        basePrice={basePrice}
        startDate={startDate}
        endDate={endDate}
        tourTypes={tourTypes}
        cityName={cityName}
        agencyLogoUrl={agencyLogoUrl}
        agencyName={agencyName}
        created={created}
      />
      <TourDetailsTwo
      
      />
    </>
  );
};

export default TourDetailsPage;
