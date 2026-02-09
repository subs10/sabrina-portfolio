"use client";

import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 rounded-sm";

  const variants = {
    primary:
      "bg-gray-900 text-off-white hover:bg-buttercup hover:text-gray-900",
    outline:
      "border border-gray-900 text-gray-900 hover:bg-buttercup hover:border-buttercup hover:text-gray-900",
    ghost:
      "text-gray-900 hover:text-buttercup-dark",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
