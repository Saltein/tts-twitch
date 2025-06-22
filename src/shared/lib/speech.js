export function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU'; // Или 'en-US'
    speechSynthesis.speak(utterance);
}