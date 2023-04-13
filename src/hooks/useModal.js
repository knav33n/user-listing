import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const showModal = (modalData) => {
    setIsModalOpen(true);
    setModalData(modalData);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setModalData();
  };

  return { isModalOpen, showModal, handleCancel, modalData };
};

export default useModal;
