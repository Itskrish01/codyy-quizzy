import ButtonLink from '../components/UI/ButtonLink'
import { motion } from "framer-motion"

const Homepage = () => {
    return (
        <main className='mx-auto container max-w-xl h-screen px-4'>
            <section className='w-full' >
                <div>
                    <div className='text-center pt-40'>
                        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'tween', delay: 0 }} className='text-5xl text-cyan-950 font-semibold uppercase'>Coding quizzes</motion.h1>
                        <motion.p initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'tween', delay: 0.2 }} className='text-lg mt-2 text-cyan-800'>Test Your Coding Skills and Knowledge</motion.p>
                    </div>
                    <ul className='mt-10 space-y-4'>
                        <motion.li initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'tween', delay: 0.4 }}>
                            <ButtonLink linkUrl='html' imgUrl='/small_icons/html-5.png' title='HTML 5' />
                        </motion.li>
                        <motion.li initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'tween', delay: 0.5 }}>
                            <ButtonLink linkUrl='react' imgUrl='/small_icons/science.png' title='React JS' />
                        </motion.li>
                        <motion.li initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'tween', delay: 0.6 }}>
                            <ButtonLink linkUrl='javascript' imgUrl='/small_icons/js.png' title='Javascript' />
                        </motion.li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Homepage