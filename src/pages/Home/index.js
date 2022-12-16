import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import PrimaryInput from "../../components/PrimaryInput";
import { signIn } from "../../services/auth";
import "./styles.css";

const Home = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signIn(emailInput, passwordInput);

    window.alert(response.token);
  };

  return (
    <section className="page-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <PrimaryInput
          name="email"
          type="email"
          placeholder="E-mail"
          data-testid="home-email-input"
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <PrimaryInput
          name="password"
          type="password"
          placeholder="Senha"
          data-testid="home-password-input"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <PrimaryButton data-testid="home-button" type="submit">
          Entrar
        </PrimaryButton>
      </form>
    </section>
  );
};

export default Home;
