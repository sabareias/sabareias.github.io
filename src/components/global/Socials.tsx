import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

// social media icons component
function Socials() {
    const socialsData = [
        {
            aria: 'Linkedin',
            icon: <FiLinkedin />,
            href: 'https://www.linkedin.com/in/sabrinaareias',
        },
        {
            aria: 'GitHub',
            icon: <FiGithub />,
            href: 'https://github.com/sabareias',
        },
        {
            aria: 'Email',
            icon: <FiMail />,
            href: 'mailto:sabareias@gmail.com',
        },
    ]
    return (
        <div className="">
            {socialsData.map((social, i) => (
                <a
                    key={i}
                    aria-label={social.aria}
                    href={social.href}
                    target="_blank"
                    className="socialIcons mx-2 h3 "
                >
                    {social.icon}
                </a>
            ))}
        </div>
    )
}

export default Socials
