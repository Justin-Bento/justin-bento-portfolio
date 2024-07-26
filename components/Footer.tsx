import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="bg-easternblue-700 overflow-hidden">
      <div className="container mx-auto py-4 sm:py-6">
        <p className="text-white">Some content or remove this item</p>
        <ul role="list" className="text-white">
          <li>
            <a href="www.example_website.com">
              <Button variant="ghost" size="icon">
                I1
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
