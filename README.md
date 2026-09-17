🚀 OpenSource Buddy
Find your next open source contribution.

OpenSource Buddy is a lightweight AI-powered tool that helps developers explore public GitHub repositories, discover open issues, and get an AI-powered recommendation for a beginner-friendly contribution.

🔗 Live Demo: https://opensource-buddy.vercel.app/

📦 GitHub: https://github.com/saumya-30-verma/opensource-buddy

✨ What It Does
Finding a good first open-source contribution can be overwhelming. OpenSource Buddy makes the process simpler.

Just paste a public GitHub repository URL, and the app:

📊 Fetches repository information
⭐ Shows stars, forks, issues, and primary language
🐛 Finds open issues
🔎 Filters out pull requests
🏷️ Displays issue labels
🔗 Lets you open issues directly on GitHub
🤖 Uses AI to recommend a suitable issue and explain why it may be a good starting point
🧠 AI Recommendation
OpenSource Buddy uses Groq AI to analyze the repository's available issues and provide a simple recommendation.

Instead of making developers manually scan through issues, the AI highlights a potentially suitable issue and gives a short explanation.

Example:

AI Recommendation Issue with CA certs in 1.18.0

This issue deals with a concrete bug that can help beginners learn debugging and HTTPS certificate troubleshooting.

🛠️ Tech Stack
Frontend
React
Vite
Tailwind CSS
JavaScript
Backend
Node.js
Express.js
GitHub REST API
Groq SDK
Deployment
Vercel — Frontend
Render — Backend
🔄 How It Works
User enters GitHub Repository URL
              ↓
        React Frontend
              ↓
       Express Backend
          ↙        ↘
   GitHub API      Groq AI
       ↓              ↓
 Repository Data   Recommendation
          ↘        ↙
        Results UI
🎯 Example
Try the project with a public repository such as:

https://github.com/axios/axios
OpenSource Buddy will fetch the repository information, display open issues, and generate an AI recommendation.

⚙️ Run Locally
1. Clone the repository
git clone https://github.com/saumya-30-verma/opensource-buddy.git
cd opensource-buddy
2. Install frontend dependencies
npm install
3. Install backend dependencies
cd server
npm install
4. Add your Groq API key
Create:

server/.env
Add:

GROQ_API_KEY=your_api_key_here
Never commit your .env file or expose your API key publicly.

5. Start the backend
Inside the server folder:

node server.js
The backend runs on:

http://localhost:5000
6. Start the frontend
Open another terminal in the project root:

npm run dev
The frontend will run on the Vite development server.

📌 Current Scope
OpenSource Buddy currently works with:

✅ Public GitHub repositories
✅ Repository URLs
✅ Open issues
✅ Issue labels
✅ AI-powered recommendations
Private repositories and GitHub account authentication are intentionally outside the current MVP scope to keep the tool lightweight and easy to use.

🌱 Future Improvements
Possible future additions:

Skill-based issue matching
Difficulty estimation
"Good First Issue" detection
Issue search and filtering
GitHub authentication
Personalized contribution plans
💡 Why OpenSource Buddy?
Open-source contribution is a great way to learn, build a portfolio, and collaborate with real projects—but choosing where to start can be difficult.

OpenSource Buddy turns a repository URL into a simple starting point.

👩‍💻 Built By
Saumya Verma

Built with React, Node.js, GitHub API, and Groq AI.
