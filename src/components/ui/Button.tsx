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
  noIcon?: boolean;
  disabled?: boolean;
}

const ArrowIcon = () => (
  <span className="btn-arrow inline-flex overflow-hidden">
    <svg
      className="w-4 h-4 shrink-0 ml-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </span>
);

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  onClick,
  type = "button",
  noIcon = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "group/btn inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm overflow-hidden";

  const variants = {
    primary:
      "bg-gray-900 text-off-white hover:bg-buttercup hover:text-gray-900",
    outline:
      "border border-gray-900 text-gray-900 hover:bg-buttercup hover:border-buttercup hover:text-gray-900",
    ghost:
      "text-gray-900 hover:text-buttercup-dark",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;
  const showArrow = variant !== "ghost" && !noIcon;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowIcon />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={`${styles} disabled:opacity-50 disabled:cursor-not-allowed`} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
