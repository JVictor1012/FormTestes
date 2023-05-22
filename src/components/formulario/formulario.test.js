import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Formulario', () => {
    test('verifica se o nome tem no mínimo 2 letras', () => {
        render(<Formulario />);

        const nomeInput = screen.getByLabelText('Nome:');
        const submitButton = screen.getByText('Enviar');

        userEvent.type(nomeInput, 'A');
        fireEvent.click(submitButton);

        expect(screen.getByText('Nome inválido')).toBeInTheDocument();
  });


    test('verifica se o email contém "@"', () => {
        render(<Formulario />);
        const emailInput = screen.getByLabelText('Email:');
        const submitButton = screen.getByText('Enviar');

        userEvent.type(emailInput, 'emailsemarrobacom');
        userEvent.click(submitButton);

        expect(screen.getByText('Email inválido')).toBeInTheDocument();
  });

    test("verifica se a senha tem no mínimo 5 caracteres", () => {
        render(<Formulario />);
        const senhaInput = screen.getByLabelText('Senha:');
        const submitButton = screen.getByText('Enviar');

        userEvent.type(senhaInput, '1234');
        fireEvent.click(submitButton);

        expect(screen.getByText('Senha inválida')).toBeInTheDocument();
    })

    test("verifica se a confirmação de senha é valida", () => {
        render(<Formulario />);
  
        const senhaInput = screen.getByLabelText('Senha:');
        const confirmacaoSenhaInput = screen.getByLabelText('Confirmação de Senha:');
        const submitButton = screen.getByText('Enviar');
        
        userEvent.type(senhaInput, '1234');
        userEvent.type(confirmacaoSenhaInput, '4321');
        fireEvent.click(submitButton);
        
        expect(screen.getByText(/Senhas não/i)).toBeInTheDocument();
    })
});