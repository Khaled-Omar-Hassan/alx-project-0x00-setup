import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="Get Started" styles="px-3 py-1 text-sm rounded-sm" />
            <Card />
            <Button title="Learn More" styles="px-4 py-2 text-base rounded-md" />
            <Card />
            <Button title="Contact Us" styles="px-5 py-3 text-lg rounded-lg" />
            <Card />
            <Button title="Contact Us" styles="px-5 py-3 text-lg rounded-full" />
        </div>
    )
}
export default Landing