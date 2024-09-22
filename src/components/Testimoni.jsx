import { useEffect, useRef, useState } from "react"
import FormComment from "./FormComment"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { getDatabase, ref, get } from 'firebase/database';
import { app } from "../firebase";
import { Toast } from 'primereact/toast';
const Testimoni = ({ refrence }) => {
    const [comments, setComments] = useState([])
    const [showForm, setShowForm] = useState(false)
    const toast = useRef(null)
    async function getComments() {
        const db = getDatabase(app);
        const dbRef = ref(db, "comments");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            setComments(Object.entries(snapshot.val()).map(([key, value]) => ({ id: key, ...value })));
        }
    }
    useEffect(() => {
        getComments()
    }, []);

    return (
        <>
            <section className='bg-neutral-100 py-20' ref={refrence}>
                <div className="mx-auto lg:w-[1280px] px-4 lg:px-0">
                    <div className="">
                        <h2 className="text-3xl font-semibold text-start mb-4">Testimoni</h2>
                        <Swiper slidesPerView={4} spaceBetween={24} >
                            {comments.map((comment) => (
                                <SwiperSlide key={comment.id} className="flex flex-col items-stretch h-40">
                                    <div className="bg-white flex flex-col gap-3 p-6 rounded-lg flex-1">
                                        <div className="font-bold text-xl text-neutral-700">{comment.name}</div>
                                        <p className="text-neutral-500">{comment.comment}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button onClick={() => setShowForm(true)}
                            className='bg-sky-500 hover:bg-sky-700 text-white py-2 pl-6 pr-8 rounded tracking-[2px] mt-4 w-max flex items-center gap-2 group'>
                            Komentar
                        </button>
                    </div>
                </div>
            </section>
            <FormComment setShow={setShowForm} show={showForm} toast={toast} setComments={setComments} />
            <Toast ref={toast} />
        </>
    )
}

export default Testimoni

{/* <p className="my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nisi. Aut quae, vero expedita et unde aperiam porro architecto optio voluptas eos cum quos ipsum ullam, harum, fugit doloribus voluptatem!</p> */ }