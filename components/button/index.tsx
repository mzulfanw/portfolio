'use client';

import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils/classNames';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary';
  text: string;
};

export default function Button(props: ButtonProps) {
  const { variant, text, ...rest } = props;

  const VariantTheme = {
    primary: {
      className:
        'bg-primary-dark text-white hover:bg-primary-light focus:ring-primary-dark',
    },
    secondary: {
      className:
        'bg-white text-primary-dark hover:bg-gray-100 focus:ring-primary-dark',
    },
  };

  return (
    <button
      {...rest}
      className={cn(
        VariantTheme[variant].className,
        'w-full rounded-full px-3 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
      )}
    >
      {text}
    </button>
  );
}
