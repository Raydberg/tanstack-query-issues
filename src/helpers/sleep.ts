export const sleep = (millisecons: number) => {
    return new Promise(r => {
        setTimeout(() => {
            r(true)
        }, millisecons);
    })
}