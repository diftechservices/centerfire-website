const StatusIndicator = ({ 
  status = 'operational',
  size = 'default',
  showText = false,
  className = '',
  ...props 
}) => {
  const statusConfig = {
    operational: {
      color: 'bg-tactical-green',
      text: 'OPERATIONAL',
      textColor: 'text-tactical-green'
    },
    warning: {
      color: 'bg-warning-amber',
      text: 'WARNING',
      textColor: 'text-warning-amber'
    },
    critical: {
      color: 'bg-fire-orange',
      text: 'CRITICAL',
      textColor: 'text-fire-orange'
    },
    offline: {
      color: 'bg-gray-500',
      text: 'OFFLINE',
      textColor: 'text-gray-500'
    }
  }
  
  const sizes = {
    sm: 'w-2 h-2',
    default: 'w-3 h-3',
    lg: 'w-4 h-4'
  }
  
  const config = statusConfig[status]
  const sizeClass = sizes[size]
  
  if (showText) {
    return (
      <div className={`inline-flex items-center space-x-3 ${className}`} {...props}>
        <div className={`${sizeClass} ${config.color} rounded-full animate-pulse`}></div>
        <span className={`text-sm font-tactical font-semibold ${config.textColor}`}>
          SYSTEM STATUS: {config.text}
        </span>
      </div>
    )
  }
  
  return (
    <div className={`${sizeClass} ${config.color} rounded-full animate-pulse ${className}`} {...props}></div>
  )
}

export default StatusIndicator