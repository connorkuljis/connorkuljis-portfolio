import block from "../static/block.png"
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<div className="text-right text-xs md:text-sm lg:text-base xl:text-lg xxl:text-xl space-y-4">
				<div className="flex justify-end">
					<Image src={block} alt={"abstract blocks"} height={256} placeholder="blur"/>
				</div>
				<h2>Hi, my name is Connor</h2>
				<p>
					Software Engineering 23&lsquo; @ Curtin University
				</p>
				<p>
					&gt; My goal is to build software that helps people reach their potential
					and have a life full of experiences. 
				</p>
				<p>
					&gt; I love learning new things, and I think simple ideas are beautiful.
				</p>
				<p>
					&gt; I am currently learning TypeScript, React and Node.JS.
				</p>
				<p>
					&gt; I like keyboards.
				</p>
			</div>
			<div className="mt-4 bg-gray-100 h-24 rounded">
			</div>
		</main>
	)
}
