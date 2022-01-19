import { useId } from 'react';

export function IdOne() {
	const id1 = useId();
	return (
		<div>
			<h1>this is id one: {id1}</h1>
		</div>
	);
}
