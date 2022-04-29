// create input element and add styles
const input = document.createElement('input')
input.className = `appearance-none rounded leading-tight py-2 px-4 bg-gray-700 text-gray-100 focus:outline-none border-2 border-gray-700 focus:border-indigo-300`
input.setAttribute("ref", "input")
input.setAttribute("type", "text")
input.setAttribute("placeholder", "Speak your mind...")
input.setAttribute("v-model", "query")
input.setAttribute("v-on:focus", "hasFocus = true")
input.setAttribute("v-on:blur", "hasFocus = false")

// Create component <search-bar>
Vue.component('search-bar', {
    data: function () {
        return {
            query: "",
            hasFocus: false,
        }
    },
    template: input.outerHTML
})

// append vue
new Vue({ el: '#vue-searchbar' })

// shortcuts
// ESC, / and Enter