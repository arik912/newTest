export const findCurrentPost = (data, id) => {
    return data.filter((el)=>el.id===id)
}