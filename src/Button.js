import PropTypes from "prop-types";
import styles from "./Button.module.css";

/**
 * TIP
 * css 모듈 확인할것 - " ~.module.css"로 만들어지는 파일은 오브젝트로 전달된다.
 * className={styles.btn} 이게 개발자도구에서는 어떻게 노출되는지 확인해봐
 * 랜덤으로 클래스명이 생성되고 있음 
 */

function Button ({text}) {
  return <button className={styles.btn}>{text}</button>;
}
Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;