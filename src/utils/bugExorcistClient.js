// Bug Exorcist AI Client - Handles MCP/OpenAI integration

// Simulated AI responses for demo purposes
// In production, this would call actual OpenAI API via MCP
const spookyExorcismResponses = [
  {
    bugType: 'nested_tables',
    diagnosis: 'Ah, I sense a malevolent presence... NESTED TABLES! These ancient demons from the IE6 era have possessed your layout. They feed on the souls of modern developers.',
    solution: 'To banish these table demons, we must perform the sacred ritual of Flexbox. Replace the cursed <table> tags with blessed <div> containers and apply the holy CSS property: display: flex.',
    code: `/* Before: Cursed Tables */
<table><tr><td><table>...</table></td></tr></table>

/* After: Blessed Flexbox */
<div class="flex-container">
  <div class="flex-item">...</div>
</div>

.flex-container { display: flex; gap: 10px; }`,
    severity: 'critical'
  },
  {
    bugType: 'marquee_tag',
    diagnosis: 'By the spirits! A <marquee> tag haunts this page! This undead HTML element refuses to die, scrolling eternally through the void. It was deprecated in 1999 but still walks among us.',
    solution: 'We must exorcise this scrolling specter with modern CSS animations. The marquee\'s soul can be transferred to a CSS keyframe animation, allowing it to rest in peace.',
    code: `/* Before: Undead Marquee */
<marquee>Cursed text</marquee>

/* After: CSS Animation */
<div class="scroll-text">Blessed text</div>

@keyframes scroll {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}
.scroll-text { animation: scroll 10s linear infinite; }`,
    severity: 'high'
  },
  {
    bugType: 'inline_styles',
    diagnosis: 'Dark forces detected! Inline styles plague this document like a swarm of cursed locusts. Each style="..." attribute is a portal to chaos, making maintenance a living nightmare.',
    solution: 'To cleanse this corruption, we must extract these inline demons into a proper CSS file. Separate the styling spirits from the HTML body, restoring balance to the DOM.',
    code: `/* Before: Inline Chaos */
<div style="color: red; font-size: 16px;">Text</div>

/* After: Separated Styles */
<div class="styled-text">Text</div>

.styled-text { color: red; font-size: 16px; }`,
    severity: 'medium'
  },
  {
    bugType: 'font_tags',
    diagnosis: 'Ancient evil stirs! The <font> tag, a relic from the dark ages of HTML, has manifested. This deprecated entity brings only suffering and invalid markup.',
    solution: 'Perform the ritual of CSS Typography. Replace these font demons with semantic HTML and modern CSS. Let the spirits of web standards guide you.',
    code: `/* Before: Font Tag Horror */
<font face="Comic Sans MS" size="5" color="red">Text</font>

/* After: Modern CSS */
<span class="heading-text">Text</span>

.heading-text {
  font-family: 'Comic Sans MS', cursive;
  font-size: 1.5rem;
  color: red;
}`,
    severity: 'high'
  },
  {
    bugType: 'no_alt_text',
    diagnosis: 'A void has opened! Images without alt text create dark portals of inaccessibility. Screen readers cannot perceive these cursed images, trapping users in darkness.',
    solution: 'Fill the void with descriptive alt text. Each image must be blessed with meaning, allowing all souls to perceive its essence.',
    code: `/* Before: Void Images */
<img src="ghost.png">

/* After: Blessed Images */
<img src="ghost.png" alt="Friendly ghost waving hello">`,
    severity: 'medium'
  },
  {
    bugType: 'center_tag',
    diagnosis: 'The <center> tag! This zombie element should have been buried in 1998, yet it persists. Its presence indicates a deep corruption in the HTML structure.',
    solution: 'Banish this centering demon with modern CSS. Use text-align or flexbox to achieve proper alignment without summoning deprecated tags.',
    code: `/* Before: Center Tag Zombie */
<center>Centered content</center>

/* After: CSS Centering */
<div class="centered">Centered content</div>

.centered { text-align: center; }
/* Or for block elements: */
.centered { display: flex; justify-content: center; }`,
    severity: 'low'
  },
  {
    bugType: 'missing_doctype',
    diagnosis: 'CATASTROPHIC! No DOCTYPE declaration detected! Without this sacred incantation, the browser enters Quirks Mode - a hellish dimension where nothing works as expected.',
    solution: 'Immediately invoke the HTML5 DOCTYPE at the top of your document. This powerful spell will protect your page from the chaos of Quirks Mode.',
    code: `/* Add this at the very top: */
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    ...`,
    severity: 'critical'
  },
  {
    bugType: 'javascript_in_html',
    diagnosis: 'Inline JavaScript detected! These script demons are embedded directly in your HTML, creating a tangled web of chaos. Debugging becomes impossible as the spirits intertwine.',
    solution: 'Separate the JavaScript spirits into external files. This exorcism will improve maintainability and allow proper caching by the browser gods.',
    code: `/* Before: Inline Script Demons */
<button onclick="alert('Boo!')">Click</button>

/* After: Separated Scripts */
<button id="spooky-btn">Click</button>

// In external script.js:
document.getElementById('spooky-btn')
  .addEventListener('click', () => alert('Boo!'));`,
    severity: 'medium'
  }
]

export const detectBugs = async (pageContent) => {
  // Simulate bug detection
  // In production, this could analyze actual DOM or call AI
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const detectedBugs = [
    {
      id: 1,
      type: 'nested_tables',
      title: 'Nested Table Demons',
      description: 'Multiple levels of table nesting detected',
      severity: 'critical',
      location: 'Line 42'
    },
    {
      id: 2,
      type: 'marquee_tag',
      title: 'Undead Marquee Tag',
      description: 'Deprecated <marquee> element found',
      severity: 'high',
      location: 'Line 15'
    },
    {
      id: 3,
      type: 'inline_styles',
      title: 'Inline Style Plague',
      description: '23 inline style attributes detected',
      severity: 'medium',
      location: 'Throughout document'
    },
    {
      id: 4,
      type: 'font_tags',
      title: 'Font Tag Spirits',
      description: 'Ancient <font> tags haunt this page',
      severity: 'high',
      location: 'Lines 8, 12, 19'
    },
    {
      id: 5,
      type: 'no_alt_text',
      title: 'Void Images',
      description: 'Images missing alt text',
      severity: 'medium',
      location: 'Lines 33, 45'
    }
  ]
  
  return detectedBugs
}

export const exorciseBug = async (bug) => {
  // Simulate AI processing
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Find matching response
  const response = spookyExorcismResponses.find(r => r.bugType === bug.type)
  
  if (!response) {
    return {
      diagnosis: 'The spirits are unclear... This bug defies categorization. It may be a new form of digital haunting.',
      solution: 'Consult the ancient texts (MDN documentation) for guidance. Sometimes the old ways are best.',
      code: '// No specific fix available\n// Manual intervention required',
      severity: 'unknown'
    }
  }
  
  return response
}

// Placeholder for actual OpenAI API integration
export const callOpenAIExorcist = async (bugDescription) => {
  // In production, this would:
  // 1. Use MCP configuration from .kiro/settings/mcp.json
  // 2. Call OpenAI API with the bug description
  // 3. Return AI-generated spooky diagnosis and solution
  
  // For now, return simulated response
  return {
    diagnosis: 'The AI spirits have analyzed your code and found it... concerning.',
    solution: 'Apply the suggested fixes and pray to the browser gods.',
    code: '// AI-generated fix would appear here'
  }
}

export default {
  detectBugs,
  exorciseBug,
  callOpenAIExorcist
}
