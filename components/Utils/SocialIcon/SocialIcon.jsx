import styles from "./SocialIcon.module.scss";
import { IconContext } from "react-icons";

const SocialIcon = (props) => {
  return (
    <IconContext.Provider value={{className: "social-icon", size: "30px", color: "white"}}>
      {props.children}
    </IconContext.Provider>
  );
};

export default SocialIcon;
