const recordable = (state) => ({
    record: () => `I'm recording a new ${state.type}!`
})


const watchable = (state) => ({
    watch: () => `I'm watching ${state.name}!`
})


const move = (name) => {
    const state = { name: name, type: 'movie' };

    return Object.assign({}, recordable(state), watchable(state))
}

let batmanMovie = move("batman")

console.log(batmanMovie.record())
console.log(batmanMovie.watch())