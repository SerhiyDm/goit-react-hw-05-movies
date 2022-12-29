import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormStyled, InputStyled, SubmitButton } from './Form.styled';

export const SearchForm = () => {
  const [disable, setDisable] = useState(true);
  const [value, setValue] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const getInputValue = e => {
    setDisable(false);
    setValue(e.target.value);
  };
  const submitChange = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.input.value.trim().toLowerCase();
    if (searchParam.get('query') === query) {
      return;
    }
    setSearchParam({ query });
    setDisable(true);
    setValue('');
  };
  return (
    <FormStyled onSubmit={submitChange}>
      <InputStyled value={value} onChange={getInputValue} />
      <SubmitButton dis={disable}>Search</SubmitButton>
    </FormStyled>
  );
};
