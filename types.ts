type theme = "green" | "white";
type buttomTypes = "submit" | "reset" | "button";

export interface ButtonInterface {
  label: string;
  theme: theme;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: buttomTypes;
}

export interface InputFieldInterface {
  type: string;
  placeholder?: string;
  label?: string;
  name: string;
  id: string;
  value: string;
  onChange?: React.ChangeEventHandler;
}
