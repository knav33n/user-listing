import { Row } from "antd";
import React from "react";
import UserCard from "../../components/UserCard";
import { UserProfileEditModal } from "../../components/UserProfileEditModal";
import useModal from "../../hooks/useModal";
import useUsers from "../../hooks/useUsers";
import { Spinner } from "../../containers/Spinner";

export const Home = () => {
  const { users, isLoading, removeUser, updateUser } = useUsers();
  const { showModal, modalData, isModalOpen, handleCancel } = useModal();

  const saveUser = (userId, data) => {
    updateUser(userId, data);
    handleCancel();
  };

  return (
    <>
      <Row>
        {isLoading && <Spinner />}
        {users?.length > 0 &&
          users.map((u) => (
            <UserCard
              key={u.username}
              user={{
                id: u.id,
                username: u.username,
                name: u.name,
                email: u.email,
                phone: u.phone,
                website: u.website,
                isLiked: u.isLiked,
              }}
              removeUser={removeUser}
              updateUser={updateUser}
              showModal={showModal}
            />
          ))}
      </Row>
      <UserProfileEditModal
        modalData={modalData}
        isModalOpen={isModalOpen}
        saveUser={saveUser}
        handleCancel={handleCancel}
      />
    </>
  );
};
