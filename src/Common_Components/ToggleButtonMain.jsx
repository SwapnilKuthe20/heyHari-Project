

import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

function ToggleButtonMain() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
      console.log(e.target.checked,"Event");
      setIsChecked(
        e.target.checked
      )
    };

    return (
        <div>
            <ToggleButton checked={isChecked} onChange={handleChange} />
        </div>
    );
}

export default ToggleButtonMain;
