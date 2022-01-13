import styled from 'styled-components';

export const TriggerButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;

  > svg {
    display: block;
    margin-left: 8px;
  }
`;

export const FilterContainer = styled.div`
  position: relative;
  text-align: left;
`;

export const PopoverContainer = styled.div`
  position: absolute;
  padding: 12px;
  background-color: ${({ theme }) => {
    return theme.colors.bg;
  }};
  border-radius: 4px;
  color: ${({ theme }) => {
    return theme.colors.main;
  }};
  box-shadow: ${({ theme }) => {
    return theme.boxShadow.shadow;
  }};
`;

export const Options = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  text-align: left;
  max-height: 150px;
  overflow-y: auto;
`;

export const OptionItem = styled.label`
  cursor: pointer;
`;

export const SearchBox = styled.div`
  position: relative;
  margin-bottom: 16px;

  > svg {
    position: absolute;
    fill: gray;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
  }
`;

export const SearchInput = styled.input`
  padding: 4px 20px 4px 8px;
  width: 100%;
`;
