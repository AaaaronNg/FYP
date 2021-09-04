
import cookie from "react-cookies"


export const getTokenCookie = () => cookie.load("x-access-token") // return the cookie
export const removeTokenCookie = () => cookie.remove("x-access-token", { path: "/" }) // remove the cookie
export const getAuthHeader = () => {
    return {
        headers: {
            "Authorization": `Bearer ${getTokenCookie()}`
        }
    }
}




