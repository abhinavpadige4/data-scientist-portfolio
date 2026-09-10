interface SkillBadgeProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function SkillBadge({ label, variant = 'primary' }: SkillBadgeProps) {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const getVariantClasses = (variant: SkillBadgeProps['variant']) => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-100 text-blue-800';
      case 'secondary':
        return 'bg-gray-100 text-gray-800';
      case 'outline':
        return 'border border-gray-300 text-gray-700 bg-transparent';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <span className={`${baseClasses} ${getVariantClasses(variant)}`}>
      {label}
    </span>
  );
}