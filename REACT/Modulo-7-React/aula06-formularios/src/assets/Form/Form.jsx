import React, { Children } from 'react';
import { useRef, useState } from 'react';
import './Form.css';

export default function Form() {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const passwordConfirm = useRef(null);
  const checkboxContirm = useRef(null);
  const [enviado, setEnviado] = useState(false);

  function handlerSubmit(e) {
    e.preventDefault();
    if (!name.current.value.trim()) {
      alert("Informe um nome correto!");
      return;
    }
    if (!email.current.value.trim()) {
      alert("Informe um Email correto!");
      return;
    }
    if (!password.current.value.trim() || !passwordConfirm.current.value.trim()) {
      alert("Informe as senhas nos dois campos!");
      return;
    }
    if (password.current.value.trim() !== passwordConfirm.current.value.trim()) {
      alert("Campos de senha inválidos!");
      return;
    }
    if (!checkboxContirm.current.checked) {
      alert("Aceite os termos de uso!");
      return;
    }
    setEnviado(true);
  }

  return (
    <>
      {enviado && (
        <Avisos>
          <h4>Formulário enviado com sucesso!</h4>
        </Avisos>
      )}
      <form className='form' onSubmit={handlerSubmit}>
        <label htmlFor="nome">Nome</label>
        <input type="text" ref={name} />

        <label htmlFor="email">Email</label>
        <input type="email" ref={email} />

        <label htmlFor="psw">Senha</label>
        <input type="password" ref={password} />
        <label htmlFor="conf-psw">Confirme Senha</label>
        <input type="password" ref={passwordConfirm} />

        <fieldset>
          <label htmlFor="termo">Termos de uso </label>
          <input type="checkbox" name="authorize" value="YES" ref={checkboxContirm} />
        </fieldset>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export function Avisos(props) {
  return (
    <div className="avisos">
      {props.children}
    </div>
  );
}
