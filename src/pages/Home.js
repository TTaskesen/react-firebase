import { signOut } from "firebase/auth"
import { useCallback } from "react"
import { auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"

const Home = () => {
const [user,isLoading]=useAuthState(auth)

    const handleSignout = useCallback(() => {
        signOut(auth)
    }, [])

    if (isLoading) {
        return <h1>Yükleniyor.....</h1>
    }

    return (
    <div className="max-w-md py-12 mx-auto">
        <div className="flex items-center justify-between">
             <div>
            <p className="text-xl">{user.displayName}</p>
            <p className="text-lg text-gray-700">{user.email}</p> 
        </div>
        <button onClick={handleSignout} className="p-4 bg-pink-500 rounded-md">Sign out</button>
        </div>
    </div>
    )
}

export default Home