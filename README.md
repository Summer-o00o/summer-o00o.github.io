# summerwang.dev

A responsive static portfolio and resume site for Summer Wang.

## Local preview

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Files

- `index.html`: site structure and content
- `styles.css`: visual design, responsive layout, and print styling
- `script.js`: small interactions like reveal-on-scroll and print-to-PDF
- `favicon.svg`: site icon

## Deployment

This site is static, so it works well on GitHub Pages, Netlify, Vercel, or Namecheap hosting.

Recommended path: GitHub Pages + Namecheap DNS.

### GitHub Pages

1. Create a GitHub repository and push these files.
2. In the repository, open `Settings -> Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select the `main` branch and the `/(root)` folder, then save.
5. In the `Custom domain` field, enter `summerwang.dev`.
6. Wait for GitHub Pages to create the deployment and HTTPS certificate.

### Namecheap DNS

Open `Domain List -> Manage -> Advanced DNS`, then add:

- `A Record` with host `@` and value `185.199.108.153`
- `A Record` with host `@` and value `185.199.109.153`
- `A Record` with host `@` and value `185.199.110.153`
- `A Record` with host `@` and value `185.199.111.153`
- `CNAME Record` with host `www` and value `YOUR-GITHUB-USERNAME.github.io`

Remove any conflicting `URL Redirect`, `A`, or `CNAME` records for `@` or `www`.

### Optional but recommended

1. In GitHub, go to your profile `Settings -> Pages`.
2. Add and verify `summerwang.dev`.
3. GitHub will show a TXT record you should add in Namecheap DNS.
4. Keep that TXT record permanently after verification.

DNS changes may take up to 24 hours to fully propagate.
