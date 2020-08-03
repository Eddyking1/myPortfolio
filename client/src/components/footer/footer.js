import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import './footer.scss';

export default function Footer() {
    let footerData = {
        contactInfo: ['Email: Edward.kumerius@gmail.com', 'Mobile: 0763379509'],
        copyRight: ['Edward Kumerius ©'],
        urls: ['https://www.linkedin.com/in/edward-kumerius-921a621a7', 'https://github.com/Eddyking1'],
    }

    const footerContact = footerData.copyRight.map((texts, index) => {
        return (<div className="footerContact"> <p key={index.length}> {texts} </p> </div>)
    });

    return (
        <footer id="footer">
            <div className="footer">
                <a href="https://www.testdome.com/cert/2c13697ff13e4fbcb542f1ca0e22bfc4" class="testdome-certificate-stamp silver"><span class="testdome-certificate-name">Edward kumerius</span><span class="testdome-certificate-test-name">JavaScript </span><span class="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
                <div className="icons">
                    <a href={footerData.urls[0]}>
                        <FaLinkedin />
                    </a>
                    <a href={footerData.urls[1]}>
                        <FaGithubSquare />
                    </a>
                </div>
                { footerContact }
            </div>
        </footer>
    )

}


