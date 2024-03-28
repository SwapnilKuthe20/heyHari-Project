import React from 'react';

function ToggleButton({ checked, onChange }) {
    return (
        <div>
            <label className="inline-flex items-center cursor-pointer">
                <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={checked} 
                    onChange={(e)=>onChange(e)} 
                />
                <div 
                    className={`relative w-11 h-6 rounded-full peer ${checked ? 'bg-[#D9D9D9] after:bg-[#4F8BED]' : 'bg-[#D9D9D9] after:bg-white'} ${checked ? 'peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full' : ''} after:content-[''] after:absolute after:top-[2px] after:start-[2px]  after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
                ></div>
            </label>
        </div>
    );
}

export default ToggleButton;




// import React from 'react';

// function ToggleButton({ checked, onChange }) {
//     return (
//         <div>
//             <label className="inline-flex items-center cursor-pointer">
//                 <input 
//                     type="checkbox" 
//                     className="sr-only peer" 
//                     checked={checked} 
//                     onChange={onChange} 
//                 />
//                 <div 
//                     className={`relative w-11 h-6 bg-[#D9D9D9] rounded-full peer ${checked ? 'peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full' : ''} after:content-[''] after:absolute after:top-[2px] after:start-[2px] before:bg-[white] after:bg-[#4F8BED]  after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
//                 ></div>
//             </label>
//         </div>
//     );
// }

// export default ToggleButton;
