# Weather App 🌦️

This is a weather application that allows users to:

- **Search for cities** and view detailed weather information.
- Display **current weather**, including temperature, minimum/maximum temperatures, and weather conditions.
- Automatically switch between **day and night themes** based on the time of day.

The application is built using modern tools and libraries:

- **TypeScript** for type safety.
- **React** for the user interface.
- **Redux Toolkit** for state management.
- **Vite** for a fast development environment.

---

## Installation and Usage

Follow these steps to set up the application locally:

### 1. Prerequisites

Ensure you have the following installed:

- **Node.js** (>=16.x)
- **npm** or **yarn**

If you do not have these installed, you can download Node.js from [Node.js official website](https://nodejs.org/), which includes npm.

---

### 2. Clone the Repository

```bash
git clone https://github.com/marharita08/weather-app.git
cd weather-app
```

### 3. Install Dependencies

To ensure that `vite` and other required packages are installed locally, run:

```bash
npm install
```

or, if you prefer yarn:

```bash
yarn install
```

### 4. Create .env

Create a `.env` file with the following content:

| Variable            | Default value                              | Description                                |
| ------------------- | ------------------------------------------ | ------------------------------------------ |
| `VITE_API_URL`      | `https://api.openweathermap.org/data/2.5/` | Base URL for OpenWeatherMap API.           |
| `VITE_API_ICON_URL` | `https://openweathermap.org/img/wn/`       | Base URL for weather icons.                |
| `VITE_API_KEY`      | `your-openweathermap-key`                  | Your personal API key from OpenWeatherMap. |

Replace `your-openweathermap-key` with the API key you generate by following the instructions below.

## How to Generate an API Key for OpenWeatherMap

1. Visit the official [OpenWeatherMap website](https://openweathermap.org/).
2. Register for a new account or log in to your existing account.
3. Navigate to the **API keys** section:
   - Click on your username in the top-right corner of the website.
   - Select **My API keys** from the dropdown menu.
4. On the API keys page:
   - If you don't already have an API key, click **Create Key**.
   - Give your API key a name (e.g., "Weather App") and click **Generate**.
5. Copy the generated API key.
6. Replace `your-openweathermap-key` in your `.env` file with the copied key.

### 5. Start the Development Server

Run the following command to start the application locally:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will be available at http://localhost:5173/weather-app/
