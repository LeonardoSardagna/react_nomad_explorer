import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
    base: 'flex items-center justify-center gap-2 px-5 py-2 rounded-md font-medium',

    variants: {
        variant: {
            primary: 'bg-purpleDark text-zinc-950 hover:bg-purpleMedium hover:transition ease-in-out hover:scale-105 hover:duration-200',
            secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:transition ease-in-out hover:scale-105 hover:duration-200'
        },

        size: {
            default: 'py-2',
            full: 'w-full h-11'
        }
    },

    defaultVariants: {
        variant: 'primary'
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

export function Button({
    children,
    variant,
    size,
    ...props
}: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({ variant, size })}>
            {children}
        </button>
    )
}