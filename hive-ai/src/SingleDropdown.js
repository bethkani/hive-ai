import './SingleDropdown.css'

/* 
  Returns an HTML select element that is dynamically created using the list of options passed in.
*/
const SingleDropdown = ({ name, value, options, onChange }) => {
    return (
      <label className='dropdownname'>
        {name}
        <select className='singledropdown' value={value} onChange={onChange}>
          <option selected disabled value="">Select an Option</option>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };

export default SingleDropdown;
