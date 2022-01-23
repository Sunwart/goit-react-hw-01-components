import styled from 'styled-components';

export const TriggerButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: ${props => props.theme.gap(3)};
  border-radius: ${props => props.theme.gap()};
  margin-bottom: ${props => props.theme.gap(3)};
  transition: color 300ms linear, background-color 300ms linear;

  }

  > svg {
    display: block;
    margin-left: ${props => props.theme.gap(2)};
  }
`;

export const FilterContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  text-align: left;
`;

export const PopoverContainer = styled.div`
  position: absolute;
  padding: ${props => props.theme.gap(3)};
  background-color: ${({ theme }) => {
    return theme.colors.bg;
  }};
  border-radius: ${props => props.theme.gap()};
  color: ${({ theme }) => {
    return theme.colors.main;
  }};
  box-shadow: ${({ theme }) => {
    return theme.shadow;
  }};
`;

export const Options = styled.div`
  padding: ${props => props.theme.gap(2)};
  display: flex;
  flex-direction: column;
  text-align: left;
  max-height: 150px;
  overflow-y: auto;
  white-space: nowrap;
`;

export const OptionItem = styled.label`
  cursor: pointer;
`;

export const SearchBox = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.gap(4)};

  > svg {
    position: absolute;
    fill: gray;
    top: 50%;
    right: ${props => props.theme.gap()};
    transform: translateY(-50%);
  }
`;

export const SearchInput = styled.input`
  padding: ${({ theme }) => `${theme.gap()} ${theme.gap(5)} ${theme.gap()} ${theme.gap(2)}`};
  width: 100%;
`;
