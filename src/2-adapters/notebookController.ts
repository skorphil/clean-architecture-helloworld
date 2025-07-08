/*
This adapter depends only on output application port and
on the type of useCase

As with a `tauriNotebookRepository` the concrete useCase implementation will
be injected in composition root. 
 */
import type {
	GetNotebookInterface,
	NotebookControllerPort,
} from "@application";

/**
 * Primary (driving) adapter. Executes specific useCase (can be multiple usecases)
 * In this example it formats output in some way.
 */
export class NotebookController implements NotebookControllerPort {
	constructor(private getNotebookUseCase: GetNotebookInterface) {}

	/**
	 * @returns notebook name in upper case
	 */
	async getNotebookName() {
		console.log(
			`[Adapters layer] NotebookController is executing getNotebookName()...`,
		);
		const notebook = await this.getNotebookUseCase.execute();

		return notebook.name.toUpperCase();
	}
}
