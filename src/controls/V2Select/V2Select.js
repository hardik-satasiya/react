import React from 'react';
import {
  string,
  func,
  bool,
  number,
  oneOfType,
  shape,
  arrayOf,
} from 'prop-types';
import * as olt from '@lightelligence/styles';
import { V2Label } from '../V2Label';
import { getStringValue } from '../../utils/getStringValue';

const V2Select = ({
  className,
  id,
  defaultValue,
  disabled,
  errorMessage,
  label,
  onChange,
  onBlur,
  readOnly,
  value,
  placeholder,
  required,
  hint,
  options,
  ...others
}) => {
  const displayValue = getStringValue(value, defaultValue);
  return (
    <V2Label
      className={className}
      errorMessage={errorMessage}
      label={label}
      value={displayValue}
      hint={hint}
    >
      <select
        className={olt.V2Select}
        id={id}
        placeholder={placeholder}
        value={displayValue}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        {...others}
      >
        {options.map(({ label: optionLabel, ...optionProps }) => (
          <option key={optionProps.value} {...optionProps}>
            {optionLabel}
          </option>
        ))}
      </select>
    </V2Label>
  );
};

V2Select.propTypes = {
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * The ID of the select element.
   */
  id: string,
  /**
   * The options to be rendered inside the select.
   */
  options: arrayOf(shape({ label: string, value: string })).isRequired,
  /**
   * A default value that will be displayed in case the value prop is not set.
   */
  defaultValue: oneOfType([string, number]),
  /**
   * The value that is displayed inside the select element.
   */
  value: oneOfType([string, number]),
  /**
   * A placeholder that is displayed in case there is no value and no default value
   */
  placeholder: string,
  /**
   * The floating label
   */
  label: string.isRequired,
  /**
   * An error message that is displayed below the select
   */
  errorMessage: string,
  /**
   * A hint for the user which is displayed below the select
   */
  hint: string,
  /**
   * Callback which is called when the select loses the focus
   */
  onBlur: func,
  /**
   * Callback which is called when the select value changes
   */
  onChange: func.isRequired,
  /**
   * disables the select (defaults to false)
   */
  disabled: bool,
  /**
   * enables read-only mode on the select (defaults to false)
   */
  readOnly: bool,
  /**
   * sets select as required and appends * to the label (defaults to false)
   */
  required: bool,
};

V2Select.defaultProps = {
  className: null,
  id: null,
  defaultValue: null,
  value: null,
  placeholder: null,
  errorMessage: null,
  hint: null,
  onBlur: null,
  disabled: false,
  readOnly: false,
  required: false,
};

export { V2Select };
