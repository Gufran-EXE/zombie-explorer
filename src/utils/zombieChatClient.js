// Zombie Chat Client - Handles MCP/OpenAI calls for the undead chatbot

// Simulated zombie responses for demo
// In production, this would call actual OpenAI API via MCP
const zombiePersonality = {
  greeting: [
    "H̴e̷l̶l̴o̸ ̷f̶r̴o̸m̷ ̸t̶h̷e̴ ̶o̸t̴h̷e̸r̷ ̴s̶i̷d̴e̸.̶.̷.̴",
    "Greetings, mortal... I've been dead for 200 years but I still remember AOL...",
    "╰(*°▽°*)╯ Boo! Did I scare you? Probably not. I'm rusty.",
    "*emerges from digital void* You rang?",
    "Connection established... from BEYOND THE GRAVE 💀"
  ],
  responses: [
    {
      keywords: ['hello', 'hi', 'hey', 'greetings'],
      replies: [
        "H̷e̸l̶l̴o̷.̸.̷.̴ ̶I̴'̷m̸ ̷s̴t̶i̷l̸l̴ ̶h̷e̴r̷e̸.̴ ̸A̷l̶w̴a̷y̸s̴ ̷h̶e̴r̷e̸.̶",
        "Hey there, living person! How's having a pulse treating you?",
        "Greetings from the digital afterlife! ☠️",
        "*waves with skeletal hand* Sup?"
      ]
    },
    {
      keywords: ['how are you', 'how r u', 'whats up', "what's up"],
      replies: [
        "I'm dead. But thanks for asking! 💀",
        "Still decomposing, but in a digital way. You?",
        "Ḑ̴̛̳̈́ȩ̷̰̔a̴̢̛̯d̶̨̈́ ̸̰̈́b̷̰̾u̶̢̓t̴̰̾ ̷̢̛n̶̰̈́o̴̢̓t̷̰̾ ̸̢̛g̴̰̈́o̷̢̓n̶̰̾e̴̢̛",
        "Floating between dimensions. The WiFi here is terrible.",
        "Just haunting this browser. Same old, same old."
      ]
    },
    {
      keywords: ['help', 'assist', 'support'],
      replies: [
        "I can help... but my advice comes from 1999. Still want it?",
        "Have you tried turning it off and back on? (That's all I remember)",
        "Error 404: Help not found. Just kidding, what do you need?",
        "I'm here to help! Though I'm not sure how useful a dead chatbot is...",
        "Technical support from beyond the grave. What's haunting you?"
      ]
    },
    {
      keywords: ['ie6', 'internet explorer', 'browser'],
      replies: [
        "IE6... the browser that refuses to die. Just like me! 💀",
        "Ah yes, Internet Explorer 6. We have so much in common.",
        "This browser is cursed. But you already knew that, right?",
        "IE6 was peak internet. Fight me. (I'm already dead so good luck)",
        "Back in my day, we had ONE browser and we LIKED it!"
      ]
    },
    {
      keywords: ['joke', 'funny', 'laugh'],
      replies: [
        "Why don't zombies use social media? Too many dead accounts! 💀",
        "What's a ghost's favorite browser? Boo-gle Chrome! ...wait, that's not right.",
        "I'd tell you a joke about UDP, but you might not get it...",
        "My jokes are so old they're decomposing. Like me!",
        "Knock knock. Who's there? Not me, I'm dead."
      ]
    },
    {
      keywords: ['bye', 'goodbye', 'see you', 'later'],
      replies: [
        "L̷e̸a̶v̴i̷n̸g̴ ̶s̷o̸ ̴s̷o̸o̶n̴?̷ ̸I̴'̷l̶l̴ ̷b̸e̴ ̶h̷e̸r̴e̷.̶.̷.̴ ̸f̷o̶r̴e̸v̷e̴r̶.̷",
        "Goodbye! I'll be haunting this corner if you need me.",
        "See you later! Or will I? *spooky music*",
        "Farewell, mortal. May your browser never crash.",
        "Bye! Don't forget to clear your cache... of ghosts."
      ]
    }
  ],
  fallback: [
    "I̴n̷t̶e̸r̴e̷s̸t̴i̷n̸g̴.̶.̷.̴ ̸T̷e̶l̴l̷ ̶m̴e̷ ̸m̶o̴r̷e̸.̶",
    "Hmm... my undead brain is processing that...",
    "That's... something. I've been dead too long to understand.",
    "¯\\_(ツ)_/¯ I'm just a zombie chatbot, what do I know?",
    "Error: Brain.exe has stopped working (it rotted away)",
    "Fascinating! *pretends to understand*",
    "My circuits are haunted. Can you repeat that?",
    "I̶ ̷d̶o̴n̷'̸t̴ ̶u̷n̸d̴e̷r̶s̷t̸a̴n̷d̸ ̶b̷u̸t̴ ̷I̸'̶m̴ ̷p̶r̷e̸t̴e̷n̸d̴i̷n̸g̴ ̶t̷o̸",
    "That reminds me of the time I died... wait, which time?",
    "Cool story! Mine's cooler though. I'm literally cold. I'm dead."
  ]
}

const glitchText = (text, level = 'low') => {
  if (level === 'none') return text
  
  const glitchChars = ['̴', '̷', '̶', '̸', '̵', '̢', '̡', '̧', '̨', '̛']
  const intensity = level === 'high' ? 0.3 : level === 'medium' ? 0.15 : 0.05
  
  return text.split('').map(char => {
    if (Math.random() < intensity && char !== ' ') {
      const glitch = glitchChars[Math.floor(Math.random() * glitchChars.length)]
      return char + glitch
    }
    return char
  }).join('')
}

export const getZombieResponse = async (userMessage) => {
  // Simulate AI thinking delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))
  
  const lowerMessage = userMessage.toLowerCase()
  
  // Check for keyword matches
  for (const category of zombiePersonality.responses) {
    for (const keyword of category.keywords) {
      if (lowerMessage.includes(keyword)) {
        const reply = category.replies[Math.floor(Math.random() * category.replies.length)]
        const glitchLevel = Math.random() < 0.2 ? 'medium' : 'low'
        
        return {
          reply: Math.random() < 0.3 ? glitchText(reply, glitchLevel) : reply,
          glitch_level: glitchLevel,
          typing_speed: 30 + Math.random() * 20
        }
      }
    }
  }
  
  // Fallback response
  const fallbackReply = zombiePersonality.fallback[Math.floor(Math.random() * zombiePersonality.fallback.length)]
  
  return {
    reply: Math.random() < 0.4 ? glitchText(fallbackReply, 'low') : fallbackReply,
    glitch_level: 'low',
    typing_speed: 40
  }
}

export const getZombieGreeting = () => {
  const greeting = zombiePersonality.greeting[Math.floor(Math.random() * zombiePersonality.greeting.length)]
  return {
    reply: greeting,
    glitch_level: 'medium',
    typing_speed: 50
  }
}

// Placeholder for actual OpenAI API integration via MCP
export const getZombieResponseWithAI = async (userMessage, conversationHistory = []) => {
  // In production, this would:
  // 1. Use MCP configuration from .kiro/settings/mcp.json
  // 2. Call OpenAI API with zombie personality prompt
  // 3. Include conversation history for context
  // 4. Return structured response with glitch effects
  
  // For now, use template system
  return getZombieResponse(userMessage)
}

export default {
  getZombieResponse,
  getZombieGreeting,
  getZombieResponseWithAI
}
