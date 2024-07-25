import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <section className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
          <BackgroundPattern />
          <div className="min-h-dvh grid place-content-center">
            <HomeContent />
          </div>
        </section>
      </main>
    </>
  );
}

export function HomeContent() {
  return (
    <article className="max-w-4xl mx-auto lg:text-center sm:text-balance">
      <div className="bg-easternblue-500 rounded-full size-20 lg:mx-auto mb-4 ring ring-neutral-800"></div>
      <p className="text-base">Hi, I'm Justin Bento.</p>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        From Designs to Dynamic Websites: Join Me On My Coding Adventure!
      </h1>
      <p className="text-lg lg:text-xl leading-7 [&:not(:first-child)]:mt-3 lg:text-balance">
        I'm a Multimedia Designer venturing into the field of Front-End Development. My goal is to blend my knowledge of
        accessibility design with the power of code to create engaging websites that everyone can enjoy. Join me on this
        journey of creativity and interactivity!
      </p>
      <div className="flex items-center flex-col md:flex-row lg:justify-center gap-4 mt-8">
        <Button variant="brand" className="w-full md:w-auto">
          Explore My Portfolio
        </Button>
        <Button variant="outline" className="w-full md:w-auto">
          Let's Connect
        </Button>
      </div>
    </article>
  );
}

function BackgroundPattern() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="1440"
      height="560"
      className="absolute inset-0 w-full h-full -z-10 fill-easternblue-800 opacity-50 dark:opacity-40 blur-2xl"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
    >
      <g>
        <circle r="37.68" cx="27.69" cy="559.87" fill="#3997a1"></circle>
        <circle r="54.375" cx="1157.82" cy="301.1" fill="#3997a1"></circle>
        <circle r="49.095" cx="118.57" cy="478.95" fill="#3997a1"></circle>
        <circle r="47.185" cx="855.46" cy="393.61" fill="#3997a1"></circle>
        <circle r="52.19" cx="757.34" cy="80.44" fill="#3997a1"></circle>
        <circle r="19.915" cx="1339.78" cy="479.78" fill="#3997a1"></circle>
        <circle r="38.625" cx="1212.62" cy="548.11" fill="#3997a1"></circle>
        <circle r="41.635" cx="1147.41" cy="187.11" fill="#3997a1"></circle>
      </g>
      <defs>
        <clipPath id="SvgjsClipPath1083">
          <rect width="1440" height="560" x="0" y="0"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}
