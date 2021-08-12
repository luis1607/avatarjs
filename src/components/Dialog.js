import React from 'react';
import PropTypes from 'prop-types'

const Dialog = ({title,subtitle,children}) => {
    return ( 
        <div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            {children}
        </div>
     );
}

Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}
 
export default Dialog;