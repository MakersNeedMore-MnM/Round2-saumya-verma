const express = require ("express");
const cors = require("cors");
require("dotenv").config();
const Groq = require("groq-sdk");

const groq= new Groq({
     apiKey: process.env.GROQ_API_KEY,
})

const app = express();

app.use(cors ());
app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json({
        message: "Backend is working"
    });
});

app.post("/api/analyze", async (req, res) => {
  const { repoUrl } = req.body;

  const parts = repoUrl.split("/");
  const owner = parts[3];
  const repo = parts[4];

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}`
  );

  const data = await response.json();

  const issuesResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues?state=open&per_page=5`
  );

  const issues = await issuesResponse.json();
  const realIssues = issues.filter((issue) => !issue.pull_request);

  const issueSummary = realIssues.map((issue) => ({
    title: issue.title,
    labels: issue.labels.map((label) => label.name),
  }));

  const aiResponse = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `From these GitHub issues, choose the best one for a beginner developer.

        Issues: ${JSON.stringify(issueSummary)}

        Return only the issue title and a short reason.`
      }
    ],
    model: "openai/gpt-oss-20b",
  });

  const recommendation = aiResponse.choices[0].message.content;

  res.json({
    name: data.name,
    description: data.description,
    stars: data.stargazers_count,
    forks: data.forks_count,
    issues: data.open_issues_count,
    language: data.language,
    issueList: realIssues,
    recommendation,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});