interface Props {
    seconds: number
    minutes: number
}

const Timer = ({ seconds, minutes }: Props) => {
    return (
        <div className={`p-4 flex items-center ${minutes < 1 ? "text-red-600" : "text-[#2c5c68]"}`}>
            <span className="text-4xl">{minutes}</span>
            <span className="text-4xl">:</span>
            <span className="text-4xl">{seconds}</span>
        </div >
    )
}

export default Timer