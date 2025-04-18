import TourDetailsOne from "./TourDetailsOne"
import TourDetailsTwo from "./TourDetailsTwo";

const TourDetailsPage = ({ title, basePrice, startDate, endDate, tourTypes, cityName, agencyLogoUrl, agencyName, created, description, packages, itineraries }: ITour) => {

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
        description={description}
        itineraries={itineraries}
        packages={packages}
        startDate={startDate}
        endDate={endDate}
        title={title}
      />
    </>
  );
};

export default TourDetailsPage;
