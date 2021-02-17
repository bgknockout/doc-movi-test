import React, { InputHTMLAttributes } from 'react'
import Autocomplete from "@material-ui/lab/Autocomplete";
import { FormControl } from "@material-ui/core";
import { Controller } from "react-hook-form";

type ControllerProps = InputHTMLAttributes<HTMLInputElement> & {
  options: any,
  renderInput: any
  getOptionLabel: any
  classes: object
  control: any
  defaultValue: string
  name: any
  renderOption: any
  children: React.ReactNode
}

export const ControlledAutocomplete: React.FC<ControllerProps> = ({
  options,
  getOptionLabel,
  renderOption,
  renderInput,
  defaultValue,
  name,
  control,
  children
}) => {
  return (
    <FormControl fullWidth>
      <Controller
        render={({ onChange, ...props }) => (
          <Autocomplete
            options={options}
            getOptionLabel={getOptionLabel}
            getOptionSelected={(option, value) => option[getOptionLabel] === value[getOptionLabel]}
            renderOption={renderOption}
            renderInput={renderInput}
            onChange={(e, data) => onChange(data)}
            {...props}
          />
        )}
        onChange={([, data]: any) => data}
        defaultValue={defaultValue}
        name={name}
        control={control}
      />
      {children}
    </FormControl>
  );
};
