import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const Blog = () => {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
      <div className="relative flex min-h-screen flex-col bg-neutral-100">
        <Header />
        <main className="w-full max-w-5xl px-6 pb-20 pt-28 sm:px-10 lg:px-12 flex-1 mx-auto">

          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <p className="text-lg text-gray-700">
            Welcome to our blog! Here you'll find the latest news, updates, and articles about our product and industry trends. Stay tuned for insightful content that helps you get the most out of our offerings.
          </p>
        </main>
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};
