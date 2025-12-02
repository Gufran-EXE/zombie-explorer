// Zombie IE6 Loading Simulator - Intentionally slow and cursed

const spookyMessages = [
  'Summoning servers from the underworld...',
  'Exhuming content from digital graves...',
  'Raising the dead pixels...',
  'Contacting spirits on port 80...',
  'Reanimating HTML corpses...',
  'Crawling through the shadow DOM...',
  'Negotiating with cursed routers...',
  'Awakening dormant packets...',
  'Channeling data from beyond...',
  'Performing digital necromancy...'
]

const getRandomMessage = () => {
  return spookyMessages[Math.floor(Math.random() * spookyMessages.length)]
}

export const simulateSlowLoading = async (onProgress, onStatusUpdate, isHellMode = false) => {
  // Define loading stages with stutters, pauses, and backward jumps
  const normalStages = [
    { progress: 0, delay: 200, message: getRandomMessage() },
    { progress: 8, delay: 400, message: getRandomMessage() },
    { progress: 15, delay: 300, message: getRandomMessage() },
    { progress: 12, delay: 200, message: 'Connection lost... retrying...' }, // Backward jump!
    { progress: 23, delay: 500, message: getRandomMessage() },
    { progress: 35, delay: 600, message: getRandomMessage() },
    { progress: 33, delay: 150, message: 'Packet dropped into the void...' }, // Another stutter
    { progress: 48, delay: 450, message: getRandomMessage() },
    { progress: 62, delay: 700, message: getRandomMessage() },
    { progress: 75, delay: 400, message: getRandomMessage() },
    { progress: 88, delay: 500, message: getRandomMessage() },
    { progress: 99, delay: 1200, message: 'Almost there... the spirits resist...' }, // Stuck at 99%
    { progress: 99, delay: 800, message: 'Breaking through the curse...' }, // Still stuck
    { progress: 100, delay: 300, message: 'Page exhumed successfully!' }
  ]

  // Hell Mode: More chaos, longer delays, more backward jumps
  const hellStages = [
    { progress: 0, delay: 300, message: 'Descending into digital hell...' },
    { progress: 5, delay: 600, message: getRandomMessage() },
    { progress: 12, delay: 400, message: getRandomMessage() },
    { progress: 8, delay: 300, message: 'ERROR: Demons interfering!' }, // Backward!
    { progress: 18, delay: 700, message: getRandomMessage() },
    { progress: 15, delay: 250, message: 'Connection cursed...' }, // Backward again!
    { progress: 28, delay: 800, message: getRandomMessage() },
    { progress: 42, delay: 900, message: getRandomMessage() },
    { progress: 38, delay: 200, message: 'Portal unstable!' }, // More chaos
    { progress: 55, delay: 1000, message: getRandomMessage() },
    { progress: 68, delay: 850, message: getRandomMessage() },
    { progress: 82, delay: 750, message: getRandomMessage() },
    { progress: 95, delay: 600, message: getRandomMessage() },
    { progress: 99, delay: 1800, message: 'The demons resist with all their might...' },
    { progress: 99, delay: 1200, message: 'Performing emergency exorcism...' },
    { progress: 99, delay: 900, message: 'Almost... there...' },
    { progress: 100, delay: 400, message: 'Barely escaped with your data!' }
  ]

  const stages = isHellMode ? hellStages : normalStages

  for (const stage of stages) {
    await new Promise(resolve => setTimeout(resolve, stage.delay))
    onProgress(stage.progress)
    onStatusUpdate(stage.message)
  }
}

export const getLoadingDuration = () => {
  // Random duration between 2-5 seconds (plus the stage delays)
  return Math.floor(Math.random() * 3000) + 2000
}

export default {
  simulateSlowLoading,
  getLoadingDuration,
  getRandomMessage
}
