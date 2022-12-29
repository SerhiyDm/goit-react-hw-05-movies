import styled from 'styled-components';

export const FormStyled = styled.form.attrs({
  autocomplete: 'off',
})`
  display: flex;
  gap: 4px;
  padding: 15px;
`;

export const InputStyled = styled.input.attrs({
  autoFocus: true,
  required: true,
  name: 'input',
})`
  width: 30vw;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.15) inset;
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: green;
  font-weight: 500;
  &:focus {
    border: none;
    outline: unset;
  }
`;

export const SubmitButton = styled.button.attrs(p => ({
  type: 'submit',
  disabled: p.dis,
}))`
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.15) inset;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: green;
  }
  &:disabled:hover {
    color: rgba(0, 0, 0, 0.3);
    cursor: none;
  }
`;
