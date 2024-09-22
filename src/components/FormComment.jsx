import { Dialog } from 'primereact/dialog';
import Input from './Input';
import TextArea from './TextArea';
import { getDatabase, ref, set, push } from 'firebase/database';
import { app } from '../firebase';
const FormComment = ({ show, setShow, toast, setComments }) => {

    async function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const comment = form.get("comment")
        const name = form.get("name")
        if (comment !== "") {
            const db = getDatabase(app)
            const newDoc = push(ref(db, "comments"))
            set(newDoc, {
                name, comment
            }).then(() => {
                toast.current?.show({ severity: 'success', summary: 'Berhasil', detail: 'Komentar anda telah ditambahkan!' });
                setComments(prev => [...prev, { name, comment, id: newDoc.key }])
            }).catch((error) => {
                console.log(error);

                toast.current?.show({ severity: 'error', summary: 'Gagal', detail: 'Gagal mengirimkan komentar!' });
            })
            e.currentTarget.reset()
            setShow(false)
        }
    }
    return (
        <Dialog header="Kirim Komentar" visible={show} className='lg:w-1/2 w-[90%]' onHide={() => { if (!show) return; setShow(false); }}>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <Input label="Nama" name="name" placeholder="Masukkan Nama Anda" required />
                <TextArea label="Komentar" name="comment" placeholder="Kirim Komentar" required />
                <button className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-2'>Kirim Komentar</button>
            </form>
        </Dialog>

    )
}

export default FormComment