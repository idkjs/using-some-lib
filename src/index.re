[@genType.import ("helloWorld", "createGreeting")]
/* Name and type of the JS value to import. */
external createGreeting: string => string = "createGreeting";

Js.log(createGreeting("it works"));
