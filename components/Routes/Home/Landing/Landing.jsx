import styles from "./Landing.module.scss";
import NavLink from "next/link";

const Landing = () => {
  return (
    <div className={styles["landing"]}>
      <div className={styles["left"]}>
        <div className={styles["container"]}>
          <div className={styles["header"]}>
            <span className={styles["header-title"]}>
              A New WAY <br/>to travel<br/>
            </span>
          </div>
          <div className={styles["sub-header"]}>
            {/* <p>
              Book budget friendly Domestic and International Air tickets with
              best offers at Happy miles. Customers don&apos;t need to spend hours
              searching for the right ticket in front of their computer, your
              confirm ticket is just one call away.
            </p> */}
            <p>Looking for the right travel deals on the internet? Happy Miles
              is a travel agency that offers discount as a gift. Book budget friendly
              Domestic and International Air tickets with best offers at Happy miles. 
              We pride ourselves on the quality and reliability of our services. 
              We are committed to offering travel service of the highest quality.</p>
          </div>
          <div className={styles["actions"]}>
            <div className={styles["direct"]}>
              <div className={styles["direct-header"]}>
                Talk To Us
              </div>
              <div className={styles["social-icons"]}>

                <a href="https://api.whatsapp.com/send?phone=+919395748621">
                  <div className={styles["whatsapp"]}>
                    <div className={styles["whatsapp-bubble"]}>
                      <span className={styles["bubble-header"]}>
                        Whatsapp No
                      </span>
                      <span className={styles["bubble-value"]}>
                        +919395748621
                      </span>
                    </div>
                  </div>
                </a>
                <a href="tel:+919395748621">
                  <div className={styles["call"]}>
                    <div className={styles["call-bubble"]}>
                      <span className={styles["bubble-header"]}>Mobile No</span>
                      <span className={styles["bubble-value"]}>
                        +919395748621
                      </span>
                    </div>
                  </div>
                </a>

                <a href="mailto:info.happymiles@gmail.com">
                  <div className={styles["email"]}>
                    <div className={styles["email-bubble"]}>
                      <span className={styles["bubble-header"]}>
                        Email Id
                      </span>
                      <span className={styles["bubble-value"]}>
                        info.happymiles@gmail.com
                      </span>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["right"]}>
        <div className={styles["hero-image"]}></div>
      </div>
    </div>
  );
};

export default Landing;
