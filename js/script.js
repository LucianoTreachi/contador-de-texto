const textarea = document.querySelector(".textarea")
const numberOfCharacters = document.querySelector(".number-of-characters")
const numberOfWords = document.querySelector(".number-of-words");
const numberOfPhrases = document.querySelector(".number-of-phrases")
const numberOfParagraphs = document.querySelector(".number-of-paragraphs");

const resetButton = document.querySelector(".reset-button");
const deleteTextButton = document.querySelector(".delete-text-button");

// CHARACTERS
function countCharacters() {
  const characters = textarea.value.length;
  numberOfCharacters.textContent = characters;
}

// WORDS
function countWords() {
  const words = textarea.value.split(/\s|[^\wáéíóúüÁÉÍÓÚÜñÑàèìòùÀÈÌÒÙäëïöüÄËÏÖÜ\/\-]/).filter(word => word.length > 0).length;
  numberOfWords.textContent = words;
}

// PHRASES
function countPhrases() {
  const phrases = textarea.value.split(/[\.\!\?]+(\s+|$)/).filter(phrase => phrase.trim().length > 0).length;
  numberOfPhrases.textContent = phrases;
}

// PARAGRAPHS
function countParagraphs() {
  const paragraphs = textarea.value.split(/\n\s*/).filter(paragraph => paragraph.trim().length > 0).length;
  numberOfParagraphs.textContent = paragraphs;
}

// UPDATE
function updateCounts() {
  countCharacters();
  countWords();
  countPhrases();
  countParagraphs();
}

// RESET
function resetCounts() {
  textarea.value = "";
  numberOfCharacters.textContent = 0;
  numberOfWords.textContent = 0;
  numberOfPhrases.textContent = 0;
  numberOfParagraphs.textContent = 0;
}

// LISTENERS
textarea.addEventListener("input", updateCounts);
resetButton.addEventListener("click", resetCounts);
deleteTextButton.addEventListener("click", resetCounts);