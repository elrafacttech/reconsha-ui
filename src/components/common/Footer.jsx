import { Link } from 'react-router';

export default function Footer() {
    return (
        <footer className="bg-black text-white p-4 mx-10 rounded-t-xl text-center text-sm">
            <p>
                ©2024 <span className="font-kanit">                                      
                WorkRiches</span>® Global Inc. •{' '}
                <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                </Link>
            </p>
        </footer>
    );
}
