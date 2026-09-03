const ZOOM_LEVELS = [50, 75, 100, 125, 150, 200, 250, 300, 400]
const DEFAULT_INDEX = ZOOM_LEVELS.indexOf(100)

function enhanceFrame(frame: HTMLElement) {
  if (frame.dataset.zoomEnhanced) return
  const img = frame.querySelector('img')
  if (!img) return
  frame.dataset.zoomEnhanced = 'true'

  let levelIndex = DEFAULT_INDEX

  const toolbar = document.createElement('div')
  toolbar.className = 'diagram-zoom-toolbar'
  toolbar.innerHTML = `
    <button type="button" class="diagram-zoom-btn" data-action="out" aria-label="缩小">−</button>
    <span class="diagram-zoom-level"></span>
    <button type="button" class="diagram-zoom-btn" data-action="in" aria-label="放大">+</button>
    <button type="button" class="diagram-zoom-btn diagram-zoom-reset" data-action="reset">重置</button>
  `
  frame.insertBefore(toolbar, frame.firstChild)

  const levelEl = toolbar.querySelector('.diagram-zoom-level') as HTMLElement
  const outBtn = toolbar.querySelector('[data-action="out"]') as HTMLButtonElement
  const inBtn = toolbar.querySelector('[data-action="in"]') as HTMLButtonElement

  function apply() {
    const pct = ZOOM_LEVELS[levelIndex]
    // VitePress's default content CSS caps images at max-width:100%,
    // which would silently clamp any zoom above 100% — override it.
    ;(img as HTMLImageElement).style.maxWidth = 'none'
    ;(img as HTMLImageElement).style.width = pct + '%'
    levelEl.textContent = pct + '%'
    outBtn.disabled = levelIndex === 0
    inBtn.disabled = levelIndex === ZOOM_LEVELS.length - 1
  }

  toolbar.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('button')
    if (!target) return
    const action = target.getAttribute('data-action')
    if (action === 'in' && levelIndex < ZOOM_LEVELS.length - 1) levelIndex++
    else if (action === 'out' && levelIndex > 0) levelIndex--
    else if (action === 'reset') levelIndex = DEFAULT_INDEX
    apply()
  })

  apply()
}

function enhanceAll() {
  document
    .querySelectorAll<HTMLElement>('.diagram-frame')
    .forEach(enhanceFrame)
}

export function setupDiagramZoom() {
  if (typeof window === 'undefined') return

  enhanceAll()

  const observer = new MutationObserver(() => enhanceAll())
  observer.observe(document.body, { childList: true, subtree: true })
}
