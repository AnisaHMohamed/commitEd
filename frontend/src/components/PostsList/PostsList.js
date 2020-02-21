import React, { useState } from "react";
import PopupPost from "./PopupPost";
import Posts from "./Posts";

export default function PostsList(props) {
  const [show, popupState] = useState(false);
  const [postsModal, setPostsModal] = useState(false);
  let posts = props.posts;
  //do user logic to map filtered for service_provider otherwise map postsLists

  const serviceProviderPosts = posts.filter(post => {
    post.type === props.user.type &&
      props.user.type === "service_provider" &&
      props.user.id === post.user_id;
  });
  const volunteerPosts = posts;
  let postList;
  if (props.userStatus && props.user.id) {
    postList = serviceProviderPosts;
  } else {
    postList = volunteerPosts;
  }

  postList = posts.map(post => {
    return (
      <ul>
        <Posts
          key={post.id}
          title={post.title}
          description={post.description}
          date={post.date_posted}
          setPostsModal={() => setPostsModal(v => !v)}
        />
        <PopupPost
          key={post.id}
          title={post.title}
          description={post.description}
          date={post.date_posted}
          postsModal={postsModal}
          setPostsModal={setPostsModal}
          /*show={show}*/ show={postsModal}
        />
      </ul>
    );
  });
  console.log("_--______--->", props);
  console.log("======>>", postList);

  return <ul>{postList}</ul>;
}
