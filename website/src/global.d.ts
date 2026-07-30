declare module '*.module.css' {
  const exports: { [exportName: string]: string }
  export = exports
}

declare module 'github-markdown-css'
