# Ishant Speaks - Jekyll Blog with Netlify CMS

A modern, responsive blog built with Jekyll and Netlify CMS, ready to deploy on GitHub Pages.

## Features

- Static site generated with Jekyll
- Content management with Netlify CMS
- Responsive design with animations
- SEO optimized
- GitHub Pages ready

## Setup Instructions

### 1. Setting Up GitHub Pages

1. Fork this repository to your GitHub account
2. Go to your repository settings
3. Under "GitHub Pages" section:
   - Select "main" branch as the source
   - Select "/ (root)" as the folder
4. Your site will be live at `https://<username>.github.io/<repository-name>`

### 2. Connecting Netlify CMS to GitHub

#### Option A: Using Netlify (Recommended)

1. Sign up for a [Netlify](https://www.netlify.com/) account
2. Click "New site from Git"
3. Select GitHub as your Git provider
4. Choose your repository
5. Click "Deploy site"
6. After deployment, go to "Site settings" > "Identity"
7. Enable Identity service
8. Under "Registration", set to "Invite only" (you can invite yourself)
9. Under "Services" > "Git Gateway", enable it and authenticate with GitHub

#### Option B: Using GitHub API directly (Alternative)

1. Generate a personal access token on GitHub:
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Generate a new token with `repo` scope
2. In your repository, go to `admin/config.yml`
3. Replace the backend section with:
   ```yaml
   backend:
     name: github
     repo: <username>/<repository-name>
     branch: main