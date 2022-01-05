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
      {title && <StatsTitle>{title}</StatsTitle>}
      <Stats>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsEntry key={id}>
              <StatsLabel>{label}</StatsLabel>
              <StatsValue>{percentage}%</StatsValue>
            </StatsEntry>
          );
        })}
      </Stats>
    </StatsContainer>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
