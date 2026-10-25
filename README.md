# Gulabi Bagawat

A GitHub Pages-ready, independent online magazine for political theory, geopolitics, policy, research papers, articles, case studies and daily ideas.

## Launch on GitHub Pages

1. Create a new **public** repository named `gulabibagawat` in GitHub under `niteshbobbyyadav`.
2. Upload every file from this folder to the root of the repository (do not upload the enclosing folder itself).
3. Open repository **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/(root)`, then save.
4. Visit `https://niteshbobbyyadav.github.io/gulabibagawat/` once GitHub Pages finishes publishing.

## Adding publications

Edit `content.js`, which contains a list of example articles. **All current records are explicitly demonstration content.** Replace these with real works and accurate contributor names before public launch.

Each publication supports `title`, `category`, `type` (Article, Research Paper, Case Study or Daily Idea), `author`, `date`, `readTime`, `image`, `description`, `body` (an array of paragraphs), and `pdf` (relative URL such as `papers/research-one.pdf`). Put PDF files in a new `papers/` directory. No database is needed for editorial updates.

## Customize

- Change the placeholder contact email (`YOUR_EMAIL@example.com`) in `index.html` to your address. The `editor@gulabibagawat.example` value is also a placeholder.
- Update the contributor biography and initials in `index.html`.
- Replace example photography with your licensed or original photos. The displayed library globe uses an Unsplash image and links to Unsplash's CDN.
- `globe.js` imports Three.js, and a globe texture, from CDNs. Internet access is required for the interactive 3D model. A CSS fallback is provided.
- `style.css` controls colors and typography.

## Important limitations

This is a static editorial site. It has browsing, searching, filtering, a responsive layout and opening article previews; it does **not** include user accounts, a functioning manuscript upload form, author dashboard, server storage, peer review, or automatic PDF publishing. The submission links use email and must be configured before public use.

## Next phase

A true multi-author submission workflow can add a GitHub-backed CMS (e.g. Decap CMS with compatible authentication) or a hosted backend and moderation workflow. Do not put authentication secrets into a public repository.

## Exact address gulabibagawat.github.io

This exact address requires a GitHub user or organization whose username is `gulabibagawat`, with a public repository called `gulabibagawat.github.io`. A repository created under `niteshbobbyyadav` cannot claim the `gulabibagawat.github.io` hostname. You can instead publish from your current account at `https://niteshbobbyyadav.github.io/gulabibagawat/`.


## Publishing under the organization

Create a **public** repository `gulabibagawat/gulabibagawat.github.io`, then upload the root contents of this folder (not the enclosing folder). Enable GitHub Pages via Settings > Pages > Deploy from a branch > main > /(root). The site URL is `https://gulabibagawat.github.io` if the organization handle matches. GitHub App access to the organization may need approval by an organization owner.

Contact links currently use placeholders. Set a real editorial contact before accepting submissions. Example articles are demonstrations, not authored publications.
