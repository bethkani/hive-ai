import './App.css';
import Dropdown from './Dropdown';
import * as React from "react"

const App = () => {
  const options = [
    { label: 'Adam Apple', value: 'Adam Apple' },
    { label: 'Bob Barker', value: 'Bob Barker' },
    { label: 'Carol Carter', value: 'Carol Carter' },
  ];

  const languages = [
    { label: 'English', value: 'english' },
    { label: 'French', value: 'french' },
    { label: 'Spanish', value: 'spanish' },
  ];

  const [value, setValue] = React.useState('Adam Apple');

  const handleSelect = (o) => {
    setValue(o.target.value);
  };

  return (
    <div className="dropdown">
      <Dropdown
        name="people"
        options={options}
        value={value}
        onChange={handleSelect}
        multipleSelect={false}
      />
      <Dropdown options={languages} multipleSelect={true}/>
    </div>
  );
};

export default App;
