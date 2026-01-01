const SentenceCapital = (sentence) => {
  const sentenceArray = sentence.toLowerCase().split(" ");

  for (let i = 0; i < sentenceArray.length; i++) {
    const singleWord =
      sentenceArray[i][0].toUpperCase() + sentenceArray[i].slice(1);
    sentenceArray[i] = singleWord;
  }
  return sentenceArray.join(" ");
};

//--------------------------

const SentenceCapital2 = (sentence) => {
  console.log(sentence)
  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

// console.log(SentenceCapital("hello world"));
const result = SentenceCapital2("hello world again")
console.log(result);
