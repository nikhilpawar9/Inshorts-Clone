import React, { useState } from "react";
import { Form, Input, Radio, Button } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import modules from "../../../util/editor/module";

const WriteArticleForm = () => {
  const [value, setValue] = useState("");

  const handleChange = newValue => {
    console.log(newValue);
    setValue(newValue);
  };

  const onFinish = values => {
    console.log("Received values of form:", values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Article Type"
        name="articleType"
        rules={[{ required: true, message: "Please select the article type!" }]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Radio.Group>
          <Radio value="Stories">Stories</Radio>
          <Radio value="Insights">Insights</Radio>
          <Radio value="Campaigns">Campaigns</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Article Name"
        name="articleName"
        rules={[{ required: true, message: "Please input the article name!" }]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Article Summary"
        name="articleSummary"
        rules={[
          { required: true, message: "Please input the article summary!" },
        ]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Article Body"
        name="articleBody"
        rules={[{ required: true, message: "Please write the article body!" }]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <ReactQuill
          modules={modules}
          theme="snow"
          value={value}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button type="secondary" htmlType="submit">
          Publish
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WriteArticleForm;
