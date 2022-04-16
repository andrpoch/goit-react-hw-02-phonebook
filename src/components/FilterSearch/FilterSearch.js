import React from "react";
import PropTypes from 'prop-types';
import s from './FilterSearch.module.css';

const Filter = ({ value, onChange }) => (
   <div className={s.wrapper}>
   <label className={s.label}>
      Find contacts by name
      </label>
      <input
         className={s.input}
         type='text'
         value={value}
         onChange={onChange}
      />
</div>
)
Filter.propTypes = {
   value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
export default Filter;
