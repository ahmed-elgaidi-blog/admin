/**
 * A utility class for manipulating URL paths.
 */
export class PathHelper {
	/**
	 * Capitalizes the first letter of each "word" in the URL path.
	 * Words are determined by segments separated by '/'.
	 *
	 * @param url - The URL path to be capitalized.
	 * @returns An array containing the capitalized versions of the segments.
	 */
	static capitalizePath(url: string): string[] {
		const parts = url.split("/").filter((part) => part !== "");

		const capitalizedParts = parts.map((part) => {
			if (part.length > 0) {
				return part.charAt(0).toUpperCase() + part.slice(1);
			} else {
				return part;
			}
		});

		return capitalizedParts;
	}

	/**
	 * Converts each segment of the URL path to lowercase.
	 * Words are determined by segments separated by '/'.
	 *
	 * @param url - The URL path to be converted to lowercase.
	 * @returns An array containing the lowercase versions of the segments.
	 */
	static lowercasePath(url: string): string[] {
		const parts = url.split("/").filter((part) => part !== "");

		const lowercaseParts = parts.map((part) => {
			return part.toLowerCase();
		});

		return lowercaseParts;
	}
}
