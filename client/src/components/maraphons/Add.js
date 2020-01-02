import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import { useDispatch, useSelector } from "react-redux";
// import { stateToHTML } from 'draft-js-export-html';

import { addMaraphon } from "../../actions/maraphonAction";
import { Button, Form, Input, Select, Typography, Icon, Layout, Row, Col, PageHeader, DatePicker } from 'antd';

import Admin from '../admin/Admin';

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;
const { Option } = Select;

function Add(props) {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  const userId = useSelector(state => state.auth.user.id);

  const [state, setState] = useState({
    maraphonId: "",
    maraphonName: "",
    maraphonDescription: "",
    maraphonDuration: "",
    maraphonGoal: ['a10', 'c12'],
    maraphonProgramm: "",
    maraphonCategory: "",
    maraphonStartDate: "",
    maraphonPrice: ""
  });

  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(),
  );

  const styleMap = { 'STRIKETHROUGH': { textDecoration: 'line-through' } };
  const _onBoldClick = () => setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  const _onItalicClick = () => setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  const _onUnderlineClick = () => setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  const _onStrikeClick = () => setEditorState(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'));
  const _onRedo = () => setEditorState(EditorState.redo(editorState));
  const _onUndo = () => setEditorState(EditorState.undo(editorState));

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }));
  }

  function handleSelectChange(value) {
    setState(state => ({ ...state, "maraphonGoal": value }));
  }

  const handleDateChange = (date, dateString) => {
    setState(state => ({ ...state, "maraphonStartDate": date }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newMaraphon = {
      id: state.maraphonId, //when edit
      user: userId,
      name: state.maraphonName,
      description: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      duration: state.maraphonDuration,
      category: state.maraphonCategory,
      goal: state.maraphonGoal,
      start_date: state.maraphonStartDate,
      price: state.maraphonPrice,
    };
    dispatch(addMaraphon(newMaraphon));
  }

  const routes = [{
    path: 'first',
    breadcrumbName: 'Список марафонов',
  },];


  return (
    <Admin history={props.history}>
      <PageHeader
        // onBack={() => null}
        breadcrumb={{ routes }}
        title="Добавление нового марафона"
      />
      <Row gutter={[16]} >
        <Col span={16}>
          <Content style={{ background: '#fff', padding: 24 }}>
            <Form onSubmit={onSubmit}>
              <Form.Item label="Название марафона">
                <Input
                  type="text"
                  placeholder="Введите название марафона"
                  name="maraphonName"
                  value={state.maraphonName}
                  onChange={(e) => handleInputChange(e)}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item label="Описание марафона">
                <Icon type="font-colors" className="anticon-change" />
                <Icon type="bold" onClick={_onBoldClick} className="anticon-change" />
                <Icon type="italic" onClick={_onItalicClick} className="anticon-change" />
                <Icon type="underline" onClick={_onUnderlineClick} className="anticon-change" />
                <Icon type="strikethrough" onClick={_onStrikeClick} className="anticon-change" />
                <Icon type="redo" onClick={_onRedo} className="anticon-change" />
                <Icon type="undo" onClick={_onUndo} className="anticon-change" />
                <Icon type="align-center" className="anticon-change" />
                <Icon type="align-left" className="anticon-change" />
                <Icon type="align-right" className="anticon-change" />
                <Editor
                  customStyleMap={styleMap}
                  editorState={editorState}
                  onChange={setEditorState}
                // onChange={(e) => handleEditorChange(e)}
                // handleKeyCommand={handleKeyCommand}
                />
              </Form.Item>
              <Form.Item label="Длительность марафона">
                <Input
                  type="text"
                  placeholder="Введите количество дней"
                  name="maraphonDuration"
                  value={state.maraphonDuration}
                  onChange={(e) => handleInputChange(e)}
                  style={{ width: '200px' }}
                  addonAfter="дней"
                />
              </Form.Item>
              <Form.Item label="Программа марафона">
                <Input
                  type="text"
                  placeholder="Введите программу"
                  name="maraphonProgramm"
                  value={state.maraphonProgramm}
                  onChange={(e) => handleInputChange(e)}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item label="Категория марафона">
                <Input
                  type="text"
                  placeholder="Введите цель"
                  name="maraphonCategory"
                  value={state.maraphonCategory}
                  onChange={(e) => handleInputChange(e)}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item label="Цель марафона">
                <Select
                  mode="multiple"
                  name="maraphonGoal"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  // defaultValue={['a10', 'c12']}
                  value={state.maraphonGoal}
                  onChange={handleSelectChange}
                >
                  {children}
                </Select>
              </Form.Item>
              <Form.Item label="Дата старта марафона">
                <DatePicker
                  name="maraphonStartDate"
                  defaultPickerValue={state.maraphonStartDate}
                  onChange={handleDateChange}
                  placeholder="Дата старта"
                />
              </Form.Item>
              <Form.Item label="Стоимость марафона">
                <Input
                  type="text"
                  placeholder="Введите цену"
                  name="maraphonPrice"
                  value={state.maraphonPrice}
                  onChange={(e) => handleInputChange(e)}
                  style={{ width: '200px' }}
                  addonAfter="рублей"
                />
              </Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Добавить марафон
              </Button>
            </Form>
          </Content>
        </Col>
        <Col span={8}>
          <Content
            style={{
              background: '#fff',
              padding: 24
            }}
          >
            {/* <img src={window.location.origin + '/images/phone.png'} style={{ width: "100%" }} /> */}
            <Title level={3}>{state.maraphonName}</Title>
            <Text style={{ fontStyle: "italic", fontWeight: "300", fontSize: "16px" }}>Описание марафона:</Text>
            <Paragraph
              style={{
                fontSize: "16px"
              }}>{state.maraphonDescription}</Paragraph>
            <Paragraph
              style={{
                fontSize: "16px"
              }}>
              <Text
                style={{
                  fontStyle: "italic",
                  fontWeight: "300",
                  fontSize: "16px"
                }}>Длительность марафона:</Text>
              <span> {state.maraphonDuration} дней</span>
            </Paragraph>
            <Text style={{ fontStyle: "italic", fontWeight: "300", fontSize: "16px" }}>Программа марафона:</Text>
            <Paragraph
              style={{
                fontSize: "16px"
              }}>{state.maraphonProgramm}</Paragraph>
          </Content>
        </Col>
      </Row>
    </Admin>
  );
}

export default Add;