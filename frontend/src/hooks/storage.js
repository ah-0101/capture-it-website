import { useState, useEffect } from 'react'
import { filesStorage, fileFireStore, timestamp } from '../firebase/config';



const useStorage = (file) => {
    const [loading, setLoading] = useState(0);
    const [url, setUrl] = useState(null);
    const [err, SetErr] = useState(null);


    useEffect(() => {
        const storageRef = filesStorage.ref(file.name);
        const collection = fileFireStore.collection('images');
        storageRef.put(file).on('state_changed', (snap) => {
            let progress = (snap.bytesTransferred / snap.totalBytes) * 100;
            setLoading(progress);
        }, (err) => {
            SetErr(err)
        }, async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collection.add({ url, createdAt });
            setUrl(url)
        })
    }, [file])

    return { loading, url, err }

}

export default useStorage;