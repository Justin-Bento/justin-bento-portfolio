import React from 'react';

export default function header() {
  return (
    <header>
      <ul role="list" className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <li>Section 1</li>
        <li>Section 2</li>
        <li>Section 3</li>
      </ul>
    </header>
  );
}
