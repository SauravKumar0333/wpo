
function findLongestWord(sentence) {

    const words = sentence.split(' ');

    let longestWord = '';
    let longestLength = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const length = word.length;

        if (length > longestLength) {
            longestWord = word;
            longestLength = length;
        }
    }

    return longestWord;
}

const sentence = 'The quick brown fox jumps over the lazy dog';
const longestWord = findLongestWord(sentence);
console.log(longestWord);
                    </script >

                </body >

            </html >