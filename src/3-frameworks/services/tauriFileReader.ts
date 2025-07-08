/**
 * Mock of concrete external service(framework).
 * In this example our fictional tauri(cross-platform framework) service
 * reads the content of a file from local filesystem and returns unformatted string.
 */
class TauriFileReader {
	readFile(fileUri: string): Promise<string> {
		console.log(
			`[Framework layer] tauriFileReader reads file from ${fileUri}...`,
		);
		const fileData = "NotebookName,1751969945";
		return new Promise((res) => setTimeout(() => res(fileData), 450));
	}
}

export const tauriFileReader = new TauriFileReader();
