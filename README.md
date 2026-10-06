# Apple-Inspired Scientific Calculator

A sleek, responsive web calculator built with HTML, CSS, and vanilla JavaScript. This project is heavily inspired by the aesthetic and functionality of the **Apple Calculator app**, featuring a clean dark-mode interface, glowing button variants, and an interactive panel that lets you switch between a basic and an advanced scientific layout.

## Features

- **Apple-Inspired Design:** Clean dark-mode background, rounded button typography, and recognizable color coding (iconic orange for basic operators, gray for numbers, and deep slate for advanced options).
- **Interactive Advanced Toggle:** Toggles seamlessly between a basic 4-operation layout and an expanded 5-row scientific grid with a single click—mimicking the iPhone's portrait-to-landscape layout shift.
- **Glowing Visual Accents:** Customized neon box-shadow highlights that make the active buttons and text input fields pop.
- **Secure Expression Evaluation:** Instead of step-by-step memory clearing, the app reads, sanitizes, and evaluates the entire string expression directly from the screen using safe, sandboxed evaluation logic.
- **Robust Input Handling:** Configured with a responsive layout text display that smoothly adapts to long equations and prevents invalid mathematical characters.

## Supported Operations

* **Basic:** Addition (`+`), Subtraction (`-`), Multiplication (`×`), Division (`÷`), Percent (`%`), and Positive/Negative toggles (`+/-`).
* **Advanced/Scientific:** 
  * Parentheses `(` and `)` for operation sequencing.
  * Trigonometry: `sin`, `cos`, `tan`, `sinh`, `cosh`, `tanh`, and Radian controls.
  * Powers & Roots: x², x³, \(x^y\), \(e^x\), \(10^x\), 1/x, \(^2\sqrt{x}\), \(^3\sqrt{x}\), \(^y\sqrt{x}\).
  * Logarithms & Math Constants: `ln`, `log₁₀`, e, and π.
  * Memory Keys: `mc`, `m+`, `m-`, `mr`.

## Tech Stack

- **HTML5:** Semantic architecture, data-attribute mapping for mathematical conversion, and crisp structural layout.
- **CSS3:** Native CSS Grid configuration (10x5 multi-row layout), custom variable sizing, system font stacks, and responsive layout spacing.
- **JavaScript (ES6+):** Event delegation handlers, conditional text matching, string sanitation, and secure custom execution.

## Getting Started

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ywhitman30/calculator
   ```
2. **Navigate into the directory:**
   ```bash
   cd calculator
   ```
3. **Open the app:**
   Simply double-click the `index.html` file to open it instantly in any modern web browser.

## File Structure 📂

```text
├── index.html   # Main layout structure and button configuration
├── style.css    # Layout grids, Apple-inspired theme colors, and animations
├── app.js       # Toggle event listeners and safe expression evaluation math
└── README.md    # Project documentation (this file)
```
