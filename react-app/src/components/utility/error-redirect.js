import Page404 from "../404-page/404"

export const errorRedirect = (obj, id) => {
    if (isNaN(id)) return (<Page404 />)
    if (!obj[id]) return (<Page404 />)
    return
}
