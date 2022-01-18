import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={styles["services"]}>
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <span className={styles["header-title"]}>About Us</span>
        </div>
        <div className={styles["paragraphs"]}>
          <p>
            Happy miles travel enables you for seamlessly booking your tickets
            on a call as our agents on the backend manually search the best deal
            and provides you with best prices on the route you have choosen. It
            is a hassle free alternative for those who face problems in finding
            the best deal and book tickets on their own.
          </p>
          <p>
            We in happy miles travel allow our customers to book their tickets
            smartly on a call as our agents handles all the complexity and
            ensures that our customers get exactly what we are committing. Call
            us to save big on all kinds of travel products and services and have
            a memorable travel experience in your budget. Customers can book
            their tickets with no convenience fee and with transparency in
            ticket pricing. We offer budget pricing like no other travel company
            available on the internet, and also offers discounts on all major
            routes accross globe. Our time to time updated list of pricing on
            major routes will allow you to compare low prices on air tickets. We
            are also working in creating awesome vacations for our customers
            through customized holiday packages & tours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
