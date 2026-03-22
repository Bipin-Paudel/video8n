# Video8n

Video8n is the official marketing site for Pypple Technology's AI video generation and multi-platform publishing product.

## Local Development

Install dependencies and start the Next.js dev server:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## TikTok URL Verification

This project includes a flexible ownership-verification route for TikTok's URL prefix checks.

### How it works

We keep TikTok verification files under the dedicated `public/tiktok-verification/` path pattern so the verification URL stays predictable.

Set these environment variables locally or in Vercel:

```bash
URL_OWNERSHIP_VERIFICATION_PATH=tiktok-verification/tiktok-verification-file.txt
URL_OWNERSHIP_VERIFICATION_CONTENT="paste the exact TikTok verification file contents here"
URL_OWNERSHIP_VERIFICATION_CONTENT_TYPE="text/plain; charset=utf-8"
```

The app will then serve that file at:

```text
https://your-domain.com/tiktok-verification/tiktok-verification-file.txt
```

### TikTok setup flow

1. In TikTok Developer Portal, use `URL prefix` and enter `https://video8n.vercel.app/tiktok-verification/`.
2. Download the TikTok signature file or copy the exact verification content TikTok gives you.
3. Set `URL_OWNERSHIP_VERIFICATION_PATH` to the exact file path TikTok expects.
4. Set `URL_OWNERSHIP_VERIFICATION_CONTENT` to the exact file contents.
5. Redeploy the site on Vercel.
6. Open both the prefix URL and the verification file URL in the browser and confirm both load directly over HTTPS.
7. Return to TikTok and click `Verify`.

### Examples

For a root-level verification file:

```bash
URL_OWNERSHIP_VERIFICATION_PATH=tiktok-verification/tiktok-verify-123456.txt
```

This will resolve at:

```text
https://video8n.vercel.app/tiktok-verification/tiktok-verify-123456.txt
```

The prefix URL will also respond:

```text
https://video8n.vercel.app/tiktok-verification/
```

For a different nested verification file:

```bash
URL_OWNERSHIP_VERIFICATION_PATH=tiktok-verification/custom/tiktok-verify-123456.txt
```

This will resolve at:

```text
https://video8n.vercel.app/tiktok-verification/custom/tiktok-verify-123456.txt
```

## Deploy on Vercel

Deploy the app on Vercel, then set any required environment variables in the Vercel project settings before promoting the deployment to production.
