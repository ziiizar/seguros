import React from 'react'


interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

const ValueCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = "" }) => (
  <div className={`space-y-4 max-w-sm lg:w-80 lg:px-4 ${className}`}>
    <div className="flex">
      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold feature-card-title">{title}</h3>
    <p className="text-sm sm:text-base feature-card-description">{description}</p>
  </div>
)

export default ValueCard