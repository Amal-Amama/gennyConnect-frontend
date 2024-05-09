import React, { useReducer, useEffect } from "react";
import { validate } from "../util/validators";
import "./Input.css";
const inputReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};
const Input = (props: any) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || "" || [],
    isTouched: false,
    isValid: props.valid || false,
  });
  const { id, onInput } = props;
  const { value, isValid } = inputState;
  useEffect(() => {
    props.onInput(id, value, isValid);
  }, [id, onInput, isValid, value, inputState]);
  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue =
      event.target.type === "number"
        ? parseFloat(event.target.value)
        : event.target.value;
    dispatch({
      type: "CHANGE",
      val: newValue,
      validators: props.validators,
    });
  };
  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label
        className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
