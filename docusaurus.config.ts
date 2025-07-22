import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ReDScribe',
  tagline: 'Ruby-embedded DSL for Godot.',
  favicon: 'img/favicon.ico',

  customFields: {
    githubUrl: 'https://github.com/tkmfujise/ReDScribe',
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://tkmfujise.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/redscribe-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tkmfujise', // Usually your GitHub org/user name.
  projectName: 'redscribe-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['ja', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/social_card.png',
    metadata: [
      { name: 'keywords', content: 'Godot, Ruby, mruby, ゲーム, Game, DSL, ReDScribe' },
      { name: 'description', content: 'ReDScribe is a Ruby-embedded DSL for Godot. It enables writing DSL code in mruby directly inside Godot for streamlined game development.' },
    ],
    navbar: {
      title: 'ReDScribe',
      logo: {
        alt: 'ReDScribe Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          to: '/showcase',
          label: 'Showcase',
          position: 'left',
        },
        { type: 'localeDropdown', position: 'right' },
        {
          href: 'https://github.com/tkmfujise/ReDScribe',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'Showcase',
              to: '/showcase',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tkmfujise/ReDScribe',
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} tkmfujise. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['gdscript', 'ruby'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
