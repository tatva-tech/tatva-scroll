# TatvaScroll

TatvaScroll is a lightweight, customizable smooth scrolling library that enhances the native scrolling experience across web applications. Designed to integrate seamlessly without affecting any existing layouts, styles, or JavaScript logic, TatvaScroll ensures a smooth scrolling experience while maintaining compatibility with custom elements, sticky headers, and scroll-triggered events.

## Features

- **Smooth scrolling for wheel and touch events**
- **Highly customizable parameters** for fine-tuning
- **Lightweight and zero-dependency**
- **Framework compatibility** with React, Vue, and Vanilla JavaScript
- **Non-intrusive design** that preserves fixed and sticky elements and allows scroll-based logic
- **Supports both horizontal and vertical scrolling**

## Installation

### npm Installation

```bash
npm install tatva-scroll
```
### bun Installation
```bash
bun add tatva-scroll
```
### yarn Installation
```bash
yarn add tatva-scroll
```

### CDN Usage

```html
<script type="module">
import TatvaScroll from "https://unpkg.com/tatva-scroll/dist/tatvaScroll.mjs";
</script>
```

## Usage

### Vanilla JavaScript

```javascript
// Basic initialization
import TatvaScroll from 'tatva-scroll';

const tatvaScroll = new TatvaScroll({
  lerp: 0.1, // Smoothness of scroll (0-1)
  multiplier: 1, // Scroll speed multiplier
  smoothWheel: true, // Enable smooth wheel scrolling
  smoothTouch: true, // Enable smooth touch scrolling
});

// Optional: Destroy instance if needed
tatvaScroll.destroy();
```

### React

```jsx
import React, { useEffect } from 'react';
import TatvaScroll from 'tatva-scroll';

function App() {
  useEffect(() => {
    const tatvaScroll = new TatvaScroll({
      lerp: 0.1,
      multiplier: 1,
      smoothWheel: true,
      smoothTouch: true,
    });

    // Optional: Clean up on component unmount
    return () => {
      tatvaScroll.destroy();
    };
  }, []);

  return (
    <div id="scroll-container">
      {/* Your scrollable content */}
      <div style={{ height: '200vh' }}>Scroll through this content</div>
    </div>
  );
}

export default App;
```

### Vue

```vue
<template>
  <div id="scroll-container">
    <!-- Your scrollable content -->
    <div style="height: 200vh">Scroll through this content</div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import TatvaScroll from 'tatva-scroll';

export default {
  setup() {
    let tatvaScroll;

    onMounted(() => {
      tatvaScroll = new TatvaScroll({
        lerp: 0.1,
        multiplier: 1,
        smoothWheel: true,
        smoothTouch: true,
      });
    });

    onUnmounted(() => {
      tatvaScroll.destroy();
    });
  },
};
</script>
```

### HTML Direct Integration

```html
<!DOCTYPE html>
<html>
<head>
  <title>TatvaScroll Example</title>
  <style>
    #scroll-container {
      height: 200vh;
    }
  </style>
</head>
<body>
  <div id="scroll-container">
    <!-- Your scrollable content -->
    Scroll through this content
  </div>

  <script type="module">
    import TatvaScroll from "https://unpkg.com/tatva-scroll/dist/tatvaScroll.mjs";

    const tatvaScroll = new TatvaScroll({
      lerp: 0.1,
      multiplier: 1,
      smoothWheel: true,
      smoothTouch: true,
    });
  </script>
</body>
</html>
```

## Configuration Options

| Option           | Type    | Default            | Description                                                                 |
|------------------|---------|--------------------|-----------------------------------------------------------------------------|
| `lerp`           | Number  | `0.1`              | Smoothness of scroll (0-1). Lower values result in smoother scrolling.      |
| `multiplier`     | Number  | `1`                | Scroll speed multiplier. Less than 1 slows down scrolling.                  |
| `smoothWheel`    | Boolean | `true`             | Enable smooth mouse wheel scrolling.                                        |
| `smoothTouch`    | Boolean | `true`             | Enable smooth touch/trackpad scrolling.                                     |
| `scrollbarWidth` | String  | `'10px'`           | Width of the custom scrollbar.                                              |
| `scrollbarColor` | String  | `'rgba(0, 0, 0, 0.5)'` | Color of the custom scrollbar.                                              |

## Methods

- `destroy()`: Removes all event listeners and resets scroll behavior.
- `scrollTo(target, options)`: Scroll to a specific position or element.
  - **target**: Accepts a selector, an HTMLElement, or a number.
  - **options**: Configuration for the scroll behavior (e.g., duration).

## Example: Scroll to a Specific Element

```javascript
const tatvaScroll = new TatvaScroll();

// Scroll to an element with an ID
tatvaScroll.scrollTo('#target-element');

// Scroll to a specific Y position
tatvaScroll.scrollTo(500);
```

## Created By

TatvaTech - Smooth Scrolling Simplified

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
