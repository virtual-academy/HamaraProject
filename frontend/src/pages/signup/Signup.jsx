// import React from "react";
// import { Col, Row , Input } from "antd";
// import { UserOutlined } from '@ant-design/icons';

// import "./signup.css";
// import bgVideo from "../../assets/videos/loginBg.mp4";

// const Signup = () => {
//   return (
//     <>
//       <Row className="main-container">
//         <video src={bgVideo} muted autoPlay loop className="video" />
//       <Row className="form-background"> 
//       <Col xs={24} md={12} className="form-section">
//       <label className="form-lable">First Name</label>
//       <Input className="form-control" size="large" placeholder="First Name" prefix={<UserOutlined />} />
//       </Col>
//       <Col xs={24} md={12} className="form-section">
//       <label className="form-lable">Last Name</label>
//       <Input className="form-control" size="large" placeholder="Last Name" prefix={<UserOutlined />} />
     
//       </Col>
//       </Row>

//       </Row>
//     </>
//   );
// };

// export default Signup;


import React from 'react';
import { Row, Col } from 'antd';

const Signup = () => {
  return (
    <div>
      <Row gutter={[24, 100]}> {/* 16px horizontal gutter and 0px vertical gutter */}
        <Col span={6}>
          <div style={{ background: '#00A0E9', padding: '8px' }}>Column 1</div>
        </Col>
        <Col span={6}>
          <div style={{ background: '#00A0E9', padding: '8px' }}>Column 2</div>
        </Col>
        <Col span={6}>
          <div style={{ background: '#00A0E9', padding: '8px' }}>Column 3</div>
        </Col>
        <Col span={6}>
          <div style={{ background: '#00A0E9', padding: '8px' }}>Column 4</div>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;