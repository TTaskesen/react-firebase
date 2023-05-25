import { useState, useCallback } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

const SignIn = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = useCallback((e) => { 
        e.preventDefault()
        if (!email || !password) {
            return
        }
        signInWithEmailAndPassword(auth,email,password).then(()=>{alert("Başarılı Bir Şekilde giriş yaptınız.")}).catch((e)=>{console.log(e)})
    }, [email,password])

    return (
        <div className="max-w-md mx-auto py-12">
            <h1 className="text-2xl">Giriş Yapınız</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                <input type="email" placeholder="Mail Adresinizi Giriniz." className="p-4 bg-gray-100 rounded-md" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                <input type="password" placeholder="Password Giriniz." className="p-4 bg-gray-100 rounded-md" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                <input type="submit" className="p-4 bg-green-400 rounded-md" />
            </form>
        </div>
    )
}
export default SignIn