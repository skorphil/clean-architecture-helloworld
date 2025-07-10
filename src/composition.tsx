import { NotebookController, TauriNotebookRepository } from "@adapters"; // TS module "/Users/philipp/Documents/GitHub/clean-architecture-feature/src/2-adapters/index"
import { GetNotebook } from "@application";
import { tauriFileReader } from "@frameworks/services";
import { NotebookCard } from "@frameworks/ui/NotebookCard";

/*
This is an example of manual dependency injection.

Automatic dependency injection techniques, like dependency injection container 
might be used. 

For js/ts there are inversifyJs and ts-loader libraries for automatic
dependency injection
*/

const notebookRepository = new TauriNotebookRepository(tauriFileReader);
const getNotebook = new GetNotebook(notebookRepository);
const notebookController = new NotebookController(getNotebook);

export function NotebookContainer() {
	return <NotebookCard notebookController={notebookController} />;
}
