export const getDate = (date: string | null | undefined) => {
    let newDate = '';
    
    if(date) {
        const split = date.split('-')
        newDate = `${split[2]}-${split[1]}-${split[0]}`
    }

    return newDate
}

export const getTime = (time: number) => {
    const hours   = (time / 60).toFixed(0).toString()
    const minutes = (time % 60).toFixed(0).toString()

    return `${hours}h ${minutes}min`
}