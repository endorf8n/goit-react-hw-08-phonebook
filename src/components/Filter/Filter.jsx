import { useDispatch } from 'react-redux';
import { FilterInput, FilterTitle } from './filter.styled';
import { addFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterTitle>
      Find contacts by name:
      <FilterInput
        type="text"
        name="filter"
        placeholder="Enter here"
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </FilterTitle>
  );
};
