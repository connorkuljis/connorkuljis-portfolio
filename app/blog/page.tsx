import styles from '../page.module.css'
import deskPic from './desk_setup_2021.jpeg'
import Image from 'next/image'
import Footer from '../footer'

export default function Blog() {
	return (
		<div>
			<main className={styles.main}>
				<div className={styles.blog}>
					<p>Welcome to my blog!🗿</p>
					<h1>My Computing Setup</h1>
					<h2>Mac Mini 2020 (M1) - 8GB/256</h2>
					<Image
						src={deskPic}
						alt={"Picture of white desk with a computing setup for programming"}
					/>
					<h3>Description</h3>
					<p>Here's my setup. I have been using this setup since the start of 2021.</p>
					<p>I use it for programming, web browsing and for university.</p>
					<p>The keyboard looks like it came from the 1980s - and it does, but I love it.</p>
					<blockquote>
						<em>
						'Because keyboards are accessories to PC makers, they focus on
						minimizing the manufacturing costs. But that’s incorrect. When
						America’s cowboys were in the middle of a trip and their horse died, they
						would leave the horse there. But even if they were in the middle of a
						desert, they would take their saddle with them. The horse was a consumable
						good, but the saddle was an interface that their bodies had gotten used to.
						In the same vein, PCs are consumable goods, while keyboards are important
						interfaces.' - Philosophy of Professor Eiiti Wada / PFU Limited.
					</em>
					</blockquote>

					<p>
						You can read more about it 
						<a style={{color: '#0000FF'}} href="https://en.wikipedia.org/wiki/Happy_Hacking_Keyboard"> here</a>
					</p>
					<h3>Components</h3>
					<ul>
						<li>
							Monitor: 4K, 27" IPS (LG 27UK850-W) connected via Type-C
						</li>
						<li>
							Device: 2020 Apple Mac Mini with Apple M1 Chip (8GB RAM, 256GB SSD Storage)
						</li>
						<li>
							Keyboard: HHKB Professional BT (PD-KB600W)
						</li>
						<li>
							Mouse: Logitech G Pro Wireless
						</li>
						<li>
							Audio: FiiO USB DAC E-10 + IEMs or Koss Porta Pro's
						</li>
					</ul>
					<h3>Software</h3>
					<ul>
						<li>Terminal Emulator: iterm2</li>
						<li>Shell: zsh + spaceship</li>
						<li>Font: Fragment Mono</li>
						<li>Editor: Neovim with plugins + tmux</li>
					</ul>
				</div>
			</main>
			<Footer />
		</div>
	)
}
