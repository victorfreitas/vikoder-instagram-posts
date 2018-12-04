const element = document.getElementById('cat')

element.addEventListener('meow', ({ detail }) => {
  console.log(detail)
  // Output: {why: "Wants food", when: "right now"}
})

/**
 * Custom Event Init
 *
 * detail: Any data passed
 * bubbles: the event bubbles up through the DOM or not
 * cancelable: A Boolean indicating whether the event is cancelable
*/
const customEventInit = {
  detail: {
    why: 'Wants food',
    when: 'right now',
  },
  bubbles: true,
  cancelable: false,
}

// Create new custom event
const catEvent = new CustomEvent('meow', customEventInit)

// Dispatch the event
element.dispatchEvent(catEvent)
