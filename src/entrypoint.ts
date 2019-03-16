const libInstance = new window.lib({ msg: "hello" });

window.lib.staticMethod("hi");

libInstance.instanceMethod("hi again");
