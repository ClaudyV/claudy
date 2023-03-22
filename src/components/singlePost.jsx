import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Post from "../services/Post";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import moment from "moment/moment";

const SinglePost = ({ match }) => {
  const history = useHistory();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Post.uniquePost(match.params.id)
      .then((res) => {
        if (typeof res === "undefined") {
          history.push("/404");
        }
        setPost(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match.params.id]);

    const showNewDate=(date) => {
    return new Date(Date.parse(date))
 }

  return (
    <div>
      <div style={{ padding: "1rem", borderBottom: "1px solid" }}>
        <Link
          to="/"
          onClick={() => {
            setTimeout(() => {
              window.location.reload();
            });
          }}
        >
          Back
        </Link>
      </div>
      {!loading && (
        <div
          style={{
            padding: "2.5em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <div>
            <img className="img-responsive" alt={post.title} src={post.image} />
            <a href={post.imageSource}>
              <span>
                <small>
                  {post.imageSource && <>Image Source by {post.imageAuthor}</>}
                </small>
              </span>
            </a>
          </div>

          <div>
            <span>
              <small>
                {moment(showNewDate(post?.date?.toDate().toString())).format(
                  "MMMM Do YYYY"
                )}{" "}
              </small>
            </span>
          </div>

          <div>
            <h1 className="claudy-heading">{post.title}</h1>
          </div>

          <div>
            <ReactMarkdown
              remarkPlugins={[remarkBreaks]}
              rehypePlugins={[rehypeRaw]}
              children={post.body}
              className={"newLine"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
