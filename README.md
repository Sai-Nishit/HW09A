# HW09A

## Concept
Inspired by Piet Mondrian's Compositions in Red, Yellow, Blue, and Black, this remix dynamically transforms the iconic grid style into a glowing, animated neon aesthetic. The design evolves through user interaction, offering endless customization possibilities with adjustable colors, grid sizes, and animated patterns.

## Design Process

1. Research and Inspiration:
   Studied Piet Mondrian's use of balance, contrast, and geometric forms.
   Analyzed how modern neon effects can complement Mondrian's minimalist style.

2. Core Features:

  Animated Glow: Gradual color changes and semi-transparent layers create a pulsating neon effect.
  Dynamic Shapes: Randomized rectangles, circles, and triangles add variety and depth.
  User Interaction:
    Color Customization: Users can select and adjust the color palette via interactive color pickers.
    Grid Size Adjustment: A slider allows users to control the size of the grid in real time.

3. Technical Implementation:
   
  Used p5.js rect(), ellipse(), and triangle() functions to dynamically render shapes.
  Incorporated noise() to animate colors and shapes smoothly.
  Added DOM elements (createSlider(), createColorPicker()) for real-time interaction.
