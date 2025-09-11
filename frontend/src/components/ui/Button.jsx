const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none flex items-center justify-center'
  
  const variants = {
    primary: 'bg-fire-orange text-tactical-dark hover:bg-fire-orange/90',
    secondary: 'border-2 border-steel-blue text-steel-blue hover:bg-steel-blue hover:text-tactical-dark',
    outline: 'border border-tactical-light text-white hover:bg-tactical-light hover:text-white',
    ghost: 'text-steel-blue hover:bg-steel-blue/20'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg font-bold'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button