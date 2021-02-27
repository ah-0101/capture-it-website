import { useState, useEffect } from 'react'
import { fileFireStore } from '../firebase/config'

const useFireStore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsubscribe = fileFireStore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    // doc.id
                    // doc.data()
                    documents.push({...doc.data(), id: doc.id })
                });
                setDocs(documents)
            });

        return () => unsubscribe()
    }, [collection])

    return { docs };
}

export default useFireStore;