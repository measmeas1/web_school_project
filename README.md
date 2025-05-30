# web_school_project
Awesome! Here’s your Team Git Workflow Cheat Sheet — with all the important Git commands and explanations. You can even copy this to a README file and use it with your team.

Clone the project
```
git clone https://github.com/measmeas1/web_school_project
```

🔄 BEFORE CODING — Always Pull Latest Code
```
git checkout main
git pull origin main
```
✅ Switch to main branch and get the latest version from GitHub.

🌱 START A NEW TASK — Create a Branch
```
git checkout -b your-branch-name
```
✨ Create and switch to a new branch for your task (e.g. meas-navbar).

🛠️ DO YOUR WORK — Then Add & Commit
```
git add .
git commit -m "Your message here"
```
💾 Save changes with a clear message (e.g. "Add navbar layout").

⬆️ PUSH YOUR WORK TO GITHUB
```
git push origin your-branch-name
```
☁️ Upload your branch to GitHub so others can see or review it.

🔁 MERGING LATEST MAIN INTO YOUR BRANCH (optional but helpful)
```
git checkout your-branch-name
git pull origin main
```
🔄 If someone else merged into main, bring those updates into your branch.