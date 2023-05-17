import css from './Filter.module.css'

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from 'store/filterSlice'
import { getFilter } from 'store/selectors'

const Filter = () => {
  const dispath = useDispatch();
  const filter = useSelector(getFilter);
  return(
    <label className={css.lable}>
    Find contact by name
      <input
        className={css.input} 
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispath(setFilter(e.target.value))}
      />
    </label>
  )
}

export default Filter;