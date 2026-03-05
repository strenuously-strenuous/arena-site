'use client';
import { useModalStore } from '@/store/useModalStore';

export default function EnquiryButton() {
    const { openModal } = useModalStore();
    return (
        <button onClick={openModal} className='px-5 bg-secondary text-dark font-bold py-3 rounded-lg transition duration-200 mt-6'>Enquire Now</button>
    );
}