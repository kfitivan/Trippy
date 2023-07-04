import "./Destinationstyles.css";
import DestinationData from "./DestinationData";
import Mtn1 from "../assets/img3.jpg";
import Mtn2 from "../assets/img1.jpg";
import Mtn3 from "../assets/img4.jpg";
import Mtn4 from "../assets/img5.jpg";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Trippy Tours gives you the opportunity to visit the World</p>
      <DestinationData
        className="first-des"
        heading="Mt Rwenzori, Glanciers"
        text="Despite its equatorial climate, East Africa has glaciers on its
        highest peaks. Africa’s glaciers date back to between 10,000 and
        15,000 years, but they are melting at a rapid rate and may vanish
        over the coming decades. <br> Tragically, the future of Africa’s glaciers is uncertain due to
        global warming. In 1906, 43 glaciers were scattered across 6 peaks
        within the Rwenzori Mountains. These glaciers covered an area of
        around 7.5km², around half of the total surface area of Africa’s
        glaciers at the time."
        img1={Mtn1}
        img2={Mtn2}
      />
      <h1>Visit Uganda</h1>
      <p>Trippy Trips in Kampala City</p>
      <DestinationData
        className="first-des-reverse "
        heading="Kampala City"
        text="Kampala is Uganda's national and commercial capital bordering Lake Victoria, Africa's largest lake. 
        Hills covered with red-tile villas and trees surround an urban centre of contemporary skyscrapers. 
        In this downtown area, the Uganda Museum explores the country's tribal heritage through an extensive collection of artefacts.
         On nearby Mengo Hill is Lubiri Palace, the former seat of the Buganda Kingdom."
        img1={Mtn3}
        img2={Mtn4}
      />
    </div>
  );
}
export default Destination;
