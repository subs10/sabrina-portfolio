"use client";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  const options = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
      {options.map((option) => {
        const isActive = active === option;
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`text-sm tracking-wide px-4 py-2 rounded-sm shadow-sm transition-colors duration-200 ${
              isActive
                ? "bg-buttercup text-gray-900"
                : "bg-white text-gray-500 hover:text-gray-900"
            }`}
            data-cursor-hover
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
