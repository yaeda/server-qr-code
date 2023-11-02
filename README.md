# server-qr-code

Shows QR code of server url.

If you're using Vite, you should use [vite-plugin-qrcode](https://github.com/svitejs/vite-plugin-qrcode/tree/main).

## Installation

```bash
npm install --save-dev server-qr-code
```

## Usage

standalone

```bash
npx server-qr-code
```

with Next.js

```diff
"scripts": {
+ "predev": "server-qr-code",
  "dev": "next dev",
  "build": "next build",
+ "prestart": "server-qr-code",
  "start": "next start",
  "lint": "next lint"
},
```

## License

[MIT](./LICENSE)
