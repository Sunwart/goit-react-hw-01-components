import PropTypes from 'prop-types';

import {
  StatsContainer,
  StatsTitle,
  Stats,
  StatsEntry,
  StatsLabel,
  StatsValue,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatsContainer>
      <StatsTitle>{title}</StatsTitle>
      <Stats>
        {stats.map(elem => {
          return (
            <StatsEntry key={elem.id}>
              <StatsLabel>{elem.label}</StatsLabel>
              <StatsValue>{elem.percentage}%</StatsValue>
            </StatsEntry>
          );
        })}
      </Stats>
    </StatsContainer>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
