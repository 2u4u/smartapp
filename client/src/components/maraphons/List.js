import React from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import { Link } from "react-router-dom";
import { PageHeader } from 'antd';
import {
  Card,
} from 'antd';

// const { Meta } = Card;

const routes = [
  // {
  //   path: 'index',
  //   breadcrumbName: 'First-level Menu',
  // },
  {
    path: 'first',
    breadcrumbName: 'Список марафонов',
  },
  // {
  //   path: 'second',
  //   breadcrumbName: 'Марафон 1',
  // },
];

function List() {
  // const [state, setState] = useState({
  //   trainings: [],
  // })

  return (
    <React.Fragment>
      <PageHeader
        // style={{
        //   border: '1px solid rgb(235, 237, 240)',
        // }}
        // onBack={() => null}
        breadcrumb={{ routes }}
        title="Список ваших марафонов"
      // subTitle="Не забудьте сохранить тренировку"
      />
      <Row gutter={[16, 16]} type="flex">
        <Col span={6}>
          <Card
            title="Марафон 1"
            style={{ height: "260px" }}
            hoverable={true}
            actions={[
              <Link to="/admin/maraphons/news"><Icon type="warning" theme="twoTone" twoToneColor="#eb2f96" key="users" /></Link>,
              <Link to="/admin/trainings/list"><Icon type="eye" key="view" /></Link>,
              <Link to="/admin/trainings/add"><Icon type="edit" key="edit" /></Link>,
            ]}
          >
            <div style={{ height: "105px", overflow: "hidden" }}>Ea ex elit amet eiusmod ullamco. Dolor officia nisi fugiat labore commodo enim qui aliquip do. Minim qui dolore nulla esse voluptate veniam mollit ea culpa id et. Irure occaecat do elit ut culpa labore esse deserunt non Lorem Lorem. Tempor excepteur dolore ipsum nisi magna non laborum laborum.</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Марафон 2"
            style={{ height: "260px" }}
            hoverable={true}
            actions={[
              <Icon type="setting" key="setting" />,
              // <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
          >
            <div style={{ height: "105px", overflow: "hidden" }}>Ea ex elit amet eiusmod ullamco. Dolor officia nisi fugiat labore commodo enim qui aliquip do. Minim qui dolore nulla esse voluptate veniam mollit ea culpa id et. Irure occaecat do elit ut culpa labore esse deserunt non Lorem Lorem. Tempor excepteur dolore ipsum nisi magna non laborum laborum.</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Марафон 3"
            style={{ height: "260px" }}
            hoverable={true}
            actions={[
              <Icon type="setting" key="setting" />,
              // <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
          >
            <div style={{ height: "105px", overflow: "hidden" }}>Ea ex elit amet eiusmod ullamco. Dolor officia nisi fugiat labore commodo enim qui aliquip do. Minim qui dolore nulla esse voluptate veniam mollit ea culpa id et. Irure occaecat do elit ut culpa labore esse deserunt non Lorem Lorem. Tempor excepteur dolore ipsum nisi magna non laborum laborum.</div>
          </Card>
        </Col>

        <Col span={6}>
          <Card
            title="Марафон 3"
            style={{ height: "260px" }}
            hoverable={true}
            actions={[
              <Icon type="setting" key="setting" />,
              // <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
          >
            <div style={{ height: "105px", overflow: "hidden" }}>Ea ex elit amet eiusmod ullamco. Dolor officia nisi fugiat labore commodo enim qui aliquip do. Minim qui dolore nulla esse voluptate veniam mollit ea culpa id et. Irure occaecat do elit ut culpa labore esse deserunt non Lorem Lorem. Tempor excepteur dolore ipsum nisi magna non laborum laborum.</div>
          </Card>
        </Col>

        <Col span={6}>
          <Card
            title="Марафон 3"
            style={{ height: "260px" }}
            hoverable={true}
            actions={[
              <Icon type="setting" key="setting" />,
              // <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
          >
            <div style={{ height: "105px", overflow: "hidden" }}>Ea ex elit amet eiusmod ullamco. Dolor officia nisi fugiat labore commodo enim qui aliquip do. Minim qui dolore nulla esse voluptate veniam mollit ea culpa id et. Irure occaecat do elit ut culpa labore esse deserunt non Lorem Lorem. Tempor excepteur dolore ipsum nisi magna non laborum laborum.</div>
          </Card>
        </Col>

        <Col span={6}>
          <Link to="/admin/maraphons/add">
            <Card
              style={{
                height: "260px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
              hoverable={true}

            >
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}>
                <Icon type="plus-circle" style={{ fontSize: '50px', marginBottom: "20px" }} />
                <span>Добавить марафон</span>
              </div>
            </Card>
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default List;