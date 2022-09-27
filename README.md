# Outside your Expectations

"Outside your Expectations" is a marketing SSG (static site generator system) for UTC. An html-based marketing page with lots of movement and effects.

*******

### Purpose

This projects builds on top of the efforts made on <https://webapp.utc.edu/digital/experience_utc/>. It incorporates other projects which include the brandbar v.2 code found at this repo: <https://github.com/UTCWeb/utc-brandbar-html-only> and utc SSG emergency website.
Features unique to this version include.

- tailwindcss
- AlpineJs
- 11ty
- Npm package management and a few other features.

### How to Use?

This project can be used as a base template for other marketing pages as well as a launching point for implementation of Drupal and Wordpress components.
Its setup through our Cloudflare pages system so it should automatically deploy to production upon deploying to the main branch.

### How to preview changes?

Any branch that's merge to upstream develop (UTCWeb/OutsideYourExpectations) gets it own preview link at.
https://develop.outsideyourexpectations.pages.dev
Branches merged to upstream master will directly update.
https://discover.utc.edu/outside/

Note: Sometimes the CDNs are slow to purge cache, making it difficult to see your changes in development. In that case the work-around is to click on the name of the of the page, then click on the up-right-arrow icon under "Development" by the hash you want to view, usually the latest deployment (which is at the top).

*******

## Getting Started

### 1. Fork this repo

### 2. Clone your forked repo

### 3. Navigate to the directory

```
cd OutsideYourExpectations
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies

```
npm install
```

### 4. Edit src/\_data/metadata.json

### 5. Run Eleventy

```
npm run start
```

Or build and host locally for local development

```
npm run build
```

Or build automatically when a template changes:

```
npx @11ty/eleventy --watch
```

Or in debug mode:

```
DEBUG=* npx @11ty/eleventy
```

### Implementation Notes

- `about/index.md` shows how to add a content page.
- `src/{campaign name}/` has the digital marketing campaign group toghether. For example, anything inside the outside folder belongs to the outside your expectations campaign. It's recommended to follow that pattern for specific files that might only be used once.
- `src/_includes/` has a system of layouts and componets. For the purpose of this project `src/_includes/layouts` should be reserved for root level items. Global components that are reusable should be place on the `src/_includes/components` those components are shared by multiple projects. Overwrite made for an specfic campaing should be under `src/{campaign name}/components` as an example an override for the outside campaing will be placed under `src/outside/components`.
- `posts/` has the blog posts. They need only the `post` tag to be added to this collection.
- The `img` directory in the input directory will be copied to the output folder (via `addPassthroughCopy()` in the `.eleventy.js` file).
- The `css` and new `js` files should be added under `assets/css` or `assets/js` after which one has to import those files into `script.js` or `script.css` doing so adds it to the bundle built files and adds the cache busting feature on them.
- The blog post feed template is in `feed/feed.njk`. This is also a good example of using a global data files in that it uses `_data/metadata.json`.
- This example uses three layouts:
  - `/src/_includes/starterkit/templatebase.njk`: the top level HTML structure
  - `_includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
- `_includes/posts.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `index.njk` has an example of how to use it.

Credits

All credits for special features are named in the individual files. They are as follows:

-<https://github.com/UTCWeb/explore-utc>

-<https://codyhouse.co/gem/css-animated-headlines>

-<https://michalsnik.github.io/aos/>

-<https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/>

-<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout>

-<https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_images_card>

-<https://codepen.io/jakegilesphillips/pen/MveNLe>
