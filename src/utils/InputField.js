import React from 'react';

function InputField(props) {
  return (
    <React.Fragment>
      <input
        value={props.value}
        type={props.type}
        placeholder={props.placeholder || 'deflt'}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
}

export default InputField;
