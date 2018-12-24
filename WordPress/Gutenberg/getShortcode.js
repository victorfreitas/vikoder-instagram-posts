/**
 * [WordPress Gutenberg Blocks] Shortcode Helper
 * @author vikoder
 */
const attributes = {
  ids: [128, 241, 365],
  title: 'Recipes',
  description: '',
  id: 17,
  cols: null,
}

const getShortcode = (name, atts) => (
  `[${name} ${Object
    .entries(atts)
    .filter(([, v]) => !!v)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')}]`
)

console.log(getShortcode('recipes', attributes))
/* Output
 * [recipes ids="128,241,365" title="Recipes" id="17"]
 */
