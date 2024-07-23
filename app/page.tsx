import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <main className="">
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8">
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
    <article className="max-w-4xl mx-auto lg:text-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        From Designs to Dynamic Websites: Join Me On My Coding Adventure!
      </h1>
      <p className="text-xl leading-7 [&:not(:first-child)]:mt-3">
        Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came
        to him with a problem: the kingdom was running out of money. The king thought long and hard, and finally came up with a plan: he would tax the kingdom.
      </p>
      <div className="flex items-center flex-col lg:flex-row lg:justify-center gap-4 mt-8">
        <Button>Explore My Portfolio</Button>
        <Button variant="outline">Let's Connect</Button>
      </div>
    </article>
  );
}
