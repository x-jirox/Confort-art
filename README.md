# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```
# Confort Arte - Furniture Store

Confort Arte is an online store specializing in high-quality furniture. Our goal is to offer customers products designed to enhance the comfort and style of their homes. On this platform, users can explore our furniture selection, view product details, and make purchases easily and securely.

## 🚀 Project Structure

Inside your Astro project, you'll find the following folders and files:

```text
src/
├── components/            # Reusable components  
│   ├── layout/            # Header, footer, and other structural elements  
│   │   ├── Header.astro   
│   │   ├── Footer.astro   
│   ├── data/              # Data related to components and pages  
│   │   ├── components     # Data for reusable components
│   │   │   ├── footerlink.js
│   │   ├── pages          # Data for pages
│   │   │   ├── shop
│   │   │   │   ├── products.js 
│   │   │   │   ├── productsutils.js
├── layouts/               # Page templates  
│   ├── Layout.astro  
├── pages/                 # Main pages  
│   ├── index.astro  
│   ├── contact.astro  
│   ├── shop.astro  
├── styles/                # Styles for better maintainability  
│   ├── global.css         # Global styles  
├── scripts/               # Specific scripts  
│   ├── components/        # Scripts for components
│   │   ├── header.js      # Logic for the Header
│   ├── pages/             # Scripts for pages
│   │   ├── contact/       # Logic for the Contact page
│   │   │   ├── contact-message.js  
│   │   ├── shop/          # Logic for the Shop page
│   │   │   ├── shop-message.js

## 🧞 Commands

All commands should be run from the root of the project in the terminal:

| Command                   | Action                                            |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Installs the dependencies                         |
| `npm run dev`             | Starts the local development server at `localhost:4321` |
| `npm run build`           | Builds your site for production in `./dist/`     |
| `npm run preview`         | Preview your build locally before deploying      |
| `npm run astro ...`       | Runs CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📱 Preview

You can preview your project at any time by running `npm run dev` and accessing `localhost:4321` in your browser.

## 🌐 Deploy

To build the project for production and deploy it to your preferred platform (e.g., Vercel, Netlify, or any server), run the following command:

```bash
npm run build
