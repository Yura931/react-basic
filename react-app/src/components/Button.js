import PropTypes from 'prop-types';
import styled from "./Button.module.css";   
// css module 파일 만든 후 import해서 셀렉터를 property처럼 사용 가능

const Button = ({ text, onClick }) => {
    return (
        <button className={styled.btn} onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;