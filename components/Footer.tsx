import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="bg-easternblue-700 overflow-hidden">
      <div className="container mx-auto py-4 sm:py-6 flex flex-col md:flex-row md:items-center justify-between">
        <p className="text-white">Some content or remove this item</p>
        <ul role="list" className="flex items-center list-none text-white">
          <li>
            <a href="www.example_website.com">
              <Button variant="ghost" size="icon">
                I1
              </Button>
            </a>
          </li>
          <li>
            <a href="www.example_website.com">
              <Button variant="ghost" size="icon">
                I2
              </Button>
            </a>
          </li>
          <li>
            <a href="www.example_website.com">
              <Button variant="ghost" size="icon">
                I3
              </Button>
            </a>
          </li>
          <li>
            <a href="www.example_website.com">
              <Button variant="ghost" size="icon">
                I4
              </Button>
            </a>
          </li>
          <li>
            <a href="www.example_website.com">
              <Button variant="ghost" size="icon">
                I5
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
