const Badge = ({ 
  children, 
  variant = 'default',
  size = 'default',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center font-tactical font-semibold uppercase tracking-wider rounded-full'
  
  const variants = {
    default: 'bg-tactical-gray border border-tactical-light text-white',
    success: 'bg-tactical-green/20 border border-tactical-green text-tactical-green',
    warning: 'bg-warning-amber/20 border border-warning-amber text-warning-amber',
    danger: 'bg-fire-orange/20 border border-fire-orange text-fire-orange',
    info: 'bg-steel-blue/20 border border-steel-blue text-steel-blue'
  }
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    default: 'px-3 py-1 text-xs',
    lg: 'px-4 py-2 text-sm'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

export default Badge