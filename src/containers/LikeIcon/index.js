import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import React from "react";

const LikeIcon = (props) => {
  const { isLiked, ...otherProps } = props;
  if (isLiked) {
    return <HeartFilled key="dislike" {...otherProps} />;
  }

  return <HeartOutlined key="like" {...otherProps} />;
};

export default LikeIcon;
