import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  styles: string;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
}

const Button = (props: Props) => {
  return (
    <button
      className={`${props.styles} ...`}
      type={props?.type}
      title={props.title}
      disabled={props.disabled}
      onClick={props?.handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
