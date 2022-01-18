import styles from "./OneWayFlight.module.scss";
import InputBox from "../../InputBoxes/InputBox/InputBox";
import TextBox from "../../InputBoxes/TextBox/TextBox";
import DateBox from "../../InputBoxes/DateBox/DateBox";
import { useState } from "react";
import { localUrl, baseUrl } from "../../../../constants/urls";
import BlueCircleLoader from "../../BlueCircleLoader/BlueCircleLoader";

const OneWayFlight = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [source, setSource] = useState("");
  const [sourceIsTouched, setSourceIsTouched] = useState(false);
  const [sourceHasError, setSourceHasError] = useState(false);
  const [sourceErrorMsg, setSourceErrorMsg] = useState("");

  const [destination, setDestination] = useState("");
  const [destinationIsTouched, setDestinationIsTouched] = useState(false);
  const [destinationHasError, setDestinationHasError] = useState(false);
  const [destinationErrorMsg, setDestinationErrorMsg] = useState("");

  const [mobileNo, setMobileNo] = useState("");
  const [mobileNoIsTouched, setMobileNoIsTouched] = useState(false);
  const [mobileNoHasError, setMobileNoHasError] = useState(false);
  const [mobileNoErrorMsg, setMobileNoErrorMsg] = useState("");

  const [emailId, setEmailId] = useState("");
  const [emailIdIsTouched, setEmailIdIsTouched] = useState(false);
  const [emailIdHasError, setEmailIdHasError] = useState(false);
  const [emailIdErrorMsg, setEmailIdErrorMsg] = useState("");

  const [noOfPassenger, setNoOfPassenger] = useState("");
  const [noOfPassengerIsTouched, setNoOfPassengerIsTouched] = useState(false);
  const [noOfPassengerHasError, setNoOfPassengerHasError] = useState(false);
  const [noOfPassengerErrorMsg, setNoOfPassengerErrorMsg] = useState("");

  const [journeyDate, setJourneyDate] = useState("");
  const [journeyDateIsTouched, setJourneyDateIsTouched] = useState(false);
  const [journeyDateHasError, setJourneyDateHasError] = useState(false);
  const [journeyDateErrorMsg, setJourneyDateErrorMsg] = useState("");

  const [description, setDescription] = useState("");

  const sourceChangeHandler = (event) => {
    const val = event.target.value;

    setSourceIsTouched(true);
    setSource(val);

    if (sourceIsTouched && val.length === 0) {
      setSourceHasError(true);
      setSourceErrorMsg(" * Source field can not be empty");
    } else {
      setSourceHasError(false);
      setSourceErrorMsg("");
    }
  };

  const destinationChangeHandler = (event) => {
    const val = event.target.value;

    setDestinationIsTouched(true);
    setDestination(val);

    if (destinationIsTouched && val.length === 0) {
      setDestinationHasError(true);
      setDestinationErrorMsg(" * Destination field can not be empty");
    } else {
      setDestinationHasError(false);
      setDestinationErrorMsg("");
    }
  };

  const mobileNoChangeHandler = (event) => {
    const val = event.target.value;

    setMobileNoIsTouched(true);
    setMobileNo(val);

    if (mobileNoIsTouched && val.length === 0) {
      setMobileNoHasError(true);
      setMobileNoErrorMsg(" * Mobile No field can not be empty");
    } else {
      setMobileNoHasError(false);
      setMobileNoErrorMsg("");
    }
  };

  const emailIdChangeHandler = (event) => {
    const val = event.target.value;
    setEmailId(val);
  };

  const noOfPassengerChangeHandler = (event) => {
    const val = event.target.value;

    setNoOfPassengerIsTouched(true);
    setNoOfPassenger(val);

    if (noOfPassenger && val.length === 0) {
      setNoOfPassengerHasError(true);
      setNoOfPassengerErrorMsg(" * No of Passenger field can not be empty");
    } else {
      setNoOfPassengerHasError(false);
      setNoOfPassengerErrorMsg("");
    }
  };

  const journeyDateChangeHandler = (event) => {
    console.log("Hi");
    console.log(event.target.value);
    setJourneyDate(event.target.value);
    setJourneyDateIsTouched(true);
    setJourneyDateHasError(false);
    setJourneyDateErrorMsg("");
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const submitFormHandler = async () => {
    setIsLoading(true);

    //validation
    if (!source) {
      setSourceHasError(true);
      setSourceErrorMsg("* Source not added");
      setIsLoading(false);
      return;
    }

    if (!destination) {
      setDestinationHasError(true);
      setDestinationErrorMsg("* Destination not added");
      setIsLoading(false);
      return;
    }

    if (!mobileNo) {
      setMobileNoHasError(true);
      setMobileNoErrorMsg("* Mobile No not added");
      setIsLoading(false);
      return;
    }

    if (!noOfPassenger) {
      setNoOfPassengerHasError(true);
      setNoOfPassengerErrorMsg("* No of Passenger not added");
      setIsLoading(false);
      return;
    }

    if (!journeyDate) {
      setJourneyDateHasError(true);
      setJourneyDateErrorMsg("* Journey Date not selected");
      setIsLoading(false);
      return;
    }

    //Call
    const formData = new FormData();
    formData.append("source", source);
    formData.append("destination", destination);
    formData.append("mobileNo", mobileNo);
    formData.append("emailId", emailId);
    formData.append("noOfPassenger", noOfPassenger);
    formData.append("journeyDate", journeyDate);
    formData.append("tripType", "One Way");
    formData.append("returnDate", "none");
    formData.append("description", description);

    const res = await fetch(`${baseUrl}/happymiles/send-enquiry`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
    setIsLoading(false);

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className={styles["form"]}>
      <div className={styles["row"]}>
        <InputBox
          type="text"
          id="Source"
          label="Source"
          value={source}
          onChange={sourceChangeHandler}
          hasError={sourceHasError}
          errorMsg={sourceErrorMsg}
        />
        <InputBox
          type="text"
          id="Destination"
          label="Destination"
          value={destination}
          onChange={destinationChangeHandler}
          hasError={destinationHasError}
          errorMsg={destinationErrorMsg}
        />
      </div>
      <div className={styles["row"]}>
        <InputBox
          type="text"
          id="mobileno"
          label="Mobile No"
          value={mobileNo}
          onChange={mobileNoChangeHandler}
          hasError={mobileNoHasError}
          errorMsg={mobileNoErrorMsg}
        />
        <InputBox
          type="text"
          id="email"
          label="Email"
          value={emailId}
          onChange={emailIdChangeHandler}
        />
      </div>
      <div className={styles["row"]}>
        <InputBox
          type="text"
          id="noofpassenger"
          label="No of Passenger"
          value={noOfPassenger}
          onChange={noOfPassengerChangeHandler}
          hasError={noOfPassengerHasError}
          errorMsg={noOfPassengerErrorMsg}
        />
        <DateBox
          id="journey-date"
          label="Date of Journey"
          value={journeyDate}
          onChange={journeyDateChangeHandler}
        />
      </div>
      <div className={styles["row"]}>
        <TextBox
          type="text"
          id="description"
          label="Describe your requirements, prefered time, prefered flight or any other requirements"
          value={description}
          onChange={descriptionChangeHandler}
        />
      </div>

      <div className={styles["actions"]}>
        <div className={styles["cta-btn"]} onClick={submitFormHandler}>
          <span>Send Enquiry</span>
        </div>
      </div>

      {isLoading && (
        <div className={styles["loading"]}>
          <BlueCircleLoader />
        </div>
      )}

      {showSuccess && (
        <div className={styles["success-message"]}>
          <span className={styles["success-message-title"]}>
            We received your message. We will reach out to you soon. Thank you
            for contacting us.
          </span>
        </div>
      )}
    </div>
  );
};

export default OneWayFlight;
