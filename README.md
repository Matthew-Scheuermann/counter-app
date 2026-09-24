# counter-app

Building a counter game app for extra DOM / event practice

# requirements

Here are the clean, conceptual requirements for your Score Master app. No code hints—just the logical roadmap for what your program needs to do.

📋 The Application Requirements

1. The User Interface (HTML & CSS)

Score Display: A prominent text element centered on the screen that clearly displays the current number.
Action Controls: Two distinct click targets (buttons)—one clearly marked for increasing the score and one for decreasing it.
Visual Transitions: Smooth transitions for text changes to make color shifts feel clean and polished.

2. The Data Layer (JavaScript State)

Memory Tracking: The program must maintain a dynamic variable in memory to hold the exact mathematical value of the score.
Initialization: When the page loads fresh, this memory value must start exactly at zero.

3. The Interaction Layer (JavaScript Events)

Upward Action: Clicking the increase control must increment the background memory value by exactly one unit, then immediately rewrite the interface display to reflect the new number.
Downward Action: Clicking the decrease control must decrement the background memory value by exactly one unit, then immediately rewrite the interface display to reflect the new number.

4. The Rules & Feedback Loops (Conditional Logic)

Immediately after any score adjustment, the program must evaluate the new number and dynamically alter the display style:
The Victory State: If the evaluation detects the number has scaled up to 10 or higher, update the text color to green.
The Failure State: If the evaluation detects the number has dropped below 0, update the text color to red.
The Neutral State: If the number sits anywhere safely between 0 and 9, ensure the text color returns or stays black.
