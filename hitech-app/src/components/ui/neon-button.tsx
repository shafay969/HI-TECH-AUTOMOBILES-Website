import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

// Brand red: #CC0000 (Hi-Tech Automobiles logo colour)
const buttonVariants = cva(
  'relative group border text-foreground mx-auto text-center rounded-full',
  {
    variants: {
      variant: {
        default:
          'bg-[#CC0000]/5 hover:bg-[#CC0000]/0 border-[#CC0000]/25 text-[#CC0000]',
        solid:
          'bg-[#CC0000] hover:bg-[#aa0000] text-white border-transparent hover:border-white/20 transition-all duration-200',
        ghost:
          'border-transparent bg-transparent hover:border-[#CC0000]/40 hover:bg-[#CC0000]/5 text-[#CC0000]',
      },
      size: {
        default: 'px-7 py-1.5 text-sm',
        sm: 'px-4 py-0.5 text-xs',
        lg: 'px-10 py-2.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  neon?: boolean
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, neon = true, size, variant, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {/* top neon strip — appears on hover */}
        <span
          className={cn(
            'absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#CC0000] to-transparent hidden',
            neon && 'block'
          )}
        />
        {children}
        {/* bottom neon strip — dim at rest, brightens on hover */}
        <span
          className={cn(
            'absolute group-hover:opacity-60 opacity-20 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#CC0000] to-transparent hidden',
            neon && 'block'
          )}
        />
      </button>
    )
  }
)

NeonButton.displayName = 'NeonButton'

export { NeonButton, buttonVariants }
