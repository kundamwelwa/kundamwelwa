# Font Setup Instructions

## Current Font Configuration

The project is currently using:

- **Display Font**: **Playfair Display** (from Google Fonts) - A professional serif font similar to Magistral
- **Body Font**: **Montserrat** (from Google Fonts)

Both fonts are automatically loaded from Google Fonts. No additional setup needed!

## Using Magistral Font (Optional)

If you have Magistral font files and want to use them instead of Playfair Display:

### Option 1: Add Magistral Font Files

1. Obtain the Magistral font files (`.woff2` format recommended)
2. Create the directory: `public/fonts/`
3. Place the files:
   - `public/fonts/Magistral-Regular.woff2`
   - `public/fonts/Magistral-Bold.woff2`
4. Update `app/layout.tsx`:

```typescript
import localFont from "next/font/local"

const magistral = localFont({
  src: [
    {
      path: "../public/fonts/Magistral-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Magistral-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  fallback: ["Georgia", "serif"],
})
```

### Option 2: Use Other Google Fonts

You can replace Playfair Display with any other Google Fonts serif font:
- Merriweather
- Lora
- Crimson Pro
- etc.

## Font Configuration Files

- `app/layout.tsx` - Font loading
- `tailwind.config.ts` - Tailwind font family configuration

The current setup works out of the box with Playfair Display as the display font!

