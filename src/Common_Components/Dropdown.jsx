import React from 'react'
import Checkbox from './Checkbox'


const Dropdown = ({ checked, handleCheck }) => {
    return (
        <>
            <div className=' w-64 ' >
                <Checkbox checked={checked} onChange={(e) => handleCheck(e)} />
                <select className='w-full border p-2 font-[poppins]' >
                    <option > Select State</option>
                    <option> Maharashtra </option>
                    <option > Chattisgarh</option>
                    <option >Karnataka</option>
                    <option >Odisha</option>
                </select>
            </div>
        </>
    )
}

export default Dropdown



// import React, { useState } from 'react';

// const DropdownWithCheckboxes = () => {
//     const [selectedStates, setSelectedStates] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleCheckboxChange = (event) => {
//         const { value, checked } = event.target;
//         if (checked) {
//             setSelectedStates([...selectedStates, value]);
//         } else {
//             setSelectedStates(selectedStates.filter(state => state !== value));
//         }
//     };

//     // Define additional states
//     const additionalStates = [
//         'California',
//         'Texas',
//         'New York',
//         'Florida',
//         'Illinois',
//         'Pennsylvania',
//         'Ohio',
//         'Georgia',
//         'North Carolina',
//         'Michigan'
//     ];

//     return (
//         <div className="relative inline-block text-left">
//             <div>
//                 <span className="rounded-md shadow-sm">
//                     <button
//                         type="button"
//                         className="inline-flex justify-between w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm leading-5 font-medium text-gray-700 shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
//                         aria-haspopup="true"
//                         aria-expanded="true"
//                         onClick={toggleDropdown}
//                     >
//                         <span>Selected States: {selectedStates.length === 0 ? 'None' : selectedStates.join(', ')}</span>
//                         <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M10 12a1 1 0 01-.7-.29l-3-3a1 1 0 111.41-1.42L10 10.59l2.29-2.3a1 1 0 111.42 1.42l-3 3A1 1 0 0110 12z" clipRule="evenodd" />
//                         </svg>
//                     </button>
//                 </span>
//             </div>

//             {isOpen && (
//                 <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                     <div className="py-1">
//                         {additionalStates.map(state => (
//                             <label key={state} className="flex items-center py-2 px-4">
//                                 <input
//                                     type="checkbox"
//                                     value={state}
//                                     onChange={handleCheckboxChange}
//                                     checked={selectedStates.includes(state)}
//                                     className="mr-2 form-checkbox h-5 w-5 text-gray-600"
//                                 />
//                                 <span className="text-gray-700">{state}</span>
//                             </label>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DropdownWithCheckboxes;
