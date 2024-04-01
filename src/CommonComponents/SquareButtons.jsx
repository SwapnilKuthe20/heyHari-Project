const SquareButtons = ({className,onClick,title,type,isActive}) => {
    return (
        <div className='mt-4 ms-4'>
            <div> <button
          type={type}
          className={`rounded-lg me-3 px-12 py-2 font-poppins ${isActive ? 'bg-[#EBF5FF] text-[#0060C3]' : ' bg-[#E5E6EB] text-[#000000]'}  `}
          onClick={onClick}> {title}
        </button>
                
            </div>
        </div>
    );
};

export default SquareButtons;



