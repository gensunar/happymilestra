import styles from "./Section2.module.scss";
import StepItem from "./StepItem/StepItem";

const Section2 = (props) => {
  return (
    <div className={styles["section2"]}>
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>How We Work</span>
        </div>
        <div className={styles["grid"]}>
          <StepItem
            backgroundImage="/images/call.png"
            step="Step 1"
            header="Enquiry"
            description="Get in touch with us with your travel plan like date of journey, flight preferences or any other requirements."
            cardBg="#ffffff"
            bgColor="#D70968"
            topColor="#DB0372"
          />
          <StepItem
            backgroundImage="/images/search.png"
            step="Step 2"
            header="Offers & Discounts"
            description="We will search for best offers & discounts we can provide on your booking. We always look for offering prices that are lower than the market price."
            cardBg="#ffffff"
            bgColor="#25A9E8"
            topColor="#24ACE3"
          />
          <StepItem
            backgroundImage="/images/pay.png"
            step="Step 3"
            header="Pay & Book"
            description="If you like our offered price, send us your details along with the required amount and confirm the booking."
            cardBg="#ffffff"
            bgColor="#05C894"
            topColor="#00D5A6"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
