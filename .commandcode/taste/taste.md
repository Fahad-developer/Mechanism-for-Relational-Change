# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# layout
- Hero section: Use min-h-screen with flexbox vertical centering (flex flex-col justify-center). Fixed navbar (fixed top-0 w-full z-50) with matching pt on hero. Two-column grid layout: left (text+stats) and right (illustration) both stretch full height. Right column gets min-h-screen with banner pinned to bottom via mt-auto. Footer only appears after scrolling down. Confidence: 0.80

# design
- Avoid plain white/minimal sections. Use vibrant color gradients, decorative blobs, animated entrance effects, and unique visual flourishes. Sections should feel lively, colorful, and distinctive — not flat or "whiteish." Confidence: 0.70
- Avoid overly dark color schemes (emerald-900, zinc-950, pure black backgrounds). Use lighter, more vibrant palettes — bright emeralds, warm ambers, soft gradients with white/cream bases rather than near-black backgrounds. Dark mode is not the goal; colorful and vibrant is. Confidence: 0.75
- Blog posts and content cards should include images, and interactive social features like like/dislike buttons and share options — not just text with minimal styling. Content should feel rich and engaging. Confidence: 0.65

# images
- When user adds images to the public folder, use Next.js Image component (next/image) with URL-encoded paths for filenames containing spaces. Confidence: 0.70
- For transparent PNG images (no background), place them directly without wrapping in decorative containers — no rounded corners, gradient overlays, border boxes, or label badges. Apply the image cleanly into the layout. Confidence: 0.70

# nextjs-build
- When encountering Next.js/Turbopack build errors (React Client Manifest, database invalidation), clear the `.next` directory before rebuilding. Confidence: 0.65

# security
- Always hash/encrypt passwords before storing in the database. Never store plaintext passwords. Use bcrypt or similar hashing library. Confidence: 0.70
- Avoid hardcoded/static fallback users for authentication. All login should go through the database with properly hashed passwords — no hardcoded admin credentials as a fallback. Confidence: 0.70

# dashboard
- Dashboard (admin area) should use a dark theme, distinct from the main public-facing site styling. Confidence: 0.70
