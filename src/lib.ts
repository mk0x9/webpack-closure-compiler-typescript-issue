import Library from "./Library";

declare global {
  interface Window {
    lib: typeof Library;
  }
}

window.lib = Library;
