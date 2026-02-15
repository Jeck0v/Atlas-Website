import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const menuItems = ['Home', 'Product', 'Documentation', 'Support'];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="w-full bg-white fixed top-0 z-50 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <ul className="flex items-center space-x-4 md:space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`text-black font-black text-xs md:text-sm uppercase tracking-wider transition-all duration-200 inline-block px-2 md:px-3 py-1 border-2 border-transparent ${
                  hoveredIndex === index ? 'bg-[#1E40AF] text-white border-black' : ''
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
