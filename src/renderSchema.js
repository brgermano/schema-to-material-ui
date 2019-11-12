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
  const tagsName = currentField.map(item => Object.keys(item)[0])
  return returnTags(tagsName)

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

function returnTags(tagsName) {
  const checkInputTypeExist = tagsName.map(item => item === 'input')
  .filter(item => item);

  if (checkInputTypeExist) {
    return tagsName.map(item =>
      createElement(TextField, { placeholder: 'dawdRetornou :)' })
    )
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
