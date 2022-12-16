import "./styles.css";
import { useState } from "react";

const PrimaryInput = ({ ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputType = (type) => {
    if (type === "password" && showPassword) {
      return "text";
    }

    return type;
  };

  return (
    <div className="input-wrapper">
      <input
        data-testid="input-test"
        {...rest}
        type={getInputType(rest.type)}
      />
      {rest.type === "password" && (
        <button
          onClick={() => setShowPassword(!showPassword)}
          type="button"
          data-testid="input-button-text"
          className="input-button"
        >
          mostrar senha
        </button>
      )}
    </div>
  );
};

export default PrimaryInput;
