import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormStyled, InputStyled, SubmitButton } from './Form.styled';

export const SearchForm = () => {
  const [value, setValue] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const getInputValue = e => {
    setValue(e.target.value);
  };
  const submitChange = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.input.value.trim().toLowerCase();
    if (searchParam.get('query') === query) {
      return;
    }
    setSearchParam({ query });
    setValue('');
  };
  return (
    <FormStyled onSubmit={submitChange}>
      <InputStyled value={value} onChange={getInputValue} />
      <SubmitButton dis={value}>Search</SubmitButton>
    </FormStyled>
  );
};
