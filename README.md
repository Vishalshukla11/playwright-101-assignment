# Playwright 101 - TestMu AI Certification Assignment

## Setup

```bash
npm install
npx playwright install
```

## Set Your TestMu AI Credentials

```bash
export LT_USERNAME=your_testmuai_username
export LT_ACCESS_KEY=your_testmuai_access_key
```

## Run Tests

```bash
npx playwright test
```

## View HTML Report

```bash
npx playwright show-report
```

## What This Project Tests

| Scenario | Page | Validates |
|---|---|---|
| 1 | Simple Form Demo | Message input and display |
| 2 | Drag & Drop Sliders | Slider value at 95 |
| 3 | Input Form Submit | Empty validation + success submit |

## Locators Used (3 different types)

1. `getByRole()` — semantic role-based locator
2. `getByPlaceholder()` — placeholder attribute locator  
3. `locator("css selector")` — CSS attribute selector

## Parallel Execution

Runs on **2 browser/OS combinations** simultaneously:
- Windows 10 + Chromium (latest)
- macOS Catalina + Firefox (latest)

## Submission Checklist

- [ ] GitHub repo created and code pushed
- [ ] Repo shared with admin@testmuaicertifications.com
- [ ] TestMu AI test session IDs noted
- [ ] Submitted on the exam portal within 36 hours
