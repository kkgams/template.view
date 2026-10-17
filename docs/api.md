---
title: Public API
status: reference
---

# Public API

## Starter contract

- **Entry:** `views/view-example.js` defines the custom element `view-example`.
- **Inputs:** no Unit-specific attributes, properties or configuration.
- **Outputs:** a static greeting; no Unit-specific events or callable methods.
- **Host:** requires browser custom elements, the Host semantic theme contract,
  and `/util/view-plugin.js` exporting `registerViewPlugin` and
  `unregisterViewPlugin`. Host-generated plugin IDs and standard lifecycle methods
  are owned by that helper, not reimplemented here.

These names and paths must be updated together when creating a Unit from the
template. Document future methods, arguments, return values, events and payloads
here before releasing them. The README's version rules apply to this contract.
