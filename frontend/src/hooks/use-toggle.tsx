import { useState } from "react";

interface Props {
  initialValue?: boolean;
}

export const useToggle = ({ initialValue = false }: Props = {}) => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = () => {
    setValue(!value);
  };
  return {
    value,
    setValue,
    toggle,
  };
};
