import { useEffect, useState } from "react";
import { notebookController } from "../../composition";

function App() {
	const [name, setName] = useState<string | null>(null);

	useEffect(() => {
		async function getNotebookName() {
			console.log("[Framework layer] UI event calls the controller");
			const notebookName = await notebookController.getNotebookName();
			setName(notebookName);
		}

		try {
			getNotebookName();
		} catch {
			console.error("Error happened while getting the name");
		}
	});

	if (!name) return <p>Loading...</p>;
	return <p>The notebook's name is {name}</p>;
}

export default App;
