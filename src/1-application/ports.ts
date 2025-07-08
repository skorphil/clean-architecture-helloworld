/*
`port` is a common term used in _clean architecture_
and in _ports & adapters_ pattern. 
It connects `useCases` related to application layer with concrete 
`adapters` related to framework layer.
TS types/interfaces is one of the technique used to declare 
a `port` inside an application layer. 
/*


/**
 * Output port for service, which gets Notebook from somewhere.
 */
export type NotebookRepositoryPort = {
	readNotebook: () => Promise<{ name: string; creationDate: number }>;
};

/**
 * Input port for service, which requests Notebook data
 */
export type NotebookControllerPort = {
	getNotebookName: () => Promise<string>;
};
