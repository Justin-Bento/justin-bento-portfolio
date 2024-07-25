import React from 'react';
import { Button } from './ui/button';

export default function header() {
  return (
    <header className="overflow-hidden bg-white shadow py-4 sm:py-6">
      <ul role="list" className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
        <li className="flex items-start justify-between">
          <Button variant="ghost" size="sm">
            JB
          </Button>
        </li>
        <li className="flex items-start justify-center">
          <Button variant="ghost" size="sm">
            Home
          </Button>
          <Button variant="ghost" size="sm">
            About
          </Button>
          <Button variant="ghost" size="sm">
            Projects
          </Button>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
        </li>
        <li className="flex items-start justify-end">
          <Button variant="secondary" size="sm">
            GitHub
          </Button>
        </li>
      </ul>
    </header>
  );
}
