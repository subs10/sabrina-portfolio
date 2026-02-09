interface TagProps {
  label: string;
  className?: string;
}

export default function Tag({ label, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium tracking-wide text-gray-600 bg-gray-100 rounded-sm ${className}`}
    >
      {label}
    </span>
  );
}
