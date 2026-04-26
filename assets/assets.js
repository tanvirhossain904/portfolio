import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'ApexLift',
        category: 'Full-Stack Web App',
        year: '2025',
        featured: true,
        description: 'MERN fitness-performance platform with JWT-secured authentication, role-based access, and complex data modeling for workout tracking.',
        bgImage: '/work-4.png',
        link: 'https://apexlift-ten.vercel.app/',
        github: 'https://github.com/tanvirhossain904/apexlift',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind']
    },
    {
        title: 'Vibe',
        category: 'Real-time chat app',
        year: '2025',
        featured: true,
        description: 'Real-time MERN messaging app with Socket.io presence indicators, image sharing via Cloudinary, unread tracking, and JWT-secured httpOnly cookie auth.',
        bgImage: '/work-2.png',
        link: 'https://vibe-mern-chat-app.vercel.app/',
        github: 'https://github.com/tanvirhossain904/vibe-mern-chat-app',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind']
    },
    {
        title: 'SEO Analyzer Pro',
        category: 'SaaS Tool',
        year: '2024',
        description: 'Real-time SEO diagnostic tool with automated audit algorithms, async API data fetching, and exportable performance reports.',
        bgImage: '/work-3.png',
        link: 'https://seo-analyzer-tool-gamma.vercel.app/',
        github: 'https://github.com/tanvirhossain904/SEO-Analyzer-Tool',
        tags: ['React', 'Node.js', 'Web APIs', 'Vercel']
    },
    {
        title: 'FitnessLume',
        category: 'Marketing Site',
        year: '2024',
        description: 'High-performance content engine tuned for Core Web Vitals, on-page SEO, and sub-second TTFB via edge-cached delivery.',
        bgImage: '/work-1.png',
        link: 'https://fitnesslume.com',
        github: 'https://github.com/tanvirhossain904/fitnesslume',
        tags: ['Next.js', 'SEO', 'Edge Cache', 'Tailwind']
    }
];

export const serviceData = [
    { icon: assets.web_icon, title: 'Web development', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Website optimization & SEO basics', description: 'Improving website speed, structure, and basic search visibility...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React Js, Next Js, Git & GitHub, MongoDB, Wordpress' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'OTHM extended level 5 in Information Technology (Ofqual, UK)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];