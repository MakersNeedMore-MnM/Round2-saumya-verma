import { useState } from "react";

function App() {

  const [repoUrl, setRepoUrl] = useState("");
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleAnalyse = async() => {
    setLoading(true);
    const response = await fetch("https://opensource-buddy-backend.onrender.com/api/analyze", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
       body: JSON.stringify({
         repoUrl
       }),
    });

    const data = await response.json();
    setRepoData(data);
    setLoading(false);
  }

  return(

    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-8 py-5">
        <h1 className="text-lg font-semibold">OpenSource Buddy</h1>

        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
        </div>
      </nav>

      <section className="px-8 py-24 text-center">
        <p className="mb 4 text-sm text-violet-400">
          AI-powered open source companion
        </p>

        <h2 className="text-5xl font-bold tracking-tight">
          Find your next open source contribution.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
           Discover beginner-friendly issues, match them with your skills,
           and get an AI-powered plan to make your first contribution.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2">

          <input 
          type="text"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          placeholder="Paste a GitHub repository URL..."
          className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
          />

          <button 
          onClick={handleAnalyse}
          className="rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white">
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>

        {repoData && (
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left ">
          <h3 className= "text-2xl font-semibold">
              {repoData.name}
          </h3>

          <p className="mt-2 text-slate-400">
            {repoData.description}
          </p>

          <div className="mt-6 grid grid-cols-4 gap-3">
            <div>
              <p className="text-sm text-slate-500">Stars</p>
              <p className="mt-1 font-semibold">⭐ {repoData.stars}</p>
            </div>

          <div>
              <p className="text-sm text-slate-500">Forks</p>
              <p className="mt-1 font-semibold">🍴 {repoData.forks}</p>
          </div>

          <div>
              <p className="text-sm text-slate-500">Issues</p>
              <p className="mt-1 font-semibold">🐛 {repoData.issues}</p>
          </div>

          <div>
              <p className="text-sm text-slate-500">Language</p>
              <p className="mt-1 font-semibold">{repoData.language}</p>
          </div>
        </div>

        {repoData.issueList?.map((issue) => (
           <div
             key={issue.id}
             className="mt-3 rounded-lg border border-white/10 p-4"
          >
          <a
             href={issue.html_url}
             target="_blank"
             rel="noreferrer"
             className="font-medium hover:text-violet-400"
          >
            {issue.title}
         </a>

          <p className="mt-1 text-sm text-slate-500">
               #{issue.number}
          </p>

          {issue.labels?.map((label) => (
            <span
              key={label.id}
              className="mr-2 text-xs text-violet-400"
              >
                #{label.name}
            </span>
          ))}
           </div>
        ))}

        <div className="mt-6 rounded-xl border border-violet-500/20 bg-violet-500/10 p-5">
          <p className="text-sm font-medium text-violet-400">
            🤖 AI Recommendation
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            {repoData.recommendation}
          </p>
        </div>
           
          </div>
        )}
      </section>
    </div>
  )
}

export default App;