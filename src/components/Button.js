import PropTypes from 'prop-types';

export const Button = ({ color, text, onClick }) => {
    return (
        <button
            className="btn"
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    color: 'steelblue',
    text: 'hello',
};

export default Button;
