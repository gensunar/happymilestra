import styles from "./Enquiry.module.scss";
import { useState } from "react";
import OneWayFlight from "../../../Utils/EnquiryForms/OneWayFlight/OneWayFlight";
import RoundTripFlight from "../../../Utils/EnquiryForms/RoundTripFlight/RoundTripFlight";

const Enquiry = () => {
  const [tripType, setTripType] = useState("One Way");

  const tripTypeChangeHandler = (event) => {
    console.log(event.target.value);
    setTripType(event.target.value);
  };

  return (
    <div className={styles["enquiry"]} id="enquiry">
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>Send Us Your Enquiry</span>
        </div>
        <div className={styles["card"]}>
          <div className={styles["card-header"]}>
            <span className={styles["card-header-title"]}>
              Flight Ticket Booking
            </span>
          </div>
          <div className={styles["radio-group"]}>
            <div className={styles["radio-btn"]}>
              <input
                type="radio"
                name="trip type"
                value="One Way"
                onChange={tripTypeChangeHandler}
                className={styles["radio-input"]}
                defaultChecked
              />
              <label className={styles["radio-label"]}>One Way</label>
            </div>
            <div className={styles["radio-btn"]}>
              <input
                type="radio"
                name="trip type"
                value="Round Trip"
                onChange={tripTypeChangeHandler}
                className={styles["radio-input"]}
              />
              <label className={styles["radio-label"]}>Round Trip</label>
            </div>
          </div>
          {tripType === "One Way" ? <OneWayFlight /> : <RoundTripFlight />}
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
