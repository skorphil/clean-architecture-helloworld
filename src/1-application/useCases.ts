/*
Use case can depend only on modules from the same 
or inner layers (rule of dependencies).
Thus, it only imports domain entities and ports and do not import 
concrete adapter.

However, this use case anyway requires concrete notebookRepository to work.
To respect the rule of dependencies and to let getNotebook
use `tauriNotebookRepository`, the dependency injection should be used.

The concrete notebook repository will be injected in the instance of GetNotebook
in a `composition root`, which does not conceptually related to any of architecture
layers. Commonly `composition root` located at the application entry point.
*/
import { Notebook } from "@domain";
import type { NotebookRepositoryPort } from "./ports";

type GetNotebookInterface = {
	execute: () => Promise<Notebook>;
};

class GetNotebook implements GetNotebookInterface {
	constructor(private notebookRepository: NotebookRepositoryPort) {}

	async execute() {
		console.log(
			`[Application layer] GetNotebook is executing and creating instance of domain class...`,
		);
		const { name, creationDate } = await this.notebookRepository.readNotebook();
		return new Notebook(name, creationDate);
	}
}

export { GetNotebook };
export type { GetNotebookInterface };
