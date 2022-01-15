const FilterTasks = ({ filter, onChange }) => (
  <label>
    Filter &nbsp;
    <input type="text" value={filter} onChange={onChange} />
  </label>
);

export default FilterTasks;
