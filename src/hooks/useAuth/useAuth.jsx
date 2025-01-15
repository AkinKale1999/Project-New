export default function useAuth() {

    return document.cookie.includes("token=")
}