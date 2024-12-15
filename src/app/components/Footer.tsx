export default function Footer() {
    return (
        <footer className="bg-[rgb(60,174,226)] shadow dark:bg-gray-800 mt-[44px]">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="text-sm text-black text-center md:text-left mb-4 md:mb-0">
                    ©2024 Noor Hassan™. All Rights Reserved.
                </span>
                <ul className="flex flex-col md:flex-row text-sm font-normal text-black">
                    <li>
                        <a href="about" className="hover:underline mb-2 md:mb-0 md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="#Privacy-Policy" className="hover:underline mb-2 md:mb-0 md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#licensing" className="hover:underline mb-2 md:mb-0 md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="contact-us" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
