'use client';

import { useState, useEffect } from 'react';
import { XIcon } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';

interface FormData {
    name: string;
    email: string;
    phone: string;
    course: string;
}

export default function ScrollPopupForm() {
    const [showPopup, setShowPopup] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        course: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!hasScrolled) {
                // Show popup after scrolling 300px
                const scrollThreshold = 300;
                if (window.scrollY > scrollThreshold) {
                    setShowPopup(true);
                    setHasScrolled(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasScrolled]);

    const handleClose = () => {
        setShowPopup(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Here you can add your form submission logic
        console.log('Form submitted:', formData);

        // Show success message
        setIsSubmitted(true);

        // Reset and close after 2 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', course: '' });
            setIsSubmitted(false);
            setShowPopup(false);
        }, 2000);
    };

    return (
        <>
            {/* Overlay */}
            {showPopup && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 z-50'
                    onClick={handleClose}
                />
            )}

            {/* Popup Form */}
            <div
                className={clsx(
                    'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100 w-full max-w-md mx-auto transition-all duration-300 ease-out',
                    showPopup
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                )}
            >
                <div className='flex justify-center align-center mb-5'>
                    <Image src="/images/arena logO WHITE.png" width={170} height={170} alt='logo' />
                </div>

                <div className='bg-background rounded-lg shadow-2xl p-6 sm:p-8 relative border border-gray-700'>
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className='absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-full transition'
                        aria-label='Close'
                    >
                        <XIcon size={24} className='text-white' />
                    </button>

                    {isSubmitted ? (
                        // Success Message
                        <div className='text-center py-8'>
                            <div className='text-5xl mb-4'>✓</div>
                            <h3 className='text-2xl font-bold text-white mb-2'>Thank You!</h3>
                            <p className='text-gray-400'>We'll be in touch shortly.</p>
                        </div>
                    ) : (
                        // Form
                        <>

                            <h2 className='text-2xl sm:text-3xl font-bold text-white mb-2'>
                                Get Free Counseling
                            </h2>
                            <p className='text-gray-400 mb-6'>
                                Explore the perfect course for your career goals
                            </p>

                            <form onSubmit={handleSubmit} className='space-y-4'>
                                {/* Name */}
                                <div>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Your Full Name'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-600 transition'
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email Address'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-600 transition'
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <input
                                        type='tel'
                                        name='phone'
                                        placeholder='Phone Number'
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-600 transition'
                                    />
                                </div>

                                {/* Course Selection */}
                                <div>
                                    <select
                                        name='course'
                                        value={formData.course}
                                        onChange={handleInputChange}
                                        required
                                        className='w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-pink-600 transition'
                                    >
                                        <option value=''>Select a Course Category</option>
                                        <option value='AVGC'>Animation & VFX</option>
                                        <option value='GID'>Game & Immersive Design</option>
                                        <option value='DCC'>Digital Content Creation</option>
                                        <option value='AAIP'>Advanced 3D & Architecture</option>
                                    </select>
                                </div>

                                {/* Submit Button */}
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
        </>
    );
}
