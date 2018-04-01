// require('devtron').install()

console.log('alma');

const versionElement = document.querySelector('#version');
versionElement.innerHTML = process.versions.electron;

console.log('versions:', process.versions);