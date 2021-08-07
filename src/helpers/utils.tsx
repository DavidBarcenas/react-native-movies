export const getTime = (time: number) => {
    const hours   = (time / 60).toFixed(0).toString()
    const minutes = (time % 60).toFixed(0).toString()

    return `${hours}h ${minutes}min`
}