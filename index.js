import ip from "ip";
import meow from "meow";
import qr from "qrcode-terminal";

const cyan = (str) => {
  return `\x1b[36m${str}\x1b[0m`;
};

const cli = meow(
  `
    Description
      Shows QR code of server url
    
    Usage
      $ npx server-qr-code
    
    Options
      --port, -p      A port number (default: 3000)
      --hostname, -H  Hostname
      --help          Displays this message
  `,
  {
    importMeta: import.meta,
    flags: {
      port: {
        type: "number",
        default: 3000,
        shortFlag: "p",
      },
      hostname: {
        type: "string",
        shortFlag: "H",
      },
    },
  }
);

const address = cli.flags.hostname ?? ip.address();
const port = cli.flags.port;
const url = `http://${address}:${port}/`;

qr.generate(url, { small: true }, (result) => {
  console.log(`  ${cyan(url)}\n  ${result.replace(/\n/g, "\n  ")}`);
});
