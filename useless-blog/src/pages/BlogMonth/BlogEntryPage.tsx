import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  BlogEntryComponent,
  BlogEntryModel,
} from "../../components/structural/blogComponents/BlogEntryComponent";

export const BlogEntryPage: React.FC = () => {
  const { month } = useParams();
  const { date } = useParams();
  const [content, setContent] = useState(new BlogEntryModel());
  const hasLoaded = useRef(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!month || !date || hasLoaded.current) return;
    hasLoaded.current = true;

    const path = `/posts/${month ?? ""}/${date ?? ""}/post.md`;

    fetch(path)
      .then((res) => {
        const isHTML = res.headers.get("content-type")?.includes("text/html");
        if (!res.ok || isHTML) {
          navigate("/notFound");
          throw new Error("Not found");
        }
        return res.text();
      })
      .then((text) => {
        console.log("Setting content!");
        setContent(
          new BlogEntryModel().withContent(text).withDate(date).withMonth(month)
        );
      })
      .catch(console.error);
  }, [date, month, navigate]);

  return <BlogEntryComponent model={content}></BlogEntryComponent>;
};
