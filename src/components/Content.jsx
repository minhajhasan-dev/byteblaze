import Markdown from "react-markdown";
import { useLoaderData, useNavigation } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import placeholderImage from "../assets/404.jpg";
import Loader from "./Loader";

const Content = () => {
  const navigation = useNavigation();
  const blog = useLoaderData();
  const { cover_image, title, body_html, tags } = blog;
  if (navigation.state === "loading") return <Loader></Loader>;
  return (
    <div className="mx-auto group p-2 border-2 hover:no-underline border-opacity-30 focus:no-underline dark:bg-gray-900">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || placeholderImage}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
        {tags.map((tag) => (
          <a
            key={tag}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
