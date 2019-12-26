import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
// import { stateToHTML } from 'draft-js-export-html';

import {
  Form,
  Input,
  Select,
  Typography,
  Icon,
  Layout
} from 'antd';
import { Row, Col, PageHeader, DatePicker } from 'antd';

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;
const { Option } = Select;

function Add() {
  const [state, setState] = useState({
    maraphonName: "",
    maraphonDescription: "",
    maraphonDuration: "",
    maraphonProgramm: "",
    maraphonCategory: "",
    maraphonTarget: "",
    maraphonStartDate: "",
    maraphonPrice: ""
  });

  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty(),
  );

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(editorState => ({ ...editorState, newState }));
      return 'handled';
    }
    return 'not-handled';
  }

  const _onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  }

  const _onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  }

  const _onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  }

  const styleMap = {
    'STRIKETHROUGH': {
      textDecoration: 'line-through',
    },
  };

  const _onStrikeClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'));
  }

  const _onRedo = () => {
    setEditorState(EditorState.redo(editorState))
  }

  const _onUndo = () => {
    setEditorState(EditorState.undo(editorState))
  }

  const handleMaraphonChange = (e) => {
    let { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }));
  }

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const handleDateChange = (date, dateString) => {
    setState(state => ({ ...state, "maraphonStartDate": date }));
  }

  const routes = [
    {
      path: 'first',
      breadcrumbName: 'Список марафонов',
    },
  ];


  return (
    <React.Fragment>
      <PageHeader
        // onBack={() => null}
        breadcrumb={{ routes }}
        title="Добавление нового марафона"
      />
      <Row gutter={[16]} >
        <Col span={16}>
          <Content
            style={{
              background: '#fff',
              padding: 24
            }}
          >
            <Form>
              <Form.Item label="Название марафона">
                <Input
                  type="text"
                  placeholder="Введите название марафона"
                  name="maraphonName"
                  value={state.maraphonName}
                  onChange={(e) => handleMaraphonChange(e)}
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
                  handleKeyCommand={handleKeyCommand}
                />
              </Form.Item>
              <Form.Item label="Длительность марафона">
                <Input
                  type="text"
                  placeholder="Введите количество дней"
                  name="maraphonDuration"
                  value={state.maraphonDuration}
                  onChange={(e) => handleMaraphonChange(e)}
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
                  onChange={(e) => handleMaraphonChange(e)}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item label="Категория марафона">
                <Input
                  type="text"
                  placeholder="Введите цель"
                  name="maraphonCategory"
                  value={state.maraphonCategory}
                  onChange={(e) => handleMaraphonChange(e)}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item label="Цель марафона">
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['a10', 'c12']}
                  onChange={handleChange}
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
                  onChange={(e) => handleMaraphonChange(e)}
                  style={{ width: '200px' }}
                  addonAfter="рублей"
                />
              </Form.Item>
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
    </React.Fragment>
  );
}

export default Add;