import PropTypes from 'prop-types';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-gold-500 text-navy-900 hover:bg-gold-600 shadow-lg hover:shadow-glow btn-primary',
    secondary: 'border-2 border-gold-500 text-gold-400 hover:bg-gold-500/10 hover:text-gold-300 hover:border-gold-400',
    ghost: 'text-slate-400 hover:text-gold-400 hover:bg-navy-800/50',
    dark: 'bg-navy-800 text-white border border-navy-700 hover:bg-navy-700 hover:border-gold-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'dark']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  icon: PropTypes.elementType,
};