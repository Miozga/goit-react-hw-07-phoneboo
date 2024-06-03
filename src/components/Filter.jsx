import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="filter"
        placeholder="Search contacts"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
