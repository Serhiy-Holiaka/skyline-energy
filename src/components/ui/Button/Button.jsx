import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import classes from './Button.module.css';

const Button = forwardRef(({ children, actionType, type, icon, additionalClasses, onClick, href, isDefaultLink, ...rest }, ref) => {
    const handleClick = typeof onClick === 'function' ? onClick : null;

    if (isDefaultLink && href) {
        return (
            <a
                ref={ref}
                href={href}
                className={clsx(classes.btn, additionalClasses)}
                rel="noopener noreferrer nofollow noindex"
                {...rest}
            >
                {children && <span className={icon ? 'mr-3' : ''}>{children}</span>}
                {icon && icon}
            </a>
        );
    }

    if (href) {
        return (
            <Link
                ref={ref}
                href={href}
                className={clsx(classes.btn, additionalClasses)}
                {...rest}
            >
                {children && <span className={icon ? 'mr-3' : ''}>{children}</span>}
                {icon && icon}
            </Link>
        );
    }

    return (
        <button
            ref={ref}
            className={clsx(
                classes.btn,
                classes[type],
                additionalClasses
            )}
            onClick={handleClick}
            type={actionType}
            {...rest}
        >
            {children && <span className={icon ? 'mr-3' : ''}>{children}</span>}
            {icon && icon}
        </button>
    );
});

Button.displayName = 'Button';

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    href: PropTypes.string,
    additionalClasses: PropTypes.string,
    onClick: PropTypes.func,
    isDefaultLink: PropTypes.bool,
    type: PropTypes.oneOf(['primary', 'rounded', 'link'])
};

Button.defaultProps = {
    isDefaultLink: false,
    actionType: 'button',
    type: 'primary',
};

export default Button;
