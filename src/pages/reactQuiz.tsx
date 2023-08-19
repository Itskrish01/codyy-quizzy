import { useState, useMemo } from 'react'
import Option from '../components/UI/Option';
import { Button } from '../components/UI/Button';
import { useNavigate } from "react-router-dom";
import ScoreScreen from '../components/scoreScreen/ScoreScreen';
import { motion, AnimatePresence } from 'framer-motion';
import ReactQuestions from '../questions/reactQuestions';
import Timer from '../components/UI/Timer';
import { useTimer } from 'react-timer-hook';

const ReactQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [isCompleted, setIsCompleted] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<number>()
    const [score, setScore] = useState<number>(0);
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);
    const {
        seconds,
        minutes,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => setIsCompleted(true) });

    const navigate = useNavigate()
    const activeQuestion = ReactQuestions[currentQuestion]

    const optionsList = useMemo(() => {
        return activeQuestion.options.map((option, index) => ({
            id: option.id,
            text: option.text,
            option: String.fromCharCode(65 + index),
        }));
    }, [activeQuestion]);



    const handleOptionSelection = (selectedId: number) => {
        setIsSelected(true);
        setSelectedOption(selectedId);
        setIsCorrect(selectedId === ReactQuestions[currentQuestion].correct_option);
    };

    const nextQuestion = () => {
        if (ReactQuestions.length - 1 === currentQuestion) {
            setIsCompleted(true);
            return;
        }
        if (isCorrect) {
            setScore((prevScore) => prevScore + 10);
        }
        setIsSelected(false);
        setIsCorrect(false);
        setSelectedOption(undefined);
        setCurrentQuestion((prevQuestion) =>
            prevQuestion < ReactQuestions.length - 1 ? prevQuestion + 1 : prevQuestion
        );
    };

    const handleReset = () => {
        setIsCompleted(false)
        setCurrentQuestion(0)
        setIsCorrect(false)
        setIsSelected(false)
        setScore(0)
        setSelectedOption(undefined)
        restart(expiryTimestamp, true)
    }


    if (isCompleted) {
        return <ScoreScreen total_marks={ReactQuestions.length * 10} earned_marks={score} testType='html' setReset={handleReset} />
    }

    return (
        <main className='mx-auto container max-w-xl px-4 pt-5'>
            <div className='flex justify-between items-center'>
                <Timer seconds={seconds} minutes={minutes} />
                <h1 className='text-3xl text-cyan-950 font-semibold uppercase'>React Quiz</h1>
                <div onClick={() => navigate('/')} className='p-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#2c5c68] cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
            </div>
            <section className='w-full'>
                <div>
                    <div className='text-center mt-10'>

                        <motion.h4
                            key={ReactQuestions[currentQuestion].question}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0, transition: { ease: 'easeOut', delay: 0.4 } }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className='text-2xl text-cyan-900 mt-10 max-h-20 font-semibold'>{ReactQuestions[currentQuestion].question}</motion.h4>
                    </div>
                    <ul className='mt-10 space-y-4 max-h-[60vh]'>
                        <AnimatePresence>
                            {optionsList.map((option, index) => (
                                <motion.li
                                    key={option.id}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0, transition: { ease: 'easeOut', delay: 0.6 } }}
                                    exit={{ opacity: 0, x: -100, transition: { ease: 'easeIn', delay: 0.2 } }}
                                    transition={{ duration: 0.4 }}>

                                    <Option
                                        id={option.id}
                                        optionText={option.text}
                                        option={String.fromCharCode(65 + index)}
                                        isCorrect={isCorrect}
                                        selectedOption={selectedOption}
                                        isSelected={isSelected}
                                        setSelectedOption={isSelected ? null : () => handleOptionSelection(option.id)}
                                        setIsSelected={setIsSelected}
                                        correct_answer={activeQuestion.correct_option}
                                    />
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>
                    <div className=" flex justify-between items-center my-14">
                        <h5 className='text-xl text-cyan-950 font-semibold '>Questions  {currentQuestion + 1}/{ReactQuestions.length}</h5>
                        <Button type='button' disabled={!isSelected} variant="secondary" size="lg" onClick={nextQuestion}  >
                            {ReactQuestions.length - 1 === currentQuestion ? 'Finish' : 'Next Question'}
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ReactQuiz;
