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

Set these environment variables locally or in Vercel:

```bash
URL_OWNERSHIP_VERIFICATION_PATH=tiktok-verification-file.txt
URL_OWNERSHIP_VERIFICATION_CONTENT="paste the exact TikTok verification file contents here"
URL_OWNERSHIP_VERIFICATION_CONTENT_TYPE="text/plain; charset=utf-8"
```

The app will then serve that file at:

```text
https://your-domain.com/tiktok-verification-file.txt
```

### TikTok setup flow

1. In TikTok Developer Portal, use `URL prefix` if you are verifying a full site URL like `https://video8n.vercel.app/`.
2. Download the TikTok signature file or copy the exact verification content TikTok gives you.
3. Set `URL_OWNERSHIP_VERIFICATION_PATH` to the exact file path TikTok expects.
4. Set `URL_OWNERSHIP_VERIFICATION_CONTENT` to the exact file contents.
5. Redeploy the site on Vercel.
6. Open the verification URL in the browser and confirm it loads directly over HTTPS.
7. Return to TikTok and click `Verify`.

### Examples

For a root-level verification file:

```bash
URL_OWNERSHIP_VERIFICATION_PATH=tiktok-verify-123456.txt
```

This will resolve at:

```text
https://video8n.vercel.app/tiktok-verify-123456.txt
```

For a nested verification file:

```bash
URL_OWNERSHIP_VERIFICATION_PATH=terms-of-service/tiktok-verify-123456.txt
```

This will resolve at:

```text
https://video8n.vercel.app/terms-of-service/tiktok-verify-123456.txt
```

## Deploy on Vercel

Deploy the app on Vercel, then set any required environment variables in the Vercel project settings before promoting the deployment to production.
