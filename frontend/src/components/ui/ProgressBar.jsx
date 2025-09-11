const ProgressBar = ({ 
  label, 
  value, 
  color = 'bg-steel-blue',
  className = '',
  ...props 
}) => {
  return (
    <div className={`space-y-2 ${className}`} {...props}>
      <div className="flex items-center justify-between">
        <span className="text-gray-300">{label}</span>
        <span className={`font-semibold ${
          color === 'bg-tactical-green' ? 'text-tactical-green' :
          color === 'bg-fire-orange' ? 'text-fire-orange' :
          color === 'bg-steel-blue' ? 'text-steel-blue' :
          color.includes('gradient') ? 'text-tactical-green' :
          'text-steel-blue'
        }`}>
          {value}%
        </span>
      </div>
      <div className="w-full bg-tactical-light rounded-full h-2">
        <div 
          className={`${color} h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar