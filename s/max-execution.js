const fs = require('fs');

const styleCode = `
html, body, div, span, iframe,
h1, h2, h3, h4, h5, h6, p, pre, code, a,i, 
 ol, ul, li,
 form, label,
table, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, 
figure, footer, header, 
menu, nav, output, section, sum,
 audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figure, 
footer, header, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}`;

fs.writeFile('global.css', styleCode, (err) => {
      if (err) {
            console.error('Error creating style file:', err);
      } else {
            console.log('Style file created successfully!');
      }
});

const prettier = `
{
   "trailingComma": "es5",
   "tabWidth": 2,
   "semi": true,
   "singleQuote": false,
   "printWidth": 120
}
`;

fs.writeFile('.prettierrc.json', prettier, (err) => {
      if (err) {
            console.error('Error creating prettierrc.json:', err);
      } else {
            console.log('prettier file created successfully!');
      }
});
const package = `
{
  "name": "projects name",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "sv": "json-server ./public/data/data.json --port 4001"
  },
  "dependencies": {
    "@emotion/react": "latest",
    "@emotion/styled": "latest",
    "@reduxjs/toolkit": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "@types/react-modal": "latest",
    "@types/react-redux": "latest",
    "react-redux": "latest",
    "@vercel/og": "latest",
    "axios": "latest",
    "eslint-config-next": "latest",
    "eslint": "latest",
    "next": "latest",
    "next-ga": "latest",
    "next-navigation": "latest",
    "next-redux-wrapper": "latest",
    "react": "latest",
    "react-dom": "latest",
    "react-hook-form": "latest",
    "style-loader": "latest",
    "ts-loader": "latest",
    "typescript": "latest",
  },
  "devDependencies": {
    "@types/json-server": "latest",
    "json-server": "latest",
    "@tanstack/react-query": "latest",
    "@tanstack/react-query-devtools": "latest",
    "@types/gtag.js": "latest",
    "file-loader": "latest"
  }
  }
`;
fs.writeFile('package.json', package, (err) => {
      if (err) {
            console.error('Error creating package.json:', err);
      } else {
            console.log('package file created successfully!');
      }
});
const globalTs = `
declare module "*.css" {
   const content: { [className: string]: string };
   export = content;
}

declare module "*.png" {
   const value: any;
   export default value;
}
declare module "*.mp4" {
   const value: any;
   export default value;
}
declare module "*.ttf" {
   const value: string;
   export default value;
}
declare module "*.woff2" {
   const value: string;
   export default value;
}
declare module "*.ico" {
   const value: string;
   export default value;
}

`;
fs.writeFile('global.d.ts', globalTs, (err) => {
      if (err) {
            console.error('Error creating global.d.ts:', err);
      } else {
            console.log('global.d.ts file created successfully!');
      }
});
