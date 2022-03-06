(function (global, jquery) {
  const Greeter = function (firstname, lastname, language) {
    return new Greeter.init(firstname, lastname, language);
  };

  const suppoertedLangs = ["en", "es"];

  const greetings = {
    en: "Hello",
    es: "Hola",
  };
  const formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  const logMessages = {
    en: "Logged in",
    es: "Inicio sesion",
  };

  Greeter.prototype = {
    fullname: function () {
      return this.firstname + " " + this.lastname;
    },
    validate: function () {
      if (suppoertedLangs.indexOf(this.language) === -1) {
        throw "Invalid Language";
      }
    },
    greeting: function () {
      return greetings[this.language] + " " + this.firstname + "!";
    },
    formalGreeting: function () {
      return formalGreetings[this.language] + ", " + this.fullname() + "!";
    },
    greet: function (formal) {
      let msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }
      return this;
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ":" + this.fullname());
      }
      return this;
    },
    setLang: function (lang) {
      this.language = lang;
      this.validate();
      return this;
    },
    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw "jQuery not loaded";
      }
      if (!selector) {
        throw "Missing jQuery selector";
      }
      let msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      $(selector).html(msg);
      return this;
    },
  };

  Greeter.init = function (firstname, lastname, language) {
    let self = this;
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";

    self.validate();
  };

  Greeter.init.prototype = Greeter.prototype;

  global.Greeter = global.G$ = Greeter;
})(window, $);
