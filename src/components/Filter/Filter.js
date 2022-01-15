import {
  TriggerButton,
  FilterContainer,
  PopoverContainer,
  Options,
  OptionItem,
  SearchBox,
  SearchInput,
} from './Filter.styled';

import PropTypes from 'prop-types';

import { FaChevronDown } from 'react-icons/fa';

import { HiX } from 'react-icons/hi';
import { useState } from 'react';

export const Filter = ({ isOpen = false, searchable = false, options }) => {
  const [isProperOpen, setIsProperOpen] = useState(isOpen);
  return (
    <FilterContainer>
      <TriggerButton type="button" onClick={() => setIsProperOpen(state => !state)}>
        Selected: 0<FaChevronDown />
      </TriggerButton>
      {isProperOpen && (
        <PopoverContainer>
          {searchable && (
            <SearchBox>
              <SearchInput type="text" name="searchbox" />
              <HiX />
            </SearchBox>
          )}
          <Options>
            {options.map(({ value, label }) => (
              <OptionItem key={label}>
                <input type="checkbox" name="option" value={value} />
                {label}
              </OptionItem>
            ))}
          </Options>
        </PopoverContainer>
      )}
    </FilterContainer>
  );
};

Filter.propTypes = {
  isOpen: PropTypes.bool,
  searchable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.exact({ value: PropTypes.string.isRequired, label: PropTypes.string.isRequired }),
  ).isRequired,
};
