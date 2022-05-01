Vue.component('tiles', {
    data() {
        return {
            links: ["https://www.facebook.com", "https://www.reddit.com", "https://www.instagram.com", "https://www.youtube.com"]
        }
    },
    methods: {

    },
    // FIXME: gap issue
    template:
        `<div class="grid grid-cols-4 gap-4">
            <div
                class="transition-all ease-in-out delay-50 duration-300 hover:scale-110 bg-slate-800 hover:bg-slate-600 rounded px-6 py-8 ring-1 ring-slate-900/5 shadow-md hover:shadow-xl"
                v-for="link in links" :key="link"
            >
                <span class="text-lg text-white"><a :href="link">link text</a></span>
            </div>
        </div>`
})

Vue.component('search-bar', {
    data() {
        return {
            query: "",
            hasFocus: false,
        }
    },
    created() {
        document.addEventListener("keydown", this.handleShortcuts);
    },
    methods: {
        handleShortcuts(e) {
            if (e.key === '/' && !this.hasFocus) {
                e.preventDefault();
                this.$refs.input.focus();
            }
            else if (e.key === 'Escape' && this.hasFocus) {
                e.preventDefault();
                this.$nextTick(() => {
                    this.$refs.input.value = "";
                    this.$refs.input.blur();
                });
            }
            else if (e.key === 'Enter' && this.hasFocus) {
                e.preventDefault();
                const query = this.query.trim();

                if (!query) {
                    // warn
                } else {
                    if (validator.isURL(query, { require_protocol: false })) {
                        // TODO:add whitelist
                        const hasProtocol = validator.isURL(query, { require_protocol: true })
                        console.log(hasProtocol)
                        if (hasProtocol) {
                            window.location.replace(query)
                        } else {
                            window.location.replace(`http://${query}`)
                        }
                    } else {
                        // TODO: select search engine
                        console.log(query)
                    }
                    // const url = "https://www.google.com/search?q=" + userInput.trim().split(" ").join("+");
                }

            }
        }
    },
    template:
        `<div>
            <input
                class="w-56
                appearance-none rounded
                leading-tight
                py-2 px-4
                bg-gray-700 text-gray-100
                border-2 border-gray-700 outline-none
                transition-all ease-in-out delay-150 duration-300
                focus:border-indigo-300 focus:w-full"
                ref="input"
                type="text"
                placeholder="Speak your mind..."
                v-model="query"
                @focus="hasFocus = true"
                @blur="hasFocus = false"
                autofocus
            >
        </div>`
})

new Vue({ el: '#vue' })