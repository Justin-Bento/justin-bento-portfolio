import React from 'react';

export default function header() {
  return (
    <header className="overflow-hidden bg-white shadow py-4 sm:py-6">
      <ul role="list" className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
        <li className="flex items-start justify-between ring">Section 1</li>
        <li className="flex items-start justify-center ring">Section 2</li>
        <li className="flex items-start justify-end ring">Section 3</li>
      </ul>
    </header>
  );
}
