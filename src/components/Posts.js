import {useCollectionData } from "react-firebase-hooks/firestore"
import {collection} from "firebase/firestore"
import {db} from "../firebase"


const referans = collection(db,'posts')

const Posts = ()=>{
    const [data, isLoading] = useCollectionData(referans)

    if (isLoading) {
         return <h1>Loading.......!!!!</h1>
    }
//console.log(data)

    return (
        <div className="flex flex-col gap-4 mt-8">
            {data.map(post =>(
                <div id={post.id} className="p-4 rounded-md bg-gray-100">
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts