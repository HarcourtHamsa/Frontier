type theme = "green" | "white";

export interface ButtonInterface {
  label: string;
  theme: theme;
  onClick?: void;
}

export interface InputFieldInterface {
    type: string,
    placeholder?: string,
    label?: string,
    onChange?: React.ChangeEventHandler
}
