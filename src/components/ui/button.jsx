/* eslint-disable react/prop-types */

const defaultButtonStyle = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
const getVariant = (variant) => {
  if (variant === 'destructive') {
      return 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90'
  } else if (variant === 'outline') {
      return 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'
  } else if (variant === 'secondary') {
      return 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80'
  } else if (variant === 'ghost') {
      return 'hover:bg-accent hover:text-accent-foreground'
  } else if (variant === 'link') {
      return 'text-primary underline-offset-4 hover:underline'
  } else {
      return 'bg-primary text-primary-foreground shadow hover:bg-primary/90'
  }
}

const getSize = (size) => {
  if (size === 'sm') {
      return 'h-8 rounded-md px-3 text-xs'
  } else if (size === 'lg') {
      return 'h-10 rounded-md px-8'
  } else if (size === 'icon') {
      return 'h-9 w-9'
  } else {
      return 'h-9 px-4 py-2'
  }
}

const Button = ({ className, variant="default", size="default", ...props }) => {
    
    return (
      <div
        className= {getVariant(variant) + ' ' + getSize(size) + ' ' + defaultButtonStyle + ' ' + className}
        {...props}
      />
    )
  }

export { Button }
