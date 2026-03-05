'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import { useModalStore } from '@/store/useModalStore';

interface FormData {
    name: string;
    email: string;
    phone: string;
    course: string;
}

export default function ScrollPopupForm() {
    const { isOpen, closeModal, openModal } = useModalStore();
    const [mounted, setMounted] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        course: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Ensure portal only renders client-side
    useEffect(() => {
        setMounted(true);
    }, []);

    // Scroll trigger
    useEffect(() => {
        const handleScroll = () => {
            if (!hasScrolled && window.scrollY > 300) {
                openModal();
                setHasScrolled(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasScrolled, openModal]);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', course: '' });
            setIsSubmitted(false);
            closeModal();
        }, 2000);
    };

    if (!mounted) return null;

    return createPortal(
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeModal}
            />

            {/* Modal */}
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md px-4 transition-all duration-300 ease-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
            >
                <div className='flex justify-center mb-5'>
                    <Image src="/images/arena logO WHITE.png" width={170} height={170} alt='logo' />
                </div>

                <div className='bg-background rounded-lg shadow-2xl p-6 sm:p-8 relative border border-gray-700'>
                    <button
                        onClick={closeModal}
                        className='absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-full transition'
                        aria-label='Close'
                    >
                        <XIcon size={24} className='text-white' />
                    </button>

                    {isSubmitted ? (
                        <div className='text-center py-8'>
                            <div className='text-5xl mb-4'>✓</div>
                            <h3 className='text-2xl font-bold text-white mb-2'>Thank You!</h3>
                            <p className='text-gray-400'>We'll be in touch shortly.</p>
                        </div>
                    ) : (
                        <>
                            <h2 className='text-2xl sm:text-3xl font-bold text-white mb-2'>
                                Get Free Counseling
                            </h2>
                            <p className='text-gray-400 mb-6'>
                                Explore the perfect course for your career goals
                            </p>

                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Your Full Name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-600 transition'
                                />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email Address'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-600 transition'
                                />
                                <input
                                    type='tel'
                                    name='phone'
                                    placeholder='Phone Number'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-600 transition'
                                />
                                <select
                                    name='course'
                                    value={formData.course}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-pink-600 transition'
                                >
                                    <option value=''>Select a Course Category</option>
                                    <option value='Gaming--Interactive--Design'>Gaming & Interactive Design</option>
                                    <option value='Architecture--Visualization'>Architecture Visualization</option>
                                    <option value='Vfx'>VfX</option>
                                    <option value='Digital--Marketing'>Digital Marketing</option>
                                    <option value='Digital--Design'>Digital Design</option>
                                    <option value='BVoc--In--Vfx--Animation--Film--Making'>B.Voc In VFX & Animation Film Making</option>
                                    <option value='Avg--Animation--Vfx'>Avg (Animation, VFX)</option>
                                    <option value='Animation'>Animation</option>
                                    <option value='Broadcast'>Broadcast</option>
                                    <option value='Avg--Animation--Vfx--Gaming'>AVG (Animation, VFX, Gaming)</option>
                                    <option value='Short--Term'>Short Term</option>
                                    <option value='Bachelor--Of--Vocation--BVoc--In--3D--Animation--Visual--Effects'>Bachelor Of Vocation (B.Voc.) In 3D Animation & Visual Effects</option>
                                    <option value='BVoc--In--Game--Design--And--Development'>B.Voc In Game Design And Development</option>
                                </select>

                                <button
                                    type='submit'
                                    className='w-full bg-secondary text-dark font-bold py-3 rounded-lg transition duration-200 mt-6'
                                >
                                    Get Free Counseling
                                </button>

                                <p className='text-xs text-gray-500 text-center mt-4'>
                                    We respect your privacy. Your information is safe with us.
                                </p>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </>,
        document.body
    );
}