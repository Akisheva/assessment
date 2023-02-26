import PropTypes from "prop-types";

const Button = ({text, className, type="button", ...props}) => {
    return (
        <button className={className} type={type} {...props}>
            {text}
        </button>
    )
}
Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    className: PropTypes.string
  };

export default Button