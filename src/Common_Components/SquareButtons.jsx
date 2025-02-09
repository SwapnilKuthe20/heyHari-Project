const SquareButtons = ({ className, onClick, title, className, isActive }) => {
    return (
        <div>
            <button className={`rounded-lg ${className}  font-poppins focus:outline-none
                    ${isActive ? 'bg-[#EBF5FF] text-[#0060C3]' : ' bg-[#E5E6EB] text-[#000000]'}  `}
                onClick={onClick} >
                {title}
            </button>
        </div>
    );
};

export default SquareButtons;