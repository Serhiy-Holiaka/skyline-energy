import { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import classes from './Error.module.css';

const Error = ({ children, additionalClasses }) => {
    return <span className={clsx(classes.error, additionalClasses)}>{children}</span>;
};

Error.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    additionalClasses: PropTypes.string,
};

export default memo(Error);
