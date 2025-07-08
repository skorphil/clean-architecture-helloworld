/*
Domain entity should not depend on outer layers, thus there is no imports here
*/

/**
 * Notebook business entity, represented with a class.
 *
 * However, clean architecture does not force us to use classes.
 * We are free to specify entities as objects or just types.
 */
class Notebook {
	// this syntax automatically assigns name and creationDate to `this.name` and `this.creationDate`
	constructor(
		public name: string,
		public creationDate: number,
	) {}
}

export { Notebook };
