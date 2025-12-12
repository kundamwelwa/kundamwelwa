# Font Configuration

## ✅ Custom Fonts Successfully Loaded!

The site is now using **local font files** for both Magistral and Montserrat!

### Current Font Setup:

- **Display/Headings**: Magistral (weights: 400, 500, 700, 800) - Local Files
- **Body Text**: Montserrat (weights: 300, 400, 500, 600, 700) - Local Files
- **Serif**: Merriweather (for article content) - Google Fonts
- **Monospace**: Fira Code (for code blocks) - Google Fonts

### Loaded Font Weights:

**Magistral (Display/Headings):**

| Weight | File | Usage |
|--------|------|-------|
| 400 | Magistral_Book.otf | Regular headings |
| 500 | Magistral_Medium.otf | Medium weight titles |
| 700 | Magistral_Bold.otf | Bold headings |
| 800 | Magistral_Extra_Bold.otf | Extra bold display text |

**Montserrat (Body Text):**

| Weight | File | Usage |
|--------|------|-------|
| 300 | Montserrat_Light.ttf | Light text |
| 400 | Montserrat_Regular.ttf | Regular body text |
| 500 | Montserrat_Medium.ttf | Medium emphasis |
| 600 | Montserrat_SemiBold.ttf | Semi-bold text |
| 700 | Montserrat_Bold.ttf | Bold body text |

### Available Font Files:

**Magistral Variants:**

*Standard Weights:*
- Magistral_Book.otf (Regular) ✅ Loaded
- Magistral_Medium.otf ✅ Loaded
- Magistral_Bold.otf ✅ Loaded
- Magistral_Extra_Bold.otf ✅ Loaded
- Magistral_Light.otf

*Condensed Versions:*
- Magistral_Cond_Book.otf
- Magistral_Cond_Medium.otf
- Magistral_Cond_Bold.otf
- Magistral_Cond_Extra_Bold.otf
- Magistral_Cond_Light.otf

*Extra Condensed:*
- Magistral_Extra_Cond_Book.otf
- Magistral_Extra_Cond_Medium.otf
- Magistral_Extra_Cond_Light.otf

*Italic Versions:*
- Magistral_Book_Italic.otf
- Magistral_Bold_Italic.otf
- Magistral_Extra_Bold_Italic.otf
- Magistral_Medium_Italic.otf
- Magistral_Light_Italic.otf

**Montserrat Variants:**

*Loaded Weights:*
- Montserrat_Light.ttf ✅ Loaded
- Montserrat_Regular.ttf ✅ Loaded
- Montserrat_Medium.ttf ✅ Loaded
- Montserrat_SemiBold.ttf ✅ Loaded
- Montserrat_Bold.ttf ✅ Loaded

*Additional Weights Available:*
- Montserrat_Thin.ttf
- Montserrat_ExtraLight.ttf
- Montserrat_ExtraBold.ttf
- Montserrat_Black.ttf

*Italic Versions:*
- All weights also available in italic

### Usage in Code:

```tsx
// Headings use the Magistral font
<h1 className="font-display font-bold">
  This uses Magistral Bold
</h1>

// Body text uses Montserrat
<p className="font-sans">
  This uses Montserrat
</p>
```

### Font Variables:

- `font-display` → Magistral
- `font-sans` → Montserrat
- `font-serif` → Merriweather
- `font-mono` → Fira Code
