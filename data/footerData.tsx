// footerData.ts
import { routes } from './routes';

export const footerData = [
    {
        title: 'Quick Links',
        links: {
            Home: routes.home,
            Courses: routes.courses,
            Placements: routes.placements,
            Blog: routes.blog,
            'Student Works': routes.studentWorks,
        },
    },
    {
        title: 'Company',
        links: {
            'About Us': routes.about,
            Contact: routes.contact,
        },
    },
    {
        title: 'Legal',
        links: {
            'Privacy Policy': routes.privacyPolicy,
            'Terms & Conditions': routes.termsAndConditions,
            Disclaimer: routes.disclaimer,
        },
    },
];
