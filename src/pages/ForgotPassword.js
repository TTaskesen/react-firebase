import { useCallback, useState } from "react"
import { Link } from "react-router-dom"
import { sendPasswordResetEmail} from "firebase/auth"
import { auth } from "../firebase"

const ForgotPassword = () =>{

    const [email,setEmail] = useState("")
    const handleSubmit = useCallback((e)=> {
        e.preventDefault()
        if (!email) {
            return
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert("gelen kutunuzu kontrol ediniz email gönderildi.")
        })
        .catch((e)=>{
            console.log(e)
        })
    },[email])
    return (
        <div className="max-w-md mx-auto py-12">
            <h1 className="text-2xl">Parolamı Unuttum</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                <input 
                type="email" 
                placeholder="Emailinizi Giriniz" 
                className="p-4 bg-gray-100 rounded-md"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
                />
                <input 
                type="submit" 
                value="Parola sıfırlama emaili Gönder" 
                className="p-4 bg-orange-400 rounded-md"/>

                <Link to="/sign-in">Giriş Sayfasına Geri Dön</Link>
            </form>
        </div>
    )
}
export default ForgotPassword