import SingleDropdown from './SingleDropdown';
import MultipleDropdown from './MultipleDropdown';

/* 
    Master dropdown component, which chooses the SingleDropdown or MultipleDropdown component based on the value of multipleSelect.
*/
const Dropdown = ({name, options, value, onChange, multipleSelect}) => {
    if (multipleSelect) {
        return (<MultipleDropdown options={options}/>)
    } else {
        return (<SingleDropdown name={name} options={options} value={value} onChange={onChange}/>)
    }
};

export default Dropdown;