import { Question } from "@/types/question.type";

const questions: Question[] = [
  {
    title: "How does city search work?",
    body: 'You can type the name of a city into the search bar and press the "Enter" key or click the search button to find available cities. Select the desired city to view detailed weather information.'
  },
  {
    title: "What weather information is available in the app?",
    body: "The app displays the following weather details:\n• Current temperature.\n• Minimum and maximum temperatures.\n• Description of weather conditions (e.g., sunny, rainy, snowy)."
  },
  {
    title: "Does the app work offline?",
    body: "The app requires an internet connection to load up-to-date weather data."
  },
  {
    title: "How can I switch themes (day/night)?",
    body: "The app automatically switches themes based on the time of day."
  },
  {
    title: "Do I need to register to use the app?",
    body: "No, registration is not required to access the main functionality of the app."
  }
];

export { questions };
