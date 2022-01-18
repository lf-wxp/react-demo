import { useId } from 'react';
import './app.pcss';

export function App() {
	const id1 = useId();
	const id2 = useId();
	return (
		<div>
			<h1 className="color">id1: {id1}</h1>
			<h1 className="color">id2: {id2}</h1>
		</div>
	);
}
