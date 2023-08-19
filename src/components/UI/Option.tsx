import React from 'react';


interface Props {
    optionText: string;
    isCorrect: boolean;
    option: string;
    isSelected: boolean;
    selectedOption: number | undefined;
    setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedOption: (id: number) => void;
    id: number;
    correct_answer: number
}

const Option = ({ optionText, isCorrect, option, selectedOption, isSelected, setIsSelected, setSelectedOption, id, correct_answer }: Props) => {



    return (
        <div
            onClick={() => {
                setIsSelected(true);
                setSelectedOption(id);
            }}
            className={`${isSelected && isCorrect && selectedOption === id ? '!bg-green-400' : isSelected && !isCorrect && selectedOption === id ? '!bg-red-500' : selectedOption !== id ? 'hover:bg-[#0fd8df]' : ''
                } ${isSelected && !isCorrect && correct_answer === id && '!bg-green-500'} bg-white relative link-overlay-parent flex items-center py-7 px-6 group gap-5 rounded-xl cursor-pointer transition-colors duration-150`}
        >
            <div className='link-overlay'></div>
            <span
                className={`${isSelected && selectedOption === id ? '!bg-[#0f3c77] text-white' : 'bg-[#c3fdfa] text-[#164e66] group-hover:bg-[#0f3c77] group-hover:text-white'
                    } font-bold px-2.5 py-1 transition-colors duration-200 rounded-full shadow-mg`}
            >
                {option}
            </span>
            <p
                className={`${(isSelected && isCorrect && selectedOption === id) || (isSelected && !isCorrect && selectedOption === id) ? 'text-white' : 'text-[#164e66]'
                    } group-hover:text-white font-semibold text-lg select-none w-full`}
            >

                {optionText}
            </p>
        </div>
    );
};

export default Option;
