import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Post from "../services/Post";
import moment from "moment/moment";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [lastKey, setLastKey] = useState("");
  const [nextPosts_loading, setNextPostsLoading] = useState(false);

  /**
   * used to apply pagination on posts
   * @param {String} key
   * @return next batch of posts (+6 posts)
   * will be fired when user click on 'More Posts' button.
   */
  const fetchMorePosts = (key) => {
    if (key.length > 0) {
      setNextPostsLoading(true);
      Post.postsNextBatch(key)
        .then((res) => {
          setLastKey(res.lastKey);
          setPosts(posts.concat(res.posts));
          setNextPostsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setNextPostsLoading(false);
        });
    }
  };

  useEffect(() => {
    // first 6 posts
    Post.postsFirstBatch()
      .then((res) => {
        setPosts(res.posts);
        setLastKey(res.lastKey);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showNewDate=(date) => {
    return new Date(Date.parse(date))
 }

  return (
    <div>
      <section className="claudy-blog" data-section="blog">
        <div className="claudy-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Read</span>
              <h2 className="claudy-heading">Recent Blog</h2>
            </div>
          </div>
          <div className="row">
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="col-md-4 col-sm-6"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="blog-entry">
                    <Link to={"/claudy/blog/" + post.id} className="blog-img">
                      <img
                        src={post.image}
                        className="img-responsive"
                        alt={post.title}
                      />
                    </Link>
                    <a href={post.imageSource}>
                      <span>
                        <small>
                          {post.imageSource && (
                            <>Image Source by {post.imageAuthor}</>
                          )}
                        </small>
                      </span>
                    </a>
                    <div className="desc">
                      <span>
                        <small>
                          {moment(showNewDate(post.date)).format("MMMM Do YYYY")}
                        </small>
                      </span>
                      <h3>
                        <Link to={"/claudy/blog/" + post.id}>{post.title}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {nextPosts_loading ? (
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Loading...</p>
              </div>
            </div>
          ) : lastKey.length > 0 ? (
            <div className="row">
              <div className="col-md-12">
                <p>
                  <span
                    href="#"
                    className="btn btn-primary btn-lg btn-load-more"
                    onClick={() => fetchMorePosts(lastKey)}
                  >
                    Load more <i className="icon-reload" />
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-12 text-center">
                <p>No more posts!!!</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
