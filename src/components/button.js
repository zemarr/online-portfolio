import React from 'react';
import PropTypes from "prop-types"
import './button.css'
import { Link } from 'gatsby'

const Button = ({ url, name, className }) => {
    return (
        <>
            <Link to={url} className={`button ${className}`}>{name}</Link>
        </>
    )
}


Button.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Button;