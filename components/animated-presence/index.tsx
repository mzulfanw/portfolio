'use client';

import { motion } from 'motion/react';
import { ElementType, ReactNode } from 'react';
import type { HTMLMotionProps } from 'motion/react';

interface AnimatedPresenceProps extends HTMLMotionProps<'div' | 'section'> {
  children: ReactNode;
  as: 'div' | 'section';
  className?: string | undefined;
}

export default function AnimatedPresence({
  children,
  as = 'div',
  className,
  ...rest
}: AnimatedPresenceProps) {
  const Element = motion[as] as ElementType;
  return (
    <Element {...rest} className={className}>
      {children}
    </Element>
  );
}
