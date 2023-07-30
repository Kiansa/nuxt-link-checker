<h1 align='center'>nuxt-link-checker</h1>

<p align="center">
<a href='https://github.com/harlan-zw/nuxt-link-checker/actions/workflows/test.yml'>
</a>
<a href="https://www.npmjs.com/package/nuxt-link-checker" target="__blank"><img src="https://img.shields.io/npm/v/nuxt-link-checker?style=flat&colorA=002438&colorB=28CF8D" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/nuxt-link-checker" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/nuxt-link-checker?flat&colorA=002438&colorB=28CF8D"></a>
<a href="https://github.com/harlan-zw/nuxt-link-checker" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/harlan-zw/nuxt-link-checker?flat&colorA=002438&colorB=28CF8D"></a>
</p>


<p align="center">
Discover issues with your links that may be negatively effecting your SEO.
</p>

<p align="center">
<table width="100%">
<thead>
   <tr>
      <th width="800px">
<p style="font-weight: 400;">
<i>Status:</i> Stable</b> 
</p>
<p style="font-weight: 400;">
<sub>Made possible by my <a href="https://github.com/sponsors/harlan-zw">Sponsor Program 💖</a><br> Keep up to date <a href="https://twitter.com/harlan_zw">@harlan_zw</a> 🐦 • Free support <a href="https://discord.gg/275MBUBvgP">Discord</a></sub><br>
</p>
</th>
    </tr>
</thead>
<tbody>
</tbody>
</table>
</p>

## Features

- ✅ Discover broken links - 404s and internal redirects
- 🚩 Warnings for bad practice links - absolute instead of relative and wrong trailing slash
- 🕵️ Fail on build if broken links are found (optional)

## Install

```bash
npm install --save-dev nuxt-link-checker

# Using yarn
yarn add --dev nuxt-link-checker
```

## Setup

_nuxt.config.ts_

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-link-checker',
  ],
})
```

To have routes scanned for broken links automatically, they need to be pre-rendered by Nitro.

```ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        // any URLs that can't be discovered by crawler
        '/my-hidden-url'
      ]
    }
  }
})
```  

### Set host (optional)

You'll need to provide the host of your site so that the crawler can resolve absolute URLs that may be internal.

```ts
export default defineNuxtConfig({
  // Recommended
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    }
  },
  // OR
  linkChecker: {
    host: 'https://example.com',
  },
})
```

### Exclude URLs from throwing errors

You can exclude URLs from throwing errors by adding them to the `exclude` array.

For example, if you have an `/admin` route that is a separate application, you can ignore all `/admin` links with:

```ts
export default defineNuxtConfig({
  linkChecker: {
    exclude: [
      '/admin/**'
    ],
  },
})
```

### Disable errors on broken links

You can disable errors on broken links by setting `failOn404` to `false`.

```ts
export default defineNuxtConfig({
  linkChecker: {
    failOn404: false,
  },
})
```

## Module Config

### `failOn404`

- Type: `boolean`
- Default: `true`

If set to `true`, the build will fail if any broken links are found.

### `exclude`

- Type: `string[]`
- Default: `[]`

An array of URLs to exclude from the check. 

This can be useful if you have a route that is not pre-rendered, but you know it will be valid.

### `host`

- Type: `string`
- Default: `runtimeConfig.public.siteUrl || localhost`
- Required: `false`

The host of your site. This is required to validate absolute URLs which may be internal.

### `trailingSlash`

- Type: `boolean`
- Default: `false`

Whether internal links should have a trailing slash or not.

## Sponsors

<p align="center">
  <a href="https://raw.githubusercontent.com/harlan-zw/static/main/sponsors.svg">
    <img src='https://raw.githubusercontent.com/harlan-zw/static/main/sponsors.svg'/>
  </a>
</p>


## License

MIT License © 2023-PRESENT [Harlan Wilton](https://github.com/harlan-zw)
