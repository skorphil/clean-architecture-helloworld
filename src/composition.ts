import { NotebookController, TauriNotebookRepository } from "@adapters";
import { GetNotebook } from "@application";
import { tauriFileReader } from "@frameworks/services";

/*
This is example of manual dependency injection.

Automatic dependency injection techniques, like dependency injection container 
might be used. 

For js/ts there are inversifyJs and ts-loader
*/

const notebookRepository = new TauriNotebookRepository(tauriFileReader);
const getNotebook = new GetNotebook(notebookRepository);
const notebookController = new NotebookController(getNotebook);

export { notebookController };
