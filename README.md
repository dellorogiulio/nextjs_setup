Bootstrap a new project by:

`yarn create next-app <proj-name> --eslint --ts --example "https://github.com/dellorogiulio/nextjs_setup"`

`yarn add autoprefixer postcss prettier prettier-plugin-tailwindcss tailwindcss ts-node -D`


To add package Script, add 
`"postbuild": "ts-node ./scripts/runner.ts --postbuild"`
to `scripts` 
