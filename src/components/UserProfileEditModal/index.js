import { Form, Input, Modal } from "antd";
import React from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export const UserProfileEditModal = (props) => {
  const { modalData, isModalOpen, saveUser, handleCancel } = props;

  const [form] = Form.useForm();
  const name = Form.useWatch("name", form);
  const email = Form.useWatch("email", form);
  const phone = Form.useWatch("phone", form);
  const website = Form.useWatch("website", form);

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={() => saveUser(modalData.id, { name, email, phone, website })}
      onCancel={handleCancel}
    >
      {modalData && (
        <Form
          {...layout}
          form={form}
          initialValues={{
            name: modalData.name,
            email: modalData.email,
            phone: modalData.phone,
            website: modalData.website,
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Website"
            name="website"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};
