import React from 'react';

import { Badge, Button, Col, Flex, Row, Space, Typography, Upload } from 'antd';

import { AlignLeftOutlined, FilterOutlined, UploadOutlined } from '@ant-design/icons';

import { dehydrate, QueryClient } from '@tanstack/react-query';

import Hide from '@/components/layout/hide';
import {
  Covid19StatisticsChart,
  prefetchCovid19StatisticsChartData,
} from '@/components/modules/dashboard/Covid19StatisticsChart';

const YEAR = 2024;
const PAGE_SIZE = 90;

const Home = () => {
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
          <Covid19StatisticsChart height={400} pageSize={PAGE_SIZE} year={YEAR} />
        </Col>
        <Col span={24} lg={{ span: 12 }}>
          <Covid19StatisticsChart height={400} pageSize={PAGE_SIZE} year={YEAR} />
        </Col>
      </Row>
    </Flex>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await prefetchCovid19StatisticsChartData(queryClient, { pageSize: PAGE_SIZE, year: YEAR });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
