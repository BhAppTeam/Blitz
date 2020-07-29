<script>
    import { storage } from '../firebase';
    var storageRef = storage.ref();

    const uploadImage = (e) => {
        if (e.target.files){
            const file = e.target.files[0];
            storageRef.child(file.name).put(file);
        }
    }

</script>


<input type="file" on:change={uploadImage}>
