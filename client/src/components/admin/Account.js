import React from 'react';
import { Descriptions } from 'antd';
import { PageHeader } from 'antd';
import { Layout, Card } from 'antd';
const { Content } = Layout;

function Account() {
  // const [state, setState] = useState({
  //   maraphonName: "",
  //   maraphonDescription: "",
  //   maraphonDuration: "",
  //   maraphonProgramm: "",
  //   maraphonCategory: "",
  //   maraphonTarget: "",
  //   maraphonStartDate: "",
  //   maraphonPrice: ""
  // });

  const routes = [
    {
      path: 'index',
      breadcrumbName: 'Главная',
    },
    // {
    //   path: 'first',
    //   breadcrumbName: 'Список марафонов',
    // },
    // {
    //   path: 'second',
    //   breadcrumbName: 'Марафон 1',
    // },
  ];


  return (
    <React.Fragment>
      <PageHeader
        // style={{
        //   border: '1px solid rgb(235, 237, 240)',
        // }}
        // onBack={() => null}
        breadcrumb={{ routes }}
        title="Ваш профиль"
      // subTitle="Не забудьте сохранить тренировку"
      />
      <Content
        style={{
          background: '#fff',
          // padding: 24
        }}
      >
        <Card
          title="Общая информация"
        // headStyle={{
        //   backgroundColor: "#039be5",
        //   color: "#ffffff"
        // }}
        >
          <Descriptions>
            <Descriptions.Item label="Имя">Марта Желтонян</Descriptions.Item>
            {/* <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item> */}
          </Descriptions>
        </Card>
      </Content>

    </React.Fragment>
  );
}

export default Account;