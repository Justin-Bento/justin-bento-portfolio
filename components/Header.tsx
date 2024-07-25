import React from 'react';
import { Button } from './ui/button';
import { Logo } from './Logo';

export default function header() {
  return (
    <header className="overflow-hidden bg-white shadow py-4 sm:py-6">
      <ul role="list" className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
        <li className="flex items-center justify-between">
          <Button variant="ghost" size="sm">
            <Logo />
          </Button>
        </li>
        <li className="flex items-center justify-center">
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
        <li className="flex items-center justify-end">
          <Button variant="secondaryColor" size="sm" className="inline-flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-black stroke-width-1 size-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
              <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
            </svg>{' '}
            GitHub
          </Button>
        </li>
      </ul>
    </header>
  );
}
