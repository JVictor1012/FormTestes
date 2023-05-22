import React, { useState } from 'react';
import './styles.css';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

  const [nomeInvalido, setNomeInvalido] = useState(false);
  const [emailInvalido, setEmailInvalido] = useState(false);
  const [senhaInvalida, setSenhaInvalida] = useState(false);
  const [confirmacaoInvalida, setConfirmacaoinvalida] = useState(false);

  const testeNome = (event) => {
    const novoNome = event.target.value;
    setNome(novoNome);
    setNomeInvalido(novoNome.length < 2);
  };

  const testeEmail = (event) => {
    const novoEmail = event.target.value;
    setEmail(novoEmail);
    setEmailInvalido(!novoEmail.includes('@'));
  }

  const testeSenha = (event) => {
    const novaSenha = event.target.value;
    setSenha(novaSenha);
    setSenhaInvalida(!novaSenha.length < 5);
  }

  const testConfirmacao = (event) =>{
    const confirmacao = event.target.value;
    setConfirmacaoSenha(confirmacao);
    setConfirmacaoinvalida(!confirmacao != senha)

  }

  return (
    <form>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={testeNome}
        />
        {nomeInvalido && <span>Nome inválido</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={testeEmail}
        />
        {emailInvalido && <span>Email inválido</span>}
      </div>


      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={testeSenha}
        />
        {senhaInvalida && <span>Senha inválida</span>}
      </div>

      <div>
        <label htmlFor="confirmacao-senha">Confirmação de Senha:</label>
        <input
          type="password"
          id="confirmacao-senha"
          value={confirmacaoSenha}
          onChange={testConfirmacao}
        />
        {confirmacaoInvalida && <span>Senhas não coencidem.</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
