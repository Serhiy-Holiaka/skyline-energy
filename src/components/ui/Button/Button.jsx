import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import classes from './Button.module.css';

const Button = forwardRef(({ children, actionType, type, icon, additionalClasses, onClick, href, target, isDefaultLink, ...rest }, ref) => {
    const handleClick = typeof onClick === 'function' ? onClick : null;

    if (isDefaultLink && href) {
        return (
            <a
                ref={ref}
                href={href}
                className={clsx('is-clickable', classes.btn, additionalClasses)}
                rel="noopener noreferrer nofollow noindex"
                target={target}
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
                className={clsx('is-clickable', classes.btn, additionalClasses)}
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
                'is-clickable',
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
    target: PropTypes.string,
    isDefaultLink: PropTypes.bool,
    type: PropTypes.oneOf(['primary', 'rounded', 'link'])
};

Button.defaultProps = {
    isDefaultLink: false,
    actionType: 'button',
    type: 'primary',
    target: '_blank'
};

export default Button;
