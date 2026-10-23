# Sowmiya Thirugnanam — AWS Cloud & DevOps Portfolio

A responsive terminal-inspired portfolio built with React and Vite. Resume content and contact details are based on the supplied resume. The site includes an experience timeline, skill groups, selected projects, certifications, education, contact links, and a resume PDF download.

## Requirements

- Node.js 20 or newer (Node 20 LTS recommended)
- npm (included with Node.js)
- Git and a GitHub account for publishing

## Run locally

1. Extract this project folder.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

To verify a production build locally:

```bash
npm run build
npm run preview
```

## Publish with GitHub Pages

The repository includes `.github/workflows/deploy.yml`. It builds the React site and deploys it to GitHub Pages whenever you push to `main`.

1. Create a **public** GitHub repository named exactly `sowmiya-cloud-devops-portfolio`.
2. Upload/push the contents of this folder to the repository root. Make sure `package.json`, `index.html`, `src/`, `public/`, and `.github/` are at the root—not nested inside another project folder.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Push to `main` (or run the workflow from **Actions → Deploy React portfolio to GitHub Pages → Run workflow**).
6. When the workflow succeeds, your site will be available at:

   `https://YOUR-GITHUB-USERNAME.github.io/sowmiya-cloud-devops-portfolio/`

   Replace `YOUR-GITHUB-USERNAME` with your GitHub username. The deployment URL is shown in the workflow run and in Settings → Pages.

### Git commands for first push

Run these commands from this project folder after creating the empty GitHub repository:

```bash
git init
git add .
git commit -m "Build React cloud and DevOps portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/sowmiya-cloud-devops-portfolio.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` before running the `git remote` command. If the folder is already a Git repository, skip `git init`.

## Make changes

- Main content: `src/main.jsx`
- Visual theme and responsive layout: `src/styles.css`
- Resume PDF: `public/assets/SOWMIYA-T-DevOps-Engineer.pdf`
- GitHub Pages deployment: `.github/workflows/deploy.yml`

After editing, save the files and check the local preview. Commit and push the changes to `main`; GitHub Actions will redeploy the site.

## Before publishing

- The Student Management API card intentionally has no guessed repository URL. Add your actual public repository link in `src/main.jsx` when you have it.
- Work project details are kept at a high level and limited to the supplied resume. Check that you are permitted to publish employer/project details before making the repository public.
- Contact details and the resume PDF are public on the website. Remove anything you do not want publicly accessible before publishing.
- Google Fonts are loaded from Google Fonts when a visitor has internet access; system fallback fonts are included.
