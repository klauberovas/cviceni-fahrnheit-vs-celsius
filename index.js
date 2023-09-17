// Fahrnheit vs. Celsius

// Vytvořte převodník stupňů Fahrenheita na stupně Celsia.
// Pokud pečete podle anglických receptů, často se po váš požaduje rozehřát troubu na uvedenou teplotu. Pokud si ovšem neuvědomíte, že Američané používají pro měření teploty stupně Fahrenheita namísto Celsia, bude vás na konci pečení čekat nemilé překvapení.

// Nastudujte si na České Wikipedii jak se převádějí stupně Fahrenheita na stupně Celsia a vytvořte webovou stránku, která takový převod provede. Vaše stránka se zeptá uživatele teplotu ve stupních Fahrenheita a pomocí document.body.innerHTML vypíše její ekvivalent ve stupních Celsia.

const fahrenheit = Number(prompt('Zadejte teplotu ve stupních Fahrenheita.'));
const celsius = Math.round((5 / 9) * (fahrenheit - 32));
document.body.innerHTML +=
  '<h1>Převodník</h1><p>Vaše teplota je ' + celsius + '° C</p>';
