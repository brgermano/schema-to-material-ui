import { createElement } from 'react';
import TextField from "@material-ui/core/TextField";

export default function renderSchema(schema) {
  const currentField = schema[Object.keys(schema)[1]];

  return verifySchemaType(currentField)
}

function verifySchemaType(currentField) {
  if (Array.isArray(currentField)) {
    return renderArraySchema(currentField)
  } else {
    return renderObjectSchema(currentField)
  }
}

function renderArraySchema(currentField) {
  const tagName = Object.keys(currentField[0])[0]
  let fieldTag;

  switch (tagName) {
    case 'input':
      fieldTag = createElement(TextField, { placeholder: 'Retornou :)' });
      break;
    default:
      fieldTag = createElement('h1', 'Ola td bem')
  }
  return fieldTag;
  /*
  const mapProps = props =>
    Object.entries(Object.values(props)[0]).map(
      item => `${item[0]}="${item[1]}"`
    );

  let result = currentField.map(
    item =>
      `<${Object.keys(item)[0]}
       ${mapProps(item)}
      />`
  );
  return result.toString().replace(/,/g, "");
  */
}

function renderObjectSchema(currentField) {
  const mapProps = Object.entries(Object.values(currentField)[1])
    .map(item => `${item[0]}="${item[1]}"`)
    .toString()
    .replace(/,/g, "");

  let result = `<${Object.keys(currentField)[1]}
       ${mapProps}
       />`;
  return result;
}
