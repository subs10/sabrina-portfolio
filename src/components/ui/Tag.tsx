interface TagProps {
  label: string;
  className?: string;
}

export default function Tag({ label, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium tracking-wide text-gray-700 bg-gray-200 rounded-sm ${className}`}
    >
      {label}
    </span>
  );
}
