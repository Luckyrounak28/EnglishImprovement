// Handle writing task form submission
document.getElementById('writingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('writingTitle').value;
    const content = document.getElementById('writingContent').value;
    
    if (title && content) {
        // Display submitted content
        const submissionLog = document.getElementById('submissionLog');
        const newSubmission = document.createElement('div');
        newSubmission.innerHTML = `<h3>${title}</h3><p>${content}</p><hr>`;
        submissionLog.appendChild(newSubmission);
        
        // Clear form after submission
        document.getElementById('writingForm').reset();
    } else {
        alert('Please fill in both the title and content.');
    }
});

// Grammar tips logic
const grammarTips = [
    { title: 'Active vs Passive Voice', content: 'Active: The cat chased the mouse. Passive: The mouse was chased by the cat.' },
    { title: 'Active vs Passive Voice', content: 'Active: The cat chased the mouse. Passive: The mouse was chased by the cat.' },
    { title: 'Comma Splices', content: 'Incorrect: I went to the store, it was closed. Correct: I went to the store, but it was closed.' },
    { title: 'Subject-Verb Agreement', content: 'Singular subjects require singular verbs: "The dog runs." Plural subjects require plural verbs: "The dogs run."' },
    { title: 'Use of Articles (a, an, the)', content: 'A is used before a word that starts with a consonant sound: "a dog." An is used before a word that starts with a vowel sound: "an apple." The is used for specific items: "the moon."' },
    { title: 'Pronoun-Antecedent Agreement', content: 'Make sure pronouns agree with their antecedents: "Each student must bring his or her book."' },
    { title: 'Use of Apostrophes', content: 'Apostrophes show possession or contraction: "The dog’s bone" or "It’s (it is) raining."' },
    { title: 'Than vs Then', content: 'Than is used for comparison: "She is taller than me." Then refers to time: "I will go shopping, then to the movies."' },
    { title: 'There, Their, They’re', content: 'There refers to a place: "Look over there." Their is possessive: "That is their car." They’re is a contraction for "they are": "They’re going home."' },
    { title: 'Who vs Whom', content: 'Who is used as the subject: "Who is going?" Whom is used as the object: "Whom did you invite?"' },
    { title: 'Fewer vs Less', content: 'Fewer is used with countable nouns: "Fewer people attended." Less is used with uncountable nouns: "There is less water."' },
    { title: 'Your vs You’re', content: 'Your shows possession: "Is this your pen?" You’re is a contraction of "you are": "You’re my friend."' },
    { title: 'Its vs It’s', content: 'Its shows possession: "The cat licked its paw." It’s is a contraction of "it is": "It’s raining."' },
    { title: 'Parallelism', content: 'Ensure elements in a series are parallel: "She likes swimming, running, and hiking." Not: "She likes swimming, running, and to hike."' },
    { title: 'Double Negatives', content: 'Avoid using double negatives: "I don’t know anything" is correct. "I don’t know nothing" is incorrect.' },
    { title: 'Punctuation in a List', content: 'Use commas to separate items: "I bought apples, oranges, and bananas."' },
    { title: 'Adjective Order', content: 'The correct order for adjectives is: quantity, quality, size, age, shape, color, origin, material, purpose. Example: "A small red leather bag."' },
    { title: 'Me vs I', content: 'Use "I" for the subject: "John and I went." Use "me" for the object: "He gave it to John and me."' },
    { title: 'Active Voice', content: 'Use active voice to make sentences clearer: "The chef cooked the meal." Instead of passive: "The meal was cooked by the chef."' },
    { title: 'Effect vs Affect', content: 'Effect is usually a noun: "The effect was surprising." Affect is usually a verb: "The news affected him deeply."' },
    { title: 'Compliment vs Complement', content: 'Compliment is praise: "She gave me a compliment." Complement completes something: "The sauce complements the dish."' },
    { title: 'Lose vs Loose', content: 'Lose means to not win or misplace: "Don’t lose your keys." Loose means not tight: "This shirt is too loose."' },
    { title: 'Who’s vs Whose', content: 'Who’s is a contraction of "who is": "Who’s coming?" Whose shows possession: "Whose book is this?"' },
    { title: 'Good vs Well', content: 'Good is an adjective: "She is a good dancer." Well is an adverb: "She dances well."' },
    { title: 'Each vs Every', content: 'Each refers to individuals: "Each person gets a gift." Every refers to the group: "Every student passed the exam."' },
    { title: 'Amount vs Number', content: 'Amount is used with uncountable nouns: "The amount of water." Number is used with countable nouns: "The number of apples."' },
    { title: 'May vs Might', content: 'May is for permission or possibility: "May I come in?" Might suggests a weaker possibility: "It might rain later."' },
    { title: 'Hyphen vs Dash', content: 'A hyphen connects words: "mother-in-law." A dash separates thoughts: "I was thinking — but never mind."' },
    { title: 'Since vs Because', content: 'Since relates to time: "I’ve been here since Monday." Because shows reason: "I came because I was invited."' },
    { title: 'Past vs Passed', content: 'Past refers to time: "In the past, we traveled often." Passed is the verb: "He passed the exam."' },
    { title: 'Affect vs Effect', content: 'Affect is a verb: "The cold weather affected my health." Effect is a noun: "The medicine had a strong effect."' },
    { title: 'Lay vs Lie', content: 'Lay requires a direct object: "I will lay the book down." Lie does not: "I’m going to lie down."' }
]
let currentTip = 0;

function showTip() {
    const tipElement = document.getElementById('grammarTipContent');
    tipElement.innerHTML = `<h3>Grammar Tip: ${grammarTips[currentTip].title}</h3><p>${grammarTips[currentTip].content}</p>`;
}

function nextTip() {
    currentTip = (currentTip + 1) % grammarTips.length;
    showTip();
}

function prevTip() {
    currentTip = (currentTip - 1 + grammarTips.length) % grammarTips.length;
    showTip();
}

showTip();

// Using Free Dictionary API (just for testing)
async function searchDictionary() {
    const word = document.getElementById('dictionaryInput').value.trim();
    const dictionaryResult = document.getElementById('dictionaryResult');

    if (!word) {
        dictionaryResult.innerHTML = "<p>Please enter a word.</p>";
        return;
    }

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        if (data.length > 0 && data[0].meanings) {
            const englishMeaning = data[0].meanings[0].definitions[0].definition;

            // Display the meaning (you can add Hindi translation as in previous step)
            dictionaryResult.innerHTML = `
                <p><strong>English Meaning:</strong> ${englishMeaning}</p>
            `;
        } else {
            dictionaryResult.innerHTML = "<p>Word not found in dictionary.</p>";
        }
    } catch (error) {
        console.error("Error fetching dictionary meaning:", error);
        dictionaryResult.innerHTML = "<p>Error fetching the meaning. Please try again later.</p>";
    }
}



// Download the writing task as a text file
function downloadStory() {
    const title = document.getElementById('writingTitle').value;
    const content = document.getElementById('writingContent').value;

    if (title && content) {
        const storyBlob = new Blob([`Title: ${title}\n\n${content}`], { type: 'text/plain' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(storyBlob);
        downloadLink.download = `${title}.txt`;
        downloadLink.click();
    } else {
        alert('Please enter your story before downloading.');
    }
}
