import Library from "./Library";

declare global {
  interface Window {
    lib: typeof Library;
    a: Library;
  }
}

window.lib = Library;
