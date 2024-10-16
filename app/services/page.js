import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Component() {
    return (
        <div className="min-h-screen bg-sky-50">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-sky-800">Our Services</h1>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center mb-8">
                        <div className="md:w-1/2 md:pr-4">
                            <p className="text-lg mb-4 text-sky-900">
                                At Remedy Pool Service, we offer a comprehensive range of solutions to keep your pool in top-notch condition throughout the year. From routine cleanings to comprehensive maintenance, our experienced technicians have the expertise to ensure your pool is always ready for enjoyment.
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-4 md:mt-0">
                            <Image
                                src="/placeholder.svg?height=300&width=400"
                                alt="Pool service technician"
                                width={400}
                                height={300}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    <Card className="mb-8 bg-white shadow-lg border-sky-200">
                        <CardHeader className="bg-sky-100">
                            <CardTitle className="text-2xl text-sky-800">Pool Cleaning</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-sky-900">
                                Maintaining a clean, clear pool is essential for both the longevity of your investment and the health and safety of your family. Our pool cleaning services include:
                            </p>
                            <ul className="space-y-2 mb-4">
                                {[
                                    "Thorough surface skimming to remove debris",
                                    "Filter cleaning and backwashing",
                                    "Vacuuming to remove dirt and sediment",
                                    "Algae treatment and prevention",
                                    "Water testing and chemical balancing"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-sky-500 flex-shrink-0" />
                                        <span className="text-sky-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sky-900">
                                Our team uses the latest equipment and techniques to deliver a sparkling-clean pool every time. We'll work with you to develop a customized cleaning schedule that fits your needs and budget.
                            </p>
                            <div className="mt-4">
                                <Image
                                    src="/placeholder.svg?height=200&width=400"
                                    alt="Pool cleaning equipment"
                                    width={400}
                                    height={200}
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-lg border-sky-200">
                        <CardHeader className="bg-sky-100">
                            <CardTitle className="text-2xl text-sky-800">Pool Maintenance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-sky-900">
                                Proper pool maintenance is the key to ensuring your pool operates efficiently and remains in pristine condition for years to come. With our pool maintenance services, you can enjoy a hassle-free pool experience:
                            </p>
                            <ul className="space-y-2 mb-4">
                                {[
                                    "Routine filter and pump maintenance",
                                    "Comprehensive chemical balancing",
                                    "Equipment inspection and repairs",
                                    "Pump and motor replacements"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-sky-500 flex-shrink-0" />
                                        <span className="text-sky-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sky-900">
                                Our maintenance packages are tailored to the unique requirements of your pool, taking into account factors such as pool size, usage, and water conditions. We'll work closely with you to develop a customized plan that keeps your pool running smoothly and safely.
                            </p>
                            <div className="mt-4">
                                <Image
                                    src="/placeholder.svg?height=200&width=400"
                                    alt="Pool maintenance"
                                    width={400}
                                    height={200}
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="mt-8 text-center bg-sky-100 p-6 rounded-lg shadow-md">
                        <p className="text-lg font-semibold text-sky-800">
                            Contact us today to learn more about our pool cleaning and maintenance services, and to schedule your first appointment with Remedy Pool Service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}