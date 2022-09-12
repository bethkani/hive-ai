import './MultipleDropdown.css';

/* 
    Returns an HTML form that allows us to create a dropdown containing a list of checkboxes. The options are dynamically created from
    the list of options we receive from the Dropdown prop.
*/
const MultipleDropdown =  ({ options }) => {
    var expanded = false;

    function showCheckboxes() {
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    };

    return (<form>
        <div class="multiselect">
          <div class="selectBox" onClick={showCheckboxes}>
            <select>
              <option>Select languages</option>
            </select>
            <div class="overSelect"></div>
          </div>
          <div id="checkboxes">
            {options.map((option) => (<label for="one"><input value={option.value} type="checkbox" />{option.label}</label>))}
          </div>
        </div>
      </form>);
};

export default MultipleDropdown;
