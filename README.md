# Internet Explorer 6 - Zombie Edition 🧟💀

> *"The browser that refuses to die... literally."*

A horror parody web browser that resurrects Internet Explorer 6 as an undead, haunted application. Built for the Halloween Hackathon "Resurrection" category, this project combines authentic early-2000s web aesthetics with modern React architecture and AI-powered features.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-purple.svg)](https://vitejs.dev/)

---

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Usage Guide](#-usage-guide)
- [Architecture](#-architecture)
- [Kiro Integration](#-kiro-integration)
- [Easter Eggs](#-easter-eggs)
- [Development](#-development)
- [Tech Stack](#-tech-stack)
- [Contributing](#-contributing)

---

## 🎃 Features

### Core Browser Experience

#### 🐌 Intentionally Slow Loading
- Dial-up era speeds with authentic stuttering
- Progress bar that jumps backward and gets stuck at 99%
- Spooky status messages: "Summoning servers from the underworld..."
- Hell Mode makes it even slower with more chaos

#### 👻 Ghost Cursor System
- Semi-transparent ghost trail following your cursor
- Slight lag for authentic haunted feel
- Intensity increases in Hell Mode
- Smooth animations with floating effect

#### 🔖 Cursed Bookmarks
Pre-built haunted pages with authentic 2000s styling:
- **ZombieBook** - Undead social network with profiles and status updates
- **BooHoo Search** - Haunted search engine with cursed results
- **Haunted GeoCities** - Classic personal page with guestbook and visitor counter
- **Dark Portal** - Gateway to forbidden web archives
- **Forbidden Forum** - phpBB-style forum discussing IE6 nightmares

#### 🚨 Retro Pop-up System
- Windows XP-style error dialogs
- 14 unique spooky error messages
- Draggable windows with authentic styling
- Spawns every 60 seconds (configurable)

#### 🧙 AI Bug Exorcist Panel
- Slide-in panel with dark purple theme
- Detects 8 types of "bugs" (nested tables, marquee tags, inline styles, etc.)
- AI-powered diagnosis with horror-themed explanations
- Provides actual helpful solutions wrapped in spooky language
- Animated exorcism rituals with pentagrams
- Apply/Undo fix functionality

#### 🔮 Summon Cursed Page
- AI-generated retro webpages on demand
- 3 templates: Zombie Dating, Ghost Blog, Cursed Downloads
- Authentic table layouts, marquees, and Comic Sans
- Summoning ritual with progress stages

#### 💀 Zombie Chat Companion
- Retro MSN/AIM-style chat window
- Slides in from right side
- Undead chatbot with glitchy personality
- Responds to keywords with horror-themed replies
- Typing animations and glitch effects
- Floating toggle button in bottom-right corner

#### 🔥 Compatibility Mode from Hell
Toggle for maximum cursed chaos:
- Longer loading times (50% increase)
- More aggressive screen glitches
- Enhanced ghost cursor with jitter
- Red pulsing title bar
- Random haunted events

### Navigation Features

#### 🌐 Smart Address Bar
- **Internal Routes**: Type keywords like "zombie", "search", "forum" to navigate
- **External URLs**: Type `http://` or `https://` to open in new tab
- **Search Queries**: Anything else becomes a search with dynamic results
- Auto-updates with current page

#### ⬅️➡️ Browser Navigation
- **Back/Forward**: Full history management
- **Stop**: Cancel loading in progress
- **Refresh**: Reload current page
- **Home**: Return to about:blank

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd zombie-ie6-browser

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 🎮 Usage Guide

### Basic Navigation

1. **Launch the Browser**
   - Opens to `about:blank` with haunted welcome screen
   - Ghost cursor activates immediately
   - Random popups start after 1 minute

2. **Visit Haunted Pages**
   - Click bookmarks in the favorites bar
   - Or type in address bar: "zombie", "search", "geocities", "portal", "forum"
   - Watch the slow loading animation with spooky messages

3. **Search the Undead Web**
   - Type any query in address bar (e.g., "React hooks")
   - Generates 5 contextual cursed search results
   - Results include spooky descriptions and fake URLs

4. **Open External Sites**
   - Type full URL starting with `http://` or `https://`
   - Opens in new browser tab with spooky message

### Advanced Features

#### Using the Bug Exorcist

1. Click **👻 Exorcist** button in toolbar
2. Panel slides in from right showing detected "bugs"
3. Click any bug to see details
4. Click **🔮 Begin Exorcism Ritual** to get AI analysis
5. View diagnosis, solution, and code preview
6. Click **✨ Apply Fix** or **Ignore (Risky!)**

#### Summoning Cursed Pages

1. Click **🔮 Summon Page** button in toolbar
2. Watch the summoning ritual progress:
   - "Opening portal to digital afterlife..."
   - "Channeling cursed HTML spirits..."
   - "Reanimating retro CSS..."
3. New random page appears with authentic 2000s styling
4. Click again to summon a different page

#### Chatting with the Zombie

1. Click floating **💀** button in bottom-right corner
2. Chat window slides in from right
3. Type messages to the undead chatbot
4. Try keywords: "hello", "help", "IE6", "joke", "bye"
5. Watch typing animations and glitch effects
6. Click **✕** or toggle button to close

#### Activating Hell Mode

1. Check **🔥 Hell Mode** in toolbar
2. Observe increased chaos:
   - Screen glitches every 5-15 seconds
   - Longer loading times with more stuttering
   - Enhanced ghost cursor effects
   - Red pulsing title bar
3. Uncheck to return to normal mode

---

## 🏗️ Architecture

### Component Structure

```
src/
├── components/
│   ├── BrowserChrome/          # IE6 Window Frame
│   │   ├── BrowserLayout.jsx   # Main container
│   │   ├── Toolbar.jsx          # Navigation buttons
│   │   ├── AddressBar.jsx       # URL input
│   │   ├── BookmarksBar.jsx     # Favorites
│   │   ├── LoadingBar.jsx       # Progress indicator
│   │   └── StatusBar.jsx        # Bottom status
│   │
│   ├── ContentArea/             # Page Rendering
│   │   └── WebPage.jsx          # Route handler
│   │
│   ├── CursedEffects/           # Visual Effects
│   │   ├── GhostCursor.jsx      # Trailing ghost
│   │   ├── ScreenGlitch.jsx     # Hell Mode glitches
│   │   ├── HauntedEvents.jsx    # Random events
│   │   └── BSODOverlay.jsx      # Easter egg
│   │
│   ├── BugExorcist/             # AI Debugging Panel
│   │   ├── ExorcistPanel.jsx    # Main panel
│   │   ├── MascotCharacter.jsx  # Mood reactions
│   │   ├── BugList.jsx          # Bug display
│   │   ├── ExorcismInterface.jsx # Ritual screen
│   │   └── FixPreview.jsx       # Code preview
│   │
│   ├── Popups/                  # Error Dialogs
│   │   ├── PopupManager.jsx     # State management
│   │   └── RetroDialog.jsx      # XP-style dialog
│   │
│   └── ZombieChat/              # Chatbot
│       ├── ZombieChatWindow.jsx # Main window
│       ├── ZombieMessage.jsx    # Message bubble
│       ├── ZombieTypingIndicator.jsx
│       └── ZombieChatToggleButton.jsx
│
├── pages/                       # Haunted Websites
│   ├── ZombieSocial/
│   ├── CursedSearch/
│   ├── HauntedGeoCities/
│   ├── DarkPortal/
│   ├── ForbiddenForum/
│   └── SummonedPage/
│
├── utils/                       # Utilities
│   ├── loadingSimulator.js     # Slow loading logic
│   ├── bugExorcistClient.js    # AI bug detection
│   ├── popupGenerator.js       # Error messages
│   ├── aiPageGenerator.js      # Page summoning
│   └── zombieChatClient.js     # Chatbot responses
│
├── context/
│   └── BrowserContext.jsx       # Global state
│
└── styles/
    └── retro.css                # IE6 styling
```

### State Management

**BrowserContext** manages:
- `currentPage` - Current URL
- `isLoading` - Loading state
- `loadingProgress` - Progress percentage
- `compatibilityModeFromHell` - Hell Mode toggle
- `statusMessage` - Status bar text
- `searchQuery` - Current search
- `history` - Navigation history
- `summonedPageContent` - AI-generated page
- `isZombieChatOpen` - Chat visibility
- `isBSODActive` - BSOD overlay state

### Key Algorithms

#### Slow Loading Simulator
```javascript
// Normal mode: 14 stages, 2-4 seconds
// Hell mode: 17 stages, 4-6 seconds
// Includes backward jumps and 99% pause
```

#### Ghost Cursor Trail
```javascript
// Maintains 5 ghost copies
// 300ms fade-out
// 150ms lag behind real cursor
// Throttled to 50ms updates
```

#### Navigation History
```javascript
// Array-based history with index pointer
// Back/forward navigation
// New navigation truncates forward history
```

---

## 🎯 Kiro Integration

This project deeply integrates Kiro IDE features for enhanced development workflow.

### Specs (`.kiro/specs/`)

**zombie_ie_browser.yaml** - Complete feature specification including:
- Project metadata and tech stack
- User personas and flows
- Feature definitions with priorities
- Component architecture
- Success metrics

### Steering (`.kiro/steering/`)

**zombie_ie_mode.md** - Development guidelines:
- Personality: Nostalgic 2000s web developer
- Visual/UX rules for IE6 aesthetic
- Architectural patterns
- "Never do this" rules
- AI Bug Exorcist personality

### Hooks (`.kiro/hooks/`)

Automated workflows that trigger on file save:

1. **ui_haunting.json** - Enforces spooky microcopy and cursed effects
2. **layout_retro_review.json** - Guards against modern layouts
3. **style_theme_guard.json** - Protects horror-comedy theme

### MCP Tools (`.kiro/mcp/`)

AI tool definitions for:

1. **retro_css_tool.json** - Generates 2000s-style CSS
2. **slow_network_tool.json** - Creates delay patterns
3. **haunted_copy_tool.json** - Produces spooky microcopy

### MCP Configuration

**`.kiro/settings/mcp.json`** - Ready for OpenAI integration:
```json
{
  "mcpServers": {
    "openai": {
      "command": "uvx",
      "args": ["openai-mcp-server"],
      "env": {
        "OPENAI_API_KEY": "your-key-here"
      }
    }
  }
}
```

---

## 🥚 Easter Eggs

### BSOD Mode (Blue Screen of Death)

**Trigger:** Press `Ctrl + Shift + B`

**Sequence:**
1. Full-screen Windows XP Blue Screen appears instantly
2. Shows authentic error messages with cursed codes
3. After 2 seconds: Ghost text fades in
   - "THE DEAD INTERNET NEVER DIES."
   - Red glowing text with glitch effects
4. After 4 seconds total: Fades back to normal

**Features:**
- CRT scanlines animation
- Screen flicker effects
- Monospace white text on blue (#0000AA)
- Fake memory dumps and error codes
- Highest z-index overlay

---

## 🛠️ Development

### Project Setup

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Adding New Haunted Pages

1. Create component in `src/pages/YourPage/index.jsx`
2. Use retro styling (tables, marquees, Comic Sans)
3. Add route in `src/components/ContentArea/WebPage.jsx`
4. Add bookmark in `src/components/BrowserChrome/BookmarksBar.jsx`
5. Update navigation keywords in `BrowserContext.jsx`

### Customizing AI Responses

**Bug Exorcist:**
Edit `src/utils/bugExorcistClient.js` - `spookyExorcismResponses` array

**Zombie Chat:**
Edit `src/utils/zombieChatClient.js` - `zombiePersonality` object

**Summoned Pages:**
Edit `src/utils/aiPageGenerator.js` - `cursedPageTemplates` array

### Styling Guidelines

Follow the steering document rules:
- Use IE6 chrome colors: `#0054E3`, `#ECE9D8`, `#D4D0C8`
- Fonts: Tahoma, Arial, Comic Sans MS, Papyrus
- Beveled borders: `border: 2px outset #FFFFFF`
- Gradients: `linear-gradient(180deg, ...)`
- Tables for layout (intentionally retro)
- Spooky microcopy everywhere

---

## 💻 Tech Stack

### Core
- **React 18.2.0** - UI framework
- **Vite 5.0.8** - Build tool and dev server
- **JavaScript (ES6+)** - Language

### Styling
- **CSS3** - Custom retro styling
- **CSS Animations** - Glitches, fades, pulses
- **CSS Grid/Flexbox** - Modern layout (hidden behind retro facade)

### AI Integration (Ready)
- **MCP (Model Context Protocol)** - AI tool framework
- **OpenAI API** - Powers Bug Exorcist and Chat (configurable)

### Development Tools
- **ESLint** - Code linting
- **Git** - Version control
- **Kiro IDE** - Enhanced development workflow

---

## 🎨 Design Philosophy

### Authentic Retro Aesthetic
- Every detail matches early-2000s web design
- No modern UI patterns (Material, Fluent, etc.)
- Intentional "bad" design choices (Comic Sans, marquees, tables)
- Garish colors and gradients

### Horror Comedy Balance
- Spooky but never scary
- Humorous error messages
- Self-aware about being cursed
- Nostalgic rather than frightening

### Usability Despite Chaos
- All features remain functional
- Hell Mode is intense but not unusable
- Effects are subtle enough to maintain control
- Clear visual hierarchy

---

## 📝 License

MIT License - See LICENSE file for details

---

## 🙏 Acknowledgments

- **Internet Explorer 6** - For haunting developers for over a decade
- **GeoCities** - For inspiring the retro aesthetic
- **Windows XP** - For the iconic Blue Screen of Death
- **Early 2000s Web** - For all the cursed design patterns
- **Kiro IDE** - For the enhanced development workflow

---

## 📞 Support

For issues, questions, or cursed bug reports:
- Open an issue on GitHub
- Check the steering document for design guidelines
- Consult the Bug Exorcist (it might actually help!)

---

**Built with 💀 for the Halloween Hackathon 2024**

*"Some browsers die. This one refuses."*
