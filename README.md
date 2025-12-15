"# Playwright Automation Framework – JavaScript"
===============================================================
Introduction
========================
This repository contains my practice project for building a Playwright Automation Framework using JavaScript.
It is designed to help me learn, implement, and demonstrate modern UI automation practices using Playwright’s powerful features.
The goal of this project is to understand:
Browser automation
Page Object Model (POM) design
Test execution strategies
Cross-browser testing

Playwright-Automation/
=============================
│── tests/              → All test files

│── playwright.config.js→ Playwright configuration

│── package.json        → Project dependencies

│── README.md           → Project documentation


Installation
=====================
1. Clone the repository
    git clone git@github.com:manohar0548/Playwright-Automation.git
2. Navigate into the project
    cd Playwright-Automation
3. Install dependencies
    npm install
4. Install Playwright browsers
    npx playwright install

How to Run Tests
=========================
.  Run all tests (headless)
    npx playwright test
    
.  Run in headed mode
    npx playwright test --headed
    
.  Run a specific test file
    npx playwright test tests/filename.spec.js
    
.  Run with HTML report
    npx playwright show-report

Technologies Used
=======================
Playwright

JavaScript (Node.js)

VS Code

Git & GitHub

NPM

Purpose of This Project
==================================================================
This project is created for practice and learning, with the intention to:
Improve automation scripting skills
Understand Playwright’s architecture
Build framework design skills
Prepare for interviews

Future Enhancements
===================================================================
Add API testing support
Integrate Allure reporting
Add CI/CD (GitHub Actions or Jenkins)
Add Test Data management
Add environment-specific config files

**Author**
  Manohar Lakkaraju
  QA Automation Engineer – Playwright | JavaScript
  GitHub: [manohar0548](https://github.com/manohar0548)
