# Lab 12: Pair Assignment (Blog App) - REST &amp; APIs

Now that we understand how web applications can handle different URLs, we can write code that communicates with *other* applications.

## User Stories: MVP
1. As a developer, I want to treat my GitHub repositories as a resource (with full MVC components), so that I can manage them within my blog.
   - Yesterday you added an `aboutController.js`; so today, add a `repo.js` *model* file and a `repoView.js` *presentation layer* file.
   - Store your GitHub API credentials (your "Personal Access Token") in a local file (`githubToken.js`), but do **not** commit it to GitHub. Use `.gitignore` to prevent the file from being tracked. Get help udring lab if you don't know how to use `.gitignore`.
  - As the site owner, I want to highlight certain repos on my `/about` page so that everyone can see the great projects I am working on.
  - Retrieve and manipulate repo info in your model file.
  - You can choose exactly what API end point to use.
  - Craft an API query to return repos that you want to highlight.
  - Create a template in your view file to display these repos. You can build your template with either plain jQuery (string concatenation), or with Handlebars.

## User Stories: Stretch goals
1. As the site owner, I want my lists of GitHub activity well designed, so visitors like looking at my page.
   - Start with a wireframe sketch of how you'd like the page to looking
   - Apply styles, as you've learned: icons, typography, colors, etc.
1. As the site owner, I also want to show off other recent GitHub activity, so that everyone knows how active I am on GitHub.
   - Get creative with the data available to you via the GitHub API!
   - Want to create links to your gists?
   - Maybe highlight your GitHub followers, or whom you follow?

## Technical Requirements and Grading Rubric
- Make sure your code passes ESLint.
- Place all code within the proper layer of MVC abstraction and encapsulation.
- Use a proxied, authenticated ajax call to GitHub's API to get your repos.
- DO NOT publish your GitHub Token to any public repo.

## Pair Coding
Use have the same options for your git workflow as you did for Day 11's pair lab.

## Submit
Please submit the following items:

- The URL of your final PR for this lab. If you used method A, both students should submit the same PR URL; else each student should submit the final PR for their repo.
- Answers to these questions:
  - How long did this lab take?
  - What was most challenging?
  - What was most rewarding/useful?