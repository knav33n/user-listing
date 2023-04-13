import {
  DeleteFilled,
  EditOutlined,
  GlobalOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { avataaars } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { Col } from "antd";
import React from "react";
import LikeIcon from "../../containers/LikeIcon";
import { CoverContainer, StyledCard } from "./styles";

const UserCard = (props) => {
  const { user, removeUser, updateUser, showModal } = props;
  const { id, username, name, email, phone, website, isLiked } = user;

  const avatar = (seed) =>
    createAvatar(avataaars, {
      seed,
      size: 200,
      mood: "happy",
    }).toDataUriSync();

  return (
    <Col xs={24} sm={24} md={8} lg={8} xl={6}>
      <StyledCard
        cover={
          <CoverContainer>
            <img src={avatar(username)} alt={username} />
          </CoverContainer>
        }
        actions={[
          <LikeIcon
            isLiked={isLiked}
            onClick={() => updateUser(id, { isLiked: !isLiked })}
            style={{ fontSize: 20, color: "red" }}
          />,
          <EditOutlined
            key="edit"
            onClick={() => showModal(user)}
            style={{ fontSize: 20 }}
          />,
          <DeleteFilled
            key="delete"
            onClick={() => removeUser(username)}
            style={{ fontSize: 20 }}
          />,
        ]}
      >
        <h3>{name}</h3>
        <div>
          <MailOutlined style={{ fontSize: 18 }} />
          <p>{email}</p>
        </div>
        <div>
          <PhoneOutlined style={{ fontSize: 18 }} />
          <p>{phone}</p>
        </div>
        <div>
          <GlobalOutlined style={{ fontSize: 18 }} />
          <p>{`http://${website}`}</p>
        </div>
      </StyledCard>
    </Col>
  );
};

export default UserCard;
