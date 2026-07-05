# Sumin Lee - Personal Site

Simple static one-page site designed for GitHub Pages.

## File structure

- `index.html`
- `styles.css`
- `script.js`
- `assets/cv.pdf`

## 1) Replace `assets/cv.pdf`

1. Save your updated CV as `cv.pdf`.
2. Replace `assets/cv.pdf` in this repository with your file.
3. Commit and push.

## 2) Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings -> Pages**.
3. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch), `/ (root)`
4. Save and wait for the Pages URL to be published.

## 3) Add Google Analytics measurement ID

1. Open `index.html`.
2. Find:

   ```js
   const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
   ```

3. Replace it with your GA4 Measurement ID (for example `G-ABC1234567`).
4. Commit and push.

## 4) What analytics can show

With GA4 enabled, you can monitor:

- Visitors
- Countries/regions of visitors
- Traffic sources and referrers
- Page views
- CV download button clicks (`cv_download_click` event)
