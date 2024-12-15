import Image from "next/image"
export default function Hero() {
    return (
        <main className="w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-center bg-gray-300 ">
            {/* left */}
            <div className=" w-full md:w-[500px] md:ml-24 mt-4 px-4">
                <h1 className="text-2xl md:text-4xl font-bold ">Welcome to my Assignment No 6 by Sir Ali Jawad</h1>
                <p className="text-sm mt-2">Hero Sectoion should consist of two rows
                    On to the left side there should be a Heading, a small text and a button
                    On right side there should be and image covering the entire right section</p>
                <button className="bg-[rgb(60,174,226)] hover:bg-blue-600 rounded-3xl px-8 py-2 mt-4 text-white ">Get Started</button>
            </div>
            {/* Right */}
            <div>
                <Image src="/ai.png" alt="Profile" className=" mt-4 rounded-lg shadow-lg" width={600} height={800}></Image>
            </div>
        </main>
    )
}



