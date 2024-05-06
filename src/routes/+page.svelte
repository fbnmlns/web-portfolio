<script lang="ts">
	import '../scss/global.scss';

	import bloomProject from '$lib/assets/images/bloom_project.avif';
	import echowaveProject from '$lib/assets/images/echowave_demo.gif';
	import veterinaryProject from '$lib/assets/images/veterinary_project.avif';

	import { sendEmail } from '$lib/emails/emailSender';

	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import TechTag from '$lib/components/TechTag.svelte';
	import GlowingGradientButton from '$lib/components/GlowingGradientButton.svelte';

	import { bloomStack, echowaveStack, mokaStack } from '$lib/util/technologyStacks';
</script>

<svelte:head>
	<title>Fabiana Milanés</title>
</svelte:head>

<div class="p-10 sm:ml-64 scroll-smooth">
	<section id="introduction" class="section-introduction mb-48">
		<div class="flex items-center justify-start p-7 h-60 mb-4 mt-4 heading">
			<h1
				class="mb-4 mt-4 text-7xl font-extrabold leading-none tracking-tight md:text-6xl md:text-8xl lg:text-8xl xl:text-8xl"
			>
				Fabiana
				<span class="block">Milanés Sanchéz</span>
			</h1>
		</div>
		<div class="flex items-center justify-start p-7 h-48 mb-10 mt-10 text-introduction">
			<p class="mb-6">
				<span class="mb-6 text-lg lg:text-3xl block font-semibold">Software Engineer | CRI</span>
				<span class="mt-6 font-light lg:text-2xl"
					>I'm a software engineer born in Costa Rica with an interest in art and design.</span
				>
			</p>
		</div>
		<div class="flex items-center justify-center h-28">
			<GlowingGradientButton
				text="View my projects"
				linkedTo="#projects"
				displayLinkedURLTo="_self"
			>
				<span class="flex items-center group-hover:translate-y-1/4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						class="w-5 h-3.8"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
						/>
					</svg>
				</span>
			</GlowingGradientButton>
		</div>
	</section>

	<div>
		<hr class="h-px my-8 border-0 divider-color" />
	</div>

	<section id="projects" class="mb-48">
		<div class="flex items-center justify-center h-48 mb-10 mt-40">
			<h2
				class="mb-4 text-7xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-5xl lg:text-6xl subheading"
			>
				Projects
			</h2>
		</div>

		<div class="flex flex-wrap justify-center gap-10">
			<ProjectCard
				title="Bloom: Quiet Mind"
				description="A web application especially designed to support individuals dealing with anxiety."
				githubRepositoryLink="https://github.com/josandre/front-end-bloom"
				imageSource={bloomProject}
			>
				{#each bloomStack as tech}
					<TechTag technology={tech} />
				{/each}
			</ProjectCard>

			<ProjectCard
				title="EchoWave"
				description="EchoWave is an application made for users to archive their videos, allowing them to upload and play them within the application."
				githubRepositoryLink="https://github.com/fbnmlns/echowave"
				imageSource={echowaveProject}
			>
				{#each echowaveStack as tech}
					<TechTag technology={tech} />
				{/each}
			</ProjectCard>

			<ProjectCard
				title="Management system for MOKA"
				description="Allows the veterinary staff book appointments, make reservations, maintain medical records for each patient and rate patients upon checkout."
				githubRepositoryLink="https://github.com/fbnmlns/proyecto-moka"
				imageSource={veterinaryProject}
			>
				{#each mokaStack as tech}
					<TechTag technology={tech} />
				{/each}
			</ProjectCard>
		</div>
	</section>

	<div>
		<hr class="h-px my-8 border-0 divider-color" />
	</div>

	<section id="resume">
		<div class="flex items-center justify-center h-28 mt-48 mb-48">
			<GlowingGradientButton
				text="Resume"
				linkedTo="https://drive.google.com/file/d/1rD2R1lmUz9VaWhK6e9fGsH9U-GflT9nV/view?usp=sharing"
				displayLinkedURLTo="_blank"
			>
				<span class="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#eee0d4"
						class="w-6 h-5 group-hover:translate-y-1/4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
						/>
					</svg>
				</span>
			</GlowingGradientButton>
		</div>
	</section>

	<div>
		<hr class="h-px my-8 border-0 divider-color" />
	</div>

	<section id="about-me">
		<div class="flex items-center justify-center h-20 mb-5 mt-40">
			<h2
				class="mb-4 text-7xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-5xl lg:text-6xl subheading"
			>
				About Me
			</h2>
		</div>

		<div class="flex items-center justify-center text-about-me mb-5 mt-5">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="#eee0d4"
				class="w-100 h-12 animate-pulse"
			>
				<path
					fill-rule="evenodd"
					d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<div class="flex items-center justify-start text-about-me mb-48 mt-5">
			<p class="lg:text-2xl font-light">
				My journey into the world of Software Engineering began at Universidad Cenfotec in 2022, and
				to my surprise, what I once swore I'd never like has become one of the things I enjoy doing
				the most. There's an indescribable feeling of satisfaction when I finally crack a tough
				problem or witness the results of my creations. What I love most about this career is its
				perpetual demand for growth and learning. It's a field that constantly pushes me to expand
				my skills and knowledge, ensuring that I'm always evolving both personally and
				professionally. 
				
				I consider myself hard-working, detail-oriented, trustworthy, and dedicated;
				I will always make sure to deliver my best work.

				When I'm not writing code, I enjoy taking
				walks, watching films or TV shows, and spending time in the park with a good book.
			</p>
		</div>
	</section>
	<div>
		<hr class="h-px my-8 border-0 divider-color" />
	</div>

	<section id="contact">
		<div class="flex items-center justify-center h-48 mb-5 mt-20">
			<h2
				class="mb-4 text-7xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-5xl lg:text-6xl subheading"
			>
				Contact
			</h2>
		</div>
		<form class="mb-20 font-light" on:submit|preventDefault={sendEmail}>
			<div class="grid md:grid-cols-2 md:gap-6">
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="from_name"
						id="floating_name"
						class="block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-secondary peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_name"
						class="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>Name</label
					>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="email"
						name="from_email"
						id="floating_email"
						class="block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-secondary peer"
						placeholder=""
						required
					/>
					<label
						for="floating_email"
						class="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>Email</label
					>
				</div>
			</div>
			<div class="relative z-0 w-full mb-6 group">
				<textarea
					name="message"
					id="floating_message"
					rows="4"
					class="block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-secondary peer"
					placeholder=""
					required
				/>
				<label
					for="floating_message"
					class="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Message</label
				>
			</div>
			<button
				type="submit"
				class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-2xl group bg-gradient focus:ring-0 focus:outline-none transition duration-1000 group-hover:duration-200"
			>
				<span
					class="relative px-5 py-4 transition-all ease-in duration-75 bg-primary rounded-2xl group-hover:bg-opacity-0"
				>
					Send messsage
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-3.5 inline-flex group-hover:translate-x-0.5"
					>
						<path
							d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
						/>
					</svg>
				</span>
			</button>
		</form>
	</section>
</div>

<style lang="scss">
	.divider-color {
		background-color: #28343d;
	}

	.section-introduction {
		.heading {
			font-family: 'Lato', sans-serif;
			color: #eee0d4;
		}

		.text-introduction {
			color: #f0f0f0;
			font-family: 'Open Sans', sans-serif;
		}
	}

	.subheading {
		font-family: 'Lato', sans-serif;
		color: #eee0d4;
	}

	.text-about-me {
		p {
			color: #f0f0f0;
		}
	}

	form {
		font-family: 'Open Sans', sans-serif;
		color: #f0f0f0;
	}

	.text-secondary {
		color: #eee0d4;
	}

	.border-secondary {
		border-color: #eee0d4;
	}
</style>
