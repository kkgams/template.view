import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vm from 'node:vm'

test('defines the View and registers/unregisters on every mount', async () => {
    const source = await readFile(new URL('../src/views/view-example.js', import.meta.url), 'utf8')
    const calls = []
    let View
    const context = vm.createContext({
        HTMLElement: class { style = {}; innerHTML = '' },
        customElements: { define(tag, constructor) {
            assert.equal(tag, 'view-example')
            View = constructor
        } },
        registerViewPlugin(view) { calls.push(['register', view]) },
        unregisterViewPlugin(view) { calls.push(['unregister', view]) },
    })
    // Substitute only the Host import; execute the actual View body in isolation.
    assert.ok(source.startsWith('import { registerViewPlugin, unregisterViewPlugin } from "/util/view-plugin.js"'))
    vm.runInContext(source.replace(/^import[^\n]+\n/, '').replace('export class ', 'class '), context)
    const view = new View()
    for (let mount = 0; mount < 2; mount++) {
        view.connectedCallback()
        assert.equal(view.style.display, 'contents')
        assert.equal(view.innerHTML, '<article class="prose"><p>Hello from your View.</p></article>')
        view.disconnectedCallback()
    }
    assert.deepEqual(calls.map(([method]) => method), ['register', 'unregister', 'register', 'unregister'])
    assert.ok(calls.every(([, element]) => element === view))
})
