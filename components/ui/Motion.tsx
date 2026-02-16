"use client";

import {
  MotionProps,
  Variants,
  motion,
  useReducedMotion,
} from "framer-motion";

interface FadeInProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
}

export function Stagger({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0.08,
  once = true,
  ...props
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.18 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({
  children,
  className,
  ...props
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();
  const variants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: "easeOut" },
        },
      };

  return (
    <motion.div className={className} variants={variants} {...props}>
      {children}
    </motion.div>
  );
}
