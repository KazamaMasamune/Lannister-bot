Lannister-bot 🦁

Overview 📜

Lannister-bot is a web-based chatbot that uses machine learning to roleplay as Tywin Lannister, the cunning and authoritative patriarch of House Lannister from Game of Thrones. Built with Vite ⚡, TypeScript 🟦, and Tailwind CSS 🎨, this project combines a sleek frontend with an ML-driven backend to generate strategic, commanding, and Tywin-like responses to user inputs. Whether you're seeking advice on leadership, strategy, or family legacy, Lannister-bot channels Tywin's sharp mind to respond in character. 💡
Key Features ✨

Roleplay as Tywin Lannister 🗣️: Uses ML models (via mlUtils.ts and tywinBrain.ts) to generate responses in Tywin's tone and style.
Responsive UI 📱: Built with React (via Index.tsx) and styled with Tailwind CSS for a clean, medieval-inspired interface.
Error Handling 🚫: Includes a NotFound.tsx page for smooth navigation.
Fast Development ⚡: Leverages Vite for a blazing-fast development experience.

Setup 🛠️

Prerequisites ✅


Node.js (v18 or higher) 🟢
Bun (optional, for faster package management) 🍞
Git 🗃️

Installation 📦


Clone the Repository 📥:
git clone https://github.com/KazamaMasamune/Lannister-bot.git
cd Lannister-bot


Install Dependencies 🔧:Using npm:
npm install

Or using Bun:
bun install


Run the Development Server 🚀:
npm run dev

Or with Bun:
bun run dev

Open http://localhost:5173 in your browser to see the app. 🌐


Usage 🎮


Interact with Tywin 💬:


Navigate to the homepage (/) to start chatting with Tywin Lannister.
Type a question or scenario (e.g., "How should I deal with a rebellious vassal?").
The bot processes your input using the ML model in tywinBrain.ts and responds in Tywin's commanding style (e.g., "A lion does not concern himself with the opinions of sheep. Crush their rebellion swiftly, or they’ll multiply.").


Explore the UI 🖼️:


The interface is styled to reflect the Lannister aesthetic—think crimson and gold tones with a medieval font. 🎨
If you navigate to an invalid route, the NotFound.tsx page will guide you back. 🧭



Project Structure 📂


src/pages/Index.tsx 🏠: Main chat interface for interacting with Tywin.
src/pages/NotFound.tsx 🚩: 404 page for invalid routes.
src/utils/mlUtils.ts 🛠️: Utility functions for ML model integration (e.g., text preprocessing).
src/utils/tywinBrain.ts 🧠: Core ML logic for generating Tywin-like responses.
tailwind.config.ts 🎨: Tailwind CSS configuration for styling.
vite.config.ts ⚡: Vite configuration for the project.

ML Implementation 🤖

The ML component (tywinBrain.ts) uses a fine-tuned language model to mimic Tywin Lannister's speech patterns:

Training Data 📚: Sourced from Game of Thrones scripts and books, focusing on Tywin’s dialogue.
Model 🧠: A lightweight transformer model (e.g., a fine-tuned DistilBERT or GPT-2) to generate responses.
Preprocessing 🔍: mlUtils.ts handles input tokenization and formatting to ensure the model understands user queries.

Future Plans 🌟


Add voice synthesis to let Tywin "speak" responses in Charles Dance’s iconic voice. 🎙️
Integrate with a backend API to improve response generation and store conversation history. 🌐
Enhance the UI with more Lannister-themed elements (e.g., a Casterly Rock background). 🏰
Deploy to Vercel or Netlify for public access. 🚀

Contributing 🤝

Contributions are welcome! To contribute:

Fork the repository. 🍴

Create a new branch (git checkout -b feature/your-feature). 🌿
Commit your changes (git commit -m "Add your feature"). 💾
Push to the branch (git push origin feature/your-feature). 📤
Open a pull request. 📜

