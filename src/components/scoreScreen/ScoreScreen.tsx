import { motion } from "framer-motion"
import Lottie from "lottie-react";
import clapAnim from "../../assets/clap_anim.json";
import { Button } from "../UI/Button";
import { useNavigate } from "react-router-dom";

type Props = {
    total_marks: number
    earned_marks: number
    testType: string
    setReset: () => void
}

const ScoreScreen = ({ total_marks, earned_marks, testType, setReset }: Props) => {
    const navigate = useNavigate()
    return (
        <main className='mx-auto flex items-center justify-center container max-w-xl h-screen px-4'>
            <motion.section className='w-full' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <Lottie animationData={clapAnim} className=" h-80" loop={true} />
                <div className='text-center'>
                    <h1 className='text-5xl text-cyan-950 font-semibold uppercase'>Your score in {testType.toUpperCase()}</h1>
                    <h1 className='text-4xl text-cyan-700 uppercase mt-4'>{earned_marks}/{total_marks}</h1>

                </div>
                <div className="mt-10 flex items-center justify-center gap-10">
                    <Button variant="outline" size="lg" onClick={() => navigate('/')} className='float-right' >
                        Home
                    </Button>
                    <Button variant="secondary" size="lg" onClick={setReset} className='float-right' >
                        Retry
                    </Button>
                </div>
            </motion.section>

        </main>
    )
}

export default ScoreScreen