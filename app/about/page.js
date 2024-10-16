import { Button } from "@/components/ui/button"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-sky-50 flex flex-col">
            <header className="bg-sky-600 text-white py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Remedy Pool Service</h1>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold text-sky-800 mb-4">About Us</h2>
                    <div className="space-y-4 text-sky-900">
                        <p>
                            Welcome to Remedy Pool Service, your trusted partner in pool maintenance and repair. With years of experience and a passion for pristine pools, we're here to ensure your aquatic oasis remains a source of joy and relaxation.
                        </p>
                        <p>
                            Our team of certified professionals is dedicated to providing top-notch service for all your pool needs. From routine maintenance to complex repairs, we handle it all with expertise and care.
                        </p>
                        <p>
                            At Remedy Pool Service, we understand that every pool is unique. That's why we offer personalized solutions tailored to your specific requirements. Whether you have a residential pool, a community pool, or a commercial aquatic facility, we have the skills and knowledge to keep your water crystal clear and your equipment running smoothly.
                        </p>
                        <p>
                            We pride ourselves on our commitment to customer satisfaction. Our friendly staff is always ready to answer your questions and provide expert advice. We use only the highest quality products and cutting-edge techniques to ensure your pool remains in excellent condition year-round.
                        </p>
                        <p>
                            Choose Remedy Pool Service for:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>Regular maintenance and cleaning</li>
                            <li>Water testing and chemical balancing</li>
                            <li>Equipment repair and replacement</li>
                            <li>Pool opening and closing services</li>
                            <li>Green pool recovery</li>
                            <li>And much more!</li>
                        </ul>
                        <p>
                            Let us take the stress out of pool ownership. Contact Remedy Pool Service today and experience the difference that professional care can make for your pool.
                        </p>
                    </div>
                    <div className="mt-8">
                        <Button className="bg-sky-600 hover:bg-sky-700 text-white">
                            Schedule a Service
                        </Button>
                    </div>
                </section>
            </main>

            <footer className="bg-sky-800 text-sky-100 py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2023 Remedy Pool Service. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}