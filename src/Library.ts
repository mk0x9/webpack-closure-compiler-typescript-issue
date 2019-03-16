import instanceMethod from "./Library/instanceMethod";
import staticMethod from "./Library/staticMethod";

type LibraryOptions = {
  msg: string;
};

export default class Library {
  constructor(libraryOptions: LibraryOptions) {
    console.log("LibraryOptions: ", libraryOptions);
  }

  instanceMethod = instanceMethod;

  static staticMethod = staticMethod;
}
