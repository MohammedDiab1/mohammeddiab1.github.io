// GitHub Pages serves 404.html for unmatched paths, but with a 404 status —
// which search engines will not index. So emit a real index.html for each
// client route instead, each returning 200 with its own title/description/
// canonical. BrowserRouter then takes over and renders the matching route.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const origin = 'https://mohammeddiab1.github.io'

const routes = [
  {
    path: 'bio',
    title: 'Biography of Mohammed Diab, PhD — Roboticist & AI Researcher',
    description:
      'Biography of Mohammed Diab, PhD: roboticist and AI researcher working on task and motion planning, knowledge representation for autonomous robots, human–robot interaction, and embodied AI. Known for PMK, SkillMaN, RECOVER, and IEEE ORA ontology standardisation.',
  },
  {
    path: 'cv',
    title: 'CV of Mohammed Diab, PhD — Principal Autonomy Engineer',
    description:
      'Curriculum vitae of Mohammed Diab, PhD — Principal Autonomy Engineer at All3, previously Humanoid, University of Plymouth, and the Personal Robotics Lab at Imperial College London.',
  },
]

const replacements = (route) => [
  [/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`],
  [/(<meta name="description" content=")[^"]*(")/, `$1${route.description}$2`],
  [/(<link rel="canonical" href=")[^"]*(")/, `$1${origin}/${route.path}$2`],
  [/(<meta property="og:url" content=")[^"]*(")/, `$1${origin}/${route.path}$2`],
  [/(<meta property="og:title" content=")[^"]*(")/, `$1${route.title}$2`],
  [/(<meta property="og:description" content=")[^"]*(")/, `$1${route.description}$2`],
  [/(<meta name="twitter:title" content=")[^"]*(")/, `$1${route.title}$2`],
  [/(<meta name="twitter:description" content=")[^"]*(")/, `$1${route.description}$2`],
]

const shell = await readFile(join(dist, 'index.html'), 'utf8')

// Any route not prerendered below still needs to resolve client-side.
await writeFile(join(dist, '404.html'), shell)

for (const route of routes) {
  let html = shell
  for (const [pattern, value] of replacements(route)) {
    if (!pattern.test(html)) {
      throw new Error(`prerender: no match for ${pattern} in dist/index.html`)
    }
    html = html.replace(pattern, value)
  }
  await mkdir(join(dist, route.path), { recursive: true })
  await writeFile(join(dist, route.path, 'index.html'), html)
  console.log(`prerendered /${route.path}`)
}
