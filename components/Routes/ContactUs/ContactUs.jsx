import styles from "./ContactUs.module.scss";
import InputBox from "../../Utils/InputBoxes/InputBox/InputBox";
import TextBox from "../../Utils/InputBoxes/TextBox/TextBox";
import { useState } from "react";
import { localUrl, baseUrl } from "../../../constants/url";
import BlueCircleLoader from "../../Utils/BlueCircleLoader/BlueCircleLoader";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [nameHasError, setNameHasError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");

  const [subject, setSubject] = useState("");
  const [subjectIsTouched, setSubjectIsTouched] = useState(false);
  const [subjectHasError, setSubjectHasError] = useState(false);
  const [subjectErrorMsg, setSubjectErrorMsg] = useState("");

  const [emailId, setEmailId] = useState("");
  const [emailIdIsTouched, setEmailIdIsTouched] = useState(false);
  const [emailIdHasError, setEmailIdHasError] = useState(false);
  const [emailIdErrorMsg, setEmailIdNoErrorMsg] = useState("");

  const [message, setMessage] = useState("");
  const [messageIsTouched, setMessageIsTouched] = useState(false);
  const [messageHasError, setMessageHasError] = useState(false);
  const [messageErrorMsg, setMessageErrorMsg] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const nameChangeHandler = (event) => {
    const val = event.target.value;

    setNameIsTouched(true);
    setName(val);

    if (nameIsTouched && val.length === 0) {
      setNameHasError(true);
      setNameErrorMsg(" * Name field can not be empty");
    } else {
      setNameHasError(false);
      setNameErrorMsg("");
    }
  };

  const subjectChangeHandler = (event) => {
    const val = event.target.value;

    setSubjectIsTouched(true);
    setSubject(val);

    if (subjectIsTouched && val.length === 0) {
      setSubjectHasError(true);
      setSubjectErrorMsg(" * Subject No field can not be empty");
    } else {
      setSubjectHasError(false);
      setSubjectErrorMsg("");
    }
  };

  const emailChangeHandler = (event) => {
    const val = event.target.value;

    setEmailIdIsTouched(true);
    setEmailId(val);

    if (emailIdIsTouched && val.length === 0) {
      setEmailIdHasError(true);
      setEmailIdNoErrorMsg(" * Email Id field can not be empty");
    } else {
      setEmailIdHasError(false);
      setEmailIdNoErrorMsg("");
    }
  };

  const messageChangeHandler = (event) => {
    const val = event.target.value;

    setMessageIsTouched(true);
    setMessage(val);

    if (messageIsTouched && val.length === 0) {
      setMessageHasError(true);
      setMessageErrorMsg(" * Message field can not be empty");
    } else {
      setMessageHasError(false);
      setMessageErrorMsg("");
    }
  };

  const submitFormHandler = async () => {
    setIsLoading(true);

    if (nameHasError || !nameIsTouched) {
      setNameHasError(true);
      setNameErrorMsg("* Name field can not be empty");
      setIsLoading(false);
      return;
    }

    if (subjectHasError || !subjectIsTouched) {
      setSubjectHasError(true);
      setSubjectErrorMsg("* Mobile No field can not be empty");
      setIsLoading(false);
      return;
    }

    if (emailIdHasError || !emailIdIsTouched) {
      setEmailIdHasError(true);
      setEmailIdNoErrorMsg("* Email Id field can not be empty");
      setIsLoading(false);
      return;
    }

    if (messageHasError || !messageIsTouched) {
      setMessageHasError(true);
      setMessageErrorMsg("* Message field can not be empty");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("subject", subject);
    formData.append("emailId", emailId);
    formData.append("message", message);

    const res = await fetch(`${baseUrl}/neweb/send-enquiry`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setIsLoading(false);
    resetForm();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const resetForm = () => {
    setName("");
    setNameIsTouched(false);
    setNameHasError(false);
    setNameErrorMsg("");

    setSubject("");
    setSubjectIsTouched(false);
    setSubjectHasError(false);
    setSubjectErrorMsg("");

    setEmailId("");
    setEmailIdIsTouched(false);
    setEmailIdHasError(false);
    setEmailIdNoErrorMsg("");

    setMessage("");
  };

  return (
    <div className={styles["home"]}>
      <div className={styles["left"]}>
        <div className={styles["form"]}>
          <div className={styles["header"]}>
            <span className={styles["header-title"]}>Write To Us</span>
          </div>
          <div>
            <InputBox
              type="text"
              id="name"
              name="Name"
              placeholder="NAME"
              value={name}
              onChange={nameChangeHandler}
              hasError={nameHasError}
              errorMsg={nameErrorMsg}
            />
            <InputBox
              type="text"
              id="subject"
              name="Subject"
              placeholder="SUBJECT"
              value={subject}
              onChange={subjectChangeHandler}
              hasError={subjectHasError}
              errorMsg={subjectErrorMsg}
            />
            <InputBox
              type="text"
              id="email"
              name="Email"
              placeholder="EMAIL"
              value={emailId}
              onChange={emailChangeHandler}
              hasError={emailIdHasError}
              errorMsg={emailIdErrorMsg}
            />
            <TextBox
              type="text"
              id="message"
              name="Message"
              placeholder="MESSAGE"
              value={message}
              onChange={messageChangeHandler}
              hasError={messageHasError}
              errorMsg={messageErrorMsg}
            />
            <div className={styles["actions"]}>
              <span className={styles["send-btn"]} onClick={submitFormHandler}>
                Send
              </span>
            </div>

            {isLoading && (
              <div className={styles["loading"]}>
                <BlueCircleLoader />
              </div>
            )}
          </div>
        </div>
        <div className={styles["side-object"]}></div>
      </div>
      <div className={styles["right"]}>
        <div className={styles["text-container"]}>
          <div className={styles["address"]}>
            <span className={styles["address-header"]}>NE WebSolutions</span>
            <span className={styles["address-item"]}>
              Meda Bhavan, City Public College
            </span>
            <span className={styles["address-item"]}>
              Behind MP Book Stall, Dr. R.P. Road, Dispur
            </span>
            <span className={styles["address-item"]}>
              Guwahati, Assam, 781006
            </span>
            <span className={styles["address-item"]}>
              Phone No : +9196363663333
            </span>
            <span className={styles["address-item"]}>
              Email Id : newebsolutions2020@gmail.com
            </span>
          </div>
          <div className={styles["message"]}>
            <span className={styles["message-header"]}>
              We create your brand
            </span>
            <span className={styles["message-item"]}>
              We help you create your brand from branding, build your <br /> Website, App & Digital Marketing.
            </span>
          </div>
        </div>
        <div className={styles["hero-image"]}></div>
      </div>

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

export default ContactUs;
