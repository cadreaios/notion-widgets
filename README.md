# notion-widgets

A lightweight HTML/CSS/JavaScript widget library for embedding focused UI components into Notion dashboards used by Cadreaios Work Desks.

## Purpose

This repository provides simple, static widgets that can be embedded in Notion pages to compose desk dashboards without heavy frameworks. The widgets are designed to stay portable and GitHub Pages-compatible.

## Repository structure

```text
assets/
  icons/
  images/

shared/
  css/
    base.css
    theme.css
  js/
    utils.js

widgets/
  mosa/
    nav-bar/
    desk-header/
    live-date-time/
    focus-card/
    pinned-prompt/
    action-launcher/
    mood-board-gallery/

  vera/
    nav-bar/
    desk-header/
    live-date-time/
    focus-card/
    pinned-prompt/
    action-launcher/
```

Each widget folder contains:

- `index.html`
- `style.css`
- `script.js`

## Current scaffold status

- MOSA and VERA widgets are scaffolded first.
- Widget files currently include placeholder starter content so each widget can load without runtime errors.
- `widgets/mosa/desk-header/` is minimally functional and renders:
  - **MOSA Work Desk**
  - **Creative Operating System**

## Notion embedding and hosting

The project is intentionally static so it can be hosted on GitHub Pages and embedded in Notion with public widget URLs.
