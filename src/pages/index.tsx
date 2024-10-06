import React from 'react';

import { Avatar, Badge, Button, Card, Col, Flex, Row, Space, Typography, Upload } from 'antd';

import { AlignLeftOutlined, FilterOutlined, UploadOutlined } from '@ant-design/icons';

import LineChart from '@/components/charts/LineChart';
import Hide from '@/components/layout/hide';

const Home = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  return (
    <Flex vertical gap={16}>
      <Flex style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography.Title level={4} style={{ marginBottom: 0 }}>
          Page title
        </Typography.Title>
        <Space>
          <Upload>
            <Button icon={<UploadOutlined />} iconPosition="end">
              <Hide up="sm">Export to PDF</Hide>
            </Button>
          </Upload>
          <Button icon={<AlignLeftOutlined />} iconPosition="end">
            <Typography.Text>
              <Hide up="sm">
                Notes <Typography.Text type="secondary">(3)</Typography.Text>
              </Hide>
            </Typography.Text>
          </Button>
          <Button icon={<FilterOutlined />} iconPosition="end">
            <Typography.Text>
              <Hide up="sm">Filter </Hide>
              <Badge color="green" count={10} overflowCount={9} />
            </Typography.Text>
          </Button>
        </Space>
      </Flex>
      <Row gutter={[32, 32]}>
        <Col span={24} lg={{ span: 12 }}>
          <Card title="Chart Title">
            <LineChart data={data} xField="year" yField="value" height={400} />
            <Card.Meta
              style={{ alignItems: 'center' }}
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            />
          </Card>
        </Col>
        <Col span={24} lg={{ span: 12 }}>
          <Card title="Chart Title">
            <LineChart data={data} xField="year" yField="value" height={400} />
            <Card.Meta
              style={{ alignItems: 'center' }}
              avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            />
          </Card>
        </Col>
      </Row>
    </Flex>
  );
};

export default Home;
