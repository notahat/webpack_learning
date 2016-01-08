import Immutable from 'immutable'
import installImmutableDevTools from 'immutable-devtools'

document.write('It really works.')

installImmutableDevTools(Immutable)
console.log(Immutable.Map({a: 1, b: Immutable.List([2, 3, 4])}))
