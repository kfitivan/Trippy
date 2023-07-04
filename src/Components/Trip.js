import "./Tripstyles.css";
import TripData from "./TripData";
import Bwindi from "../assets/img1.jpg";
import Kanungu from "../assets/img4.jpg";
import Ishasha from "../assets/img5.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Trips </h1>
      <p>You can discover unique destination using Google Maps</p>
      <div className="tripcard">
        <TripData
          image={Bwindi}
          heading="Trip in Bwindi"
          text="Bwindi Impenetrable National Park is located in the southwestern part of Uganda on the rim of the Rift Valley. The hillsides which are mist-covered are sheltered by one of the ancient and very biologically varied rainforests in Uganda that dates back to more than 25,000 years, comprising of about 400 varied plant species. "
        />
        <TripData
          image={Kanungu}
          heading="Trip in Kanungu"
          text="Bwindi Impenetrable National Park is located in the southwestern part of Uganda on the rim of the Rift Valley. The hillsides which are mist-covered are sheltered by one of the ancient and very biologically varied rainforests in Uganda that dates back to more than 25,000 years, comprising of about 400 varied plant species. "
        />
        <TripData
          image={Ishasha}
          heading="Trip in Ishasha"
          text="Bwindi Impenetrable National Park is located in the southwestern part of Uganda on the rim of the Rift Valley. The hillsides which are mist-covered are sheltered by one of the ancient and very biologically varied rainforests in Uganda that dates back to more than 25,000 years, comprising of about 400 varied plant species. "
        />
      </div>
    </div>
  );
}
export default Trip;
