import styles from "./Footer.module.scss";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles["footer"]} id="footer">
      <div className={styles["info"]}>
        <div className={styles["office"]}>
          <span className={styles["header-title"]}>Our Office</span>
          <span className={styles["office-address__line"]}>Rowta Chariali</span>
          <span className={styles["office-address__line"]}>
            Udalguri, Assam, 784508
          </span>
        </div>
        <div className={styles["contact"]}>
          <span className={styles["header-title"]}>Contact Us</span>
          <div className={styles["contact-item"]}>
            <IoMdMail />
            <a href="mailto:info.happymiles@gmail.com">
              <span className={styles["contact-item__value"]}>
                info.happymiles@gmail.com
              </span>
            </a>
          </div>
          <div className={styles["contact-item"]}>
            <FaPhone />
            <a href="tel:+919395748621">
              <span className={styles["contact-item__value"]}>
                +919395748621
              </span>
            </a>
          </div>
          <div className={styles["contact-item"]}>
            <FaWhatsapp />
            <a href="https://api.whatsapp.com/send?phone=+919395748621">
              <span className={styles["contact-item__value"]}>
                +919395748621
              </span>
            </a>
          </div>
        </div>
        <div className={styles["social"]}>
          <span className={styles["header-title"]}>Follow us on</span>
          <div className={styles["social-icons"]}>
            <div className={styles["facebook"]}></div>
            <a href="https://www.instagram.com/hppymiles/" target="_blank"><div className={styles["instagram"]}></div></a>
            <div className={styles["twitter"]}></div>
          </div>
        </div>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["divider"]}>
          <hr className={styles["hr"]} />
        </div>
        <span>&copy; www.happymilestravel.com</span>
      </div>
    </div>
  );
};

export default Footer;
