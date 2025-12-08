📋 SION EDUCATION - TYPOGRAPHY ASSETS
🔤 FONT FAMILY
Primary Font: Arimo (Google Fonts)

Type: Sans-serif
Weights Used: 400 (Regular), 500 (Medium), 700 (Bold)
Source: https://fonts.google.com/specimen/Arimo
📏 FONT SCALE
HERO TEXT
text-6xl — 60px — Hero Headings (Desktop)
text-5xl — 48px — Hero Headings (Mobile), Main Page Titles

PAGE TITLES  
text-4xl — 36px — Large Section Headers
text-3xl — 30px — Modal Titles, Card Headers

HEADINGS
text-2xl — 24px — H1, Card Titles
text-xl  — 20px — H2, Subtitles, Section Headers
text-lg  — 18px — H3, Emphasized Text

BODY TEXT
text-base — 16px — Body Text, Inputs, Buttons (DEFAULT)
text-sm   — 14px — Secondary Text, Labels, Badges
text-xs   — 12px — Captions, Helper Text, Tiny Labels
⚖️ FONT WEIGHTS
Regular (400) — Body text, paragraphs, inputs
Medium  (500) — Headings, labels, buttons (DEFAULT)
Bold    (700) — Emphasis, important text
📐 LINE HEIGHTS
Default: 1.5 (Applied to all elements)

leading-tight   — 1.25  — Compact headings
leading-normal  — 1.5   — Standard (DEFAULT)
leading-relaxed — 1.625 — Comfortable reading
🎨 TEXT COLORS
NEUTRAL COLORS:

#101828 — Primary headings (dark gray/black)
#4a5565 — Body text, descriptions (medium gray)
#6B7280 — Muted/subtle text
#9CA3AF — Placeholder text
#FFFFFF — White text (on dark backgrounds)
BRAND COLORS:

#2563EB — Ocean Blue (Primary)
#4F46E5 — Indigo (Secondary)
#7C3AED — Purple (Accent)
#0891B2 — Cyan (Tertiary)
#16A34A — Green (Success)
#EAB308 — Yellow (Warning)
#DC2626 — Red (Error)
#EA580C — Orange (Alert)
✨ TEXT STYLES
LETTER SPACING:

tracking-normal — 0em     (Default)
tracking-wide   — 0.025em (Labels)
tracking-wider  — 0.05em  (Uppercase labels)
TEXT TRANSFORM:

normal-case — Default
uppercase   — Section labels, tags
capitalize  — Title case
TEXT DECORATION:

no-underline  — Default
underline     — Links, emphasis
line-through  — Completed items
TEXT ALIGNMENT:

text-left   — Default
text-center — Titles, modals
text-right  — End-aligned content
🎯 COMPONENT PATTERNS
LANDING PAGE:

Hero Heading      — Arimo 60px Bold #101828
Hero Subtext      — Arimo 18px Regular #4a5565
Section Title     — Arimo 48px Bold #101828
Section Subtitle  — Arimo 20px Regular #4a5565
Card Title        — Arimo 24px Medium #101828
Card Description  — Arimo 14px Regular #4a5565
DASHBOARD:

Page Title        — Arimo 30px Bold #101828
Tab Label         — Arimo 14px Medium #4a5565
Card Header       — Arimo 18px Medium #101828
Body Text         — Arimo 14px Regular #4a5565
Small Label       — Arimo 12px Medium #6B7280
MODALS:

Modal Title       — Arimo 24px Bold #FFFFFF (on colored bg)
Modal Header      — Arimo 18px Medium #101828
Modal Body        — Arimo 14px Regular #4a5565
Modal Label       — Arimo 14px Medium #374151
FORMS:

Field Label       — Arimo 14px Medium #374151
Input Text        — Arimo 16px Regular #101828
Helper Text       — Arimo 12px Regular #6B7280
Error Text        — Arimo 14px Medium #DC2626
BUTTONS:

Primary Button    — Arimo 16px Medium #FFFFFF
Secondary Button  — Arimo 16px Medium #2563EB
Small Button      — Arimo 14px Medium
Large Button      — Arimo 18px Medium
🌈 GRADIENT TEXT COMBINATIONS
Blue-Indigo    — from-[#2563EB] to-[#4F46E5]
Blue-Purple    — from-[#2563EB] to-[#7C3AED]
Indigo Mono    — from-[#4F46E5] to-[#6366F1]
Cyan Mono      — from-[#0891B2] to-[#06B6D4]
Green Mono     — from-[#16A34A] to-[#22C55E]
Full Spectrum  — from-[#2563EB] via-[#4F46E5] to-[#7C3AED]
Usage:

bg-gradient-to-r from-[COLOR1] to-[COLOR2] bg-clip-text text-transparent
📱 RESPONSIVE SCALING
Mobile → Desktop:
text-3xl md:text-5xl — 30px → 48px
text-4xl md:text-6xl — 36px → 60px
text-5xl md:text-6xl — 48px → 60px
text-lg  md:text-xl  — 18px → 20px
⚡ SPECIAL EFFECTS
Bold Emphasis (Design Pattern):

<p>Regular text with <span class="font-bold">bold emphasis</span></p>
Gradient Text:

<span class="bg-gradient-to-r from-[#2563EB] to-[#4F46E5] 
             bg-clip-text text-transparent">
  Gradient Effect
</span>
Opacity Variants:

text-white/80  — 80% opacity
text-white/90  — 90% opacity
opacity-90     — 90% element opacity
🔧 IMPLEMENTATION
Always Include Font Family:

className="font-['Arimo'] ..."
Standard Pattern:

<h1 class="font-['Arimo'] text-5xl text-[#101828]">
<p class="font-['Arimo'] text-base text-[#4a5565]">
<button class="font-['Arimo'] text-base font-medium">
<label class="font-['Arimo'] text-sm text-gray-700">
📊 USAGE STATISTICS
Most Common Text Classes:

font-['Arimo'] — ALWAYS REQUIRED
text-[#101828] — Dark headings
text-[#4a5565] — Body text
text-sm — Secondary content
text-xl or text-2xl — Card/section titles
font-bold — Emphasis
text-white — Light text on dark backgrounds
text-center — Centered content
✅ DESIGN SYSTEM RULES
Always use Arimo for all text elements
Bold key messages using font-bold spans
Primary color (#2563EB) for interactive text
Dark gray (#101828) for main headings
Medium gray (#4a5565) for body text
Gradients for brand hero elements
Line height 1.5 for readability (auto-applied)
Responsive scaling for mobile optimization
🎨 COLOR PSYCHOLOGY
#2563EB (Blue)    — Trust, stability, learning
#4F46E5 (Indigo)  — Wisdom, knowledge, depth
#7C3AED (Purple)  — Creativity, innovation
#0891B2 (Cyan)    — Technology, clarity
#16A34A (Green)   — Success, growth, achievement
#EAB308 (Yellow)  — Energy, attention, optimism
#DC2626 (Red)     — Urgency, error, importance
📝 NOTES
Font loaded automatically via Google Fonts
Default typography system in /styles/globals.css
Do NOT override font sizes unless specifically requested
Base font size: 16px (1rem)
System designed for accessibility (WCAG AA compliant)