const options = { msg: "hello" };

const libInstance = new window.lib(options);

window.lib.staticMethod(options);
libInstance.instanceMethod(options);

// window["a"] = libInstance;
