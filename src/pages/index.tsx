import { Button, Col, Flex, Row, Space, Typography, Upload } from 'antd';

import { AlignLeftOutlined, FilterOutlined, UploadOutlined } from '@ant-design/icons';

import { dehydrate, QueryClient } from '@tanstack/react-query';

import { Hide } from '@/components/layout';
import {
  Covid19StatisticsChart,
  InfluenzaStatisticsChart,
  prefetchCovid19StatisticsChartData,
  prefetchInfluenzaStatisticsChartData,
} from '@/components/modules/dashboard';

const YEAR = 2023;

const Home = () => {
  return (
    <Flex vertical gap={16}>
      <Flex style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography.Title level={4} style={{ marginBottom: 0 }}>
          Respiratory diseases
        </Typography.Title>
        <Space size="middle">
          <Upload>
            <Button variant="solid" color="primary" icon={<UploadOutlined />} iconPosition="end">
              <Hide up="sm">Export to PDF</Hide>
            </Button>
          </Upload>
          <Button variant="solid" color="primary" icon={<AlignLeftOutlined />} iconPosition="end">
            <Hide up="sm">Notes (3)</Hide>
          </Button>
          <Button variant="solid" color="primary" icon={<FilterOutlined />} iconPosition="end">
            <Hide up="sm">Filter (9+)</Hide>
          </Button>
        </Space>
      </Flex>
      <Row gutter={[32, 32]}>
        <Col span={24} lg={{ span: 12 }}>
          <Covid19StatisticsChart height={400} year={YEAR} />
        </Col>
        <Col span={24} lg={{ span: 12 }}>
          <InfluenzaStatisticsChart height={400} year={YEAR} />
        </Col>
      </Row>
    </Flex>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await prefetchCovid19StatisticsChartData(queryClient, YEAR);
  await prefetchInfluenzaStatisticsChartData(queryClient, YEAR);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
