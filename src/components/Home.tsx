import React from "react";
import useStore from "../store/useStore";

const Home: React.FC = () => {
	const { count, setCount } = useStore((state) => state);
	return (
		<div className='flex flex-col items-center p-4'>
			<span>Count = {count}</span>
			<span className='flex gap-1'>
				<button
					className='border-solid border-2 border-sky-500 rounded px-2'
					onClick={() => setCount(count - 1)}
				>
					-1
				</button>
				<button
					className='border-solid border-2 border-sky-500 rounded px-2'
					onClick={() => setCount(count + 1)}
				>
					+1
				</button>
			</span>
		</div>
	);
};

export default Home;
