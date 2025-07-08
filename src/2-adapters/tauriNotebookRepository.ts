/*
This adapter depends on a `port`, declared in the inner application layer
and declares API for concrete external service(framework)

External service can be external API, browser localStorage,
framework-related feature or another service with it's own API.

In this example, mocked service pretend to be a local filesystem reader, which
make sense in cross-platform development.
*/
import type { NotebookRepositoryPort } from "@application";

/**
 * Mocked uri
 * In a real world scenario we would get it from somewhere, for example from
 * user's config in localStorage.
 *
 * It's important to not pass this uri to methods related to inner layers.
 * For example we should not pass this uri from a UI form directly to the `useCase`
 * because it will make `useCase` depend on external `tauriFileReader`.
 * Imagine if we gonna replace this specific local file reader mechanism with
 * mongoDb, which will not need uri, but will need another parameters to work.
 */
const fileUri = "our/file/uri";

type FileReaderInterface = {
	readFile(uri: string): Promise<string>;
};

/**
 * Secondary (driven) adapter which access Notebook content via
 * specific mechanism `tauriFileReader`
 */
class TauriNotebookRepository implements NotebookRepositoryPort {
	constructor(
		private fileReader: FileReaderInterface,
		private uri = fileUri,
	) {}

	async readNotebook() {
		console.log(
			`[Adapters layer] TauriNotebookRepository is executing readNotebook()...`,
		);
		const notebookData = await this.fileReader.readFile(this.uri);

		// adapter performs some logic to manipulate external service output
		// and outputs result in a format, required by application's port
		// (NotebookRepositoryPort)
		const [name, creationDate] = notebookData.split(",");
		return {
			name,
			creationDate: Number(creationDate),
		};
	}
}

export { TauriNotebookRepository };
