import DefaultTheme from 'vitepress/theme'
import { setupDiagramZoom } from './diagram-zoom'
import './diagram-zoom.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    // MutationObserver inside setupDiagramZoom picks up VitePress's
    // client-side route changes too, so this only needs to run once.
    setupDiagramZoom()
  },
}
