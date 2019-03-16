import instanceMethod from "./Library/instanceMethod";
import staticMethod from "./Library/staticMethod";

declare global {
  type LibraryOptions = {
    msg: string;
  };
}

export default class Library {
  constructor(libraryOptions: LibraryOptions) {
    console.log("LibraryOptions: ", libraryOptions);
  }

  /**
   * @export
   */
  instanceMethod = instanceMethod;

  /**
   * @export
   */
  static staticMethod = staticMethod;
}

window.lib = Library;
