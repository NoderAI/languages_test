import React from 'react';

type TestTSXComponentProps = {
	title: string;
	description?: string;
};

export const TestTSXComponent = (props: TestTSXComponentProps) => {

	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		console.log(`Component mounted with title: ${props.title}`);
		return () => {
			console.log('Component unmounted');
		};
	}, [props.title]);

	return (
		<div className="test-tsx-component">
			<h1>{props.title}</h1>
			{props.description && <p>{props.description}</p>}
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<p>Count: {count}</p>
		</div>
	);
};
