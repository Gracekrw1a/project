//import React from 'react';
import React, { useState } from 'react';
import { Layout, Menu,Avatar,Button, Breadcrumb,Modal } from 'antd';

export default function ContactUs(){
        const [isModalVisible, setIsModalVisible] = useState(false);
      
        const showModal = () => {
          setIsModalVisible(true);
        };
      
        const handleOk = () => {
          setIsModalVisible(false);
        };
      
        const handleCancel = () => {
          setIsModalVisible(false);
        };
    return (

        <div>
            <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

        </div>
    )

}