// Create a SpeechSynthesisUtterance object to configure speech properties: this default to configure speech
let speech = new SpeechSynthesisUtterance();

// Array to store available voices
let voices = [];

// Reference to the voice selection dropdown element
const voiceSelect = document.querySelector("select");

// Function to populate the voice selection dropdown with available voices
function populateVoices() {
  // Get a list of available voices from the speech synthesis API
  voices = window.speechSynthesis.getVoices();

  // Clear any existing options from the dropdown
  voiceSelect.innerHTML = '';

  // Iterate through the available voices and create dropdown options
  voices.forEach((voice, i) => {
    const option = new Option(voice.name, i); // Create a dropdown option with voice name and index
    voiceSelect.add(option); // Add the option to the dropdown
  });
}

// Event listener to repopulate the dropdown when voices change
window.speechSynthesis.onvoiceschanged = populateVoices;

// Event listener for when the selected voice changes in the dropdown
voiceSelect.addEventListener("change", () => {
  // Get the index of the selected voice
  const selectedIndex = voiceSelect.value;

  // Set the selected voice as the speech utterance's voice
  speech.voice = voices[selectedIndex];
});

// Function to speak the text from the textarea
function speakText() {
  // Get the text to be spoken from the textarea
  const text = document.getElementById('text-input').value;

  // Set the text to be spoken in the speech utterance
  speech.text = text;

  // Start speaking the text using the speech synthesis API
  window.speechSynthesis.speak(speech);
}