import { IllustrationArticleSVG } from "assets";
import avatarImg from "assets/image-avatar.webp";

export default function BlogPreviewCard() {
  return (
    <article className="grid max-w-96 place-items-center gap-6 rounded-[20px] border border-gray-950 bg-white p-6 text-gray-950 shadow-[8px_8px_0_0_#000]">
      <figure className="overflow-hidden rounded-[10px]">
        <IllustrationArticleSVG />
      </figure>
      <div className="grid gap-3">
        <h1 className="text-preset-1 hover:text-yellow order-3 cursor-pointer transition-colors">
          HTML & CSS foundations
        </h1>
        <h2 className="text-preset-3-bold bg-yellow order-1 w-fit rounded-sm px-3 py-1">
          Learning
        </h2>
        <p className="text-preset-3 order-2">
          Published <time dateTime="2023-12-21">21 Dec 2023</time>
        </p>
        <p className="text-preset-2 order-4 text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <figure className="flex items-center gap-3 justify-self-start">
        <img
          src={avatarImg}
          alt="Greg Hooper"
          className="size-8 overflow-hidden rounded-full object-cover"
        />
        <figcaption className="text-preset-3-bold text-sm">
          Greg Hooper
        </figcaption>
      </figure>
    </article>
  );
}
