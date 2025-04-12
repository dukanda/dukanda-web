"use client";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const BrandTwo = () => {

  return (
    <div className="my-10 relative" >
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className=" hidden md:block pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className=" hidden md:block pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default BrandTwo;

const reviews = [
  {
    name: "Maria Fernades",
    username: "",
    body: "Amei! O melhor site de todos os tempos.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Luís felipe",
    username: "",
    body: "Uma experiência incrível!",
    img: "https://avatar.vercel.sh/luis",
  },
  {
    name: "Joaquim Carlos",
    username: "",
    body: "Visitei o Huambo e fiquei impressionado com a beleza natural.",
    img: "https://avatar.vercel.sh/joaquim",
  },
  {
    name: "Ana Carla",
    username: "",
    body: "Eu amo esse site!",
    img: "https://avatar.vercel.sh/ana",
  },

];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
