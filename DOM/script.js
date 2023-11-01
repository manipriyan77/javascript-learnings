console.log(window);
console.log(document);
console.log(document.documentElement);
console.log(document.body);
document.body.children[0].children[0].textContent = 'Hello World';
console.log(
  document.doctype,
  document.domain,
  document.URL,
  document.characterSet,
  document.contentType
);
