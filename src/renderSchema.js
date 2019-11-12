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
  const tags =
    currentField.map(item =>
      { return { name: Object.keys(item)[0], props: Object.values(item)[0] } })
  return renderTags(tags)
}

function renderTags(tags) {
  const checkInputTypeExist = tags.map(item => item.name === 'input')
  .filter(item => item);

  if (checkInputTypeExist) {
    return tags.filter(item => item.name === 'input')
      .map(item => createElement(TextField, item.props))
  }
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
